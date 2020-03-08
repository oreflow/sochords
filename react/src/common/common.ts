import {
  SongSection,
  StringCombination,
} from 'gen/proto/messages_pb';

export const songSectionToString = function(songSection: SongSection): string {
  return `${songSection.getSection()} ${songSection.getNumber()}`.trim();
};


export const createStringCombination = function(
  args: {
    e4?: number;
    b?: number;
    g?: number;
    d?: number;
    a?: number;
    e2?: number;
    name?: string;
  }): StringCombination {
    const sc = new StringCombination();
    sc.setE4((args.e4 !== undefined) ? args.e4 : -1);
    sc.setB((args.b !== undefined) ? args.b : -1);
    sc.setG((args.g !== undefined) ? args.g : -1);
    sc.setD((args.d !== undefined) ? args.d : -1);
    sc.setA((args.a !== undefined) ? args.a : -1);
    sc.setE2((args.e2 !== undefined) ? args.e2 : -1);
    sc.setName(args.name ?? '');
    return sc;
  };
