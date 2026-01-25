import { pitto } from '@pittorica/styles';
import { recipe } from '@vanilla-extract/recipes';

export const preRecipe = recipe({
  base: {
    fontFamily: pitto.font.family.mono,
    fontSize: pitto.font.size.body.small,
    lineHeight: pitto.font.lineHeights.normal,
    overflowX: 'auto',
    whiteSpace: 'pre',
    margin: 0,
    maxWidth: '100%',
  },
  variants: {
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        padding: 0,
        border: 'none',
      },
      block: {
        padding: pitto.spacing.medium,
        borderRadius: pitto.border.radius.medium,
        border: `1px solid ${pitto.color.black.black.color}`,
        color: pitto.color.black.black.color,
      },
    },
  },
  defaultVariants: {
    variant: 'block',
  },
});
