import Ajv, { JSONSchemaType } from 'ajv'
import { BadRequest } from './bad-request.error'

const ajv = new Ajv()
export function Validate<T> (schema: JSONSchemaType<T>) {
  const validate = ajv.compile(schema)

  return function decorator (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    // eslint-disable-next-line no-param-reassign
    descriptor.value = async function withValidate (param: any) {
      const valid = validate(param)
      if (valid) {
        return originalMethod.call(this, param)
      }

      const [firstError] = validate.errors ?? []
      throw new BadRequest(firstError)
    }
  }
}
