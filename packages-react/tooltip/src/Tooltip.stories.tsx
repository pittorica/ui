import { IconInfoCircle } from '@tabler/icons-react';

import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <Flex align="center" gap="2" p="8">
      <Text>Hover the icon</Text>
      <Tooltip content="This is extra information" side="top">
        <IconInfoCircle size={18} style={{ cursor: 'help' }} />
      </Tooltip>
    </Flex>
  ),
};
