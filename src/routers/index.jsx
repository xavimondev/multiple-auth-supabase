import { Routes, Route } from 'react-router-dom'

import Welcome from '../components/Welcome'
import Auth from '../components/Auth'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='login' element={<Auth />} />
    </Routes>
  )
}

export default AppRouter
