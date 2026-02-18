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
  IconBrandGithub,
  IconBulb,
  IconBulbOff,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react';

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  PittoricaTheme,
  Stack,
  Text,
} from '@pittorica/react';

import 'vanilla-cookieconsent/dist/cookieconsent.css';
import './app.css';

import type { Route } from './+types/root';
import { CookieConsentInit } from './components/CookieConsentInit';
import { Sidebar } from './components/Sidebar';
import { consentConfig } from './configs/cookie-consent';

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
  { property: 'og:title', content: 'Pittorica' },
  { property: 'og:description', content: 'Pittorica starter kit.' },
  { property: 'og:image', content: '/banner.png' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Pittorica' },
  { name: 'twitter:description', content: 'Pittorica starter kit.' },
  { name: 'twitter:image', content: '/banner.png' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sourceColor = '#29294b';

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
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <Card as="header" translucent className="pittorica-app-bar">
            <Box className="pittorica-app-bar-content">
              <IconButton
                variant="text"
                color="inherit"
                onClick={() => setIsSidebarOpen(true)}
              >
                <IconLayoutSidebarLeftExpand />
              </IconButton>

              <Flex gap="2">
                <IconButton
                  variant="text"
                  color="inherit"
                  as="a"
                  href="https://dcdavidev.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="dcdavidev.me"
                >
                  <Avatar size="1" src="/dcdavidev.jpg" fallback="DC" />
                </IconButton>

                <IconButton
                  variant="text"
                  color="inherit"
                  as="a"
                  href="https://github.com/pittorica/ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <IconBrandGithub size={20} />
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
              </Flex>
            </Box>
          </Card>

          <Box
            id="top"
            style={{
              paddingTop: 'var(--pittorica-app-bar-height, 64px)',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box style={{ flexGrow: 1 }}>{children}</Box>

            <Box as="footer" pt="9" pb="6" mt="9">
              <Container maxWidth="lg">
                <Flex direction="column" gap="6">
                  <Grid columns={{ initial: '1', sm: '2' }} gap="6">
                    <Stack gap="4">
                      <Flex align="center" gap="3">
                        <Avatar
                          size="3"
                          src="/assets/logo/logo.png"
                          fallback="P"
                        />
                        <Heading size="6">Pittorica</Heading>
                      </Flex>
                      <Text
                        color="slate"
                        size="2"
                        style={{ maxWidth: '300px' }}
                      >
                        A painterly, CSS-first UI framework that brings elegant,
                        lightweight structure to modern interfaces.
                      </Text>
                    </Stack>

                    <Flex
                      justify={{ initial: 'start', sm: 'end' }}
                      align="start"
                      gap="8"
                    >
                      <Stack gap="3">
                        <Heading size="3">Legal</Heading>
                        <Link href="/privacy" size="2" color="slate">
                          Privacy Policy
                        </Link>
                        <Link href="/terms" size="2" color="slate">
                          Terms & Conditions
                        </Link>
                      </Stack>
                      <Stack gap="3">
                        <Heading size="3">Community</Heading>
                        <Link
                          href="https://github.com/pittorica/ui"
                          size="2"
                          color="slate"
                        >
                          <Flex align="center" gap="1">
                            <IconBrandGithub size={16} />
                            GitHub
                          </Flex>
                        </Link>
                      </Stack>
                    </Flex>
                  </Grid>

                  <Divider />

                  <Flex
                    direction={{ initial: 'column', sm: 'row' }}
                    justify="between"
                    align={{ initial: 'start', sm: 'center' }}
                    gap="4"
                  >
                    <Text size="1" color="slate">
                      © {new Date().getFullYear()} Pittorica UI Framework.
                    </Text>
                    <Text size="1" color="slate">
                      Built with passion by{' '}
                      <Link href="https:/dcdavidev.me" size="1" weight="medium">
                        dcdavidev
                      </Link>
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </Box>
          </Box>
          <CookieConsentInit config={consentConfig} />
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
