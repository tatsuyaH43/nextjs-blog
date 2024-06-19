import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/styles/theme/globalTheme.css';
import { hover, focus } from '@/styles/variables/selectorVariable.css';
import { baseTransition } from '@/styles/variables/animationVariable.css';

export const baseStyle = style({
  color: globalTheme.color.textLink,
  transition: `color ${baseTransition}`,
  selectors: {
    [hover]: {
      color: globalTheme.color.secondary,
    },
    [focus]: {
      color: globalTheme.color.secondary,
      outlineColor: globalTheme.color.primary,
    },
  },
});

export const hoverUnderlineStyle = style({
  selectors: {
    [hover]: {
      textDecoration: 'underline',
    },
    [focus]: {
      textDecoration: 'underline',
    },
  },
});
