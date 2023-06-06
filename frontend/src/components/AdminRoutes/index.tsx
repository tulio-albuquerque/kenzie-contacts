import { Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export const AdminRoutes = () => {
  const { user } = useAuth()

  if(!user || !user?.admin) {
    return <div>Usuario não possue credenciais suficientes</div>
  }

  return <Outlet/>
}