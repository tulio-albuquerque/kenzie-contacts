import { Router } from "express"

import {
  deleteUserController
} from "../controllers/users.controllers"
import {
  createContactController,
  deleteContactController,
  listContactsController,
  patchContactController
} from "../controllers/contacts.controllers"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middlewares"
import { createContactSchema, updateContactSchema } from "../schemas/contacts.schemas"
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares"
import ensureUniqueContactMiddleware from "../middlewares/ensureUniqueContact.middlewares copy"
import ensureIsAuthorizedMiddleware from "../middlewares/ensureIsAuthorized.middleware"

const contactRouters = Router()

// TODO: Routes
contactRouters.post("", ensureTokenIsValidMiddleware, ensureIsAuthorizedMiddleware, ensureDataIsValidMiddleware(createContactSchema), ensureUniqueContactMiddleware, createContactController)
contactRouters.get("", ensureTokenIsValidMiddleware, ensureIsAuthorizedMiddleware, listContactsController)
contactRouters.patch("/:contactId", ensureTokenIsValidMiddleware, ensureIsAuthorizedMiddleware, ensureDataIsValidMiddleware(updateContactSchema), patchContactController)

contactRouters.delete("/:contactId", ensureTokenIsValidMiddleware, ensureIsAuthorizedMiddleware, deleteContactController)

export default contactRouters