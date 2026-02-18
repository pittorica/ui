import {
  Container,
  Flex,
  Heading,
  Section,
  Stack,
  Text,
} from '@pittorica/react';

export default function Privacy() {
  return (
    <Container maxWidth="md">
      <Section size="3">
        <Stack gap="6">
          <Flex direction="column" gap="2">
            <Heading size="8">Privacy Policy</Heading>
            <Text color="slate" size="2">
              Last updated: February 18, 2026
            </Text>
          </Flex>

          <Stack gap="4">
            <Heading size="5">1. Introduction</Heading>
            <Text>
              This Privacy Policy explains how we handle your information. We
              value your privacy and aim to be as transparent as possible.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">2. Data Collection</Heading>
            <Text>
              We do not collect any personal data. This website is designed to
              be used without providing any personal information, and we do not
              use any third-party tracking or analytics services.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">3. Cookie Policy</Heading>
            <Text>
              We only use cookies that are strictly necessary for the
              functioning of the website or to remember your preferences (such
              as your cookie consent choices).
            </Text>
            <Stack gap="2" pl="4">
              <Text>
                • <strong>Strictly Necessary Cookies:</strong> These are
                essential for you to browse the website and use its features.
              </Text>
              <Text>
                • <strong>Functionality Cookies:</strong> These allow the
                website to remember choices you make (like your preferred theme
                or language).
              </Text>
            </Stack>
          </Stack>

          <Stack gap="4">
            <Heading size="5">4. Third-Party Services</Heading>
            <Text>
              We do not share your data with any third parties. There are no
              external scripts or trackers embedded in this application that
              collect information about your browsing behavior.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading size="5">5. Contact</Heading>
            <Text>
              If you have any questions about this policy, please feel free to
              reach out.
            </Text>
          </Stack>
        </Stack>
      </Section>
    </Container>
  );
}
