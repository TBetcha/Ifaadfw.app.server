/** @format */

import requestLogger from '../middleware/logger.middleware'

import { NextFunction, Request, Response } from 'express'
import { IUser } from '../interfaces/user.interface'
import { Client, Pool } from 'pg'
const db = require('../config/db.config')

export function signUp(request: Request, response: Response, next: NextFunction) {
  console.log('inside signup controller')
  try {
    const userRecord: IUser = request.body
    console.log(`user record: ${userRecord.firstName}`)
    const queryText =
      'INSERT INTO users(first_name,last_name,email,birthday ) VALUES($1,$2,$3,$4) RETURNING *'
    const values = [
      userRecord.firstName,
      userRecord.lastName,
      userRecord.email,
      userRecord.birthday,
    ]

    db.query(queryText, values, (err: any, result: { rows: any[] }) => {
      if (err) {
        return next(err)
      }
      response.send(result.rows[0])
    })
  } catch (e) {
    e
  }
}
