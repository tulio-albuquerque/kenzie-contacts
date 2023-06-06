import { Request, Response } from "express"
import { ReportResponse } from "../interfaces/report.interfaces"
import listReportService from "../services/report/listReportService.services"

const listReportController =
  async (req: Request, res: Response): Promise<Response> => {
    const reportData: ReportResponse = await listReportService()

    return res.status(200).json(reportData)
  }

export {
  listReportController
}