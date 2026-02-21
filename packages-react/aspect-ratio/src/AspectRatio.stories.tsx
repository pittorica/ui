import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
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
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <Box style={{ width: '500px' }}>
      <AspectRatio
        {...args}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        <img
          src="https://images.unsplash.com/photo-1769251297393-8178b5988b08?q=80&w=1170&auto=format&fit=crop"
          alt="Landscape"
        />
      </AspectRatio>
    </Box>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <Box style={{ width: '300px' }}>
      <AspectRatio
        {...args}
        style={{ borderRadius: '8px', overflow: 'hidden' }}
      >
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400"
          alt="Avatar Large"
        />
      </AspectRatio>
    </Box>
  ),
};

export const VideoExample: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <Box style={{ width: '600px' }}>
      <AspectRatio
        {...args}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  ),
};

export const MixedGallery: Story = {
  render: () => (
    <Flex gap="4" wrap="wrap">
      <Box style={{ width: '200px' }}>
        <Text size="1" mb="1" color="slate">
          Cinema (21:9)
        </Text>
        <AspectRatio
          ratio={21 / 9}
          style={{ borderRadius: 4, overflow: 'hidden' }}
        >
          <Box
            style={{ background: 'var(--pittorica-indigo-9)', height: '100%' }}
          />
        </AspectRatio>
      </Box>
      <Box style={{ width: '200px' }}>
        <Text size="1" mb="1" color="slate">
          Portrait (9:16)
        </Text>
        <AspectRatio
          ratio={9 / 16}
          style={{ borderRadius: 4, overflow: 'hidden' }}
        >
          <Box
            style={{ background: 'var(--pittorica-teal-9)', height: '100%' }}
          />
        </AspectRatio>
      </Box>
      <Box style={{ width: '200px' }}>
        <Text size="1" mb="1" color="slate">
          Classic (4:3)
        </Text>
        <AspectRatio
          ratio={4 / 3}
          style={{ borderRadius: 4, overflow: 'hidden' }}
        >
          <Box
            style={{ background: 'var(--pittorica-orange-9)', height: '100%' }}
          />
        </AspectRatio>
      </Box>
    </Flex>
  ),
};
