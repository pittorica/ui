import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneLight,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import { clsx } from 'clsx';

import { IconClipboard, IconClipboardCheckFilled } from '@tabler/icons-react';

import { type TextProps } from '@pittorica/text-react';

export interface CodeProps extends TextProps {
  /**
   * Programming language for syntax highlighting.
   * @default 'typescript'
   */
  language?: string;
  /**
   * If true, line numbers will be displayed in code blocks.
   */
  showLineNumbers?: boolean;
  /**
   * Theme for syntax highlighting.
   * @default 'dark'
   */
  theme?: 'dark' | 'light';
}

/**
 * Code component with syntax highlighting support.
 * Renders an inline <code> tag for single lines, or a SyntaxHighlighter block for multi-line code.
 */
export const Code = ({
  children,
  language = 'typescript',
  showLineNumbers = false,
  theme = 'dark',
  className,
  style,
  ...props
}: CodeProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const content = String(children);
  const isInline = !content.includes('\n');
  const syntaxTheme = theme === 'light' ? oneLight : vscDarkPlus;

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  if (isInline) {
    return (
      <SyntaxHighlighter
        language={language}
        style={syntaxTheme}
        showLineNumbers={false}
        PreTag="span"
        className={clsx('pittorica-code-inline', className)}
        customStyle={{
          padding: '0.2em 0.4em',
          borderRadius: 'var(--pittorica-radius-1)',
          fontFamily: 'var(--pittorica-font-mono)',
          ...style,
        }}
        {...props}
      >
        {content}
      </SyntaxHighlighter>
    );
  }

  return (
    <div
      className={clsx('pittorica-code-block', className)}
      style={{ position: 'relative' }}
    >
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 'var(--pittorica-space-2)',
          right: 'var(--pittorica-space-2)',
          padding: 'var(--pittorica-space-1) var(--pittorica-space-2)',
          fontSize: '0.75rem',
          borderRadius: 'var(--pittorica-radius-1)',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: theme === 'light' ? '#333' : '#fff',
          cursor: 'pointer',
        }}
      >
        {isCopied ? <IconClipboardCheckFilled /> : <IconClipboard />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={syntaxTheme}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 'var(--pittorica-space-4) 0',
          borderRadius: 'var(--pittorica-radius-2)',
          fontSize: 'var(--pittorica-font-size-2)',
          ...style,
        }}
      >
        {content.replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};
