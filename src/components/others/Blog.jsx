import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Badge,
  Grid
} from '@mantine/core'
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: '100%'
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  }
}))

export default function Blog() {
  const { classes, theme } = useStyles()

  return (
    <>
      <Text weight={600} size={40} align='center' mt='lg' color='orange'>
        Read from blog
      </Text>
      <Grid className='container' style={{ marginTop: 50, padding: 0 }}>
        {data.map((item, index) => (
          <Grid.Col xs={12} md={4} lg={4}>
            <Card
              key={index}
              withBorder
              radius='md'
              shadow='md'
              className={classes.card}
            >
              <Card.Section mb='sm'>
                <Image src={item.image} alt={item.title} height={180} />
              </Card.Section>

              <Text weight={700} mt='xs'>
                {item.title}
              </Text>
              <Badge color='orange'>{item.category}</Badge>

              <Card.Section className={classes.footer}>
                <Group position='apart'>
                  <Text size='xs' color='dimmed'>
                    {item.footer}
                  </Text>
                  <Group spacing={0}>
                    <ActionIcon>
                      <IconHeart
                        size={18}
                        color={theme.colors.red[6]}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon>
                      <IconBookmark
                        size={18}
                        color={theme.colors.yellow[6]}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon>
                      <IconShare
                        size={16}
                        color={theme.colors.blue[6]}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>
                </Group>
              </Card.Section>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'decorations',
    title: 'Top 50 underrated plants for house decoration',
    footer: '733 people liked this'
  },
  {
    image:
      'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'decorations',
    title: 'Top 50 underrated plants for house decoration',
    footer: '733 people liked this'
  },
  {
    image:
      'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    category: 'decorations',
    title: 'Top 50 underrated plants for house decoration',
    footer: '733 people liked this'
  }
]
