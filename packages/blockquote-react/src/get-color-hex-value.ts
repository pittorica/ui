import type { BoxProps } from '@pittorica/box-react';
import { colorTheme, type ScalableColorToken } from '@pittorica/styles';

/**
 * Resolves a color token or color string to its corresponding hex value from the theme, or returns a fallback.
 * @param token The color token or string to resolve (e.g., 'brand500', 'gray', or a direct color value).
 * @param fallback The fallback color to return if the token cannot be resolved. Defaults to 'currentColor'.
 * @returns The resolved hex color value as a string, or the fallback if not found.
 * @example
 * getColorHexValue('brand500'); // returns '#hexvalue'
 * getColorHexValue('unknown', '#fff'); // returns '#fff'
 */
export const getColorHexValue = (
  token: BoxProps['color'],
  fallback: string = 'currentColor'
): string => {
  if (!token || typeof token !== 'string') {
    return fallback;
  }

  const match = token.match(/^([a-z]+)(\d*)$/i);

  if (!match) {
    const value = colorTheme[token as keyof typeof colorTheme];
    return typeof value === 'string' ? value : fallback;
  }

  const [, baseName, scale] = match;
  const baseColor = colorTheme[baseName as ScalableColorToken];

  if (!baseColor) {
    return fallback;
  }

  if (scale) {
    const scaleIndex = scale as keyof typeof baseColor;
    if (baseColor[scaleIndex] && typeof baseColor[scaleIndex] === 'object') {
      return (baseColor[scaleIndex] as { color: string }).color;
    }
  }

  if (
    baseColor[baseName as keyof typeof baseColor] &&
    typeof baseColor[baseName as keyof typeof baseColor] === 'object'
  ) {
    return (baseColor[baseName as keyof typeof baseColor] as { color: string })
      .color;
  }

  return fallback;
};
