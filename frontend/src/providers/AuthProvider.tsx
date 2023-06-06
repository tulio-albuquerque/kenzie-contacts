import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/validator";
import { AxiosError } from "axios";
import { EditUserData } from "../components/Modals/User/EditModal/validator";
import { ContactData } from "../components/Modals/Contact/validator";

export interface UserData {
  id: number
  name: string
  email: string
  password: string
  phone: string
  admin: boolean
}

export interface ContactReportData extends ContactData {
  id: number
}

export interface ReportData extends UserData {
  contacts: ContactReportData[]
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValues {
  user: UserData | null | undefined
  loading: boolean
  logout: () => void,
  deleteUser: () => void,
  retriveReport: () => Promise<ReportData[]>
  editUser: (data: EditUserData) => void,
  signIn: (data: LoginData) => void,
  signUp: (data: RegisterData) => void,
}

export interface ApiError {
  response: {
    data: string;
  };
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserData | null>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("kenzie-contacts:token")

      if(!token) {
        setLoading(false)
        return
      }
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const { data } = await api.get("profile")
        setUser(data)
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    getProfile()
  }, [])

  const editUser = async (data: EditUserData) => {
    try {
      const response = await api.patch(`users/${user?.id}`, data)

      setUser(response.data)

      navigate("/profile")
    } catch(err) {
      console.log(err)
    }
  }

  const deleteUser = async () => {
    try {
      if(user) {
        await api.delete(`users/${user.id}`)
        
        setUser(null)
        localStorage.clear()

        navigate("/")
      }
    } catch(err) {
      console.log()
    }
  }

  const logout = async () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("login", data)
      const { token, user } = response.data

      setUser(user)
      localStorage.setItem("kenzie-contacts:token", token)
      localStorage.setItem("kenzie-contacts:id", user.id)
      api.defaults.headers.common.authorization = `Bearer ${token}`

      navigate("/contacts")
    } catch(err) {
      console.log(err)
    }
  }

  const signUp = async (data: RegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);

      navigate("/");
    } catch (error) {
      const apiError = error as AxiosError<ApiError>;
      const message = apiError.response?.data;
      console.log(message);
    } finally {
      setLoading(false);
    }
  }
  const retriveReport = async (): Promise<ReportData[]> => {
    try {
      const response = await api.get<ReportData[]>("report")
      return response.data
    } catch(err) {
      console.log(err)
      throw err
    }
  }

  return (
    <AuthContext.Provider
       value={{user, retriveReport,
        loading, logout, editUser, deleteUser, signIn, signUp}}
    >
      {children}
    </AuthContext.Provider>
  )
}