package main

import (
  "fmt"
  "sort"
  "strconv"
  "encoding/json"
  "context"
  "crypto/sha1"

  "gen/sochordspb"
  "github.com/golang/protobuf/jsonpb"
 // "golang.org/x/net/context"
  firebase "firebase.google.com/go"
//  "firebase.google.com/go/auth"
  "google.golang.org/api/option"
  "cloud.google.com/go/firestore"
)


type StringFret struct {
	note              Note
	guitarStringIndex int
	fret              int
}

func getFretsInScale(
	requiredNotes []Note,
	guitarString Note,
	guitarStringIndex int,
	minFret int,
  maxFret int) []*StringFret {
    requiredNotesAsMap := make(map[Note]bool)
    for _, note := range requiredNotes {
      requiredNotesAsMap[note] = true
    }

    var stringFrets []*StringFret

    noteNode := noteMap[guitarString]
    fret := 0
    for fret <= maxFret {
      if fret >= minFret {
        if requiredNotesAsMap[noteNode.note] {
          stringFrets = append(stringFrets, &StringFret{
            note:              noteNode.note,
            guitarStringIndex: guitarStringIndex,
            fret:              fret,
          })
        }
      }
      noteNode = noteNode.next
      fret++
    }
    return stringFrets
  }

func getChords(fretsByStringIndex map[int][]*StringFret, stringIndex int) [][]*StringFret {
	nonFretFret := &StringFret{
		note:              "X",
		guitarStringIndex: stringIndex,
		fret:              -1,
	}

	frets, _ := fretsByStringIndex[stringIndex]
	_, hasNextString := fretsByStringIndex[stringIndex+1]

	if !hasNextString {
		fretList := [][]*StringFret{[]*StringFret{nonFretFret}}
		for _, fret := range frets {
			fretList = append(fretList, []*StringFret{fret})
		}
		return fretList
	} else {
		var fretList [][]*StringFret
		frets = append(frets, nonFretFret)
		laterFrets := getChords(fretsByStringIndex, stringIndex+1)
		for _, fret := range frets {
			for _, laterFretList := range laterFrets {
				joinedSlice := append([]*StringFret{fret}, laterFretList...)
				fretList = append(fretList, joinedSlice)
			}
		}
		return fretList
	}
}

func getFilteredChords(allFretCombinations [][]*StringFret, requiredNotes []Note) [][]*StringFret {
	var filteredChords [][]*StringFret
	for _, fretCombination := range allFretCombinations {
		if !hasRequiredNotes(fretCombination, requiredNotes) {
			continue
		}
		if hasMutedStrings(fretCombination) {
			continue
		}
		if !isWithin4Frets(fretCombination) {
			continue
		}
		if getRequiredFingers(fretCombination) > 4 {
			continue
		}
		if isInversion(fretCombination, requiredNotes) {
      continue
		}
		if is2ndInversion(fretCombination, requiredNotes) {
      continue
		}
		filteredChords = append(filteredChords, fretCombination)
	}
	return filteredChords
}

func getComplexityScore(chord []*StringFret) float32 {
  const barWeight = 0.1
  const fretOffsetWeight = 2.0
  const silentStringComplexity = 1.0 // Per silent string
  const trailingSilentStringsComplexity = 1.0 // If chord ends with silent strings
  complexity := 0.0
  barChord, minFret := canBeBarChord(chord)
  complexity += fretOffsetWeight * (float64(minFret) / 19)
  if barChord {
    complexity += barWeight
  }
  for _, fret := range chord {
    if fret.fret == -1 {
      complexity += silentStringComplexity * 1.0 / 6
    }
  }
  if chord[len(chord) - 1].fret == -1 {
      complexity += trailingSilentStringsComplexity
  }
  return float32(complexity)
}

func toStringWithEmptyStringForMinus1(num int) string {
  if num == -1 {
    return "";
  }
  return strconv.Itoa(num)
}

func getId(jsonMarshaler jsonpb.Marshaler,chord *sochordspb.GuitarChord) (string, error) {
  jsonString, err := jsonMarshaler.MarshalToString(chord.GetChordPattern())
  if err != nil {
    fmt.Errorf("%s\n", err)
    return "", err
  }
  h := sha1.New()
  h.Write([]byte(jsonString))
  return fmt.Sprintf("%x", h.Sum(nil)), nil
}

func sendToFirebase(
  batch *firestore.WriteBatch,
  jsonMarshaler jsonpb.Marshaler,
  client *firestore.Client,
  chord *sochordspb.GuitarChord) {
  jsonString, err := jsonMarshaler.MarshalToString(chord)
  if err != nil {
    fmt.Errorf("%s\n", err)
    return
  }
  fmt.Printf("%s\n", jsonString)
  var mapFormatted map[string]interface{}
  json.Unmarshal([]byte(jsonString), &mapFormatted)
  docRef := client.Collection(FIREBASE_COLLECTION).Doc(chord.GetId())
  batch.Set(docRef, mapFormatted)
  fmt.Printf("Added '%s' to firebase batch\n", chord.GetName())
}

const FIREBASE_COLLECTION = "DEV_CHORDS"


func main() {
	const minFret = 0
	const maxFret = 19 // 19 = Default number of frets on a guitar
  guitarStrings := []Note{E, A, D, G, B, E}
  jsonMarshaler := jsonpb.Marshaler{
    EmitDefaults: true,
  }


  opt := option.WithCredentialsFile("so-chords-firebase-adminsdk-79mph-85b5943511.json")
  ctx := context.Background()
  app, err := firebase.NewApp(ctx, nil, opt)
  if err != nil {
    fmt.Errorf("error initializing app: %v", err)
  }
  client, err := app.Firestore(ctx)
  if err != nil {
    fmt.Errorf("Error connecting to firestore: %v", err)
  }
  defer client.Close()


  for note, _ := range noteMap {
    allChordsForNote := getChordsForNote(note)

    // BEGIN: ChordType
    for _, chord := range allChordsForNote {
      requiredNotes := chord.allNotes

      fretsByStringIndex := make(map[int][]*StringFret)
      for stringIndex, guitarString := range guitarStrings {
        fretsByStringIndex[stringIndex] = getFretsInScale(requiredNotes, guitarString, stringIndex, minFret, maxFret)
      }
      allFretCombinations := getChords(fretsByStringIndex, 0)
      filteredChords := getFilteredChords(allFretCombinations, requiredNotes)

      pbchords := []*sochordspb.GuitarChord{}
      for _, c := range filteredChords {
        chord := &sochordspb.GuitarChord{
          Name: fmt.Sprintf("%s%s", chord.note, chord.chordType.suffix),
          ChordPattern: &sochordspb.ChordPattern{
            E4: toStringWithEmptyStringForMinus1(c[0].fret),
            B: toStringWithEmptyStringForMinus1(c[1].fret),
            G: toStringWithEmptyStringForMinus1(c[2].fret),
            D: toStringWithEmptyStringForMinus1(c[3].fret),
            A: toStringWithEmptyStringForMinus1(c[4].fret),
            E2: toStringWithEmptyStringForMinus1(c[5].fret),
          },
          Complexity: getComplexityScore(c),
        }
        id, err := getId(jsonMarshaler, chord)
        if err != nil {
          fmt.Errorf("Error creating Chord identifier %s", err)
        }
        chord.Id = id
        pbchords = append(pbchords,chord)
      }
      sort.SliceStable(pbchords, func(i, j int) bool {
        return pbchords[i].GetComplexity() < pbchords[j].GetComplexity()
      })
      for i, pbchord := range pbchords {
        pbchord.ComplexityRank = int32(i + 1)
      }
      batch := client.Batch()
      for _, pbchord := range pbchords {
        //fmt.Printf("%s\n", pbchord)
        sendToFirebase(batch, jsonMarshaler, client, pbchord)
      }
      _, err = batch.Commit(ctx)
      if err != nil {
        fmt.Printf("Error committing batch %s", err)
      }
    }
  }
  fmt.Printf("DONE\n")
}
