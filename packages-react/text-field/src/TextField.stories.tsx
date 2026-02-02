import { IconLock, IconMail, IconSearch } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField.Root> = {
  title: 'Components/TextField',
  component: TextField.Root,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <TextField.Root label="Name" helperText="Enter your full legal name.">
      <TextField.Input placeholder="e.g. Danilo C." />
    </TextField.Root>
  ),
};

export const WithDecorators: StoryObj = {
  render: () => (
    <Flex direction="column" gap="4" width="350px">
      <TextField.Root label="Email">
        <TextField.Slot>
          <IconMail size={16} />
        </TextField.Slot>
        <TextField.Input placeholder="mail@example.com" type="email" />
      </TextField.Root>

      <TextField.Root
        label="Password"
        error
        helperText="Password must be 8 characters long."
      >
        <TextField.Slot>
          <IconLock size={16} />
        </TextField.Slot>
        <TextField.Input type="password" defaultValue="12345" />
      </TextField.Root>
    </Flex>
  ),
};

export const Search: StoryObj = {
  render: () => (
    <TextField.Root color="teal">
      <TextField.Slot>
        <IconSearch size={16} />
      </TextField.Slot>
      <TextField.Input placeholder="Search components..." />
    </TextField.Root>
  ),
};
