import { useState } from 'react';

import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Radio } from './Radio.js';

const meta = {
  title: 'Interactive/Radio',
  args: { onClick: fn() },
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Flex align="center" gap="2">
        <Radio id="r1" checked={checked} onCheckedChange={setChecked} />
        <Text as="label" htmlFor="r1" style={{ cursor: 'pointer' }}>
          Accept terms and conditions
        </Text>
      </Flex>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <Flex gap="4">
      <Radio checked color="indigo" />
      <Radio checked color="teal" />
      <Radio checked color="orange" />
      <Radio checked color="red" />
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex gap="4" align="center">
      <Flex direction="column" align="center" gap="1">
        <Radio checked={false} />
        <Text>Unchecked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Radio checked={true} />
        <Text>Checked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Radio disabled checked={false} />
        <Text>Disabled</Text>
      </Flex>
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
