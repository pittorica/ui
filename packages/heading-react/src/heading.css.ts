import { pitto } from '@pittorica/styles';
import { recipe } from '@vanilla-extract/recipes';

export const headingStyle = recipe({
  base: {
    fontFamily: pitto.font.family.brand,
    margin: 0, // Reset default browser margins
  },
  variants: {
    variant: {
      display: {
        fontWeight: pitto.font.weight.regular,
      },
      headline: {
        fontWeight: pitto.font.weight.bold,
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  compoundVariants: [
    // Display Combinations
    {
      variants: { variant: 'display', size: 'large' },
      style: {
        fontSize: pitto.font.size.display.large,
        lineHeight: pitto.font.lineHeights.tight,
      },
    },
    {
      variants: { variant: 'display', size: 'medium' },
      style: {
        fontSize: pitto.font.size.display.medium,
        lineHeight: pitto.font.lineHeights.tight,
      },
    },
    {
      variants: { variant: 'display', size: 'small' },
      style: {
        fontSize: pitto.font.size.display.small,
        lineHeight: pitto.font.lineHeights.tight,
      },
    },
    // Headline Combinations
    {
      variants: { variant: 'headline', size: 'large' },
      style: {
        fontSize: pitto.font.size.headline.large,
        lineHeight: pitto.font.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'headline', size: 'medium' },
      style: {
        fontSize: pitto.font.size.headline.medium,
        lineHeight: pitto.font.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'headline', size: 'small' },
      style: {
        fontSize: pitto.font.size.headline.small,
        lineHeight: pitto.font.lineHeights.normal,
      },
    },
  ],
  defaultVariants: {
    variant: 'headline',
    size: 'medium',
  },
});
