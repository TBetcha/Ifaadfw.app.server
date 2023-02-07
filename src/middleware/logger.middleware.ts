/** @format */

import dayjs from 'dayjs'
import express, { NextFunction, Request, Response } from 'express'

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.protocol} :// ${req.get('host')} ${req.originalUrl}: ${dayjs().format()}`)
  next()
}

export default loggerMiddleware
