declare namespace SchordSongScssModule {
  export interface ISchordSongScss {
    sectionWrapper: string;
  }
}

declare const SchordSongScssModule: SchordSongScssModule.ISchordSongScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SchordSongScssModule.ISchordSongScss;
};

export = SchordSongScssModule;
