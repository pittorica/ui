import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Inset } from './Inset';

const meta: Meta<typeof Inset> = {
  title: 'Components/Inset',
  component: Inset,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        p="4"
        style={{
          background: 'var(--pittorica-slate-2)',
          borderRadius: 'var(--pittorica-radius-4)',
          border: '1px solid var(--pittorica-slate-4)',
          width: '300px',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Inset>;

export const ImageInset: Story = {
  args: {
    side: 'top',
    children: (
      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
        alt="Abstract Art"
      />
    ),
  },
  render: (args) => (
    <>
      <Inset {...args} />
      <Box pt="3">
        <Text weight="bold">Pittorica Project</Text>
        <Text size="2" color="slate">
          Modular and accessible design system.
        </Text>
      </Box>
    </>
  ),
};

export const FullInset: Story = {
  args: {
    side: 'all',
    style: {
      background: 'var(--pittorica-indigo-3)',
      padding: 'var(--pittorica-space-4)',
    },
    children: (
      <Text color="indigo">This content fills the entire card space.</Text>
    ),
  },
};

export const SideBySide: Story = {
  decorators: [],
  render: () => (
    <Flex gap="4">
      <Box
        p="4"
        style={{ border: '1px solid var(--pittorica-slate-4)', width: '200px' }}
      >
        <Inset
          side="x"
          style={{ background: 'var(--pittorica-orange-3)', height: '40px' }}
        />
        <Text mt="2">Horizontal Inset (X)</Text>
      </Box>
      <Box
        p="4"
        style={{ border: '1px solid var(--pittorica-slate-4)', width: '200px' }}
      >
        <Inset
          side="y"
          style={{ background: 'var(--pittorica-teal-3)', height: '100px' }}
        />
        <Text>Vertical Inset (Y)</Text>
      </Box>
    </Flex>
  ),
};
