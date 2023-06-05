import { z } from "zod"
import {
  createUserSchema,
  returnUserSchema,
  returnMultipleUsersSchema
} from "../schemas/users.schemas"
import { DeepPartial } from "typeorm"

type UserRequest = z.infer<typeof createUserSchema>
type UserUpdateRequest = DeepPartial<UserRequest>

type UserResponse = z.infer<typeof returnUserSchema>
type UsersResponse = z.infer<typeof returnMultipleUsersSchema>


export {
  UserRequest,
  UserResponse,
  UsersResponse,
  UserUpdateRequest,
}