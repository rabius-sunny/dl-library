import { Modal, Button } from '@mantine/core'
import { useState } from 'react'
import { IconNotes } from '@tabler/icons'

export default function Note() {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        overlayBlur={1}
        overlayOpacity={0.55}
        transition='rotate-left'
        transitionDuration={400}
      >
        Modal without header, press escape or click on overlay to close <br />
        Modal without header, press escape or click on overlay to close <br />
        Modal without header, press escape or click on overlay to close
      </Modal>
      <Button
        radius='xl'
        color='cyan'
        style={{ padding: '5px' }}
        onClick={() => setOpened(true)}
      >
        <IconNotes style={{ height: 20 }} />
      </Button>
    </>
  )
}
