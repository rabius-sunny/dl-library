import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Group
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from 'utils/context'
import { IconArrowLeft } from '@tabler/icons'

export default function Login() {
  const location = useLocation()
  const { setOnSignIn } = useAppContext()

  useEffect(() => {
    if (location.pathname.includes('/sign-in')) {
      setOnSignIn(true)
    }

    return () => setOnSignIn(false)
    // eslint-disable-next-line
  }, [location.pathname])

  const handleSubmit = values => {
    console.log(values)
  }

  const form = useForm({
    initialValues: {
      username: '',
      password: ''
    }
  })

  return (
    <div className='container'>
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
          color='orange'
          align='center'
          sx={{
            fontWeight: 900
          }}
        >
          Welcome back!
        </Title>

        <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
          <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
            <TextInput
              label='User Name'
              placeholder='user_name'
              {...form.getInputProps('username')}
              required
            />

            <PasswordInput
              label='Password'
              placeholder='Your password'
              {...form.getInputProps('password')}
              required
              mt='md'
            />

            <Button type='submit' color='orange' fullWidth mt='xl'>
              Sign in
            </Button>
          </form>
          <Text align='center' mt='md'>
            Don&apos;t have an account?{' '}
            <Anchor
              weight={700}
              color='orange'
              onClick={event => event.preventDefault()}
            >
              <Link to='/sign-up'>Register</Link>
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  )
}
