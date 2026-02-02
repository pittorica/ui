import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from './AspectRatio.js';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio (e.g., 16/9, 4/3, 1)',
    },
  },
};

export default meta;

export const ImageExample: StoryObj<typeof AspectRatio> = {
  render: (args) => (
    <Box style={{ width: '400px' }}>
      <AspectRatio {...args} ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1470252649358-96752a7844a5?auto=format&fit=crop&q=80&w=600"
          alt="Landscape"
        />
      </AspectRatio>
    </Box>
  ),
};

export const Square: StoryObj<typeof AspectRatio> = {
  args: {
    ratio: 1,
    children: (
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400"
        alt="Avatar Large"
      />
    ),
  },
};
