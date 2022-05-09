import { Knex } from 'knex'
import { KnexDatabase } from '../database'

const tableName = 'addresses'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable(tableName, (table) => {
    table.uuid('id').primary().defaultTo(KnexDatabase.postgresUUIDV4(knex))
    table.string('name').notNullable()
    table.string('document').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable(tableName)
}
