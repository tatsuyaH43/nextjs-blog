/** カラーコード一覧 */
const colorList = {
  blue: '#3b3bff',
  pink: '#ff00d4',
  yellow: '#fff570',
  purple: '#a530ff',
  cyan: '#40ffe9',
  white: '#ffffff',
  black: '#333333',
} as const;

/** colorのグローバル定義 */
export const colorVariable = {
  primary: colorList.blue,
  secondary: colorList.pink,
  tertiary: colorList.yellow,
  quaternary: colorList.purple,
  quinary: colorList.cyan,
  background: colorList.white,
  baseText: colorList.black,
  textLink: colorList.blue,
};
