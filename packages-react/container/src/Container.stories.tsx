import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description:
        'Determine the maximum width of the container. Corresponds to the design system breakpoints.',
    },
    fixed: {
      control: 'boolean',
      description:
        'If true, the container will adapt its max-width to the current breakpoint instead of being fluid.',
    },
    disableGutters: {
      control: 'boolean',
      description: 'Removes the default left and right padding.',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>This is a default container. Max width is 'lg'.</Text>,
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const SmallContainer: Story = {
  args: {
    children: <Text>This container has a max width of 'sm'.</Text>,
    maxWidth: 'sm',
    style: {
      backgroundColor: 'var(--pittorica-blue-1)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const FixedContainer: Story = {
  args: {
    children: <Text>This is a fixed container, adapting to breakpoints.</Text>,
    fixed: true,
    style: {
      backgroundColor: 'var(--pittorica-teal-1)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const NoGutters: Story = {
  args: {
    children: <Text>This container has no left/right padding (gutters).</Text>,
    disableGutters: true,
    style: {
      backgroundColor: 'var(--pittorica-amber-1)',
      paddingTop: 'var(--pittorica-space-4)',
      paddingBottom: 'var(--pittorica-space-4)',
    },
  },
};
