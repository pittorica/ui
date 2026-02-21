import 'pittorica';

import React from 'react';

import { PittoricaTheme } from '@pittorica/theme-react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        PittoricaTheme,
        { sourceColor: '#473198' },
        React.createElement(Story)
      ),
  ],
};

export default preview;
