import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(70),
  email: z.string().email().max(256),
  password: z.string().max(120),
  phone: z.string().max(18),
  admin: z.boolean().optional().default(false),
  createdAt: z.string()
})

const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true
})

const returnUserSchema = userSchema.omit({
  password: true
})

const updateUserSchema = createUserSchema.omit({
  admin: true
}).partial()

const returnMultipleUsersSchema = returnUserSchema.array()

export {
  createUserSchema,
  returnUserSchema,
  returnMultipleUsersSchema,
  updateUserSchema
}