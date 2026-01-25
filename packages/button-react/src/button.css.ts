import { pitto, sprinkles } from '@pittorica/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const baseStyles = style([
  sprinkles({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    minWidth: '6.5rem',
    height: '2.5rem',
    cursor: 'pointer',
    transition:
      'background-color 0.1s, border-color 0.1s, border-radius 0.1s ease-in-out',

    fontFamily: pitto.font.family.sans,
    fontSize: pitto.font.size.label.large,
    fontWeight: pitto.font.weight.medium,
    lineHeight: pitto.font.lineHeights.tight,
    textDecoration: 'none',

    border: 'none',
    outline: 'none',
    padding: `0 ${pitto.spacing.large}`,
    borderRadius: pitto.border.radius.medium,
  },
]);

const squaredOnActive = {
  ':active': {
    borderRadius: pitto.border.radius.xsmall,
  },
};

const filled = style([
  squaredOnActive,
  {
    backgroundColor: pitto.color.brand[500].color,
    color: pitto.color.brand[500].onColor,

    ':hover': {
      backgroundColor: pitto.color.brand[400].color,
    },
    selectors: {
      '&:active': {
        backgroundColor: pitto.color.brand[300].color,
      },
    },
  },
]);

const outlined = style([
  squaredOnActive,
  {
    backgroundColor: 'transparent',
    color: pitto.color.brand[500].color,
    border: `1px solid ${pitto.color.gray[400].color}`,

    ':hover': {
      backgroundColor: pitto.color.gray[900].color,
    },
    selectors: {
      '&:active': {
        backgroundColor: pitto.color.gray[800].color,
      },
    },
  },
]);

const text = style({
  backgroundColor: 'transparent',
  color: pitto.color.brand[500].color,
  padding: `0 ${pitto.spacing.small}`,

  ':hover': {
    backgroundColor: pitto.color.gray[900].color,
  },
  ':active': {
    backgroundColor: pitto.color.gray[800].color,
  },
});

const tonal = style([
  squaredOnActive,
  {
    backgroundColor: pitto.color.brand[900].color,
    color: pitto.color.brand[100].color,

    ':hover': {
      backgroundColor: pitto.color.brand[800].color,
    },
    selectors: {
      '&:active': {
        backgroundColor: pitto.color.brand[700].color,
      },
    },
  },
]);

export const buttonRecipe = recipe({
  base: baseStyles,
  variants: {
    variant: {
      filled,
      outlined,
      text,
      tonal,
    },
    size: {
      small: {
        height: '2rem',
        fontSize: pitto.font.size.label.small,
        padding: `0 ${pitto.spacing.medium}`,
      },
      medium: { height: '2.5rem', fontSize: pitto.font.size.label.large },
      large: {
        height: '3rem',
        fontSize: pitto.font.size.label.xlarge,
        padding: `0 ${pitto.spacing.xlarge}`,
      },
    },
    disabled: {
      true: style([
        sprinkles({}),
        {
          cursor: 'not-allowed',
          backgroundColor: pitto.color.gray[300].color,
          color: pitto.color.gray[900].color,
          boxShadow: 'none',

          ':hover': {
            backgroundColor: pitto.color.gray[300].color,
            color: pitto.color.gray[900].color,
            borderRadius: pitto.border.radius.medium,
          },
          selectors: {
            '&:active': {
              backgroundColor: pitto.color.gray[300].color,
              color: pitto.color.gray[900].color,
            },
          },
        },
      ]),
    },
    fullWidth: {
      true: sprinkles({ width: '100%' }),
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'medium',
  },
});

export const iconStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: pitto.spacing.small,
});
