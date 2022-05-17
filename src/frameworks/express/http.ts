import express from 'express'
import { DependencyContainer } from 'tsyringe'
import { ClinicController } from '../../adapters/controllers/clinic/clinic.controller'
import { config } from '../../config'
import { errorMiddleware } from './error.middleware'
import { wrapAsync } from './wrap-async'

export class ExpressHTTPServer {
  constructor (private readonly container: DependencyContainer) {}

  start () {
    const clinic = this.container.resolve(ClinicController)

    express()
      .post('/clinic', wrapAsync(clinic.create))
      .use(errorMiddleware)
      .listen(config.port, () => console.log(`listening on port: ${config.port}`))
  }
}
