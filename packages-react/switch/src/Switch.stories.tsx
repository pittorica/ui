import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch.js';

const meta: Meta<typeof Switch> = {
  title: 'Interactive/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof Switch> = {
  render: () => (
    <Flex align="center" gap="3">
      <Switch id="s1" />
      <Text as="label" htmlFor="s1">
        Enable notifications
      </Text>
    </Flex>
  ),
};

export const Colors: StoryObj<typeof Switch> = {
  render: () => (
    <Flex gap="4">
      <Switch defaultChecked color="red" />
      <Switch defaultChecked color="teal" />
      <Switch defaultChecked color="amber" />
    </Flex>
  ),
};
