import { useState } from 'react';

import { Button } from '@pittorica/button-react';
import { PittoricaTheme } from '@pittorica/theme-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import {
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from './Dialog';

const meta = {
  title: 'Feedback/Dialog',
  args: { onClick: fn() },
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the dialog is rendered.',
    },
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <>
        <Button variant="elevated" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>

        <Dialog {...args} open={open} onClose={handleClose}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog content. It provides context for
            the user regarding the action they are about to take.
          </DialogDescription>
          <DialogActions>
            <Button variant="text" color="slate" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="filled" onClick={handleClose}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const Dark: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <PittoricaTheme
        appearance="dark"
        style={{
          padding: '2rem',
          background: 'var(--pittorica-surface-0)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="tonal" onClick={() => setOpen(true)}>
          Open Dark Dialog
        </Button>

        <Dialog {...args} open={open} onClose={handleClose}>
          <DialogTitle>Dark Theme Dialog</DialogTitle>
          <DialogDescription>
            This dialog demonstrates the dark theme appearance. The overlay and
            content adapt to the dark color scheme.
          </DialogDescription>
          <DialogActions>
            <Button variant="filled" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </PittoricaTheme>
    );
  },
};

export const Interactive: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const element =
      canvas.queryByRole('button') ||
      canvas.queryByRole('checkbox') ||
      canvas.queryByRole('radio');
    if (element) {
      await userEvent.click(element);
      if (args.onClick) {
        await expect(args.onClick).toHaveBeenCalled();
      }
    }
  },
};
