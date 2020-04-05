package main

import "fmt"

type Note string
const (
  B = "B"
  C = "C"
  Cs = "C#"
  D = "D"
  Ds = "D#"
  E = "E"
  F = "F"
  Fs = "F#"
  G = "G"
  Gs = "G#"
  A = "A"
  As = "A#"
)

var allNotes = []Note {B, C, Cs, D, Ds, E, F, Fs, G, Gs, A, As}

type NoteNode struct {
	note Note
	next *NoteNode
}

type Scale string
const (
	MAJOR Scale = "Major"
	MINOR Scale = "Minor"
)

var majorScaleSteps = []int{0, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1}
var minorScaleSteps = []int{0, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2}

type NoteAndScale struct {
	number int
	scale  Scale
}

type ChordType struct {
  suffix string
  notesAndScales []NoteAndScale
}

var majorNotes = ChordType{
  suffix: "",
  notesAndScales: []NoteAndScale{
    {scale: MAJOR, number: 1},
    {scale: MAJOR, number: 3},
    {scale: MAJOR, number: 5}},
}

var minorNotes = ChordType{
  suffix: "m",
  notesAndScales: []NoteAndScale{
	{scale: MINOR, number: 1},
	{scale: MINOR, number: 3},
	{scale: MINOR, number: 5}},
}

var fifthNotes = ChordType{
  suffix: "5",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 5}},
}

var sixthNotes = ChordType{
  suffix: "6",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MAJOR, number: 6}},
}

var minorSixthNotes = ChordType{
  suffix: "min6",
  notesAndScales: []NoteAndScale{
	{scale: MINOR, number: 1},
	{scale: MINOR, number: 3},
	{scale: MINOR, number: 5},
	{scale: MAJOR, number: 6}},
}

var seventhNotes = ChordType{
  suffix: "7",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MINOR, number: 7}},
}

var majorSeventhNotes = ChordType{
  suffix: "maj7",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MAJOR, number: 7}},
}

var minorSeventhNotes = ChordType{
  suffix: "min7",
  notesAndScales: []NoteAndScale{
	{scale: MINOR, number: 1},
	{scale: MINOR, number: 3},
	{scale: MINOR, number: 5},
	{scale: MINOR, number: 7}},
}

var ninthNotes = ChordType{
  suffix: "9",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MINOR, number: 7},
	{scale: MAJOR, number: 9}},
}

var majorNinthNotes = ChordType{
  suffix: "maj9",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MAJOR, number: 7},
	{scale: MAJOR, number: 9}},
}

var minorNinthNotes = ChordType{
  suffix: "min9",
  notesAndScales: []NoteAndScale{
	{scale: MINOR, number: 1},
	{scale: MINOR, number: 3},
	{scale: MINOR, number: 5},
	{scale: MINOR, number: 7},
	{scale: MAJOR, number: 9}},
}

var addNineNotes = ChordType{
  suffix: "add9",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MAJOR, number: 9}},
}

var sixNineNotes = ChordType{
  suffix: "6/9",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 3},
	{scale: MAJOR, number: 5},
	{scale: MAJOR, number: 6},
	{scale: MAJOR, number: 9}},
}

var suspendedTwoNotes = ChordType{
  suffix: "sus2",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 2},
	{scale: MAJOR, number: 5}},
}

var suspendedFourNotes = ChordType{
  suffix: "sus4",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 2},
	{scale: MAJOR, number: 5}},
}

var seventhsuspendedFourNotes = ChordType{
  suffix: "7sus4",
  notesAndScales: []NoteAndScale{
	{scale: MAJOR, number: 1},
	{scale: MAJOR, number: 2},
	{scale: MAJOR, number: 5},
	{scale: MINOR, number: 7}},
}

var allChordTypes = []ChordType{
  majorNotes,
  minorNotes,
  fifthNotes,
  sixthNotes,
  minorSixthNotes,
  seventhNotes,
  majorSeventhNotes,
  minorSeventhNotes,
  ninthNotes,
  majorNinthNotes,
  minorNinthNotes,
  addNineNotes,
  sixNineNotes,
  suspendedTwoNotes,
  suspendedFourNotes,
  seventhsuspendedFourNotes,
}

func getMajorScale(note Note) map[int]Note {
	ptr := noteMap[note]
  majorScale := make(map[int]Note)
	for i, halfSteps := range majorScaleSteps {
		for j := 0; j < halfSteps; j++ {
			ptr = ptr.next
		}
    majorScale[i+1] = ptr.note
	}
  return majorScale
}

func getMinorScale(note Note) map[int]Note {
  minorScale := make(map[int]Note)
	minorPointer := noteMap[note]
	for i, halfSteps := range minorScaleSteps {
		for j := 0; j < halfSteps; j++ {
			minorPointer = minorPointer.next
		}
    minorScale[i+1] = minorPointer.note
	}
  return minorScale
}

var noteMap = getNoteMap()

func getNoteMap() map[Note]*NoteNode {
	chordNotes := []*NoteNode{
		&NoteNode{note: B, next: nil},
		&NoteNode{note: C, next: nil},
		&NoteNode{note: Cs, next: nil},
		&NoteNode{note: D, next: nil},
		&NoteNode{note: Ds, next: nil},
		&NoteNode{note: E, next: nil},
		&NoteNode{note: F, next: nil},
		&NoteNode{note: Fs, next: nil},
		&NoteNode{note: G, next: nil},
		&NoteNode{note: Gs, next: nil},
		&NoteNode{note: A, next: nil},
		&NoteNode{note: As, next: nil},
	}
	for i, node := range chordNotes {
		if i == (len(chordNotes) - 1) {
			node.next = chordNotes[0]
		} else {
			node.next = chordNotes[i+1]
		}
	}

	chordMap := make(map[Note]*NoteNode)
	for _, node := range chordNotes {
		chordMap[node.note] = node
	}
	return chordMap
}

func getMajorNotes(noteNode *NoteNode) map[Note]bool {
	notes := make(map[Note]bool)
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

type Chord struct {
  note Note
  allNotes []Note
  chordType ChordType
}

func getAllNotes(note Note, chordType ChordType) []Note {
  majorScale := getMajorScale(note)
  minorScale := getMinorScale(note)
  notes := []Note{}
  for _, noteAndScale := range chordType.notesAndScales {
    if noteAndScale.scale == MAJOR {
      notes = append(notes, majorScale[noteAndScale.number])
    } else {
      notes = append(notes, minorScale[noteAndScale.number])
    }
  }
  return notes
}

func getChordsForNote(note Note) []Chord  {
  chords := []Chord{}
  for _, chordType := range allChordTypes {
    chords = append(chords, Chord {
      note: note,
      chordType: chordType,
      allNotes: getAllNotes(note, chordType),
    })
  }
  fmt.Printf("\n")
  return chords
}
