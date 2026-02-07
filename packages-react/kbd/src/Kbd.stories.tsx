import type { Meta, StoryObj } from '@storybook/react';

import { Kbd } from './Kbd';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Kbd> = {
  title: 'Typography/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Kbd>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: '⌘ + K',
  },
};

export const SingleKey: Story = {
  args: {
    children: 'shift',
  },
};

export const MultipleKeys: Story = {
  args: {
    children: (
      <>
        <Kbd>ctrl</Kbd> + <Kbd>alt</Kbd> + <Kbd>del</Kbd>
      </>
    ),
  },
};
