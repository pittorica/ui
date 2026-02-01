import 'pittorica/styles';

import React from 'react';

import { PittoricaTheme } from '@pittorica/react-theme';
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
      React.createElement(PittoricaTheme, null, React.createElement(Story)),
  ],
};

export default preview;
