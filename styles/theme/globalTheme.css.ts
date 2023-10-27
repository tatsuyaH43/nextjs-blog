import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';
import { fontVariable } from '@/styles/variables/fontVariable.css';
import { spaceSize } from '@/styles/variables/spaceVariable.css';
import { colorVariable } from '@/styles/variables/colorVariable.css';

/**
 * Global theme
 */
export const globalTheme = createThemeContract({
  /** フォントスタイルのグローバルテーマ */
  font: {
    /** font-familyの値 */
    fontFamily: '',
    /** font-weight: normalの値 */
    fontWeightNormal: '',
    /** font-weight: boldの値 */
    fontWeightBold: '',
    /** font-sizeの値 */
    fontSizes: {
      root: '',
      12: '',
      16: '',
      18: '',
      20: '',
      22: '',
      24: '',
    },
    /** line-heightの値 */
    lineHeight: '',
  },
  /** 色のグローバルテーマ */
  color: {
    primary: '',
    secondary: '',
    tertiary: '',
    quaternary: '',
    quinary: '',
    background: '',
    baseText: '',
    textLink: '',
  },
  /** marginやpaddingの変数 */
  space: {
    8: '',
    16: '',
    24: '',
    32: '',
    40: '',
    48: '',
    56: '',
    60: '',
  },
});

createGlobalTheme(':root', globalTheme, {
  font: {
    ...fontVariable,
  },
  color: {
    ...colorVariable,
  },
  space: {
    ...spaceSize,
  },
});
