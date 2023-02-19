import { Request, Response, NextFunction } from 'express'

export default function logUserIn(req: Request, res: Response, next: NextFunction) {
  console.log('Inside login controller')
  res.send(req.oidc.isAuthenticated() ? 'Logged In' : 'Not Authenticated')
}
