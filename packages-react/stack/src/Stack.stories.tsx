import { Box } from '@pittorica/box-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the spacing between stack items.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Aligns items along the cross axis (horizontal for Stack).',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Aligns items along the main axis (vertical for Stack).',
    },
    wrap: {
      control: 'boolean', // Although Flex has wrap, Stack is typically vertical and doesn't wrap in the same way.
      description:
        'Controls whether flex items are forced onto a single line or can wrap onto multiple lines. (Inherited from Flex, but less common for Stack).',
    },
    // Direction is always 'column' for Stack, so no control for it.
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const StackItem = ({ children }: { children: React.ReactNode }) => (
  <Box
    p="3"
    style={{
      backgroundColor: 'var(--pittorica-green-3)',
      border: '1px solid var(--pittorica-green-7)',
      color: 'var(--pittorica-green-9)',
    }}
  >
    {children}
  </Box>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
    gap: '3',
    style: {
      backgroundColor: 'var(--pittorica-slate-2)',
      padding: 'var(--pittorica-space-4)',
    },
  },
};

export const AlignedCenter: Story = {
  args: {
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2 with more content</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
    gap: '4',
    align: 'center',
    style: {
      backgroundColor: 'var(--pittorica-blue-1)',
      padding: 'var(--pittorica-space-4)',
      width: '300px',
    },
  },
};

export const JustifyEnd: Story = {
  args: {
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
      </>
    ),
    gap: '2',
    justify: 'end',
    style: {
      backgroundColor: 'var(--pittorica-teal-1)',
      padding: 'var(--pittorica-space-4)',
      height: '200px',
    },
  },
};
