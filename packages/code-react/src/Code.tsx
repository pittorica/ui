import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

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
}

/**
 * Code component with syntax highlighting support.
 * Renders an inline <code> tag for single lines, or a SyntaxHighlighter block for multi-line code.
 */
export const Code = ({
  children,
  language = 'typescript',
  showLineNumbers = false,
  className,
  style,
  ...props
}: CodeProps) => {
  const content = String(children);
  const isInline = !content.includes('\n');

  if (isInline) {
    return (
      <Text
        as="code"
        className={clsx('pittorica-code-inline', className)}
        style={{
          backgroundColor: 'var(--pittorica-slate-3)',
          padding: '0.2em 0.4em',
          borderRadius: 'var(--pittorica-radius-1)',
          fontFamily: 'var(--pittorica-font-mono)',
          fontSize: '0.85em',
          ...style,
        }}
        {...props}
      >
        {content}
      </Text>
    );
  }

  return (
    <div className={clsx('pittorica-code-block', className)}>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
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
