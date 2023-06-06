import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/SignUp"
import { Profile } from "../pages/Profile"
import { Contacts } from "../pages/Contacts"
import { ProtectedRoutes } from "../components/ProtectdRoutes"
import { ContactProvider } from "../providers/ContactProvider"

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/profile" element={<Profile />}/>      
        <Route element={<ContactProvider />}>
          <Route path="/contacts" element={<Contacts />}/>
        </Route>
      </Route>
    </Routes>
  )
}