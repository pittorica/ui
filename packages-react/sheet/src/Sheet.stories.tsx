import { useState } from 'react';

import { Button } from '@pittorica/button-react';
import { Text } from '@pittorica/text-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sheet } from './Sheet';

const meta = {
  title: 'Feedback/Sheet',
  component: Sheet,
} satisfies Meta<typeof Sheet>;

export default meta;

export const SideExample: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Side Sheet</Button>
        <Sheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Filters"
          side="right"
        >
          <Text color="slate">
            Side sheets show secondary content on desktop.
          </Text>
        </Sheet>
      </>
    );
  },
};

export const BottomExample: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
        <Sheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Actions"
          side="bottom"
        >
          <Text color="slate">
            Bottom sheets are ideal for mobile interactions.
          </Text>
        </Sheet>
      </>
    );
  },
};
