declare namespace VocalScssModule {
  export interface IVocalScss {
    vocalLine: string;
  }
}

declare const VocalScssModule: VocalScssModule.IVocalScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: VocalScssModule.IVocalScss;
};

export = VocalScssModule;
