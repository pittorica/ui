import { recipe } from '@vanilla-extract/recipes';

export const containerRecipe = recipe({
  base: {
    width: '100%',
    maxWidth: '100%',
  },

  variants: {
    size: {
      none: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      fixed: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
      xxlarge: {
        maxWidth: '87.5rem', // 1400px
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
      xlarge: {
        maxWidth: '75rem', // 1200px
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
      large: {
        maxWidth: '62rem', // 992px
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
      medium: {
        maxWidth: '48rem', // 768px
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
      small: {
        maxWidth: '36rem', // 576px
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
      xsmall: {
        maxWidth: '22.5rem', // 360px
        paddingLeft: 'auto',
        paddingRight: 'auto',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type ContainerVariants = Parameters<typeof containerRecipe>[0];
