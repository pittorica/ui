import { Flex } from '@pittorica/flex-react';
import { Heading } from '@pittorica/heading-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxCard } from './CheckboxCard';

const meta = {
  title: 'Composite/CheckboxCard',
  component: CheckboxCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  render: (args) => (
    <CheckboxCard {...args} orientation="horizontal" defaultValue={['1']}>
      <CheckboxCard.Item value="1" style={{ width: '200px' }}>
        <Flex direction="column" gap="1">
          <Heading size="2">Basic</Heading>
          <Text color="slate">Free forever for individuals</Text>
        </Flex>
      </CheckboxCard.Item>
      <CheckboxCard.Item value="2" style={{ width: '200px' }}>
        <Flex direction="column" gap="1">
          <Heading size="2">Pro</Heading>
          <Text color="slate">$12/month per user</Text>
        </Flex>
      </CheckboxCard.Item>
    </CheckboxCard>
  ),
};

export const Translucent: Story = {
  render: (args) => (
    <Flex
      p="6"
      style={{ background: 'var(--pittorica-indigo-9)', borderRadius: '8px' }}
    >
      <CheckboxCard {...args} translucent color="indigo">
        <CheckboxCard.Item value="1" translucent style={{ width: '250px' }}>
          <Text weight="bold">Glass Selection</Text>
        </CheckboxCard.Item>
      </CheckboxCard>
    </Flex>
  ),
};
