import { container } from '../../frameworks/di'
import { ClinicCase } from './clinic.usecase'

function makeSut () {
  return container.resolve(ClinicCase)
}

describe('Clinic Case', () => {
  describe('Create', () => {
    it('Should do happy path', async () => {
      const sut = makeSut()

      const newClinic = {
        name: 'name',
        document: 'document',
        address: {
          country: 'country',
          state: 'state',
          city: 'city',
          district: 'district',
          street: 'street',
          number: 'number',
          complement: 'complement',
          latitude: 'latitude',
          longitude: 'longitude'
        }
      }

      const id = await sut.create(newClinic)

      const found = await sut.getById(id)

      expect(found).toMatchObject(newClinic)
    })
  })

  describe('getById', () => {
    it('Should return undefined if not found', async () => {
      const sut = makeSut()
      const NON_EXISTENT_ID = '00000000-0000-0000-0000-000000000000'
      const clinic = await sut.getById(NON_EXISTENT_ID)
      expect(clinic).toBeUndefined()
    })
  })
})
