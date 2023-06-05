import { Request, Response } from "express";
import { UserRequest, UserResponse, UserUpdateRequest, UsersResponse } from "../interfaces/users.interfaces"
import createUserService from "../services/users/createUser.services"
import listUsersService from "../services/users/listUsers.services";
import patchUserService from "../services/users/patchUser.services";
import deleteUserService from "../services/users/deleteUser.services";


const createUserController =
  async (req: Request, res: Response): Promise<Response> => {
    const userData: UserRequest = req.body

    const newUser: UserResponse = await createUserService(userData)

    return res.status(201).json(newUser)
  }

const listUserController =
  async (req: Request, res: Response): Promise<Response> => {
    const usersData: UsersResponse = await listUsersService()

    return res.status(200).json(usersData)
  }

const patchUserController =
  async (req: Request, res: Response): Promise<Response> => {
    const userId = parseInt(req.params.userId)
    const userData: UserUpdateRequest = req.body

    const updatedUserData: UserResponse = await patchUserService(userId, userData)

    return res.status(200).json(updatedUserData)
  }

const deleteUserController =
  async (req: Request, res: Response): Promise<Response> => {
    const userId = parseInt(req.params.userId);
 
    await deleteUserService(userId)

    return res.status(204).send()
  }

export {
  createUserController,
  listUserController,
  patchUserController,
  deleteUserController
}