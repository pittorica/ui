import { IconBuildingStore, IconPackage, IconTruck } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioCard } from './RadioCard.js';

const meta: Meta<typeof RadioCard.Root> = {
  title: 'Components/RadioCard',
  component: RadioCard.Root,
  tags: ['autodocs'],
};

export default meta;

export const DeliveryOptions: StoryObj = {
  render: () => (
    <RadioCard.Root defaultValue="standard" columns="3" color="indigo">
      <RadioCard.Item value="pickup">
        <Flex direction="column" gap="1" align="center">
          <IconBuildingStore size={24} />
          <Text weight="bold">Store Pickup</Text>
          <Text size="1" color="slate">
            Free
          </Text>
        </Flex>
      </RadioCard.Item>

      <RadioCard.Item value="standard">
        <Flex direction="column" gap="1" align="center">
          <IconPackage size={24} />
          <Text weight="bold">Standard</Text>
          <Text size="1" color="slate">
            €4.90
          </Text>
        </Flex>
      </RadioCard.Item>

      <RadioCard.Item value="express">
        <Flex direction="column" gap="1" align="center">
          <IconTruck size={24} />
          <Text weight="bold">Express</Text>
          <Text size="1" color="slate">
            €12.50
          </Text>
        </Flex>
      </RadioCard.Item>
    </RadioCard.Root>
  ),
};

export const PlanSelection: StoryObj = {
  render: () => (
    <RadioCard.Root
      defaultValue="pro"
      columns="1"
      color="teal"
      style={{ maxWidth: '400px' }}
    >
      <RadioCard.Item value="free">
        <Flex justify="between" align="center" width="100%">
          <Box>
            <Text weight="bold">Free Plan</Text>
            <Text size="2" color="slate">
              Up to 3 projects
            </Text>
          </Box>
          <Text weight="bold">€0</Text>
        </Flex>
      </RadioCard.Item>

      <RadioCard.Item value="pro">
        <Flex justify="between" align="center" width="100%">
          <Box>
            <Text weight="bold">Pro Plan</Text>
            <Text size="2" color="slate">
              Unlimited projects & priority support
            </Text>
          </Box>
          <Text weight="bold">€19</Text>
        </Flex>
      </RadioCard.Item>
    </RadioCard.Root>
  ),
};
