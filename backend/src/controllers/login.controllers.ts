import { Request, Response } from "express"
import createLoginService from "../services/login/createLogin.services"
import { LoginResponse } from "../interfaces/login.interfaces"

const createLoginController =
  async (req: Request, res: Response): Promise<Response> => {
    const loginData: LoginResponse = await createLoginService(req.body)

    return res.status(200).json(loginData)
  }

export {
  createLoginController
}