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
import CardContainer from 'utils/CardContainer'
import hero from 'assets/images/hero.jpg'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: '100%',
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)'
    }
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
      <CardContainer>
        <Grid style={{ marginTop: 50, padding: 0 }}>
          {data.map((item, index) => (
            <Grid.Col xs={12} sm={6} md={4} xl={3}>
              <Card
                key={index}
                withBorder
                radius='md'
                shadow='md'
                className={classes.card}
              >
                <Card.Section mb='sm'>
                  <Image src={hero} alt={item.title} height={180} />
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
      </CardContainer>
    </>
  )
}

const data = [
  {
    category: 'aqeedah',
    title: 'সেরা ১০টি আক্বীদার মৌলিক বই যা আপনার পড়া উচিত',
    footer: '733 people liked this'
  },
  {
    category: 'aqeedah',
    title: 'সেরা ১০টি আক্বীদার মৌলিক বই যা আপনার পড়া উচিত',
    footer: '1080 people liked this'
  },
  {
    category: 'aqeedah',
    title: 'সেরা ১০টি আক্বীদার মৌলিক বই যা আপনার পড়া উচিত',
    footer: '200 people liked this'
  }
]
