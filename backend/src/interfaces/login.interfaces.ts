import { z } from "zod"
import { createLoginSchema, returnLoginSchema } from "../schemas/login.schemas"

type LoginRequest = z.infer<typeof createLoginSchema>

type LoginResponse = z.infer<typeof returnLoginSchema>

export {
  LoginRequest,
  LoginResponse
}