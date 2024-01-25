import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Account } from './pages/Account'
import { AccountSettings } from './pages/AccountSettings'
import { Privacy } from './pages/Privacy'
import { Security } from './pages/Security'
import { Name } from './pages/Name'
import { Email } from './pages/Email'
import { Phone } from './pages/Phone'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/AccountSettings" element={<AccountSettings />} />
      <Route path="/Name" element={<Name />} />
      <Route path="/Email" element={<Email />} />
      <Route path="/Phone" element={<Phone />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Security" element={<Security />} />
    </Routes>
  )
}
