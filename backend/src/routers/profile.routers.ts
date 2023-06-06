import { Router } from "express"
import { ensureTokenIsValidMiddleware } from "../middlewares"
import ensureIsAuthorizedMiddleware from "../middlewares/ensureIsAuthorized.middleware"
import { retriveProfileController } from "../controllers/profile.controllers"

const profileRouters = Router()

// Gera o token de autenticação
profileRouters.get("", ensureTokenIsValidMiddleware, ensureIsAuthorizedMiddleware, retriveProfileController)

export default profileRouters