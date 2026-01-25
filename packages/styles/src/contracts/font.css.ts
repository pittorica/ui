import { createThemeContract } from '@vanilla-extract/css';

const fontSizeScale = {
  xsmall: '',
  small: '',
  medium: '',
  large: '',
  xlarge: '',
  xxlarge: '',
};

export const fontContract = createThemeContract({
  family: {
    brand: '',
    sans: '',
    mono: '',
    serif: '',
  },
  weight: {
    light: '',
    regular: '',
    medium: '',
    semibold: '',
    bold: '',
    extrabold: '',
  },
  lineHeights: {
    tight: '',
    normal: '',
    loose: '',
  },
  size: {
    root: '',
    body: fontSizeScale,
    label: fontSizeScale,
    title: fontSizeScale,
    headline: fontSizeScale,
    display: fontSizeScale,
  },
});
