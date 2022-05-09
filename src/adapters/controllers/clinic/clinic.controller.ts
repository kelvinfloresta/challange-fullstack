
import { Request, Response } from 'express'
import { injectable } from '../../../frameworks/di'
import { ClinicCreateInput } from '../../../usecases/clinic/clinic.interface'
import { ClinicCase } from '../../../usecases/clinic/clinic.usecase'

@injectable()
export class ClinicController {
  constructor (private readonly clinicCase: ClinicCase) {}

  async create (
    req: Request<ClinicCreateInput>,
    res: Response<string>
  ) {
    const id = await this.clinicCase.create(req.body)

    res.status(201).send(id)
  }
}
