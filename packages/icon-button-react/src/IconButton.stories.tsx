import { IconPlus, IconSettings, IconTrash } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;

export const Variants: StoryObj<typeof IconButton> = {
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

export const Colors: StoryObj<typeof IconButton> = {
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
