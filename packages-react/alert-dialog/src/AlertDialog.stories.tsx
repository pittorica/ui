import { useState } from 'react';

import { Button } from '@pittorica/button-react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogDescription,
  AlertDialogTitle,
} from './AlertDialog.js';

const meta = {
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
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

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
          <AlertDialogTitle color="red">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          <AlertDialogActions>
            <Button variant="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="filled" color="red" onClick={handleClose}>
              Yes, delete account
            </Button>
          </AlertDialogActions>
        </AlertDialog>
      </>
    );
  },
};

export const ForcedInteraction: Story = {
  args: {
    onClick: fn(),
    closeOnOverlayClick: false,
    closeOnEsc: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      args.onClose?.();
    };

    return (
      <>
        <Button variant="elevated" onClick={() => setOpen(true)}>
          Forced Interaction
        </Button>

        <AlertDialog {...args} open={open} onClose={handleClose}>
          <AlertDialogTitle>Critical Update</AlertDialogTitle>
          <AlertDialogDescription>
            Your session is about to expire. Please save your work before
            continuing. You cannot dismiss this by clicking outside.
          </AlertDialogDescription>
          <AlertDialogActions>
            <Button variant="filled" color="indigo" onClick={handleClose}>
              Understand
            </Button>
          </AlertDialogActions>
        </AlertDialog>
      </>
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
