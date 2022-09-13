import { Text } from '@mantine/core'

export default function CHeader({ title }) {
  return (
    <div style={{ backgroundColor: '#fff4e6', padding: '20px 0' }}>
      <Text align='center' size={20} color='orange' weight={800}>
        {title}
      </Text>
    </div>
  )
}
