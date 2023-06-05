import { z } from "zod"
import {
  createContactSchema,
  returnContactSchema,
  returnMultipleContactsSchema
} from "../schemas/contacts.schemas"
import { DeepPartial } from "typeorm"

type ContactRequest = z.infer<typeof createContactSchema>
type ContactUpdateRequest = DeepPartial<ContactRequest>

type ContactResponse = z.infer<typeof returnContactSchema>
type ContactsResponse = z.infer<typeof returnMultipleContactsSchema>


export {
  ContactRequest,
  ContactResponse,
  ContactsResponse,
  ContactUpdateRequest,
}