import { Id } from '../../adapters/repository/repository.interface'
import { KnexDatabase } from './database'

export class KnexRepositoryHelper<Entity, TCreateInput = Partial<Entity>, TId = Id> {
  constructor (
    protected tableName: string,
    protected readonly knex: KnexDatabase
  ) {}

  get instance () {
    return this.knex.connection(this.tableName)
  }

  async getById (id: TId): Promise<Entity | undefined> {
    return await this.instance.where(id).first()
  }

  async getByFilter (filter: Partial<Entity>): Promise<Entity | undefined> {
    return await this.instance.where(filter).first()
  }

  async listByFilter (input: Partial<Entity>): Promise<Entity[]> {
    return await this.instance.where(input)
  }

  async create (input: TCreateInput): Promise<string> {
    const [result] = await this.instance.insert(input).returning('id')
    return result
  }

  async updateById (id: TId, input: Partial<Entity>): Promise<number> {
    return await this.instance.update(input).where(id)
  }

  async updateByFilter (filter: Partial<Entity>, input: Partial<Entity>): Promise<boolean> {
    const result = await this.instance.update(input).where(filter)
    return result > 0
  }

  async logicDelete (filter: Partial<Entity>): Promise<boolean> {
    const result = await this.instance
      .where(filter)
      .where({ deletedAt: null })
      .update({ deletedAt: new Date() })

    return result > 0
  }

  async hardDelete (filter: Partial<Entity>): Promise<boolean> {
    const result = await this.instance.where(filter).del()
    return result > 0
  }
}
