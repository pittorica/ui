import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource-variable/funnel-display';
import '@fontsource/space-mono';
import '@fontsource/alice';

import { useState } from 'react';

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from 'react-router';

import {
  IconBulb,
  IconBulbOff,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react';

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  IconButton,
  PittoricaTheme,
  Text,
} from '@pittorica/react';

import './app.css';

import type { Route } from './+types/root';

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon-96x96.png',
    sizes: '96x96',
  },
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'shortcut icon', href: '/favicon.ico' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
];

export const meta: Route.MetaFunction = () => [
  { title: 'Pittorica' },
  {
    name: 'description',
    content: 'Pittorica starter kit.',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // Logic: Initial state based on data-appearance or default 'dark'
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');
  const sourceColor = '#29294b';

  // Logic: Toggle function
  const toggleAppearance = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Pittorica" />
        <Meta />
        <Links />
      </head>
      <body
        className="pittorica-theme"
        data-appearance={appearance}
        data-source-color={sourceColor}
      >
        <PittoricaTheme appearance={appearance} sourceColor={sourceColor}>
          <Card as="header" translucent className="pittorica-app-bar">
            <Box className="pittorica-app-bar-content">
              <IconButton variant="text" color="inherit">
                <IconLayoutSidebarLeftExpand />
              </IconButton>

              <IconButton
                variant="text"
                color="inherit"
                onClick={toggleAppearance}
                aria-label="Toggle theme"
              >
                {appearance === 'dark' ? (
                  <IconBulbOff size={20} />
                ) : (
                  <IconBulb size={20} />
                )}
              </IconButton>
            </Box>
          </Card>

          <Box
            id="top"
            style={{ paddingTop: 'var(--pittorica-app-bar-height, 64px)' }}
          >
            {children}
          </Box>
        </PittoricaTheme>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const navigate = useNavigate();
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: '100vh', textAlign: 'center' }}
      p="6"
      gap="6"
    >
      <Box>
        <Heading
          size="9"
          style={{
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            lineHeight: 1,
            opacity: 0.2,
          }}
        >
          {message}
        </Heading>
        <Heading size="6">Something went wrong.</Heading>
      </Box>

      <Box style={{ maxWidth: '500px' }}>
        <Text>{details}</Text>
      </Box>

      <Flex gap="4">
        <Button variant="tonal" onClick={() => navigate(-1)}>
          Go back
        </Button>
        <Button variant="filled" onClick={() => navigate('/')}>
          Back to home
        </Button>
      </Flex>

      {stack && (
        <Box
          mt="8"
          p="4"
          style={{
            backgroundColor: 'var(--pittorica-slate-3)',
            borderRadius: 'var(--pittorica-radius-3)',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <Text
            as="pre"
            style={{
              textAlign: 'left',
              overflowX: 'auto',
              fontFamily: 'var(--pittorica-font-family-mono)',
            }}
          >
            <code>{stack}</code>
          </Text>
        </Box>
      )}
    </Flex>
  );
}
