import { createThemeContract } from '@vanilla-extract/css';

export const SCALABLE_COLOR_TOKENS = [
  'black',
  'white',
  'gray',
  'brand',
  'info',
  'success',
  'warning',
  'error',
] as const;
export type ScalableColorToken = (typeof SCALABLE_COLOR_TOKENS)[number];

export const PURE_COLOR_TOKENS = [
  'transparent',
  ...SCALABLE_COLOR_TOKENS,
] as const;
export type PureColorToken = (typeof PURE_COLOR_TOKENS)[number];

export const COLOR_SCALES = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;
export type ColorScale = (typeof COLOR_SCALES)[number];

export type ColorScaleGroup = {
  [K in ColorScale]: { color: string; onColor: string };
};

const colorScaleContract = <C extends ScalableColorToken>(color: C) =>
  ({
    [color]: { color: '', onColor: '' },
    100: { color: '', onColor: '' },
    200: { color: '', onColor: '' },
    300: { color: '', onColor: '' },
    400: { color: '', onColor: '' },
    500: { color: '', onColor: '' },
    600: { color: '', onColor: '' },
    700: { color: '', onColor: '' },
    800: { color: '', onColor: '' },
    900: { color: '', onColor: '' },
  }) as ColorScaleGroup & { [K in C]: { color: string; onColor: string } };

export const colorContract = createThemeContract({
  transparent: '',
  black: colorScaleContract('black'),
  white: colorScaleContract('white'),
  gray: colorScaleContract('gray'),
  brand: colorScaleContract('brand'),
  info: colorScaleContract('info'),
  success: colorScaleContract('success'),
  warning: colorScaleContract('warning'),
  error: colorScaleContract('error'),
});
