import { createSprinkles } from '@vanilla-extract/sprinkles';

import { borderProperties } from './sprinkles/borders.css.js';
import { colorProperties } from './sprinkles/color.css.js';
import { responsiveProperties } from './sprinkles/responsive.css.js';
import { spacingProperties } from './sprinkles/spacing.css.js';
import { typographyProperties } from './sprinkles/typography.css.js';

export const sprinkles = createSprinkles(
  borderProperties,
  colorProperties,
  responsiveProperties,
  spacingProperties,
  typographyProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
