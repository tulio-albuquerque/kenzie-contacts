import { ContactRequest, ContactResponse } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source"
import User from "../../entities/users.entity"
import Contact from "../../entities/contacts.entity"
import { Repository } from "typeorm";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (userId: number, contactData: ContactRequest): Promise<ContactResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

  const userData: User = await userRepo.findOneByOrFail({
      id: userId,
  })

  const contact: Contact = contactRepo.create({
    ...contactData,
    user: userData
  })

  await contactRepo.save(contact)

  const newContact: ContactResponse = returnContactSchema.parse(contact)
  return newContact
}

export default createContactService