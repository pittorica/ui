import { Box } from '@pittorica/box-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs.Root> = {
  title: 'Navigation/Tabs',
  component: Tabs.Root,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <Box p="4">
          <Text weight="bold">Account Details</Text>
          <Text color="slate">Manage your profile information here.</Text>
        </Box>
      </Tabs.Content>

      <Tabs.Content value="password">
        <Box p="4">
          <Text weight="bold">Password</Text>
          <Text color="slate">Change your password and security settings.</Text>
        </Box>
      </Tabs.Content>

      <Tabs.Content value="settings">
        <Box p="4">
          <Text weight="bold">General Settings</Text>
          <Text color="slate">Customize your experience.</Text>
        </Box>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const Colored: StoryObj = {
  args: {
    color: 'crimson',
    defaultValue: '1',
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List>
        <Tabs.Trigger value="1">Red Tab One</Tabs.Trigger>
        <Tabs.Trigger value="2">Red Tab Two</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="1">First Content Panel</Tabs.Content>
      <Tabs.Content value="2">Second Content Panel</Tabs.Content>
    </Tabs.Root>
  ),
};
