import 'reflect-metadata'
import { container } from 'tsyringe'
import { KnexDatabase } from './frameworks/database/database'
import { registerProduction, registerRepository } from './frameworks/di/register'
import { ExpressHTTPServer } from './frameworks/http'

async function main () {
  registerRepository()
  registerProduction()

  const db = container.resolve(KnexDatabase)
  const http = new ExpressHTTPServer(container)

  await db.connect()
  http.start()
}

main().catch(err => {
  console.error('Failed to start:')
  console.error(err)
})
