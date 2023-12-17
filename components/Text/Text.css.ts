import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/styles/theme/globalTheme.css';

export const textStyles = {
  base: style({
    // fontSize: '1rem',
  }),
  weight: {
    normal: style({
      fontWeight: globalTheme.font.fontWeight.normal,
    }),
    bold: style({
      fontWeight: globalTheme.font.fontWeight.bold,
    }),
  },
  size: {
    sm: style({
      fontSize: globalTheme.font.fontSizes[12],
    }),
    lg: style({
      fontSize: globalTheme.font.fontSizes[20],
    }),
  },
};
