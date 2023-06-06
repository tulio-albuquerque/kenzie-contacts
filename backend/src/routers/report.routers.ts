import { Router } from "express"
import { createLoginController } from "../controllers/login.controllers"
import { ensureDataIsValidMiddleware, ensureTokenIsValidMiddleware } from "../middlewares"
import { createLoginSchema } from "../schemas/login.schemas"
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware"
import { listReportController } from "../controllers/report.controllers"

const reportRouters = Router()

reportRouters.get("", ensureTokenIsValidMiddleware, ensureIsAdminMiddleware, listReportController)

export default reportRouters