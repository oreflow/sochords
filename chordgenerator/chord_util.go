package main

import "math"

func hasRequiredNotes(fretCombination []*StringFret, requiredNotes []string) bool {
	notesInChord := make(map[string]bool)
	for _, fret := range fretCombination {
		notesInChord[fret.note] = true
	}
	for _, note := range requiredNotes {
		if !notesInChord[note] {
			return false
		}
	}
	return true
}

func hasMutedStrings(fretCombination []*StringFret) bool {
	hasNonPlayedWithPlayedBefore := false
	hasNonPlayedWithPlayedAfter := false
	for i := 1; i < len(fretCombination); i++ {
		if fretCombination[i].fret == -1 && fretCombination[i-1].fret >= 0 {
			hasNonPlayedWithPlayedAfter = true
		}
		if fretCombination[i].fret >= 0 && fretCombination[i-1].fret == -1 {
			hasNonPlayedWithPlayedBefore = true
		}
		if hasNonPlayedWithPlayedAfter && hasNonPlayedWithPlayedBefore {
			return true
		}
	}
	return false
}

func isWithin4Frets(fretCombinations []*StringFret) bool {
	minFret := math.MaxInt32
	maxFret := math.MinInt32
	for _, fretCombination := range fretCombinations {
		if fretCombination.fret >= 0 {
			if fretCombination.fret < minFret {
				minFret = fretCombination.fret
			}
			if fretCombination.fret > maxFret {
				maxFret = fretCombination.fret
			}
		}
	}
	return (maxFret - minFret) <= 3
}

func _canBeBarChord(fretCombination []*StringFret) (bool, int) {
	minFret := math.MaxInt32
	for _, fret := range fretCombination {
		if fret.fret >= 0 && fret.fret < minFret {
			minFret = fret.fret
		}
	}
	if minFret == 0 {
		return false, 0
	}
	return true, minFret
}

func getRequiredFingers(fretCombination []*StringFret) int {
	fingers := 0
	barChord, minFret := _canBeBarChord(fretCombination)
	if barChord {
		fingers++
	}
	for _, fret := range fretCombination {
		if fret.fret > minFret {
			fingers++
		}
	}
	return fingers
}

func isInversion(fretCombination []*StringFret, requiredNotes []string) bool {
	if len(requiredNotes) < 2 {
		return false
	}
	for _, fret := range fretCombination {
		if fret.fret >= 0 {
			return fret.note == requiredNotes[1]
		}
	}
	return false
}

func is2ndInversion(fretCombination []*StringFret, requiredNotes []string) bool {
	if len(requiredNotes) < 3 {
		return false
	}
	for _, fret := range fretCombination {
		if fret.fret >= 0 {
			return fret.note == requiredNotes[2]
		}
	}
	return false
}
