import { UserRequest, UserResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source"
import User from "../../entities/users.entity"
import { Repository } from "typeorm";
import { returnUserSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: UserRequest): Promise<UserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  const user: User = userRepo.create(userData)

  await userRepo.save(user)

  const newUser: UserResponse = returnUserSchema.parse(user)
  return newUser
}

export default createUserService