import { recipe } from '@vanilla-extract/recipes';

export const quoteRecipe = recipe({
  base: {
    fontStyle: 'italic',
    quotes: '"“" "”" "‘" "’"',
    selectors: {
      '&::before': {
        content: 'open-quote',
      },
      '&::after': {
        content: 'close-quote',
      },
    },
  },
});
