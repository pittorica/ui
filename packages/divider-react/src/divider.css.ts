import { recipe } from '@vanilla-extract/recipes';

export const dividerRecipe = recipe({
  base: {
    width: '100%',
    border: 'none',
    margin: 0,
    padding: 0,
  },
  variants: {
    variant: {
      solid: {
        height: '1px',
        backgroundColor: 'currentColor', // Uses color prop from Box
      },
      wave: { height: '16px' },
      zigzag: { height: '16px' },
      dashed: { height: '16px' },
      double: { height: '16px' },
      square: { height: '16px' },
      scallop: { height: '16px' },
      dots: { height: '16px' },
      cross: { height: '16px' },
    },
    orientation: {
      horizontal: { width: '100%' },
      vertical: {
        width: '1px',
        height: '100%',
        minHeight: '1em',
      },
    },
  },
  compoundVariants: [
    // Reset height/width for vertical solid lines
    {
      variants: { variant: 'solid', orientation: 'vertical' },
      style: {
        width: '1px',
        height: 'auto',
        alignSelf: 'stretch',
      },
    },
    // Vertical SVGs (if you ever want to support them) require rotation
    // For now, we'll assume SVGs are mostly horizontal separators
  ],
  defaultVariants: {
    variant: 'solid',
    orientation: 'horizontal',
  },
});
