import { config as envConfig } from '../../config'

interface IConnection {
  client: string
  connection: {
    host: string
    user: string
    password: string
    database: string
    charset: string
    debug: boolean
  }
  pool: { min: number, max: number }
  migrations: {
    tableName: string
    extension: string
  }
}

interface IConfig {
  test: IConnection
  production: IConnection
}

const { database } = envConfig

const config: IConfig = {
  test: {
    client: 'pg',
    connection: {
      host: database.host,
      user: database.user,
      password: database.password,
      database: database.name,
      debug: false,
      charset: 'utf8'
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: database.host,
      user: database.user,
      password: database.password,
      database: database.name,
      debug: false,
      charset: 'utf8'
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts'
    }
  }
}

export = config
