import { injectable } from '../../../frameworks/di'
import { KnexDatabase } from '../../../frameworks/database/database'
import { KnexRepositoryHelper } from '../../../frameworks/database/repository-helper'
import { TableName } from '../../../frameworks/database/tables'
import { ClinicBusinessData, ClinicRepository, CreateClinicRepositoryInput } from './clinic.interface'
import { Id } from '../repository.interface'

@injectable()
export class ClinicRepositoryImpl
  extends KnexRepositoryHelper<ClinicBusinessData>
  implements ClinicRepository {
  private readonly addressRepository: KnexRepositoryHelper<ClinicBusinessData['address']>

  constructor (knex: KnexDatabase) {
    super(TableName.clinics, knex)
    this.addressRepository = new KnexRepositoryHelper<ClinicBusinessData['address']>(TableName.addresses, knex)
  }

  async create (input: CreateClinicRepositoryInput) {
    return await this.knex.connection.transaction(async t => {
      const [address] = await this.addressRepository
        .instance
        .transacting(t)
        .insert(input.address)
        .returning('id')

      const clinic = {
        addressId: address.id,
        name: input.name,
        document: input.document
      }

      const [result] = await this.instance
        .transacting(t)
        .insert(clinic)
        .returning('id')

      return result.id
    })
  }

  async getById (input: Id) {
    const found = await this.instance
      .from('clinics AS c')
      .where('c.id', input.id)
      .join('addresses AS a', 'c.addressId', 'a.id')
      .select(
        'c.id', 'c.name', 'c.document', 'a.country',
        'a.state', 'a.city', 'a.district', 'a.street',
        'a.number', 'a.complement', 'a.latitude', 'a.longitude'
      ).first()

    if (found === undefined) {
      return
    }

    const { id, name, document, ...address } = found

    return {
      id,
      name,
      document,
      address
    }
  }
}
