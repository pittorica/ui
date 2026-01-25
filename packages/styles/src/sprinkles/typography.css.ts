import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from '../contract.css.js';

const fontWeightMap = {
  light: pitto.font.weight.light,
  regular: pitto.font.weight.regular,
  medium: pitto.font.weight.medium,
  semibold: pitto.font.weight.semibold,
  bold: pitto.font.weight.bold,
  extrabold: pitto.font.weight.extrabold,
};

const fontSizeMap = {
  bodyXsmall: pitto.font.size.body.xsmall,
  bodySmall: pitto.font.size.body.small,
  bodyMedium: pitto.font.size.body.medium,
  bodyLarge: pitto.font.size.body.large,
  bodyXlarge: pitto.font.size.body.xlarge,
  bodyXxlarge: pitto.font.size.body.xxlarge,

  labelXsmall: pitto.font.size.label.xsmall,
  labelSmall: pitto.font.size.label.small,
  labelMedium: pitto.font.size.label.medium,
  labelLarge: pitto.font.size.label.large,
  labelXlarge: pitto.font.size.label.xlarge,
  labelXxlarge: pitto.font.size.label.xxlarge,

  titleXsmall: pitto.font.size.title.xsmall,
  titleSmall: pitto.font.size.title.small,
  titleMedium: pitto.font.size.title.medium,
  titleLarge: pitto.font.size.title.large,
  titleXlarge: pitto.font.size.title.xlarge,
  titleXxlarge: pitto.font.size.title.xxlarge,

  headlineXsmall: pitto.font.size.headline.xsmall,
  headlineSmall: pitto.font.size.headline.small,
  headlineMedium: pitto.font.size.headline.medium,
  headlineLarge: pitto.font.size.headline.large,
  headlineXlarge: pitto.font.size.headline.xlarge,
  headlineXxlarge: pitto.font.size.headline.xxlarge,

  displayXsmall: pitto.font.size.display.xsmall,
  displaySmall: pitto.font.size.display.small,
  displayMedium: pitto.font.size.display.medium,
  displayLarge: pitto.font.size.display.large,
  displayXlarge: pitto.font.size.display.xlarge,
  displayXxlarge: pitto.font.size.display.xxlarge,
};

export const typographyProperties = defineProperties({
  properties: {
    fontWeight: fontWeightMap,
    fontSize: fontSizeMap,
  },
});
