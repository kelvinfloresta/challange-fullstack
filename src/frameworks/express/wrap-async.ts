import { Request, Response, NextFunction, RequestHandler } from 'express'

type AsyncHandler = (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction
) => Promise<void>

export function wrapAsync (
  fn: AsyncHandler
): RequestHandler {
  return async function (req, res, next) {
    return await fn(req, res, next).catch(next)
  }
}
