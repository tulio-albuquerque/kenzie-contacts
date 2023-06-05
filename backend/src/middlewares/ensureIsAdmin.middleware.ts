import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

const ensureIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authenticatedUser = res.locals.user

  console.log(authenticatedUser)
  if(authenticatedUser.admin !== true){
    throw new AppError("Insufficient permission", 403)
  }

  return next()
}

export default ensureIsAdminMiddleware