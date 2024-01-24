import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Account } from './pages/Account'
import { AccountSettings } from './pages/AccountSettings'
import { Privacy } from './pages/Privacy'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/AccountSettings" element={<AccountSettings />} />
      <Route path="/Privacy" element={<Privacy />} />
    </Routes>
  )
}
