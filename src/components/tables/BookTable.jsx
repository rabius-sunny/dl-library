import {
  Badge,
  Group,
  Input,
  Modal,
  Pagination,
  Table,
  Text
} from '@mantine/core'
import { IconEye, IconSearch } from '@tabler/icons'
import dayjs from 'dayjs'
import { useState } from 'react'

export default function BookTable({ data }) {
  const [search, setSearch] = useState('')
  const [activePage, setPage] = useState(1)
  const perPageShownKeywords = 5

  const searched = data?.filter(item =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  )
  // eslint-disable-next-line
  const DetailsModal = ({ item }) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <IconEye
          style={{ cursor: 'pointer' }}
          size={25}
          onClick={() => setOpen(true)}
          color='orange'
        />
        <Modal
          opened={open}
          transition='rotate-left'
          // transitionDuration={600}
          transitionTimingFunction='ease'
          onClose={() => setOpen(false)}
          centered
          overlayOpacity={0.55}
          overlayBlur={3}
          title={
            <Text component='h1' size={20} color='orange'>
              User Details
            </Text>
          }
        >
          <div>
            <Group>
              <Text weight={600}>Name : </Text> <Text>{item.name}</Text>
            </Group>
            <Group>
              <Text weight={600}>Email : </Text> <Text>{item.email}</Text>
            </Group>
            <Group>
              <Text weight={600}>Address : </Text> <Text>{item.address}</Text>
            </Group>
            <Group>
              <Text weight={600}>Created : </Text>{' '}
              <Text>{dayjs(item.createdAt).format('D MMM, YYYY')}</Text>
            </Group>
            <Group>
              <Text weight={600}>Phone 1 : </Text> <Text>{item.fphone}</Text>
            </Group>
            <Group>
              <Text weight={600}>Phone 2 : </Text> <Text>{item.lphone}</Text>
            </Group>
          </div>
        </Modal>
      </>
    )
  }

  const rows = searched
    ?.reverse()
    ?.slice(
      (activePage - 1) * perPageShownKeywords,
      activePage * perPageShownKeywords
    )
    .map(element => (
      <tr key={element._id}>
        <td>{element.name}</td>
        <td>{element.author}</td>
        <td>
          <Badge
            variant='dot'
            size='md'
            color={element.isBorrowed ? 'red' : 'green'}
          >
            <Text color={element.isBorrowed ? 'red' : 'green'}>
              {element.isBorrowed ? 'BORROWED' : 'AVAILABLE'}
            </Text>
          </Badge>
        </td>
        <td>N/A</td>

        {/* <td>
          <DetailsModal item={element} />
        </td> */}
      </tr>
    ))

  return (
    <div style={{ marginTop: 20 }}>
      <Input
        icon={<IconSearch size={14} />}
        onChange={({ target: { value } }) => setSearch(value)}
        placeholder='search name'
      />
      <Table verticalSpacing='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Availablilty</th>
            <th>Borrower</th>
            {/* <th>Details</th> */}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          mt={10}
          align='center'
          boundaries={2}
          color='orange'
          page={activePage}
          onChange={setPage}
          total={
            searched?.length > 0
              ? Math.ceil(searched?.length / perPageShownKeywords)
              : 1
          }
        />
      </div>
    </div>
  )
}
