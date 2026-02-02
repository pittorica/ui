import { IconInfoCircle, IconSettings, IconTrash } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { Button } from '@pittorica/button-react';
import { Flex } from '@pittorica/flex-react';
import { IconButton } from '@pittorica/icon-button-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button variant="outlined">Click to open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box p="1">
          <Text weight="bold">Popover Title</Text>
          <Text size="2" color="slate">
            This content is dynamically positioned using Floating UI.
          </Text>
        </Box>
      </PopoverContent>
    </Popover>
  ),
};

export const DestructiveAction: StoryObj = {
  render: () => (
    <Popover placement="top">
      <PopoverTrigger>
        <IconButton color="red" variant="tonal">
          <IconTrash size={20} />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent style={{ width: '200px' }}>
        <Flex direction="column" gap="3">
          <Text size="2" weight="medium">
            Are you sure you want to delete this item?
          </Text>
          <Flex gap="2">
            <Button variant="text" width="100%">
              Cancel
            </Button>
            <Button color="red" width="100%">
              Delete
            </Button>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  ),
};

export const SettingsMenu: StoryObj = {
  render: () => (
    <Popover placement="right">
      <PopoverTrigger>
        <IconButton variant="outlined">
          <IconSettings size={20} />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent style={{ width: '240px' }}>
        <Flex direction="column" gap="2">
          <Text weight="bold" mb="2">
            Display Settings
          </Text>
          <Flex align="center" gap="2" style={{ cursor: 'pointer' }}>
            <IconInfoCircle size={16} />
            <Text size="2">Show advanced options</Text>
          </Flex>
          <Box
            height="1px"
            style={{ background: 'var(--pittorica-slate-4)' }}
            mt="2"
            mb="2"
          />
          <Button>Save Changes</Button>
        </Flex>
      </PopoverContent>
    </Popover>
  ),
};
