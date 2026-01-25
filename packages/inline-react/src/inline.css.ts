import { pitto } from '@pittorica/styles';
import { recipe } from '@vanilla-extract/recipes';

export const inlineRecipe = recipe({
  base: {
    // Base reset
  },
  variants: {
    highlight: {
      true: {
        backgroundColor: pitto.color.warning[200].color,
        color: pitto.color.warning[200].onColor,
        padding: '0.1em 0.5em',
        borderRadius: pitto.border.radius.xsmall,
      },
    },
    bold: {
      true: {
        fontWeight: pitto.font.weight.bold,
      },
    },
    small: {
      true: {
        fontSize: pitto.font.size.body.small,
      },
    },
    deleted: {
      true: {
        textDecoration: 'line-through',
      },
    },
    inserted: {
      true: {
        textDecoration: 'underline',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    sub: {
      true: {
        verticalAlign: 'sub',
        fontSize: 'smaller',
      },
    },
    sup: {
      true: {
        verticalAlign: 'super',
        fontSize: 'smaller',
      },
    },
  },
});
