import knex, { Knex } from 'knex'
import { config } from '../../config'
import { TableName } from './tables'

export class KnexDatabase {
  public connection: Knex
  private readonly allTables: string[]

  constructor (private readonly config: Knex.Config) {
    this.allTables = Object.values(TableName)
  }

  async connect () {
    await this.createDatabase()
    this.connection = this.getConnection()
  }

  private getConnection () {
    return knex(this.config)
  }

  async rebuildDatabase () {
    await this.connection.raw(`DROP DATABASE IF EXISTS ${config.database.name}`)
    await this.connection.raw(`CREATE DATABASE ${config.database.name}`)
  }

  async createDatabase () {
    const conn = knex({
      client: config.database.client,
      connection: {
        host: config.database.host,
        user: config.database.user,
        password: config.database.password
      }
    })

    const result = await conn.raw(
      `SELECT 1 from pg_database WHERE datname='${config.database.name}';`
    )

    if (result.rowCount === 0) {
      await conn.raw(`CREATE DATABASE ${config.database.name}`)
    }

    await conn.destroy()
  }

  async closeDatabase () {
    await this.connection.destroy()
  }

  async cleanDatabase () {
    const promises = this.allTables
      .map((tableName) => this.connection.raw(`TRUNCATE ${tableName} CASCADE`))

    await Promise.all(promises)
  }

  static postgresUUIDV4 (knex: Knex): Knex.Raw {
    return knex.raw('uuid_generate_v4()')
  }
}
