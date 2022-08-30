import { useState } from 'react'
import { createStyles, UnstyledButton, Menu, Group } from '@mantine/core'
import {
  IconChevronDown,
  IconChecks,
  IconAlertTriangle,
  IconAntennaBars4,
  IconLayoutList
} from '@tabler/icons'

const data = [
  { label: 'Done', icon: IconChecks, color: 'green' },
  { label: 'Undefined', icon: IconAlertTriangle, color: 'red' },
  { label: 'Pending', icon: IconAntennaBars4, color: 'cyan' },
  { label: 'Queue', icon: IconLayoutList, color: 'blue' }
]

const useStyles = createStyles((theme, { opened }) => ({
  control: {
    width: 200,
    height: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0]
    }
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)'
  }
}))

export default function Status() {
  const [opened, setOpened] = useState(false)
  const { classes } = useStyles({ opened })
  const [selected, setSelected] = useState(data[3])
  const items = data.map((item, idx) => (
    <Menu.Item
      icon={<item.icon color={item.color} style={{ height: '40px' }} />}
      onClick={() => setSelected(item)}
      key={idx}
    >
      {item.label}
    </Menu.Item>
  ))

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius='md'
      width='target'
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing='xs'>
            <selected.icon style={{ height: '40px' }} color={selected.color} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  )
}
