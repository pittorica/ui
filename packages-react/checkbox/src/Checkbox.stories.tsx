import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
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
};

export default meta;

export const Basic: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Accept Terms and Conditions',
    color: 'indigo',
  },
};

export const Colors: StoryObj<typeof Checkbox> = {
  render: () => (
    <Flex direction="column" gap="3">
      <Checkbox label="Default Indigo" color="indigo" defaultChecked />
      <Checkbox label="Success Teal" color="teal" defaultChecked />
      <Checkbox label="Danger Red" color="red" defaultChecked />
      <Checkbox label="Warning Amber" color="amber" defaultChecked />
    </Flex>
  ),
};
