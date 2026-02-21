import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The component maps the as prop to the HTML tag.',
      defaultValue: 'div',
    },
    width: {
      control: 'text',
      description:
        'Sets the width of the box. Can be any valid CSS width value.',
    },
    height: {
      control: 'text',
      description:
        'Sets the height of the box. Can be any valid CSS height value.',
    },
    m: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the margin for all sides using a spacing token.',
    },
    mt: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the top margin using a spacing token.',
    },
    mr: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the right margin using a spacing token.',
    },
    mb: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the bottom margin using a spacing token.',
    },
    ml: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the left margin using a spacing token.',
    },
    p: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the padding for all sides using a spacing token.',
    },
    pt: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the top padding using a spacing token.',
    },
    pr: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the right padding using a spacing token.',
    },
    pb: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the bottom padding using a spacing token.',
    },
    pl: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Sets the left padding using a spacing token.',
    },
    display: {
      control: 'select',
      options: [
        'none',
        'inline',
        'block',
        'inline-block',
        'flex',
        'inline-flex',
        'grid',
      ],
      description: 'Sets the CSS display property.',
    },
    position: {
      control: 'select',
      options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
      description: 'Sets the CSS position property.',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Box component.',
    style: {
      border: '1px solid var(--pittorica-slate-7)',
      backgroundColor: 'var(--pittorica-slate-2)',
    },
    p: '4',
  },
};

export const CustomElement: Story = {
  args: {
    as: 'section',
    children: 'This is a Box as a section.',
    style: {
      border: '1px dashed var(--pittorica-indigo-7)',
      backgroundColor: 'var(--pittorica-indigo-1)',
    },
    p: '5',
  },
};

export const WithSpacing: Story = {
  args: {
    children: 'Box with margin and padding.',
    m: '3',
    p: '6',
    style: {
      border: '1px solid var(--pittorica-teal-7)',
      backgroundColor: 'var(--pittorica-teal-1)',
    },
  },
};

export const DisplayFlex: Story = {
  args: {
    display: 'flex',
    children: (
      <>
        <Box p="2" style={{ backgroundColor: 'var(--pittorica-red-3)' }}>
          Item 1
        </Box>
        <Box p="2" style={{ backgroundColor: 'var(--pittorica-blue-3)' }}>
          Item 2
        </Box>
      </>
    ),
    style: {
      gap: 'var(--pittorica-space-3)',
      border: '1px solid var(--pittorica-amber-7)',
      backgroundColor: 'var(--pittorica-amber-1)',
    },
    p: '4',
  },
};
