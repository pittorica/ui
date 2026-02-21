import { defineConfig, globalIgnores } from 'eslint/config';
import spellbookx from 'eslint-plugin-spellbookx';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '.github/instructions/**',
    '**/*:Zone.Identifier',
    '**/Thumbs.db',
    '**/.react-router/**',
    '**/*.hbs',
    'CHANGELOG.md',
    '+++/.storybook/**',
  ]),
  spellbookx.configs.recommended,
]);
