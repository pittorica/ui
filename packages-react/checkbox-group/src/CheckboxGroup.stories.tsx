import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Composite/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
};

export default meta;

export const Vertical: StoryObj<typeof CheckboxGroup> = {
  render: (args) => (
    <CheckboxGroup {...args} defaultValue={['apple']}>
      <CheckboxGroup.Item value="apple" label="Apple" />
      <CheckboxGroup.Item value="orange" label="Orange" />
      <CheckboxGroup.Item value="banana" label="Banana" />
    </CheckboxGroup>
  ),
};

export const Horizontal: StoryObj<typeof CheckboxGroup> = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <CheckboxGroup {...args}>
      <CheckboxGroup.Item value="s" label="Small" />
      <CheckboxGroup.Item value="m" label="Medium" />
      <CheckboxGroup.Item value="l" label="Large" />
    </CheckboxGroup>
  ),
};
