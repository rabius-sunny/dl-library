import CHeader from 'components/shared/Header'
import { useLocation } from 'react-router-dom'
import BookTable from 'components/tables/BookTable'

export default function Books() {
  const {
    state: { data, name }
  } = useLocation()
  console.log('data', data)
  return (
    <div>
      <CHeader title={name + ' এর বইসমূহ'} />
      <div className='container'>
        <BookTable data={data} />
      </div>
    </div>
  )
}
