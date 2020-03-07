import {
  SongSection,
} from 'gen/proto/messages_pb';

export const songSectionToString = function(songSection: SongSection): string {
    return `${songSection.getSection()} ${songSection.getNumber()}`.trim();
  }
