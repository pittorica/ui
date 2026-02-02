import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './RadioGroup.js';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup defaultValue="compact">
      <Flex direction="column" gap="3">
        <Flex align="center" gap="2">
          <RadioGroupItem value="default" id="r1" />
          <Text as="label" htmlFor="r1" size="2">
            Default view
          </Text>
        </Flex>
        <Flex align="center" gap="2">
          <RadioGroupItem value="compact" id="r2" />
          <Text as="label" htmlFor="r2" size="2">
            Compact view
          </Text>
        </Flex>
        <Flex align="center" gap="2">
          <RadioGroupItem value="comfortable" id="r3" />
          <Text as="label" htmlFor="r3" size="2">
            Comfortable view
          </Text>
        </Flex>
      </Flex>
    </RadioGroup>
  ),
};

export const Colored: StoryObj<typeof RadioGroup> = {
  args: {
    color: 'crimson',
    defaultValue: '2',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Flex gap="4">
        <Flex align="center" gap="2">
          <RadioGroupItem value="1" id="c1" />
          <Text as="label" htmlFor="c1" size="2">
            Option 1
          </Text>
        </Flex>
        <Flex align="center" gap="2">
          <RadioGroupItem value="2" id="c2" />
          <Text as="label" htmlFor="c2" size="2">
            Option 2
          </Text>
        </Flex>
      </Flex>
    </RadioGroup>
  ),
};

export const DisabledGroup: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup disabled defaultValue="1">
      <Flex direction="column" gap="2">
        <Flex align="center" gap="2">
          <RadioGroupItem value="1" id="d1" />
          <Text as="label" htmlFor="d1" size="2">
            Disabled checked
          </Text>
        </Flex>
        <Flex align="center" gap="2">
          <RadioGroupItem value="2" id="d2" />
          <Text as="label" htmlFor="d2" size="2">
            Disabled unchecked
          </Text>
        </Flex>
      </Flex>
    </RadioGroup>
  ),
};
