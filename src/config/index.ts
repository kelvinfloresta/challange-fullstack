import { requireConfig } from './require-config'

export const config = {
  port: requireConfig('PORT')
}
