import { requireConfig } from './require-config'

export const config = {
  port: requireConfig('PORT'),
  database: {
    client: 'pg',
    name: requireConfig('DATABASE_NAME'),
    host: requireConfig('DATABASE_HOST'),
    user: requireConfig('DATABASE_USER'),
    password: requireConfig('DATABASE_PASSWORD')
  }
}
