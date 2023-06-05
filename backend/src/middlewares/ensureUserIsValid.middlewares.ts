import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../error";

const ensureUserIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const userId: number = parseInt(req.params.userId);
  
  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  
  const user = await userRepo.findOneBy({ id: userId })

  if(user === null) {
    throw new AppError("User not found", 404)
  }
  
  return next()
}

export default ensureUserIsValidMiddleware