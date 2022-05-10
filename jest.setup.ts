import 'reflect-metadata'
import { testDatabase } from './src/__fixtures__/database.fixtures'
import { registerRepository, registerTest } from './src/frameworks/di'

registerTest()
registerRepository()

beforeAll(async () => {
  await testDatabase.connect()
})

beforeEach(async () => {
  await testDatabase.cleanDatabase()
})

afterAll(async () => {
  await testDatabase.closeDatabase()
})
