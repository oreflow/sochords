declare namespace SchordSongScssModule {
  export interface ISchordSongScss {
    flexColumn: string;
    flexRow: string;
    sectionWrapper: string;
    vocalColumn: string;
  }
}

declare const SchordSongScssModule: SchordSongScssModule.ISchordSongScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SchordSongScssModule.ISchordSongScss;
};

export = SchordSongScssModule;
