import { useState } from 'react';

import {
  IconChevronDown,
  IconInfoCircle,
  IconMail,
  IconPlus,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';

import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogDescription,
  AlertDialogTitle,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  Carousel,
  Checkbox,
  CheckboxCard,
  CheckboxGroup,
  Chip,
  Code,
  Container,
  DataList,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
  Divider,
  DropdownMenu,
  DropdownMenuItem,
  Em,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Kbd,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Quote,
  Radio,
  RadioCard,
  RadioGroup,
  RadioGroupItem,
  Section,
  SegmentedControl,
  Select,
  Sheet,
  Skeleton,
  Slider,
  Stack,
  Strong,
  Switch,
  Table,
  Tabs,
  Text,
  TextArea,
  TextField,
  Tooltip,
} from '@pittorica/react';

export default function Route() {
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <Flex direction={'column'} gap={'9'}>
      <Box style={{ backgroundColor: 'var(--pittorica-source-color)' }}>
        <Container maxWidth="lg" pt="4" pb="6">
          <Flex
            direction={'column'}
            justify={'center'}
            align={'center'}
            gap={'6'}
          >
            <Avatar size="9" src="/assets/logo/logo.png" fallback="P" />

            <Heading size="9" color="white">
              Pittorica
            </Heading>
            <Heading size={'6'} color="white">
              a painterly, CSS-first UI framework that brings elegant,
              lightweight structure to modern interfaces.
            </Heading>

            <Callout color="warning" style={{ textAlign: 'center' }}>
              <Callout.Text>
                Warning: Pittorica is under active development, unwanted changes
                may occur.
              </Callout.Text>
            </Callout>

            <Flex
              direction={'row'}
              justify={'center'}
              align={'center'}
              gap="4"
              basis="auto-300px"
            >
              <Card translucent p="4">
                <Flex
                  direction={'column'}
                  justify={'center'}
                  align={'stretch'}
                  gap={'2'}
                >
                  <Code
                    showLineNumbers
                    language="bash"
                    filename="terminal"
                  >{`npm install pittorica @pittorica/react
`}</Code>

                  <Code
                    showLineNumbers
                    language="typescript"
                    filename="index.tsx"
                  >{`import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource-variable/funnel-display';
import '@fontsource/space-mono';
import '@fontsource/alice';
import { PittoricaTheme, Button } from '@pittorica/react';

import './app.css';

export default function Route () {
  return (
    <PittoricaTheme appearance="light" sourceColor="#29294b">
      <Button variant="elevated" size="lg">Click me</Button>
    </PittoricaTheme>
  )
}`}</Code>
                </Flex>
              </Card>

              <Card translucent p="4">
                <Code language="css" filename="app.css">{`:root {
  --font-inter: 'Inter Variable', Inter, system-ui, -apple-system, sans-serif;
  --font-funnel-display: 'Funnel Display Variable', sans-serif;
  --font-space-mono: 'Space Mono', monospace;
  --font-alice: Alice, sans-serif;

  --pittorica-font-family: var(--font-inter);
  --pittorica-font-heading: var(--font-funnel-display);
  --pittorica-font-code: var(--font-space-mono);
  --pittorica-font-strong: inherit;
  --pittorica-font-em: inherit;
  --pittorica-font-quote: var(--font-alice);
}

.pittorica-theme {
  --pittorica-source-color: #29294b;
}
`}</Code>
              </Card>
            </Flex>

            <Button variant="elevated" size="lg" as="a" href="/components">
              Browse Components
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box id="showroom" mb="9">
        <Container maxWidth="lg">
          <Flex
            gap="4"
            wrap="wrap"
            basis="auto"
            justify={'center'}
            align={'stretch'}
          >
            <Flex gap="2" justify="center" align="center">
              <Button>filled (default)</Button>
              <Button variant="outlined">outlined</Button>
              <Button variant="text">text</Button>
              <Button variant="tonal">tonal</Button>
              <Button variant="elevated">elevated</Button>
            </Flex>

            <Avatar size="4" fallback="JD" />

            <Card translucent p="4">
              <Heading size="3">Small Card</Heading>
            </Card>

            <Flex gap="2" justify="center" align="center">
              <Chip variant="outline">Outlined</Chip>
              <Chip variant="soft">soft</Chip>
              <Chip variant="solid">Solid</Chip>
              <Chip variant="solid" color="danger">
                Danger
              </Chip>
            </Flex>

            <Skeleton>
              Pittorica brings a painterly, CSS-first approach to UI components.
              It focuses on elegant structure and lightweight performance for
              modern web interfaces, ensuring a seamless experience across all
              devices and platforms.
            </Skeleton>

            <Divider variant="wave" color="white" />

            <Flex gap="4" align="center">
              <Badge badgeContent={5} color="indigo">
                <Box
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--pittorica-slate-4)',
                    borderRadius: 6,
                  }}
                />
              </Badge>
              <Badge variant="dot" color="success">
                <Avatar size="2" fallback="JD" />
              </Badge>
            </Flex>

            <Card p="4" style={{ width: 200 }}>
              <DataList>
                <DataList.Item>
                  <DataList.Label>Status</DataList.Label>
                  <DataList.Value>
                    <Text color="success" size="1">
                      Online
                    </Text>
                  </DataList.Value>
                </DataList.Item>
              </DataList>
            </Card>

            <Flex gap="2">
              <IconButton variant="filled">
                <IconPlus size={18} />
              </IconButton>
              <IconButton variant="tonal" color="teal">
                <IconSearch size={18} />
              </IconButton>
            </Flex>

            <Flex gap="3" align="center">
              <Switch defaultChecked />
              <Switch color="red" />
            </Flex>

            <Box style={{ width: 150 }}>
              <Slider defaultValue={60} color="indigo" />
            </Box>

            <Select.Root size="xs">
              <Select.Content>
                <option>Option 1</option>
                <option>Option 2</option>
              </Select.Content>
            </Select.Root>

            <Flex gap="2">
              <Button size="xs" onClick={() => setOpenDialog(true)}>
                Open Dialog
              </Button>
              <Button
                size="xs"
                variant="tonal"
                onClick={() => setOpenSheet(true)}
              >
                Open Sheet
              </Button>
              <Button
                size="xs"
                variant="outlined"
                color="danger"
                onClick={() => setOpenAlertDialog(true)}
              >
                Open Alert
              </Button>
            </Flex>

            <Card variant="outlined" p="4" style={{ width: 250 }}>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Key</Table.ColumnHeader>
                    <Table.ColumnHeader>Value</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Prop</Table.Cell>
                    <Table.Cell>
                      <Code>val</Code>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Card>

            <Flex direction="column" gap="2" style={{ width: 200 }}>
              <TextField.Root size="xs">
                <TextField.Slot>
                  <IconMail size={14} />
                </TextField.Slot>
                <TextField.Input placeholder="Email" />
              </TextField.Root>
              <TextArea.Root size="xs">
                <TextArea.Content placeholder="Message" />
              </TextArea.Root>
            </Flex>

            <SegmentedControl.Root defaultValue="1">
              <SegmentedControl.Item value="1">Day</SegmentedControl.Item>
              <SegmentedControl.Item value="2">Night</SegmentedControl.Item>
            </SegmentedControl.Root>

            <Flex gap="2" align="center">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
              <Tooltip content="Help info">
                <IconInfoCircle size={18} color="var(--pittorica-indigo-9)" />
              </Tooltip>
            </Flex>

            <Tabs.Root defaultValue="1">
              <Tabs.List>
                <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
                <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            <Card translucent p="4" style={{ width: 300 }}>
              <Inset side="top">
                <Box
                  height="60px"
                  style={{ background: 'var(--pittorica-indigo-3)' }}
                />
              </Inset>
              <Text size="2" mt="2">
                Card with <Strong>Inset</Strong> and <Em>Italic</Em> text.
              </Text>
            </Card>

            <Flex gap="4" align="center">
              <CheckboxGroup defaultValue={['1']}>
                <Flex gap="3">
                  <Flex align="center" gap="1">
                    <CheckboxGroup.Item value="1" />
                    <Text size="1">Check A</Text>
                  </Flex>
                  <Flex align="center" gap="1">
                    <CheckboxGroup.Item value="2" />
                    <Text size="1">Check B</Text>
                  </Flex>
                </Flex>
              </CheckboxGroup>

              <Checkbox label="Standalone" />
            </Flex>

            <CheckboxCard style={{ width: 300 }}>
              <CheckboxCard.Item value="1">
                <Text size="1">Accept Terms</Text>
              </CheckboxCard.Item>
              <CheckboxCard.Item value="2">
                <Text size="1">Newsletter</Text>
              </CheckboxCard.Item>
            </CheckboxCard>

            <RadioGroup defaultValue="1" color="teal">
              <Flex gap="3">
                <Flex align="center" gap="1">
                  <RadioGroupItem value="1" />
                  <Text size="1">Option A</Text>
                </Flex>
                <Flex align="center" gap="1">
                  <RadioGroupItem value="2" />
                  <Text size="1">Option B</Text>
                </Flex>
              </Flex>
            </RadioGroup>

            <Progress value={75} style={{ width: 200 }} />

            <RadioCard.Root columns="2" style={{ width: 300 }}>
              <RadioCard.Item value="1">
                <Text size="1">Basic</Text>
              </RadioCard.Item>
              <RadioCard.Item value="2">
                <Text size="1">Express</Text>
              </RadioCard.Item>
            </RadioCard.Root>

            <Grid columns="3" gap="2" style={{ width: 250 }}>
              <Box
                height="32px"
                style={{
                  background: 'var(--pittorica-blue-3)',
                  borderRadius: 4,
                }}
              />
              <Box
                height="32px"
                style={{
                  background: 'var(--pittorica-blue-3)',
                  borderRadius: 4,
                }}
              />
              <Box
                height="32px"
                style={{
                  background: 'var(--pittorica-blue-3)',
                  borderRadius: 4,
                }}
              />
            </Grid>

            <Stack gap="1" style={{ width: 100 }}>
              <Box
                height="10px"
                style={{ background: 'var(--pittorica-red-3)' }}
              />
              <Box
                height="10px"
                style={{ background: 'var(--pittorica-orange-3)' }}
              />
              <Box
                height="10px"
                style={{ background: 'var(--pittorica-yellow-3)' }}
              />
            </Stack>

            <Popover>
              <PopoverTrigger>
                <Button size="xs" variant="outlined">
                  Popover
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Box p="3">
                  <Text size="2">Floating content</Text>
                </Box>
              </PopoverContent>
            </Popover>

            <DropdownMenu
              itemCount={2}
              renderTrigger={({ ref, onClick }) => (
                <Button
                  size="xs"
                  ref={ref as React.Ref<HTMLButtonElement>}
                  onClick={onClick}
                >
                  Menu <IconChevronDown size={14} />
                </Button>
              )}
            >
              <DropdownMenuItem index={0} icon={<IconUser size={14} />}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem index={1}>Settings</DropdownMenuItem>
            </DropdownMenu>

            <HoverCard
              renderTrigger={({ ref }) => (
                <Link
                  size="2"
                  ref={ref as React.Ref<HTMLAnchorElement>}
                  href="#"
                >
                  @hover_me
                </Link>
              )}
            >
              <Box p="2">
                <Text size="1">Quick profile preview</Text>
              </Box>
            </HoverCard>

            <Blockquote>Simplicity is the ultimate sophistication.</Blockquote>

            <Section size="1">
              <Quote>Painterly, CSS-first UI framework.</Quote>
            </Section>

            <Flex gap="2">
              <Radio name="radio-demo" value="1" />
              <Radio name="radio-demo" value="2" defaultChecked />
            </Flex>

            <Flex direction="column" gap="4" style={{ width: '100%' }}>
              <Heading size="4">Team Overview</Heading>
              <Flex gap="4" wrap="wrap">
                {[
                  {
                    name: 'Alex Rivera',
                    role: 'Design Lead',
                    status: 'Online',
                  },
                  { name: 'Sam Chen', role: 'Frontend Eng', status: 'Away' },
                  { name: 'Jordan Smith', role: 'DevOps', status: 'Online' },
                ].map((user) => (
                  <Card key={user.name} p="3" style={{ flex: '1 1 200px' }}>
                    <Flex align="center" gap="3">
                      <Badge
                        variant="dot"
                        color={user.status === 'Online' ? 'success' : 'amber'}
                      >
                        <Avatar size="3" fallback={user.name[0]} />
                      </Badge>
                      <Box>
                        <Text size="2" weight="bold">
                          {user.name}
                        </Text>
                        <Text size="1" color="slate">
                          {user.role}
                        </Text>
                      </Box>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </Flex>

            <Box style={{ width: '100%' }}>
              <Carousel.Root>
                <Carousel.Item
                  src="https://picsum.photos/id/10/1200/600"
                  alt="1"
                />
                <Carousel.Item
                  src="https://picsum.photos/id/11/1200/600"
                  alt="2"
                />
                <Carousel.Item
                  src="https://picsum.photos/id/28/1200/600"
                  alt="3"
                />
                <Carousel.Item
                  src="https://picsum.photos/id/25/1200/600"
                  alt="4"
                />
                <Carousel.Item
                  src="https://picsum.photos/id/32/1200/600"
                  alt="5"
                />
              </Carousel.Root>
            </Box>

            {/* Hidden components that need triggers */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle>Dialog Showcase</DialogTitle>
              <DialogDescription>
                This is how a dialog looks in Pittorica.
              </DialogDescription>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Close</Button>
              </DialogActions>
            </Dialog>

            <Sheet
              isOpen={openSheet}
              onClose={() => setOpenSheet(false)}
              title="Sheet Showcase"
            >
              <Text>Side sheet content example.</Text>
            </Sheet>

            <AlertDialog
              open={openAlertDialog}
              onClose={() => setOpenAlertDialog(false)}
            >
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action is destructive.
              </AlertDialogDescription>
              <AlertDialogActions>
                <Button
                  variant="text"
                  onClick={() => setOpenAlertDialog(false)}
                >
                  Cancel
                </Button>
                <Button color="red" onClick={() => setOpenAlertDialog(false)}>
                  Confirm
                </Button>
              </AlertDialogActions>
            </AlertDialog>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
