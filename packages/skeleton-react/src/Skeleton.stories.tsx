import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj = {
  render: () => (
    <Flex direction="column" gap="3" width="300px">
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rect" height="150px" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
    </Flex>
  ),
};

export const AvatarExample: StoryObj = {
  render: () => (
    <Flex align="center" gap="3">
      <Skeleton variant="circle" width="48px" height="48px" />
      <Box width="150px">
        <Skeleton variant="text" mb="1" />
        <Skeleton variant="text" width="60%" />
      </Box>
    </Flex>
  ),
};

export const WrappingChildren: StoryObj = {
  render: () => (
    <Box
      p="4"
      style={{
        border: '1px solid var(--pittorica-slate-4)',
        borderRadius: '8px',
      }}
    >
      <Skeleton loading={true}>
        <Text size="5" weight="bold">
          Loaded Title
        </Text>
        <Text color="slate">
          This description will be hidden by the skeleton.
        </Text>
      </Skeleton>
    </Box>
  ),
};
