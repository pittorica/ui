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
    width: '2.5rem',
    height: '2.5rem',
    cursor: 'pointer',
    transition:
      'background-color 0.1s, border-color 0.1s, border-radius 0.1s ease-in-out, color 0.1s',

    border: 'none',
    outline: 'none',
    padding: pitto.spacing.small,

    borderRadius: pitto.border.radius.full,
  },
]);

const squaredOnActive = {
  ':active': {
    borderRadius: pitto.border.radius.medium,
  },
};

const text = style({
  backgroundColor: 'transparent',
  borderRadius: pitto.border.radius.full,

  ':hover': {
    backgroundColor: pitto.color.brand[800].color,
  },
  selectors: {
    '&:active': {
      backgroundColor: pitto.color.brand[600].color,
      borderRadius: pitto.border.radius.medium,
    },
  },
});

// 2. FILLED
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
    color: pitto.color.brand.brand.color,
    border: `2px solid ${pitto.color.brand.brand.color}`,

    ':hover': {
      backgroundColor: pitto.color.brand[900].color,
      borderColor: pitto.color.brand[300].color,
      color: pitto.color.brand.brand.color,
    },
    selectors: {
      '&:active': {
        backgroundColor: pitto.color.brand[800].color,
      },
    },
  },
]);

const tonal = style([
  squaredOnActive,
  {
    backgroundColor: pitto.color.brand[900].color,
    color: pitto.color.brand[900].onColor,

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

export const iconButtonRecipe = recipe({
  base: baseStyles,
  variants: {
    variant: {
      text,
      filled,
      outlined,
      tonal,
    },
    size: {
      small: { width: '2rem', height: '2rem', padding: pitto.spacing.small },
      medium: { width: '2.5rem', height: '2.5rem' }, // Default
      large: { width: '3rem', height: '3rem', padding: pitto.spacing.medium },
    },
    disabled: {
      true: style({
        cursor: 'not-allowed',
        opacity: 0.38,
        boxShadow: 'none',
        selectors: {
          '&:hover': {
            cursor: 'not-allowed',
          },
        },
      }),
    },
  },
  defaultVariants: {
    variant: 'text',
    size: 'medium',
  },
});
