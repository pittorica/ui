import { createGlobalTheme } from '@vanilla-extract/css';

import { pitto } from './contract.css.js';
import { borderTheme } from './theme/border.js';
import { colorTheme } from './theme/color.js';
import { fontTheme } from './theme/font.js';
import { spacingTheme } from './theme/spacing.js';

export const theme = createGlobalTheme(':root', pitto, {
  border: borderTheme,
  font: fontTheme,
  spacing: spacingTheme,
  color: colorTheme,
});
