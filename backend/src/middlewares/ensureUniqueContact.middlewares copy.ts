import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { ContactRequest } from "../interfaces/contacts.interfaces";

import Contact from "../entities/contacts.entity";

const ensureUniqueContactMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const userId: number = res.locals.user.id
  const contactData: ContactRequest = req.body;

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
  
  const contact = await contactRepo.findOne({
    where: {
      user: {
        id: userId
      },
      email: contactData.email
    }
  })

  console.log(contact)

  if(contact !== null) {
    throw new AppError("Contact with this email already exists", 409)
  }

  return next()
}

export default ensureUniqueContactMiddleware