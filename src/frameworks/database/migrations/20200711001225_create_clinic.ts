import { Knex } from 'knex'
import { KnexDatabase } from '../database'
import { TableName } from '../tables'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable(TableName.clinics, (table) => {
    table.uuid('id').primary().defaultTo(KnexDatabase.postgresUUIDV4(knex))
    table.string('name').notNullable()
    table.string('document').notNullable()
    table.uuid('addressId').notNullable()
    table.foreign('addressId').references('id').inTable(TableName.addresses)
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable(TableName.clinics)
}
