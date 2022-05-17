import { Request, Response, NextFunction } from 'express'
import { BadRequest } from '../../adapters/controllers/bad-request.error'

export function errorMiddleware (
  errors: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(errors)
  if (errors instanceof BadRequest) {
    return res.status(400).send(errors)
  }

  res.status(500).send(errors)
}
