import { pitto } from '@pittorica/styles';
import { recipe } from '@vanilla-extract/recipes';

export const blockquoteRecipe = recipe({
  base: {
    margin: 0,
    fontFamily: pitto.font.family.serif,
    fontStyle: 'italic',
  },
  variants: {
    variant: {
      classic: {
        maxWidth: '30rem',
        margin: '1rem auto',
        paddingLeft: pitto.spacing.large,
      },
      solid: {
        margin: '1rem auto',
        maxWidth: '30rem',
        borderRadius: pitto.border.radius.medium,
        padding: pitto.spacing.xlarge,
      },
      minimal: {
        margin: '1rem auto',
        maxWidth: '30rem',
        borderLeft: 'none',
        paddingLeft: pitto.spacing.large,
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {
    variant: 'classic',
  },
});
