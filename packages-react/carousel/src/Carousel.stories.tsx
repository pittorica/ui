import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel.js';

/**
 * MD3 Hero Carousel with portrait-first layout.
 * Features an entrance "slam" animation and dynamic width masking.
 */
const meta: Meta<typeof Carousel.Root> = {
  title: 'Media/Carousel',
  tags: ['autodocs'],
  component: Carousel.Root,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Mock data using portrait-oriented images (800x1200)
const mockImages = [
  {
    id: 10,
    title: 'Mountain Retreat',
    desc: 'Experience the serenity of the peaks.',
  },
  { id: 14, title: 'Urban Jungle', desc: 'Explore the city hidden gems.' },
  { id: 15, title: 'Ocean Breeze', desc: 'Calm waters and golden sunsets.' },
  { id: 16, title: 'Desert Sands', desc: 'Discover the dunes.' },
  { id: 19, title: 'Forest Path', desc: 'Green trails through ancient trees.' },
];

export const Default: StoryObj<typeof Carousel.Root> = {
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        {mockImages.map((img) => (
          <Carousel.Item key={img.id}>
            <img
              src={`https://picsum.photos/id/${img.id}/800/1200`}
              alt={img.title}
            />
            <Carousel.Description>
              {img.title}
              <br />
              <span
                style={{
                  fontSize: '0.8em',
                  opacity: 0.8,
                  fontWeight: 'normal',
                }}
              >
                {img.desc}
              </span>
            </Carousel.Description>
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </Box>
  ),
};

/**
 * Demonstrates the entrance animation where the viewport "slams" from right to left.
 * To re-trigger, refresh the Storybook canvas.
 */
export const EntranceAnimation: StoryObj<typeof Carousel.Root> = {
  ...Default,
  parameters: {
    docs: {
      description: {
        story: 'The viewport features a heavy ease-out entrance from x: 1000.',
      },
    },
  },
};

/**
 * Shows how items are clipped (masking effect) starting from the third element.
 */
export const DynamicMasking: StoryObj<typeof Carousel.Root> = {
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        {mockImages.slice(0, 4).map((img) => (
          <Carousel.Item key={img.id}>
            <img
              src={`https://picsum.photos/id/${img.id}/800/1200`}
              alt={img.title}
            />
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </Box>
  ),
};
