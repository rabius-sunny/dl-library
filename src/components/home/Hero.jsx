import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text
} from '@mantine/core'
import { IconArrowNarrowRight } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  hero: {
    position: 'relative',
    backgroundImage: 'url(/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  container: {
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 400,
      paddingBottom: theme.spacing.xl * 3
    }
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3
    }
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm
    }
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  }
}))

export function Hero() {
  const { classes } = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.hero}>
      <Overlay
        gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          একটি <Text color='yellow'>উপকারী জ্ঞান</Text> এ পরিপূর্ণ লাইব্রেরি
        </Title>
        <Text className={classes.description} size='xl' mt='xl'>
          দারুল ইসলাম লাইব্রেরি একটি অত্যাধুনিক ও সফটওয়্যার নিয়ন্ত্রিত লাইব্রেরি
          যার মূল উদ্দেশ্য 'ইলমে নাফে' তথা উপকারী জ্ঞানের প্রসার ঘটানো। আজই
          একাউন্ট খুলুন আপনার স্থানীয় লাইব্রেরিতে, দারুল ইসলাম লাইব্রেরির সাথে
          এবং পেয়ে যান আপনার আকাঙ্ক্ষিত বইসমূহ, সম্পূর্ণ বিনামূল্যে, নির্ধারিত
          সময়ের জন্য।
        </Text>

        <Button
          variant='gradient'
          size='xl'
          radius='xl'
          className={classes.control}
          onClick={() => navigate('/sign-in')}
        >
          শুরু করুন
          <IconArrowNarrowRight style={{ marginLeft: 10 }} size={25} />
        </Button>
      </Container>
    </div>
  )
}
