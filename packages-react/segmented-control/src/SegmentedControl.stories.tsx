import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl.Root> = {
  title: 'Navigation/SegmentedControl',
  component: SegmentedControl.Root,
  tags: ['autodocs'],
};

export default meta;

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
