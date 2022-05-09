import express from 'express'
import { DependencyContainer } from 'tsyringe'
import { ClinicController } from '../adapters/controllers/clinic/clinic.controller'
import { config } from '../config'

export class ExpressHTTPServer {
  constructor (private readonly container: DependencyContainer) {}

  start () {
    const clinic = this.container.resolve(ClinicController)

    express()
      .post('/clinic', clinic.create)
      .listen(config.port, () => console.log(`listening on port: ${config.port}`))
  }
}
