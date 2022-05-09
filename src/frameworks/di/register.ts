import { ClinicRepositoryImpl } from '../../adapters/repository/clinic/clinic.repository'
import { TYPES } from './types'
import { container } from 'tsyringe'
import { KnexDatabase } from '../database/database'
import { testDatabase } from '../../__fixtures__/database.fixtures'
import { productionDatabase } from '../../adapters/repository/respository'

export function registerRepository () {
  container.register(TYPES.ClinicRepository, {
    useClass: ClinicRepositoryImpl
  })
}

export function registerProduction () {
  container.register(KnexDatabase, {
    useValue: productionDatabase
  })
}

export function registerTest () {
  container.register(KnexDatabase, {
    useValue: testDatabase
  })
}
