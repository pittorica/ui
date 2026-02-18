import {
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Stack,
  Text,
} from '@pittorica/react';

export default function Terms() {
  return (
    <Container maxWidth="md">
      <Section size="3">
        <Stack gap="6">
          <Flex direction="column" gap="2">
            <Heading size="8">Terms and Conditions</Heading>
            <Text color="slate" size="2">
              Last updated: February 18, 2026
            </Text>
          </Flex>

          <Stack gap="4">
            <Heading size="5">1. Acceptance of Terms</Heading>
            <Text>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">2. Use License</Heading>
            <Text>
              This project is open-source. Permission is granted to use the
              software and documentation as per the project's specific license
              (typically MIT or similar). You can find more details in our{' '}
              <Link href="https://github.com/dcdavidev/ui">
                GitHub repository
              </Link>
              .
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">3. Disclaimer</Heading>
            <Text>
              The materials on this website are provided on an 'as is' basis. We
              make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">4. Limitations</Heading>
            <Text>
              In no event shall we or our suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on this website.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">5. Revisions and Errata</Heading>
            <Text>
              The materials appearing on the website could include technical,
              typographical, or photographic errors. We do not warrant that any
              of the materials on its website are accurate, complete, or
              current. We may make changes to the materials contained on its
              website at any time without notice.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">6. Governing Law</Heading>
            <Text>
              Any claim relating to this website shall be governed by the laws
              of your jurisdiction without regard to its conflict of law
              provisions.
            </Text>
          </Stack>
        </Stack>
      </Section>
    </Container>
  );
}
