import { z } from "zod"
import { returnUserSchema } from "./users.schemas"

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(70),
  email: z.string().email().max(256),
  phone: z.string().max(18),
  user: returnUserSchema,
  createdAt: z.string()
})

const createContactSchema = contactSchema.omit({
  id: true,
  user: true,
  createdAt: true
})


const returnContactSchema = contactSchema.omit({
  user: true,
  createdAt: true
})

const updateContactSchema = createContactSchema.partial()

const returnMultipleContactsSchema = returnContactSchema.array()

export {
  createContactSchema,
  returnContactSchema,
  returnMultipleContactsSchema,
  updateContactSchema
}