import { config } from '../config'
import { KnexDatabase } from '../frameworks/database/database'

export const testDatabase = new KnexDatabase({
  client: config.database.client,
  connection: {
    database: 'test',
    host: 'localhost',
    user: 'postgres',
    password: 'postgres'
  }
})
