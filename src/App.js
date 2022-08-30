import Footer from 'components/shared/Footer'
import Navbar from 'components/shared/Navbar'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAppContext } from 'utils/context'
import Home from './pages/Home'

export default function App() {
  const { onSignIn } = useAppContext()
  return (
    <div className=''>
      <Router>
        {!onSignIn && <Navbar />}
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/sign-in' index element={<Login />} />
          <Route path='/sign-up' index element={<Signup />} />
        </Routes>
        {!onSignIn && <Footer />}
      </Router>
    </div>
  )
}
