import { Container, MantineProvider } from '@mantine/core'

const theme = {
  breakpoints: {
    xs: 400,
    sm: 500,
    md: 1080,
    lg: 1200,
    xl: 1600
  }
}

export default function CardContainer({ size = 'lg', children }) {
  return (
    <MantineProvider theme={theme}>
      <Container size={size}>{children}</Container>
    </MantineProvider>
  )
}
