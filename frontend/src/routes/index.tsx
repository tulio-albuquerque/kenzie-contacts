import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Profile } from "../pages/Profile"
import { Contacts } from "../pages/Contacts"
import { Register } from "../pages/Register"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { ContactProvider } from "../providers/ContactProvider"
import { Report } from "../pages/Report"
import { AdminRoutes } from "../components/AdminRoutes"

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
        <Route element={<AdminRoutes />}>
          <Route path="/report" element={<Report />}/>
        </Route>
      </Route>
    </Routes>
  )
}