import { ClinicController } from './clinic.controller'
import { mock } from 'jest-mock-extended'
import { ClinicCase } from '../../../usecases/clinic/clinic.usecase'
import { Response } from 'express'
import { BadRequest } from '../bad-request.error'

function makeSut () {
  const clinicCaseMock = mock<ClinicCase>()
  const sut = new ClinicController(clinicCaseMock)
  return { sut, clinicCaseMock }
}

describe('Clinic Controller', () => {
  describe('create', () => {
    it.only('Should send status 400 if body is empty', async () => {
      const { sut } = makeSut()
      const request: any = { body: {} }
      const response = mock<Response>()
      const p = sut.create(request, response)
      await expect(p).rejects.toThrowError(BadRequest)
    })
  })
})
