import { pitto, sprinkles } from '@pittorica/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const switchContainer = style([
  sprinkles({
    display: 'inline-flex',
    alignItems: 'center',
  }),
  {
    cursor: 'pointer',
    userSelect: 'none',
  },
]);

export const switchHiddenInput = style({
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

const switchIndicatorBase = style({
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',

  width: '3rem',
  height: '1.5rem',

  marginRight: pitto.spacing.small,
  borderRadius: pitto.border.radius.full,

  transition: 'background-color 0.1s, box-shadow 0.1s, color 0.1s',
});

export const switchIndicatorRecipe = recipe({
  base: style([switchIndicatorBase]),
  variants: {
    error: {
      true: style({
        selectors: {
          [`${switchContainer}:has(:checked) &`]: {
            color: pitto.color.error.error.color,
          },
        },
      }),
    },
    disabled: {
      true: style({
        opacity: 0.38,
        cursor: 'not-allowed',

        selectors: {
          [`${switchContainer}:has(:checked:disabled) &`]: {
            color: pitto.color.white[900].color,
          },
        },
      }),
    },
  },
});

export const switchLabelStyle = style({
  fontSize: pitto.font.size.body.medium,
});
