import { config } from '../../config'
import { KnexDatabase } from '../../frameworks/database/database'

export const productionDatabase = new KnexDatabase({
  client: config.database.client,
  connection: {
    database: config.database.name,
    host: config.database.host,
    user: config.database.user,
    password: config.database.password
  }
})
