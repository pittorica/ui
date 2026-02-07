import { useState } from 'react';

import { Button } from '@pittorica/button-react';
import {
  DialogActions,
  DialogDescription,
  DialogTitle,
} from '@pittorica/dialog-react';
import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog } from './AlertDialog.js';

const meta: Meta<typeof AlertDialog> = {
  title: 'Feedback/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'closed' },
    closeOnOverlayClick: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Destructive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <>
        <Button variant="tonal" color="red" onClick={() => setOpen(true)}>
          Delete Account
        </Button>

        <AlertDialog {...args} open={open} onClose={handleClose}>
          <DialogTitle color="red">Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <DialogActions>
            <Button variant="text" color="slate" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="filled" color="red" onClick={handleClose}>
              Yes, delete account
            </Button>
          </DialogActions>
        </AlertDialog>
      </>
    );
  },
};

export const ForcedInteraction: Story = {
  args: {
    closeOnOverlayClick: false,
    closeOnEsc: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="elevated" onClick={() => setOpen(true)}>
          Forced Interaction
        </Button>

        <AlertDialog {...args} open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Critical Update</DialogTitle>
          <DialogDescription>
            Your session is about to expire. Please save your work before
            continuing. You cannot dismiss this by clicking outside.
          </DialogDescription>
          <DialogActions>
            <Button
              variant="filled"
              color="indigo"
              onClick={() => setOpen(false)}
            >
              Understand
            </Button>
          </DialogActions>
        </AlertDialog>
      </>
    );
  },
};
