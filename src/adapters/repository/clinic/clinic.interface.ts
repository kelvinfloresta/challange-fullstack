import { CreateRepository, Id } from '../repository.interface'

export interface ClinicBusinessData extends Id {
  readonly name: string
  readonly document: string
  readonly address: {
    readonly country: string
    readonly state: string
    readonly city: string
    readonly district: string
    readonly street: string
    readonly number: string
    readonly complement: string
    readonly latitude: string
    readonly longitude: string
  }
}

export type CreateClinicRepositoryInput = Pick<ClinicBusinessData, 'name' | 'document' | 'address'>

export interface ClinicRepository
  extends CreateRepository<CreateClinicRepositoryInput>
{ }
