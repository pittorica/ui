import { createThemeContract } from '@vanilla-extract/css';

import { borderContract } from './contracts/border.css.js';
import { colorContract } from './contracts/color.css.js';
import { fontContract } from './contracts/font.css.js';
import { spacingContract } from './contracts/spacing.css.js';

export const pitto = createThemeContract({
  border: borderContract,
  color: colorContract,
  font: fontContract,
  spacing: spacingContract,
});
