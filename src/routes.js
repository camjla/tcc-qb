import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Account } from './pages/Account'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Account" element={<Account />} />
    </Routes>
  )
}
