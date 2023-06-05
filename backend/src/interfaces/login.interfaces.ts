import { z } from "zod"
import { createLoginSchema } from "../schemas/login.schemas"

type LoginRequest = z.infer<typeof createLoginSchema>

export {
  LoginRequest
}