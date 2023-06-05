import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contacts.entity'
import { UsersResponse } from '../../interfaces/users.interfaces'
import { returnMultipleUsersSchema } from '../../schemas/users.schemas'
import { returnMultipleContactsSchema } from '../../schemas/contacts.schemas'
import { ContactsResponse } from '../../interfaces/contacts.interfaces'

const listContactsService = async (userId: number): Promise<ContactsResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

  const findContact: Contact[] = await contactRepo.findBy({
    user: {
        id: userId
    }
  })

  const contacts: ContactsResponse = returnMultipleContactsSchema.parse(findContact)

  return contacts
}

export default listContactsService