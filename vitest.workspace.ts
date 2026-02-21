import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineWorkspace } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  'apps/*/vite.config.ts',
  'packages/*/vite.config.ts',
  'packages-react/*/vite.config.ts',
  {
    plugins: [
      storybookTest({
        configDir: path.join(__dirname, '.storybook'),
        renderer: 'react',
      }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
      },
      setupFiles: ['@storybook/addon-vitest/internal/setup-file'],
      exclude: ['**/node_modules/**', '**/dist/**'],
    },
  },
]);
