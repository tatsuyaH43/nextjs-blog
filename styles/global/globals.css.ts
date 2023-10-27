import { globalStyle } from '@vanilla-extract/css';
import { globalTheme } from '@/styles/theme/globalTheme.css';

globalStyle(':root', {
  fontSize: globalTheme.font.fontSizes.root,
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  fontFeatureSettings: '"palt" 1',
  fontFamily: globalTheme.font.fontFamily,
  fontSize: globalTheme.font.fontSizes[16],
  color: globalTheme.color.baseText,
  lineHeight: globalTheme.font.lineHeight,
});

// outline style
// globalStyle(':focus-visible', {
//   outline: '2px solid black', // TODO
// });

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('b,strong', {
  fontWeight: globalTheme.font.fontWeightBold,
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('button', {
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
});

globalStyle('input,textarea,button,select', {
  fontFamily: 'inherit',
  color: 'inherit',
  appearance: 'none',
});

globalStyle('input', {
  wordBreak: 'normal',
});

globalStyle('input[type="number"]', {
  appearance: 'textfield',
});

globalStyle(
  'input:not([type="text"]):not([type="tel"]):not([type="email"]):not([type="password"]):not([type="url"]),button,select',
  {
    cursor: 'pointer',
  }
);

globalStyle('[aria-disabled="true"],[disabled]', {
  cursor: 'default',
});

globalStyle('ul,ol', {
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

globalStyle('dl,dd', {
  margin: 0,
});

globalStyle('em', {
  fontStyle: 'normal',
});
