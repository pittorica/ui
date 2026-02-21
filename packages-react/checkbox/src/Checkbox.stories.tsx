import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Interactive/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'red', 'teal', 'amber', 'slate'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onClick: fn(),
    label: 'Accept Terms and Conditions',
    color: 'indigo',
  },
};

export const Colors: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Checkbox label="Default Indigo" color="indigo" defaultChecked />
      <Checkbox label="Success Teal" color="teal" defaultChecked />
      <Checkbox label="Danger Red" color="red" defaultChecked />
      <Checkbox label="Warning Amber" color="amber" defaultChecked />
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
