import './theme.css.js';

import { globalStyle } from '@vanilla-extract/css';

import { pitto } from './contract.css.js';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontSize: pitto.font.size.root,
});

globalStyle('body', {
  fontFamily: pitto.font.family.sans,
  fontSize: pitto.font.size.body.medium,

  backgroundColor: pitto.color.white.white.color,
  color: pitto.color.black.black.color,
});
