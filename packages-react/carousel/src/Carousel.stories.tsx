import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel.js';

const meta: Meta<typeof Carousel.Root> = {
  title: 'Components/Carousel',
  tags: ['autodocs'],
  component: Carousel.Root,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const mockImages = [
  {
    id: 10,
    title: 'Mountain Retreat',
    desc: 'Experience the serenity of the peaks.',
  },
  {
    id: 14,
    title: 'Urban Jungle',
    desc: 'Explore the hidden gems of the city.',
  },
  { id: 15, title: 'Ocean Breeze', desc: 'Calm waters and golden sunsets.' },
  {
    id: 16,
    title: 'Desert Sands',
    desc: 'Discover the dunes and starlit nights.',
  },
  { id: 19, title: 'Forest Path', desc: 'Green trails through ancient trees.' },
];

export const PreviewTwo: StoryObj<typeof Carousel.Root> = {
  args: {
    preview: 2,
  },
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        {mockImages.map((img) => (
          <Carousel.Item key={img.id}>
            <img
              src={`https://picsum.photos/id/${img.id}/800/1000`}
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

export const PreviewThree: StoryObj<typeof Carousel.Root> = {
  args: {
    preview: 3,
  },
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        {mockImages.map((img) => (
          <Carousel.Item key={img.id}>
            <img
              src={`https://picsum.photos/id/${img.id}/800/1000`}
              alt={img.title}
            />
            <Carousel.Description>{img.title}</Carousel.Description>
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </Box>
  ),
};

export const WithoutDescription: StoryObj<typeof Carousel.Root> = {
  args: {
    preview: 2,
  },
  render: (args) => (
    <Box p="4">
      <Carousel.Root {...args}>
        {mockImages.slice(0, 3).map((img) => (
          <Carousel.Item key={img.id}>
            <img
              src={`https://picsum.photos/id/${img.id}/800/1000`}
              alt={img.title}
            />
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </Box>
  ),
};
