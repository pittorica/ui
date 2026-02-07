import { IconWorld } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select.js';

const meta: Meta<typeof Select.Root> = {
  title: 'Interactive/Select',
  component: Select.Root,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: {
      control: 'select',
      options: ['indigo', 'crimson', 'teal', 'amber', 'red', 'slate'],
    },
  },
};

export default meta;

export const AllSizes: StoryObj = {
  render: () => (
    <Flex direction="column" gap="4" width="300px">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Select.Root key={s} size={s} label={`Size ${s.toUpperCase()}`}>
          <Select.Content>
            <option>Option</option>
          </Select.Content>
        </Select.Root>
      ))}
    </Flex>
  ),
};

export const WithStartDecorator: StoryObj = {
  render: (args) => (
    <Select.Root {...args} label="Region" color="teal">
      <Select.Slot>
        <IconWorld size={16} />
      </Select.Slot>
      <Select.Content>
        <option value="eu">Europe</option>
        <option value="na">North America</option>
      </Select.Content>
    </Select.Root>
  ),
};
