import { AppDataSource } from "../../data-source"
import User from "../../entities/users.entity"
import { Repository } from "typeorm"

import Contact from "../../entities/contacts.entity"
import { ContactResponse, ContactUpdateRequest } from "../../interfaces/contacts.interfaces"
import { returnContactSchema } from "../../schemas/contacts.schemas"

const patchContactService = async (contactId: number, newUserData: ContactUpdateRequest): Promise<ContactResponse> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const oldContactData: Contact = await contactRepository.findOneByOrFail({
    id: contactId, 
  })

  const contact: Contact = contactRepository.create({
    ...oldContactData,
    ...newUserData
  })

  await contactRepository.save(contact)

  const updatedContact: ContactResponse = returnContactSchema.parse(contact)

  return updatedContact
}

export default patchContactService