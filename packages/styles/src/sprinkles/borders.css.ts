import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from '../contract.css.js';

export const borderProperties = defineProperties({
  properties: {
    borderRadius: pitto.border.radius,
  },
});
