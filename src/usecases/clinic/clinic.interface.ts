export interface ClinicCreateInput {
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
