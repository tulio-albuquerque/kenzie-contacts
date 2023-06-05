import { UserUpdateRequest, UserResponse } from "../../interfaces/users.interfaces"
import { AppDataSource } from "../../data-source"
import User from "../../entities/users.entity"
import { Repository } from "typeorm"
import { returnUserSchema } from "../../schemas/users.schemas"

import Contact from "../../entities/contacts.entity"
import { ContactRequest, ContactResponse } from "../../interfaces/contacts.interfaces"

const patchContactService = async (contactId: number, newUserData: UserUpdateRequest): Promise<ContactResponse> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const oldContactData: Contact = await contactRepository.findOneByOrFail({
    id: contactId, 
  })

  const contact: Contact = contactRepository.create({
    ...oldContactData,
    ...newUserData
  })

  await contactRepository.save(contact)

  const updatedContact: ContactResponse = returnUserSchema.parse(contact)

  return updatedContact
}

export default patchContactService