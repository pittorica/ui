import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from '../contract.css.js';

const sizeMap = Object.assign(
  {},
  pitto.spacing, // Include 'none', 'xsmall', 'medium'...
  {
    '100%': '100%',
    auto: 'auto',
  }
);

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
    ],
    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
      none: 'none',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      full: '1 / -1',
      start: '1',
      end: '-1',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      full: '1 / -1',
    },
    gridAutoFlow: ['row', 'column', 'dense', 'row dense', 'column dense'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    width: sizeMap,
    maxWidth: {
      none: 'none',
      '100%': '100%',
      small: '640px',
      medium: '768px',
      large: '1024px',
      xlarge: '1280px',
      xxlarge: '1536px',
    },
    height: sizeMap,
  },
  shorthands: {
    placeItems: ['alignItems', 'justifyContent'],
  },
});
