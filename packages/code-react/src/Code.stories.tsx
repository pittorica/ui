import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: ['typescript', 'javascript', 'html', 'css', 'json', 'bash'],
      description: 'Programming language for syntax highlighting.',
    },
    showLineNumbers: {
      control: 'boolean',
      description: 'If true, line numbers will be displayed in code blocks.',
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Theme for syntax highlighting.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const InlineCode: Story = {
  args: {
    children: 'const greeting = "Hello, World!";',
  },
};

export const CodeBlock: Story = {
  args: {
    children: `function greet(name: string) {
  console.log("Hello, ${name}!");
}

greet("Storybook");`,
    language: 'typescript',
    showLineNumbers: true,
  },
};

export const LightMode: Story = {
  args: {
    children: `const isLight = true;
if (isLight) {
  console.log("It's bright in here!");
}`,
    language: 'typescript',
    theme: 'light',
    showLineNumbers: true,
  },
};

export const HtmlCode: Story = {
  args: {
    children: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Hello HTML!</h1>
</body>
</html>`,
    language: 'html',
    showLineNumbers: true,
  },
};

export const CssCode: Story = {
  args: {
    children: `body {
  font-family: sans-serif;
  color: #333;
}`,
    language: 'css',
    showLineNumbers: true,
  },
};
