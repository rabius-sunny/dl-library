import { useState } from 'react'
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Burger,
  Transition,
  Paper,
  Text,
  Button
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandFacebook,
  IconNotebook
} from '@tabler/icons'
import { useNavigate } from 'react-router-dom'

const HEADER_HEIGHT = 60

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 2
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 10,
    right: 10,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },
  icons: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  social: {
    width: 250,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
      flexGrow: 1
    }
  },

  burger: {
    marginRight: theme.spacing.md,
    flexGrow: 1,

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.orange,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: '#fff4e6'
    },
    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.colors.orange
    }
  }
}))

export default function Navbar() {
  const navigate = useNavigate()
  const [opened, { toggle, close }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link
      })}
      onClick={event => {
        event.preventDefault()
        setActive(link.link)
        navigate(link.link)
        close()
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={56} className={`${classes.root} container`}>
      <div className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size='sm'
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Transition transition='slide-down' duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>

        <Text
          component='h2'
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
          size={25}
          color='orange'
        >
          <IconNotebook size={25} /> DL Library
        </Text>

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <ActionIcon className={classes.icons} size='lg'>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon className={classes.icons} size='lg'>
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon className={classes.icons} size='lg'>
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <Button
            onClick={() => navigate('/sign-in')}
            color='orange'
            radius='xl'
          >
            LOGIN
          </Button>
        </Group>
      </div>
    </Header>
  )
}

const links = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/venues',
    label: 'Venues'
  },
  {
    link: '/pricing',
    label: 'Pricing'
  }
]
