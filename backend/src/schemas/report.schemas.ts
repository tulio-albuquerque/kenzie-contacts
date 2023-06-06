import { z } from "zod"
import { returnUserSchema } from "./users.schemas"
import { returnMultipleContactsSchema } from "./contacts.schemas"

const returnReportSchema = returnUserSchema.extend({
  contacts: returnMultipleContactsSchema
}).array()

export {
  returnReportSchema
}