import { Router } from "express"

import { 
  createUserController,
  listUserController,
  patchUserController,
  deleteUserController
} from "../controllers/users.controllers"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares"
import { createUserSchema, updateUserSchema } from "../schemas/users.schemas"
import ensureUniqueEmailMiddleware from "../middlewares/ensureUniqueEmail.middlewares"
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares"
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware"
import ensureIsAuthorizedMiddleware from "../middlewares/ensureIsAuthorized.middleware"
import ensureUserIsValidMiddleware from "../middlewares/ensureUserIsValid.middlewares"

const userRouters = Router()

// TODO: Routes
userRouters.post("", ensureDataIsValidMiddleware(createUserSchema), ensureUniqueEmailMiddleware, createUserController)
userRouters.get("", ensureTokenIsValidMiddleware, ensureIsAdminMiddleware, listUserController)
userRouters.patch("/:userId", ensureTokenIsValidMiddleware, ensureUserIsValidMiddleware, ensureIsAuthorizedMiddleware, ensureDataIsValidMiddleware(updateUserSchema), patchUserController)
userRouters.delete("/:userId", ensureTokenIsValidMiddleware, ensureUserIsValidMiddleware, ensureIsAdminMiddleware, deleteUserController)

export default userRouters