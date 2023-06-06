import { Repository } from "typeorm"
import User from "../../entities/users.entity"
import { AppDataSource } from "../../data-source"
import { returnUserSchema } from "../../schemas/users.schemas"
import { UserResponse } from "../../interfaces/users.interfaces"

const retriveProfileService = async (userId: number): Promise<UserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const user = await userRepo.findOneByOrFail({
    id: userId
  })

  return returnUserSchema.parse(user)
}

export default retriveProfileService