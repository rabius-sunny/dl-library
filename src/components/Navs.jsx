import { createStyles, Card, Group } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  line: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'indigo',
    fontWeight: 600,
    marginBottom: 20
  }
}))
export default function Navs() {
  const { classes, theme } = useStyles()
  return (
    <Link to='/'>
      <Card withBorder radius='md' className={classes.line}>
        <Group>
          <IconArrowLeft
            color={
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'indigo'
            }
            style={{ height: 40, width: 60 }}
          />
          Home
        </Group>
      </Card>
    </Link>
  )
}
