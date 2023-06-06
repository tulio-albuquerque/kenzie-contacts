import { z } from "zod"
import { returnReportSchema } from "../schemas/report.schemas"

type ReportResponse = z.infer<typeof returnReportSchema>

export {
  ReportResponse
}