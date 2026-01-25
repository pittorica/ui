import { pitto, sprinkles } from '@pittorica/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const checkboxContainer = style([
  sprinkles({
    display: 'inline-flex',
    alignItems: 'center',
  }),
  { cursor: 'pointer', userSelect: 'none' },
]);

export const hiddenInput = style({
  position: 'absolute',
  opacity: 0,
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});

const indicatorBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: pitto.spacing.xlarge,
  height: pitto.spacing.xlarge,
  marginRight: pitto.spacing.small,
  borderRadius: pitto.border.radius.xsmall,

  backgroundColor: pitto.color.white[200].color,
  color: pitto.color.gray[200].onColor,

  borderWidth: '0px',
  borderStyle: 'none',

  transition:
    'background-color 0.2s, border-color 0.2s, box-shadow 0.2s, color 0.2s',
});

export const indicatorRecipe = recipe({
  base: style([
    indicatorBase,
    {
      selectors: {
        [`${checkboxContainer}:has(:focus-visible) &`]: {
          boxShadow: `0 0 0 3px ${pitto.color.brand[900].color}`,
        },
        [`${checkboxContainer}:hover &`]: {
          borderColor: pitto.color.brand[500].color,
        },

        [`${checkboxContainer}:has(:checked) &`]: {
          backgroundColor: pitto.color.brand[500].color,
          borderColor: pitto.color.brand[500].color,
          color: pitto.color.brand[500].onColor,
        },
      },
    },
  ]),
  variants: {
    error: {
      true: style({
        borderColor: pitto.color.error[500].color,
        color: pitto.color.error[500].color,
        selectors: {
          [`${checkboxContainer}:has(:checked) &`]: {
            borderColor: pitto.color.error[500].color,
            backgroundColor: pitto.color.error[500].color,
            color: pitto.color.error[500].onColor,
          },
          [`${checkboxContainer}:hover &`]: {
            borderColor: pitto.color.error[500].color,
          },
        },
      }),
    },
    disabled: {
      true: style({
        opacity: 0.38,
        cursor: 'not-allowed',
        backgroundColor: pitto.color.gray[900].color,
        borderColor: pitto.color.gray[600].color,
        color: pitto.color.gray[600].color,

        selectors: {
          [`${checkboxContainer}:has(:checked:disabled) &`]: {
            backgroundColor: pitto.color.gray[600].color,
            borderColor: pitto.color.gray[600].color,
            color: pitto.color.white[900].color,
          },
          [`${checkboxContainer}:hover &`]: {
            borderColor: pitto.color.gray[600].color,
          },
        },
      }),
    },
  },
});

export const labelStyle = style({
  fontSize: pitto.font.size.body.medium,
  color: pitto.color.gray[100].color,
});
