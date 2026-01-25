import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from '../contract.css.js';

export const spacingProperties = defineProperties({
  properties: {
    padding: pitto.spacing,
    paddingTop: pitto.spacing,
    paddingBottom: pitto.spacing,
    paddingLeft: pitto.spacing,
    paddingRight: pitto.spacing,
    paddingX: pitto.spacing,
    paddingY: pitto.spacing,

    margin: pitto.spacing,
    marginTop: pitto.spacing,
    marginBottom: pitto.spacing,
    marginLeft: pitto.spacing,
    marginRight: pitto.spacing,
    marginX: pitto.spacing,
    marginY: pitto.spacing,

    gap: pitto.spacing,
    columnGap: pitto.spacing,
    rowGap: pitto.spacing,
  },
  shorthands: {
    p: ['padding'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],

    m: ['margin'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],

    g: ['gap'],
    cg: ['columnGap'],
    rg: ['rowGap'],
  },
});
