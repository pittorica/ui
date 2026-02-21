import type { Meta, StoryObj } from '@storybook/react';

import { Quote } from './Quote';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typography/Quote',
  component: Quote,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Quote>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'This is a short inline quotation.',
  },
};
