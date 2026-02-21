import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl.Root> = {
  title: 'Navigation/SegmentedControl',
  args: {
    onClick: fn(),
  },
  component: SegmentedControl.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: StoryObj = {
  render: () => (
    <SegmentedControl.Root defaultValue="preview">
      <SegmentedControl.Item value="preview">Preview</SegmentedControl.Item>
      <SegmentedControl.Item value="code">Code</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const ThemeSwitch: StoryObj = {
  render: () => (
    <SegmentedControl.Root defaultValue="system" color="orange">
      <SegmentedControl.Item value="light">
        <IconSun size={16} />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="dark">
        <IconMoon size={16} />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="system">
        <IconDeviceDesktop size={16} />
      </SegmentedControl.Item>
    </SegmentedControl.Root>
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
