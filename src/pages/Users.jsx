import UserTable from 'components/tables/UserTable'
import CHeader from 'components/shared/Header'
import { useLocation } from 'react-router-dom'

export default function Users() {
  const {
    state: { data, name }
  } = useLocation()
  console.log('data', data)
  return (
    <div>
      <CHeader title={name + ' এর ব্যবহারকারী'} />
      <div className='container'>
        <UserTable data={data} />
      </div>
    </div>
  )
}
