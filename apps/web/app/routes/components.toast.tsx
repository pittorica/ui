import {
  Box,
  Button,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Text,
  toast,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { toast, ToastProvider, Button } from '@pittorica/react';

export const Example = () => {
  return (
    <>
      {/* Ensure ToastProvider is mounted at the root of your app */}
      <ToastProvider />
      
      <Button
        onClick={() =>
          toast({
            title: 'Action Successful',
            description: 'Your changes have been saved.',
          })
        }
      >
        Show Notification
      </Button>
    </>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Toast</Heading>
          <Text size="4" color="gray" mb="6">
            Displays transient notifications that provide feedback about an
            operation. Dispatched via a global function and rendered through a
            provider.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/toast-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Usage Preview
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Flex gap="4">
              <Button
                onClick={() =>
                  toast({
                    title: 'Update Successful',
                    description: 'Your profile has been saved to our servers.',
                  })
                }
              >
                Default Toast
              </Button>

              <Button
                variant="tonal"
                color="crimson"
                onClick={() =>
                  toast({
                    title: 'Connection Error',
                    description:
                      'Could not reach the server. Please try again.',
                    duration: 5000,
                  })
                }
              >
                Error Toast
              </Button>
            </Flex>
          </Card>
        </Section>

        {/* Implementation Code */}
        <Box mb="9">
          <Heading size="4" mb="4">
            Implementation
          </Heading>
          <Code language="typescript" filename="Example.tsx" showLineNumbers>
            {codeExample}
          </Code>
        </Box>

        {/* Api Reference */}
        <Section>
          <Flex direction="column" gap="4">
            <Heading size="4" mb="4">
              Api
            </Heading>

            <Box mb="6">
              <Heading size="3" mb="3">
                toast(options)
              </Heading>
              <Text mb="4" color="gray">
                Global function to dispatch a notification.
              </Text>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Option</Table.ColumnHeader>
                    <Table.ColumnHeader>Type</Table.ColumnHeader>
                    <Table.ColumnHeader>Default</Table.ColumnHeader>
                    <Table.ColumnHeader>Description</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>title</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">The main notification message.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>description</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">ReactNode</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">-</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Secondary detail message.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>duration</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">number</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">3000</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">Time in ms before auto-dismiss.</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>color</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">PittoricaColor</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">'slate'</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        The semantic color of the notification.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Box>

            <Box>
              <Heading size="3" mb="3">
                ToastProvider
              </Heading>
              <Text color="gray">
                Mount this component at the root of your application to enable
                toast rendering.
              </Text>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}
