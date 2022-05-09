import { injectable } from 'tsyringe'
import { KnexDatabase } from '../../../frameworks/database/database'
import { KnexRepositoryHelper } from '../../../frameworks/database/repository-helper'
import { TableName } from '../../../frameworks/database/tables'
import { ClinicBusinessData, ClinicRepository } from './clinic.interface'

@injectable()
export class ClinicRepositoryImpl extends KnexRepositoryHelper<ClinicBusinessData> implements ClinicRepository {
  constructor (knex: KnexDatabase) {
    super(TableName.clinics, knex)
  }
}
