import { AppDataSource } from "../../data-source"
import Contact from "../../entities/contacts.entity"
import { Repository } from "typeorm"

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const contact = await contactRepository.findOneBy({
    id: contactId
  })

  await contactRepository.softRemove(contact!)
}

export default deleteContactService