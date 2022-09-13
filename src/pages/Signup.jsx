import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Select,
  Group
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconArrowLeft, IconChevronDown } from '@tabler/icons'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from 'utils/context'

export default function Signup() {
  const location = useLocation()
  const { setOnSignIn } = useAppContext()
  const [venue, setVenue] = useState(null)
  useEffect(() => {
    if (location.pathname.includes('/sign-up')) {
      setOnSignIn(true)
    }

    return () => setOnSignIn(false)
    // eslint-disable-next-line
  }, [location.pathname])

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      fphone: '',
      lphone: '',
      address: '',
      venue: '',
      username: '',
      password: ''
    }
  })

  const handleSubmit = values => {
    if (!venue) {
      alert('Select your venue')
    } else {
      console.log('values', { ...values, venue })
    }
  }

  return (
    <div className='container loginContainer'>
      <div style={{ width: '150px' }}>
        <Link to='/'>
          <Group align='center' mt={20}>
            <IconArrowLeft size={35} color='orange' />
            <Text color='orange' weight={600}>
              Home
            </Text>
          </Group>
        </Link>
      </div>
      <Container size={420} my={40}>
        <Title
          align='center'
          color='orange'
          sx={{
            fontWeight: 900
          }}
        >
          Create an account
        </Title>

        <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
          <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
            <TextInput
              mb={10}
              label='Name'
              placeholder='Rabius Sunny'
              name='name'
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              mb={10}
              label='Email'
              placeholder='you@email.com'
              name='email'
              required
              {...form.getInputProps('email')}
            />
            <TextInput
              mb={10}
              label='Phone no.'
              placeholder='01XXXXXXXXX'
              type='tel'
              name='fphone'
              required
              {...form.getInputProps('fphone')}
            />
            <TextInput
              mb={10}
              label='Another Phone no.'
              placeholder='01XXXXXXXXX'
              type='tel'
              name='lphone'
              required
              {...form.getInputProps('lphone')}
            />
            <TextInput
              mb={10}
              label='Address'
              placeholder='College Road, Rangpur'
              name='address'
              required
              {...form.getInputProps('address')}
            />
            <Select
              required
              mb={10}
              label='Venue'
              placeholder='nearest library'
              onChange={value => setVenue(value)}
              rightSection={<IconChevronDown size={14} />}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              data={['React', 'Angular', 'Svelte', 'Vue']}
            />
            <TextInput
              mb={10}
              label='Username'
              placeholder='user_name'
              name='username'
              required
              {...form.getInputProps('username')}
            />

            <PasswordInput
              mb={10}
              name='password'
              label='Password'
              placeholder='******'
              required
              {...form.getInputProps('password')}
              mt='md'
            />

            <Button type='submit' color='orange' fullWidth mt='xl'>
              Sign up
            </Button>
          </form>
          <Text align='center' mt='md'>
            Already have an account?{' '}
            <Anchor
              weight={700}
              color='orange'
              onClick={event => event.preventDefault()}
            >
              <Link to='/sign-in'>Sign in</Link>
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  )
}
