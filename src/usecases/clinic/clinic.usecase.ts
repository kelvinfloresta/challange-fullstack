import { inject, injectable } from '../../frameworks/di'
import { ClinicRepository } from '../../adapters/repository/clinic/clinic.interface'
import { TYPES } from '../../frameworks/di/types'
import { ClinicCreateInput } from './clinic.interface'

@injectable()
export class ClinicCase {
  constructor (@inject(TYPES.ClinicRepository) private readonly repository: ClinicRepository) {}

  async create (input: ClinicCreateInput) {
    return await this.repository.create(input)
  }

  async getById (id: string) {
    return await this.repository.getById({ id })
  }
}
