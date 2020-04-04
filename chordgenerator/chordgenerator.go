package main

import "fmt"

type NoteNode struct {
	note string
	next *NoteNode
}

func getNoteMap() map[string]*NoteNode {
	chordNotes := []*NoteNode{
		&NoteNode{note: "B", next: nil},
		&NoteNode{note: "C", next: nil},
		&NoteNode{note: "C#", next: nil},
		&NoteNode{note: "D", next: nil},
		&NoteNode{note: "D#", next: nil},
		&NoteNode{note: "E", next: nil},
		&NoteNode{note: "F", next: nil},
		&NoteNode{note: "F#", next: nil},
		&NoteNode{note: "G", next: nil},
		&NoteNode{note: "G#", next: nil},
		&NoteNode{note: "A", next: nil},
		&NoteNode{note: "A#", next: nil},
	}
	for i, node := range chordNotes {
		if i == (len(chordNotes) - 1) {
			node.next = chordNotes[0]
		} else {
			node.next = chordNotes[i+1]
		}
	}

	chordMap := make(map[string]*NoteNode)
	for _, node := range chordNotes {
		chordMap[node.note] = node
	}
	return chordMap
}

func getMajorNotes(noteNode *NoteNode) map[string]bool {
	notes := make(map[string]bool)
	node := noteNode
	notes[node.note] = true
	// (2) WholeStep.
	node = node.next.next
	// (3) WholeStep.
	node = node.next.next
	notes[node.note] = true
	// (4) Halfstep.
	node = node.next
	// (5) WholeStep.
	node = node.next.next
	notes[node.note] = true
	return notes
}

var majorScaleSteps = []int{2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1}
var minorScaleSteps = []int{2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2}

var defaultNotes = []int{1, 3, 5}
var sus2Notes = []int{1, 2, 5}
var sus4Notes = []int{1, 4, 5}

var majmin6Notes = []int{1, 3, 5, 6}
var majmin7Notes = []int{1, 3, 5, 7}
var majmin9Notes = []int{1, 3, 5, 9}

var power5Notes = []int{1, 5}
var power6Notes = []int{1, 6}
var power7Notes = []int{1, 7}
var power9Notes = []int{1, 9}
var power11Notes = []int{1, 9}
var power12Notes = []int{1, 9}

type StringFret struct {
	note              string
	guitarStringIndex int
	fret              int
}

func getFretsInScale(
	chordMap map[string]*NoteNode,
	scale map[string]bool,
	guitarString string,
	guitarStringIndex int,
	minFret int,
	maxFret int) []*StringFret {

	var stringFrets []*StringFret

	noteNode := chordMap[guitarString]
	fret := 0
	for fret <= maxFret {
		if fret >= minFret {
			if scale[noteNode.note] {
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
		fmt.Printf("RETURNING LIST (%s)\n", fretList)
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
		fmt.Printf("%d", stringIndex)
		fmt.Printf("RETURNING LIST (%s)\n", fretList)
		return fretList
	}
}

func getFilteredChords(allFretCombinations [][]*StringFret, requiredNotes []string) [][]*StringFret {
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
		filteredChords = append(filteredChords, fretCombination)
	}
	return filteredChords
}

func main() {
	chordMap := getNoteMap()

	majorScale := getMajorNotes(chordMap["D"])
	var majorScaleSlice []string
	for k, _ := range majorScale {
		majorScaleSlice = append(majorScaleSlice, k)
	}

	guitarStrings := []string{"E", "A", "D", "G", "B", "E"}

	minFret := 0
	maxFret := 19 // 19 = Default number of frets on a guitar
	fretsByStringIndex := make(map[int][]*StringFret)
	for stringIndex, guitarString := range guitarStrings {
		fretsByStringIndex[stringIndex] = getFretsInScale(chordMap, majorScale, guitarString, stringIndex, minFret, maxFret)
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
	/*
		for _, fretCombination := range allFretCombinations {
			fmt.Printf("Chord: ")
			for _, fret := range fretCombination {
				fmt.Printf("%d (%s), ", fret.fret, fret.note)
			}
			fmt.Printf("\n")
		}
	*/

	filteredChords := getFilteredChords(allFretCombinations, majorScaleSlice)

	fmt.Printf("##############################################################################################\n")
	fmt.Printf("############################ Filtered Fret combinations ######################################\n")
	fmt.Printf("##############################################################################################\n")
	fmt.Printf("Number of combinations %d \n", len(filteredChords))

	for _, fretCombination := range filteredChords {
		fmt.Printf("Chord")
		if isInversion(fretCombination, majorScaleSlice) {
			fmt.Printf("INV")
		}
		if is2ndInversion(fretCombination, majorScaleSlice) {
			fmt.Printf("2xINV")
		}
		fmt.Printf("(%d): ", getRequiredFingers(fretCombination))
		for _, fret := range fretCombination {
			fmt.Printf("%d (%s), ", fret.fret, fret.note)
		}
		fmt.Printf("\n")
	}

	/*
		fmt.Printf("C Major")
		for k, _ := range getMajorNotes(chordMap["C"]) {
			fmt.Printf("%s\n", k)
		}
	*/

}
