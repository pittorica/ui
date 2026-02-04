# @pittorica/alert-dialog-react

The `AlertDialog` component is used to interrupt the user with a mandatory confirmation or action. It is built on top of the `Dialog` component.

## Installation

```bash
npm install @pittorica/alert-dialog-react
```

You will also need to install the core `pittorica` package which contains the CSS, and its dependencies.

```bash
npm install pittorica @pittorica/dialog-react @pittorica/button-react
```

## Usage

```jsx
import { useState } from 'react';
import { AlertDialog } from '@pittorica/alert-dialog-react';
import {
  DialogActions,
  DialogDescription,
  DialogTitle,
} from '@pittorica/dialog-react';
import { Button } from '@pittorica/button-react';
import 'pittorica/reset';
import 'pittorica/tokens';

function DeleteAccount() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="tonal" color="red" onClick={() => setOpen(true)}>
        Delete Account
      </Button>

      <AlertDialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle color="red">Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
        <DialogActions>
          <Button variant="text" color="slate" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="filled" color="red" onClick={() => setOpen(false)}>
            Yes, delete account
          </Button>
        </DialogActions>
      </AlertDialog>
    </>
  );
}
```

## API Reference

The `AlertDialog` component is a wrapper around the `Dialog` component. By default, it sets `closeOnOverlayClick` and `closeOnEsc` to `false` to enforce user interaction.

It accepts all the same props as the `Dialog` component. For a full list of available props, see the [`@pittorica/dialog-react` documentation](../dialog/README.md).

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
