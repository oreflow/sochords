package main

import "fmt"
import "gen/sochordspb"

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

func main() {
	const minFret = 0
	const maxFret = 19 // 19 = Default number of frets on a guitar
  guitarStrings := []Note{E, A, D, G, B, E}

  var note Note = A
  allChordsForNote := getChordsForNote(note)
	fmt.Printf("%s\n", allChordsForNote)

  requiredNotes := allChordsForNote[0].allNotes

	fretsByStringIndex := make(map[int][]*StringFret)
	for stringIndex, guitarString := range guitarStrings {
		fretsByStringIndex[stringIndex] = getFretsInScale(requiredNotes, guitarString, stringIndex, minFret, maxFret)
	}

	fmt.Printf("Strings & Frets within the scale\n")
	for stringIndex, guitarString := range guitarStrings {
		fmt.Printf("String %s (%d)\n", guitarString, stringIndex)
		for _, fret := range fretsByStringIndex[stringIndex] {
			fmt.Printf("%d (%s), ", fret.fret, fret.note)
		}
		fmt.Printf("\n")
	}

	allFretCombinations := getChords(fretsByStringIndex, 0)

	fmt.Printf("##############################################################################################\n")
	fmt.Printf("############################ All Fret combinations ###########################################\n")
	fmt.Printf("##############################################################################################\n")
	fmt.Printf("Number of combinations %d \n", len(allFretCombinations))

	filteredChords := getFilteredChords(allFretCombinations, requiredNotes)
  fmt.Printf("%s", filteredChords[0])

	fmt.Printf("##############################################################################################\n")
	fmt.Printf("############################ Filtered Fret combinations ######################################\n")
	fmt.Printf("##############################################################################################\n")
	fmt.Printf("Number of combinations %d \n", len(filteredChords))

	for _, fretCombination := range filteredChords {
		fmt.Printf("Chord")
		fmt.Printf("(%d): ", getRequiredFingers(fretCombination))
		for _, fret := range fretCombination {
			fmt.Printf("%d (%s), ", fret.fret, fret.note)
		}
		fmt.Printf("\n")
	}
	pb := sochordspb.GuitarChord{}
	fmt.Printf("%s\n", pb)
}
