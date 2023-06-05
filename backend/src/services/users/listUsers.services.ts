import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import User from '../../entities/users.entity'
import { UsersResponse } from '../../interfaces/users.interfaces'
import { returnMultipleUsersSchema } from '../../schemas/users.schemas'

const listUsersService = async (): Promise<UsersResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const findUser: User[] = await userRepo.find()

  const users: UsersResponse = returnMultipleUsersSchema.parse(findUser)

  return users
}

export default listUsersService