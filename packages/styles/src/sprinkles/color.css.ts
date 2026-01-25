// sprinkles/colors.css.ts
import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from '../contract.css.js';
import type { ColorScale, ScalableColorToken } from '../contracts/color.css.js';

type FullColorKeys = keyof typeof pitto.color; // 'transparent' | 'black' | 'white' | 'gray' | ...
type BaseKey = Exclude<keyof typeof pitto.color, 'transparent'>; // black | white | gray | ...
type ScaleKey = ColorScale; // '100' | '200' | ... | '900'

type LevelKey = ScalableColorToken | ColorScale; // black | 100 | 200 | ...

type BaseColorToken = BaseKey; // E.g.: 'black'
type OnBaseColorToken = `on${Capitalize<BaseKey>}`; // E.g.: 'onBlack'
type ScaledColorToken = `${BaseKey}${ScaleKey}`; // E.g.: 'black100'
type OnScaledColorToken = `on${Capitalize<BaseKey>}${ScaleKey}`; // E.g.: 'onBlack100'

export type ColorTokenFull =
  | 'transparent'
  | BaseColorToken
  | OnBaseColorToken
  | ScaledColorToken
  | OnScaledColorToken
  | 'inherit'
  | 'currentColor';

export type ColorTokenValue = { color: string; onColor: string };

const generateColorMap = (): Record<ColorTokenFull, string> => {
  const colorMap = {} as Record<ColorTokenFull, string>;
  const colorContract = pitto.color;

  colorMap['transparent'] = colorContract.transparent;
  colorMap['inherit'] = 'inherit';
  colorMap['currentColor'] = 'currentColor';

  for (const baseKey of Object.keys(colorContract) as FullColorKeys[]) {
    if (baseKey === 'transparent') continue;

    const colorScale = colorContract[baseKey];
    const safeScale = colorScale as Record<string, ColorTokenValue>;

    for (const levelKey of Object.keys(colorScale)) {
      const typedLevelKey = levelKey as LevelKey;
      const levelTokens = safeScale[typedLevelKey];

      if (!levelTokens) continue;

      if (typedLevelKey === baseKey) {
        const colorKey = baseKey;
        colorMap[colorKey as ColorTokenFull] = levelTokens.color;

        const onColorKey = `on${baseKey.charAt(0).toUpperCase() + baseKey.slice(1)}`;
        colorMap[onColorKey as ColorTokenFull] = levelTokens.onColor;
      } else {
        const scaledColorKey = `${baseKey}${typedLevelKey}`;
        colorMap[scaledColorKey as ColorTokenFull] = levelTokens.color;

        const onScaledColorKey = `on${baseKey.charAt(0).toUpperCase() + baseKey.slice(1)}${typedLevelKey}`;
        colorMap[onScaledColorKey as ColorTokenFull] = levelTokens.onColor;
      }
    }
  }
  return colorMap;
};

const flatColorMap = generateColorMap();

export const COLOR_TOKEN_KEYS = Object.keys(flatColorMap) as ColorTokenFull[];

export type BGColorToken =
  | 'transparent'
  | ScalableColorToken // e.g., 'black'
  | ScaledColorToken; // e.g., 'black100'

export const BG_COLOR_TOKENS = COLOR_TOKEN_KEYS.filter(
  (key): key is BGColorToken => !key.startsWith('on')
);

export const colorProperties = defineProperties({
  properties: {
    backgroundColor: flatColorMap,
    color: flatColorMap,
  },
  shorthands: {
    bg: ['backgroundColor'],
    c: ['color'],
  },
});

export type ColorProperties = typeof colorProperties;
