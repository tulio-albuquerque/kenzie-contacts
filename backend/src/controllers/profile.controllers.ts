import { Request, Response } from "express"
import retriveProfileService from "../services/profile/retriveProfile.services"
import { UserResponse } from "../interfaces/users.interfaces"

const retriveProfileController =
  async (req: Request, res: Response): Promise<Response> => {
    const userId: number = res.locals.user.id
    
    console.log("User id: ", userId)
    const loginData: UserResponse = await retriveProfileService(userId)

    return res.status(200).json(loginData)
  }

export {
  retriveProfileController
}