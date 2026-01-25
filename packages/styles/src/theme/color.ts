import Color from 'color';

import {
  type ColorScaleGroup,
  type ScalableColorToken,
} from '../contracts/color.css.js';
import { PALETTE } from '../palette.js';

/**
 * Returns the most readable text color (black or white) for a given background color.
 * @param hexColor The background color in hex format.
 * @param black The hex value for black, used for contrast calculation (default is PALETTE.black).
 * @param white The hex value for white, used for contrast calculation (default is PALETTE.white).
 * @returns The hex value of the recommended text color for optimal contrast.
 * @example
 * // Returns '#000000' or '#ffffff' depending on the contrast with the background
 * getContrastTextColor('#ff0000');
 */
export const getContrastTextColor = (
  hexColor: string,
  black: string = PALETTE.black,
  white: string = PALETTE.white
): string => {
  let bg;
  try {
    bg = Color(hexColor);
  } catch {
    return white;
  }

  const blackColor = Color(black);
  const whiteColor = Color(white);

  const contrastWithBlack = bg.contrast(blackColor);
  const contrastWithWhite = bg.contrast(whiteColor);

  return contrastWithWhite > contrastWithBlack ? white : black;
};

/**
 * Generates a color scale value and its appropriate contrast text color.
 * @param baseColorHex The base color in hex format.
 * @param white The hex value for white, used for contrast calculation.
 * @param black The hex value for black, used for contrast calculation.
 * @param index The scale index (0 for base, higher for lighter/darker variants).
 * @param isDark Whether the base color is considered dark (true) or light (false).
 * @returns An object with the scaled color hex and the recommended onColor for text contrast.
 * @example
 * // Example usage:
 * // getScaleValue('#ff0000', '#ffffff', '#000000', 100, true);
 */
export const getScaleValue = (
  baseColorHex: string,
  white: string,
  black: string,
  index: number,
  isDark: boolean
) => {
  const color = Color(baseColorHex);
  const amount = index / 1000;
  let finalColorHex: string;

  if (index === 0) {
    finalColorHex = color.hex();
  } else if (isDark) {
    finalColorHex = color.lighten(amount).hex();
  } else {
    finalColorHex = color.darken(amount).hex();
  }

  return {
    color: finalColorHex,
    onColor: getContrastTextColor(finalColorHex, black, white),
  };
};

/**
 * Creates a color scale object for a given color token, generating lighter or darker variants and their contrast text colors.
 * @param colorName The scalable color token name to use as the key for the scale.
 * @param baseColorHex The base color in hex format to generate the scale from.
 * @param white The hex value for white, used for contrast calculation.
 * @param black The hex value for black, used for contrast calculation.
 * @param isDark Whether the base color is considered dark (true) or light (false).
 * @returns An object containing the color scale and recommended contrast text colors for each variant.
 * @example
 * // Example usage:
 * // createColorScale('brand', '#ff0000', '#ffffff', '#000000', true);
 */
export const createColorScale = <C extends ScalableColorToken>(
  colorName: C,
  baseColorHex: string,
  white: string,
  black: string,
  isDark: boolean
) =>
  ({
    [colorName]: getScaleValue(baseColorHex, white, black, 0, isDark),
    100: getScaleValue(baseColorHex, white, black, 100, isDark),
    200: getScaleValue(baseColorHex, white, black, 200, isDark),
    300: getScaleValue(baseColorHex, white, black, 300, isDark),
    400: getScaleValue(baseColorHex, white, black, 400, isDark),
    500: getScaleValue(baseColorHex, white, black, 500, isDark),
    600: getScaleValue(baseColorHex, white, black, 600, isDark),
    700: getScaleValue(baseColorHex, white, black, 700, isDark),
    800: getScaleValue(baseColorHex, white, black, 800, isDark),
    900: getScaleValue(baseColorHex, white, black, 900, isDark),
  }) as ColorScaleGroup & { [K in C]: { color: string; onColor: string } };

/**
 * Creates a color scale theme object for a given color token, automatically determining if the base color is dark or light.
 * @param colorName The scalable color token name to use as the key for the scale.
 * @param baseColorHex The base color in hex format to generate the scale from.
 * @param white The hex value for white, used for contrast calculation.
 * @param black The hex value for black, used for contrast calculation.
 * @returns An object containing the color scale and recommended contrast text colors for each variant.
 * @example
 * // Example usage:
 * // createColorScaleTheme('brand', '#ff0000', '#ffffff', '#000000');
 */
export const createColorScaleTheme = (
  colorName: ScalableColorToken,
  baseColorHex: string,
  white: string,
  black: string
) => {
  const isDark = Color(baseColorHex).luminosity() < 0.5;

  return createColorScale(colorName, baseColorHex, white, black, isDark);
};

export const colorTheme = {
  transparent: PALETTE.transparent,
  black: createColorScaleTheme(
    'black',
    PALETTE.black,
    PALETTE.white,
    PALETTE.black
  ),
  white: createColorScaleTheme(
    'white',
    PALETTE.white,
    PALETTE.white,
    PALETTE.black
  ),
  gray: createColorScaleTheme(
    'gray',
    PALETTE.gray,
    PALETTE.white,
    PALETTE.black
  ),
  brand: createColorScaleTheme(
    'brand',
    PALETTE.brand,
    PALETTE.white,
    PALETTE.black
  ),
  info: createColorScaleTheme(
    'info',
    PALETTE.info,
    PALETTE.white,
    PALETTE.black
  ),
  success: createColorScaleTheme(
    'success',
    PALETTE.success,
    PALETTE.white,
    PALETTE.black
  ),
  warning: createColorScaleTheme(
    'warning',
    PALETTE.warning,
    PALETTE.white,
    PALETTE.black
  ),
  error: createColorScaleTheme(
    'error',
    PALETTE.error,
    PALETTE.white,
    PALETTE.black
  ),
};
