import { pitto, sprinkles } from '@pittorica/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputRecipe = recipe({
  base: style([
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }),
    {
      position: 'relative',
      transition: 'all 0.2s ease-in-out',
      cursor: 'text',

      fontFamily: pitto.font.family.sans,
      fontSize: pitto.font.size.body.large,

      selectors: {
        '&:focus-within': {
          outline: `2px solid ${pitto.color.brand[500].color}`,
          outlineOffset: '-1px',
        },
      },
    },
  ]),

  variants: {
    variant: {
      filled: style([
        sprinkles({}),
        {
          backgroundColor: pitto.color.gray[900].color,
          borderColor: pitto.color.gray[400].color,
          color: pitto.color.gray[100].color,
          borderTopLeftRadius: pitto.border.radius.medium,
          borderTopRightRadius: pitto.border.radius.medium,

          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderTopWidth: '0px',
          borderTopStyle: 'solid',
          borderLeftWidth: '0px',
          borderLeftStyle: 'solid',
          borderRightWidth: '0px',
          borderRightStyle: 'solid',

          ':hover': {
            backgroundColor: pitto.color.gray[800].color,
          },
          selectors: {
            '&:focus-within': {
              backgroundColor: pitto.color.white[900].color,
              borderBottomColor: pitto.color.brand[500].color,
              outline: 'none',
            },
          },
        },
      ]),

      outlined: style([
        sprinkles({}),
        {
          borderTopLeftRadius: pitto.border.radius.medium,
          borderColor: pitto.color.gray[400].color,
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'solid',

          ':hover': {
            borderColor: pitto.color.gray[300].color,
          },
          selectors: {
            '&:focus-within': {
              borderColor: pitto.color.brand[500].color,
            },
          },
        },
      ]),

      plain: style([
        sprinkles({
          backgroundColor: 'transparent',
        }),
        {
          borderColor: 'transparent',
          borderRadius: 0,
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: pitto.color.gray[400].color,
          backgroundColor: 'transparent',

          selectors: {
            '&:focus-within': {
              outline: 'none',
              outlineOffset: '0',
              borderBottomColor: pitto.color.brand[500].color,
            },
          },
        },
      ]),
    },

    size: {
      small: style([
        sprinkles({
          paddingX: 'medium',
          fontSize: 'bodySmall',
        }),
        { height: '2.5rem' },
      ]),
      medium: style([
        sprinkles({
          paddingX: 'medium',
          fontSize: 'bodyMedium',
        }),
        { height: '3rem' },
      ]),
      large: style([
        sprinkles({
          paddingX: 'large',
          fontSize: 'bodyLarge',
        }),
        { height: '3.5rem' },
      ]),
    },

    error: {
      true: style({
        color: pitto.color.error[500].color,
        borderColor: pitto.color.error[500].color,
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
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: pitto.color.gray[900].color,
        pointerEvents: 'none',
      }),
    },

    fullWidth: {
      true: sprinkles({ width: '100%' }),
      false: style({ width: 'auto', display: 'inline-flex' }),
    },
  },

  defaultVariants: {
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
  },
});

// NATIVE INPUT
export const nativeInput = style({
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '100%',
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  padding: pitto.spacing.small,
  margin: 0,
  backgroundColor: 'transparent',

  '::placeholder': {
    color: pitto.color.gray[500].color,
    opacity: 1,
  },

  ':disabled': {
    cursor: 'not-allowed',
  },
});

// DECORATORS
export const decorator = style({
  padding: pitto.spacing.medium,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: pitto.color.gray[600].color,
  flexShrink: 0,
});

export const startDecoratorStyle = style([
  decorator,
  { marginRight: pitto.spacing.medium, paddingRight: pitto.spacing.none },
]);

export const endDecoratorStyle = style([
  decorator,
  { marginLeft: pitto.spacing.medium, paddingLeft: pitto.spacing.none },
]);

// HELPER TEXT
export const helperTextRecipe = recipe({
  base: style([
    sprinkles({
      marginTop: 'small',
      paddingX: 'small',
    }),
    {
      fontFamily: pitto.font.family.sans,
      fontSize: pitto.font.size.body.small,
      lineHeight: pitto.font.lineHeights.normal,
    },
  ]),

  variants: {
    error: {
      true: style({
        color: pitto.color.error[500].color,
      }),
      false: style({
        color: pitto.color.gray[500].color,
      }),
    },
  },

  defaultVariants: {
    error: false,
  },
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});
