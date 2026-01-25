import { recipe } from '@vanilla-extract/recipes';

export const stackStyle = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      'horizontal-reversed': {
        flexDirection: 'row-reverse',
      },
      vertical: {
        flexDirection: 'column',
      },
      'vertical-reversed': {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },
    gap: {
      none: { gap: 0 },
      xsmall: { gap: '0.25rem' },
      small: { gap: '0.5rem' },
      medium: { gap: '1rem' },
      large: { gap: '1.5rem' },
      xlarge: { gap: '2rem' },
      xxlarge: { gap: '3rem' },
      xxxlarge: { gap: '4rem' },
      xxxxlarge: { gap: '6rem' },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    align: 'center',
    justify: 'center',
  },
});
