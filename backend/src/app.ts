import "express-async-errors"
import express, { Application } from "express"
import userRouters from "./routers/users.routers"
import { errorHandler } from "./error"
import loginRouters from "./routers/login.routers"
import contactRouters from "./routers/contacts.routers"
import profileRouters from "./routers/profile.routers"
import reportRouters from "./routers/report.routers"
import cors from "cors"


const app: Application = express()
app.use(cors())
app.use(express.json())

app.use("/api/users", userRouters)
app.use("/api/contacts", contactRouters)
app.use("/api/login", loginRouters)
app.use("/api/profile", profileRouters)
app.use("/api/report", reportRouters)

app.use(errorHandler)

export default app