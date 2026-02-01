import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineWorkspace } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  'apps/*/vite.config.ts',
  'packages/*/vite.config.ts',
  {
    test: {
      setupFiles: ['packages/*/vitest.setup.ts'],
      alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'react/jsx-runtime': path.resolve(
          __dirname,
          './node_modules/react/jsx-runtime'
        ),
      },
    },
  },
]);
