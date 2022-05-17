import { ErrorObject } from 'ajv'

export class BadRequest extends Error {
  public readonly name = 'BadRequest'

  constructor (public readonly ajvError: ErrorObject) {
    super(ajvError.message)
  }
}
