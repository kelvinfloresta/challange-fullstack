import { JSONSchemaType } from 'ajv'
import { ClinicCreateInput } from '../../../usecases/clinic/clinic.interface'

const address: JSONSchemaType<ClinicCreateInput['address']> = {
  type: 'object',
  properties: {
    country: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    district: {
      type: 'string'
    },
    street: {
      type: 'string'
    },
    number: {
      type: 'string'
    },
    complement: {
      type: 'string'
    },
    latitude: {
      type: 'string'
    },
    longitude: {
      type: 'string'
    }
  },
  required: [
    'country',
    'state',
    'city',
    'district',
    'street',
    'number',
    'complement',
    'latitude',
    'longitude'
  ]
}

const clinic: JSONSchemaType<ClinicCreateInput> = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    document: {
      type: 'string'
    },
    address
  },
  required: ['name', 'document', 'address']
}

export const ClinicCreateSchema: JSONSchemaType<{body: ClinicCreateInput}> = {
  type: 'object',
  properties: {
    body: clinic
  },
  required: ['body']
}
