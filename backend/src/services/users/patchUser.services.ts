import { UserUpdateRequest, UserResponse } from "../../interfaces/users.interfaces"
import { AppDataSource } from "../../data-source"
import User from "../../entities/users.entity"
import { Repository } from "typeorm"
import { returnUserSchema } from "../../schemas/users.schemas"

const patchUserService = async (userId: number, newUserData: UserUpdateRequest): Promise<UserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId
  })

  const user: User = userRepository.create({
    ...oldUserData,
    ...newUserData
  })

  await userRepository.save(user)

  const updatedUser: UserResponse = returnUserSchema.parse(user)

  return updatedUser
}

export default patchUserService