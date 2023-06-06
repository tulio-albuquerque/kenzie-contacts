import { Repository } from "typeorm"
import User from "../../entities/users.entity"
import { AppDataSource } from "../../data-source"
import { ReportResponse } from "../../interfaces/report.interfaces"
import { returnReportSchema } from "../../schemas/report.schemas"
import { UserResponse } from "../../interfaces/users.interfaces"
import { returnUserSchema } from "../../schemas/users.schemas"

const listReportService = async (): Promise<ReportResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const findUsers: User[] = await userRepo.find({
    relations: {
      contacts: true
    }
  })

  console.log(findUsers)

  return returnReportSchema.parse(findUsers)
}

export default listReportService