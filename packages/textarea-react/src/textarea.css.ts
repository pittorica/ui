import { pitto, sprinkles } from '@pittorica/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const baseStyle = style([
  sprinkles({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  }),
  {
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
    fontFamily: pitto.font.family.sans,
    fontSize: pitto.font.size.body.large,
    background: 'transparent',
    border: '1px solid',
    borderColor: pitto.color.brand.brand.color,
    borderRadius: pitto.border.radius.medium,
    resize: 'vertical',
    minHeight: '3rem',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    overflow: 'hidden',
    padding: pitto.spacing.medium,
    selectors: {
      '&:focus-within': {
        outline: `2px solid ${pitto.color.brand[500].color}`,
        outlineOffset: '-1px',
      },
    },
  },
]);

export const textareaRecipe = recipe({
  base: baseStyle,
  variants: {
    variant: {
      outlined: style({
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: pitto.color.brand.brand.color,
        ':hover': { borderColor: pitto.color.gray[700].color },
        selectors: {
          '&:focus-within': {
            borderColor: pitto.color.brand[500].color,
          },
        },
      }),
      filled: style([
        {
          backgroundColor: pitto.color.gray[100].color,
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderColor: pitto.color.gray[400].color,
          borderTopLeftRadius: pitto.border.radius.medium,
          borderTopRightRadius: pitto.border.radius.medium,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          color: pitto.color.gray[900].color,
          ':hover': {
            backgroundColor: pitto.color.gray[200].color,
          },
          selectors: {
            '&:focus-within': {
              backgroundColor: pitto.color.gray[100].color,
              borderBottomColor: pitto.color.brand[500].color,
            },
          },
        },
      ]),
    },
    size: {
      small: style([
        sprinkles({
          padding: 'small',
          fontSize: 'bodySmall',
        }),
        { minHeight: '2.5rem' },
      ]),
      medium: style([
        sprinkles({
          padding: 'medium',
          fontSize: 'bodyMedium',
        }),
        { minHeight: '3rem' },
      ]),
      large: style([
        sprinkles({
          padding: 'large',
          fontSize: 'bodyLarge',
        }),
        { minHeight: '3.5rem' },
      ]),
    },
    error: {
      true: style({
        borderColor: pitto.color.error[500].color,
        color: pitto.color.error[500].color,
        boxShadow: `0 0 0 1px ${pitto.color.error[500].color}`,
        selectors: {
          '&:focus-within': {
            outlineColor: pitto.color.error[500].color,
            borderColor: pitto.color.error[500].color,
          },
        },
      }),
    },
    disabled: {
      true: style({
        opacity: 0.6,
        cursor: 'not-allowed',
        backgroundColor: pitto.color.gray[100].color,
        pointerEvents: 'none',
      }),
    },
  },
  defaultVariants: {
    variant: 'outlined',
    size: 'medium',
  },
});
