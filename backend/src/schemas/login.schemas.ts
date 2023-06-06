import { z } from "zod"
import { returnUserSchema } from "./users.schemas"

const createLoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

const returnLoginSchema = z.object({
  token: z.string(),
  user: returnUserSchema
})

export {
  createLoginSchema,
  returnLoginSchema
}