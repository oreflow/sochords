declare namespace ChordInstructionScssModule {
  export interface IChordInstructionScss {
    afterStringCombination: string;
    beforeStringCombination: string;
    chord: string;
    strummingPattern: string;
  }
}

declare const ChordInstructionScssModule: ChordInstructionScssModule.IChordInstructionScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ChordInstructionScssModule.IChordInstructionScss;
};

export = ChordInstructionScssModule;
