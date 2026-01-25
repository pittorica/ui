import type React from 'react';

import { Highlight, themes } from 'prism-react-renderer';
import { Box, type BoxProps } from '@pittorica/box-react';

type ThemeKeys = keyof typeof themes;

export interface CodeBlockProps extends Omit<
  BoxProps & React.HTMLAttributes<HTMLPreElement>,
  'as' | 'children'
> {
  language?: string;
  children?: string;
  theme?: ThemeKeys;
}

export const Codeblock: React.FC<CodeBlockProps> = ({
  language = 'plaintext',
  theme = 'github',
  children,
  ...props
}) => {
  const currentTheme = themes[theme];

  return (
    <Box as="pre" {...props}>
      <Highlight
        theme={currentTheme}
        code={children as string}
        language={language as string}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => {
              const lineKey = line.map((token) => token.content).join('') + i;
              return (
                <div key={lineKey} {...getLineProps({ line, key: lineKey })}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '2em',
                      userSelect: 'none',
                      opacity: 0.5,
                      textAlign: 'right',
                      paddingRight: '1em',
                    }}
                  >
                    {i + 1}
                  </span>

                  {line.map((token, key) => {
                    const tokenKey = `${token.content}-${token.types?.join('-') ?? ''}-${key}`;
                    return (
                      <span key={tokenKey} {...getTokenProps({ token, key })} />
                    );
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};
