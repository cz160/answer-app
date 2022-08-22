interface IPxToRemOptions {
  rootValue?: number;
  unitPrecision?: number;
  propList?: string[];
  selectorBlackList?: any[];
  replace?: boolean;
  mediaQuery?: boolean;
  minPixelValue?: number;
}

declare module 'postcss-pxtorem' {
  export default function pxtorem(options: IPxToRemOptions): void;
}
