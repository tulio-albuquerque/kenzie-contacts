import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { SignUpData } from "../pages/SignUp/validator";
import { AxiosError } from "axios";

export interface RegisterData {
  id: number
  name: string
  email: string
  password: string
  phone: string
  admin: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValues {
  signIn: (data: LoginData) => void,
  signUp: (data: SignUpData) => void,
  loading: boolean
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("kenzie-contacts:token")

    if(!token) {
      return
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`
    setLoading(false)
  }, [loading])

  const signUp = async (data: SignUpData) => {
    console.log("oi")
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

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data)
      const { token } = response.data

      api.defaults.headers.common.authorization = `Bearer ${token}`
      localStorage.setItem("kenzie-contacts:token", token)

      navigate("/contacts")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
       value={{signIn, signUp, loading}}
    >
      {children}
    </AuthContext.Provider>
  )
}