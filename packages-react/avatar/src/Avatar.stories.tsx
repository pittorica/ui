import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Media/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'The size of the avatar',
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
      description: 'The border radius of the avatar',
    },
    src: {
      control: 'text',
      description: 'The image source URL',
    },
    fallback: {
      control: 'text',
      description: 'Content to render when image is missing or fails',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    // eslint-disable-next-line @cspell/spellchecker
    alt: 'Colm Tuite',
    fallback: 'CT',
  },
};

export const WithFallbackInitials: Story = {
  args: {
    alt: 'Pedro Duarte',
    fallback: 'PD',
  },
};

export const AutomaticFallback: Story = {
  args: {
    alt: 'John Doe',
  },
  parameters: {
    docs: {
      description: {
        story:
          'If no fallback is provided, the first letter of the alt text is used.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar {...args} size="1" fallback="1" />
      <Avatar {...args} size="3" fallback="3" />
      <Avatar {...args} size="5" fallback="5" />
      <Avatar {...args} size="7" fallback="7" />
      <Avatar {...args} size="9" fallback="9" />
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar {...args} radius="none" fallback="Sq" />
      <Avatar {...args} radius="small" fallback="Sm" />
      <Avatar {...args} radius="medium" fallback="Md" />
      <Avatar {...args} radius="large" fallback="Lg" />
      <Avatar {...args} radius="full" fallback="Fu" />
    </div>
  ),
};

export const BrokenImage: Story = {
  args: {
    src: 'https://broken.link/image.jpg',
    alt: 'Broken Image',
    fallback: 'BI',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates behavior when the image source fails to load.',
      },
    },
  },
};
