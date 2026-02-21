import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from './AspectRatio.js';

const meta = {
  title: 'Media/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio (e.g., 16/9, 4/3, 1)',
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageExample: Story = {
  render: (args) => (
    <Box style={{ width: '400px' }}>
      <AspectRatio {...args} ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1769251297393-8178b5988b08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Landscape"
        />
      </AspectRatio>
    </Box>
  ),
};

export const Square: Story = {
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
