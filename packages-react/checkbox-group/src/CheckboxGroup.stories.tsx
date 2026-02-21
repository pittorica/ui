import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

const meta = {
  title: 'Composite/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: (args) => (
    <CheckboxGroup {...args} defaultValue={['apple']}>
      <CheckboxGroup.Item value="apple" label="Apple" />
      <CheckboxGroup.Item value="orange" label="Orange" />
      <CheckboxGroup.Item value="banana" label="Banana" />
    </CheckboxGroup>
  ),
};

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <CheckboxGroup {...args}>
      <CheckboxGroup.Item value="s" label="Small" />
      <CheckboxGroup.Item value="m" label="Medium" />
      <CheckboxGroup.Item value="l" label="Large" />
    </CheckboxGroup>
  ),
};
