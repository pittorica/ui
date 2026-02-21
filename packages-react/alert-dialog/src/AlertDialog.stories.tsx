import { useState } from 'react';

import { Button } from '@pittorica/button-react';
import { PittoricaTheme } from '@pittorica/theme-react';
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
  args: { onClick: fn() },
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
          Open Dark AlertDialog
        </Button>

        <AlertDialog {...args} open={open} onClose={handleClose}>
          <AlertDialogTitle>Dark Theme Alert</AlertDialogTitle>
          <AlertDialogDescription>
            This alert dialog demonstrates the dark theme appearance. The
            overlay and content adapt to the dark color scheme.
          </AlertDialogDescription>
          <AlertDialogActions>
            <Button variant="filled" onClick={handleClose}>
              Close
            </Button>
          </AlertDialogActions>
        </AlertDialog>
      </PittoricaTheme>
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
