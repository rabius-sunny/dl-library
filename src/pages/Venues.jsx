import {
  Badge,
  Grid,
  createStyles,
  Card,
  Text,
  Group,
  Skeleton
} from '@mantine/core'
import dayjs from 'dayjs'
import useGet from 'hooks/getData'
import venueServices from 'services/venueServices'
import { IconShield } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import CHeader from 'components/shared/Header'
import CardContainer from 'utils/CardContainer'
import { useEffect } from 'react'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)'
    }
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
  },
  image: {
    backgroundImage: 'url(/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title2: {
    color: 'white',
    fontSize: '3rem',
    background: 'rgba(0,0,0,0.3)',
    height: '100%',
    width: '100%',
    textAlign: 'center'
  }
}))

export default function Venues() {
  const navigate = useNavigate()
  const { classes } = useStyles()
  const { data, loading, error } = useGet(venueServices.getVenues)
  console.log('data', data)

  useEffect(() => {
    if (error) {
      alert(`error : ${error.message}`)
      navigate('/')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <CHeader title='লাইব্রেরিসমূহ' />

      <CardContainer>
        {(loading || error) && (
          <Grid mt={50}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <Grid.Col key={item} xs={12} sm={6} md={4}>
                <Skeleton height={300} />
              </Grid.Col>
            ))}
          </Grid>
        )}

        <Grid mt={50}>
          {data?.venues?.map((item, idx) => (
            <Grid.Col key={idx} xs={12} sm={6} md={4}>
              <Card shadow='md' withBorder p='lg' className={classes.card}>
                <Card.Section className={classes.image}>
                  <Text
                    size='xl'
                    weight={700}
                    className={classes.title2}
                    color='orange'
                  >
                    {item?.name?.split(' ')[0]}
                  </Text>
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
                  <Badge
                    size='md'
                    variant='gradient'
                    gradient={{ from: 'red', to: 'orange' }}
                  >
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
                      onClick={() =>
                        navigate(`/users/venue/${item?.name}`, {
                          state: { data: item?.users, name: item?.name }
                        })
                      }
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
                      onClick={() =>
                        navigate(`/books/venue/${item?.name}`, {
                          state: { data: item?.books, name: item?.name }
                        })
                      }
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
      </CardContainer>
    </>
  )
}
