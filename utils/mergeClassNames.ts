/**
 * 引数のクラス名を結合して返す
 */
export const mergeClassNames = (...classNames: string[]) => {
  return classNames.filter((className) => className !== '').join(' ');
};
