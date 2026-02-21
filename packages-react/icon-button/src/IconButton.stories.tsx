import { IconPlus, IconSettings, IconTrash } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { IconButton } from './IconButton';

const meta = {
  title: 'Interactive/IconButton',
  args: { onClick: fn() },
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Flex gap="3">
      <IconButton variant="filled">
        <IconPlus size={20} />
      </IconButton>
      <IconButton variant="tonal">
        <IconPlus size={20} />
      </IconButton>
      <IconButton variant="outlined">
        <IconPlus size={20} />
      </IconButton>
      <IconButton variant="text">
        <IconPlus size={20} />
      </IconButton>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="3">
      <IconButton color="red">
        <IconTrash size={20} />
      </IconButton>
      <IconButton color="orange">
        <IconSettings size={20} />
      </IconButton>
      <IconButton color="teal">
        <IconPlus size={20} />
      </IconButton>
    </Flex>
  ),
};

export const Interactive: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const element =
      canvas.queryByRole('button') ||
      canvas.queryByRole('checkbox') ||
      canvas.queryByRole('radio');
    if (element) {
      await userEvent.click(element);
      if (args.onClick) {
        await expect(args.onClick).toHaveBeenCalled();
      }
    }
  },
};
