import { Repository } from "typeorm"
import User from "../../entities/users.entity"
import { AppDataSource } from "../../data-source"
import { compare } from "bcryptjs"
import { AppError } from "../../error"
import { LoginRequest } from "../../interfaces/login.interfaces"

import jwt from "jsonwebtoken"
import "dotenv/config"

const createLoginService = async (loginData: LoginRequest): Promise<string> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const user = await userRepo.findOneByOrFail({
    email: loginData.email
  })

  const matchPassword: boolean = await compare(loginData.password, user.password)
  if(!matchPassword) {
    throw new AppError("Invalid credentials", 401)
  }

  const token = jwt.sign(
    {
      admin: user.admin
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: user.id.toString()
    }
  )

  return token
}

export default createLoginService