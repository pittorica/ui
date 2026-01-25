import { createThemeContract } from '@vanilla-extract/css';

export const SPACING_TOKENS = [
  'none',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'xxxxlarge',
] as const;
export type SpacingToken = (typeof SPACING_TOKENS)[number];

export const spacingContract = createThemeContract({
  none: '',
  xsmall: '',
  small: '',
  medium: '',
  large: '',
  xlarge: '',
  xxlarge: '',
  xxxlarge: '',
  xxxxlarge: '',
});
