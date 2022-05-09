import { Knex } from 'knex'
import { KnexDatabase } from '../database'
import { TableName } from '../tables'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable(TableName.addresses, (table) => {
    table.uuid('id').primary().defaultTo(KnexDatabase.postgresUUIDV4(knex))
    table.string('name').notNullable()
    table.string('country').notNullable()
    table.string('state').notNullable()
    table.string('city').notNullable()
    table.string('district').notNullable()
    table.string('street').notNullable()
    table.string('number').notNullable()
    table.string('latitude').notNullable()
    table.string('longitude').notNullable()

    table.string('complement').nullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable(TableName.addresses)
}
