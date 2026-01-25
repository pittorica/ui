import { pitto } from '@pittorica/styles';
import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  base: {
    fontFamily: pitto.font.family.sans,
    margin: 0,
  },
  variants: {
    variant: {
      body: { fontWeight: pitto.font.weight.regular },
      label: {
        fontWeight: pitto.font.weight.semibold,
        letterSpacing: '0.5px',
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  compoundVariants: [
    // Body Combinations
    {
      variants: { variant: 'body', size: 'large' },
      style: {
        fontSize: pitto.font.size.body.large,
        lineHeight: pitto.font.lineHeights.loose,
      },
    },
    {
      variants: { variant: 'body', size: 'medium' },
      style: {
        fontSize: pitto.font.size.body.medium,
        lineHeight: pitto.font.lineHeights.loose,
      },
    },
    {
      variants: { variant: 'body', size: 'small' },
      style: {
        fontSize: pitto.font.size.body.small,
        lineHeight: pitto.font.lineHeights.loose,
      },
    },
    // Label Combinations
    {
      variants: { variant: 'label', size: 'large' },
      style: {
        fontSize: pitto.font.size.label.large,
        lineHeight: pitto.font.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'label', size: 'medium' },
      style: {
        fontSize: pitto.font.size.label.medium,
        lineHeight: pitto.font.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'label', size: 'small' },
      style: {
        fontSize: pitto.font.size.label.small,
        lineHeight: pitto.font.lineHeights.normal,
      },
    },
  ],
  defaultVariants: {
    variant: 'body',
    size: 'medium',
  },
});
