import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Switch } from './Switch.js';

const meta = {
  title: 'Interactive/Switch',
  args: { onClick: fn() },
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Flex align="center" gap="3">
      <Switch id="s1" />
      <Text as="label" htmlFor="s1">
        Enable notifications
      </Text>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="4">
      <Switch defaultChecked color="red" />
      <Switch defaultChecked color="teal" />
      <Switch defaultChecked color="amber" />
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
