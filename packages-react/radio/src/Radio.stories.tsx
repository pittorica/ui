import { useState } from 'react';

import { Flex } from '@pittorica/flex-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio.js';

const meta: Meta<typeof Radio> = {
  title: 'Interactive/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof Radio> = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Flex align="center" gap="2">
        <Radio id="r1" checked={checked} onCheckedChange={setChecked} />
        <Text as="label" htmlFor="r1" style={{ cursor: 'pointer' }}>
          Accept terms and conditions
        </Text>
      </Flex>
    );
  },
};

export const Colors: StoryObj<typeof Radio> = {
  render: () => (
    <Flex gap="4">
      <Radio checked color="indigo" />
      <Radio checked color="teal" />
      <Radio checked color="orange" />
      <Radio checked color="red" />
    </Flex>
  ),
};

export const States: StoryObj<typeof Radio> = {
  render: () => (
    <Flex gap="4" align="center">
      <Flex direction="column" align="center" gap="1">
        <Radio checked={false} />
        <Text>Unchecked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Radio checked={true} />
        <Text>Checked</Text>
      </Flex>
      <Flex direction="column" align="center" gap="1">
        <Radio disabled checked={false} />
        <Text>Disabled</Text>
      </Flex>
    </Flex>
  ),
};
