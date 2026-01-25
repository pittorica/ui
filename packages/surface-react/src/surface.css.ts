import {
  type BGColorToken,
  COLOR_TOKEN_KEYS,
  type ColorTokenFull,
  sprinkles,
} from '@pittorica/styles';
import { recipe } from '@vanilla-extract/recipes';

const colorRecipe = {} as Partial<Record<BGColorToken, string>>;

const BG_TOKEN_KEYS = COLOR_TOKEN_KEYS.filter((key) => !key.startsWith('on'));

for (const colorKey of BG_TOKEN_KEYS) {
  if (['transparent', 'inherit', 'currentColor'].includes(colorKey)) {
    continue;
  }

  const onColorKey = `on${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}`;

  colorRecipe[colorKey as BGColorToken] = sprinkles({
    backgroundColor: colorKey as BGColorToken,
    color: onColorKey as ColorTokenFull,
  });
}

const transparentVariant = sprinkles({
  backgroundColor: 'transparent',
  color: 'inherit',
});

delete colorRecipe.transparent;

export const surfaceRecipe = recipe({
  base: {},
  variants: {
    color: {
      transparent: transparentVariant,
      ...colorRecipe,
    },
  },
  defaultVariants: {
    color: 'brand800',
  },
});
