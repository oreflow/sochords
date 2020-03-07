declare namespace PickInstructionScssModule {
  export interface IPickInstructionScss {
    afterStringCombination: string;
    beforeStringCombination: string;
  }
}

declare const PickInstructionScssModule: PickInstructionScssModule.IPickInstructionScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PickInstructionScssModule.IPickInstructionScss;
};

export = PickInstructionScssModule;
