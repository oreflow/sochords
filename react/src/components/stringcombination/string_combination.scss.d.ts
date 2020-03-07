declare namespace StringCombinationScssModule {
  export interface IStringCombinationScss {
    fretInstruction: string;
    stringCombinationCell: string;
    stringCombinationColumn: string;
  }
}

declare const StringCombinationScssModule: StringCombinationScssModule.IStringCombinationScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StringCombinationScssModule.IStringCombinationScss;
};

export = StringCombinationScssModule;
