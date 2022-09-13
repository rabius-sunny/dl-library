import {
  Badge,
  Container,
  Grid,
  createStyles,
  Card,
  Image,
  Text,
  Group
} from '@mantine/core'
import dayjs from 'dayjs'
import useGet from 'hooks/getData'
import venueServices from 'services/venueServices'
import hero from 'assets/images/hero.jpg'
import { IconShield } from '@tabler/icons'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  title: {
    lineHeight: 1
  }
}))

export default function Venues() {
  const { classes } = useStyles()
  const { data, loading, error } = useGet(venueServices.getVenues)

  console.log('data and others', data, loading, error)

  return (
    <>
      <Container>
        <Badge color='orange' fullWidth size='xl' variant='light'>
          লাইব্রেরিসমূহ
        </Badge>
      </Container>

      <div className='container'>
        <Grid mt={50}>
          {data?.venues?.map((item, idx) => (
            <Grid.Col key={idx} xs={12} md={4} lg={4}>
              <Card withBorder p='lg' className={classes.card}>
                <Card.Section>
                  <Image src={hero} alt={item?.name} height={100} />
                </Card.Section>

                <Group position='apart' mt='xl'>
                  <Text
                    size='xl'
                    weight={700}
                    className={classes.title}
                    color='orange'
                  >
                    {item?.name}
                  </Text>
                  <Badge size='md' color='red' variant='filled'>
                    <Group sx={{ gap: 8 }}>
                      <IconShield size={18} color='white' />{' '}
                      <span>{item?.admin?.name}</span>
                    </Group>
                  </Badge>
                </Group>
                <Text mt='sm' mb='md' color='dimmed' size='xs'>
                  {item?.address}
                </Text>
                <Card.Section className={classes.footer}>
                  <div style={{ textAlign: 'center' }}>
                    <Badge
                      onClick={() => alert('clicked user')}
                      size='lg'
                      variant='light'
                      color='orange'
                    >
                      USERS
                    </Badge>
                    <Text weight={800} size='xl' color='indigo'>
                      {item?.users?.length}
                    </Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Badge
                      onClick={() => alert('clicked books')}
                      size='lg'
                      variant='light'
                      color='orange'
                    >
                      BOOKS
                    </Badge>
                    <Text weight={800} size='xl' color='indigo'>
                      {item?.books?.length}
                    </Text>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Badge size='lg' variant='light' color='orange'>
                      CREATED
                    </Badge>
                    <Text weight={800} size='xs' color='green'>
                      {dayjs(item?.createdAt).format('D MMM, YYYY')}
                    </Text>
                  </div>
                </Card.Section>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </>
  )
}
