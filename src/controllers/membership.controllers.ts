/** @format */

import { NextFunction, Request, Response } from 'express'
import { IUser } from '../interfaces/user.interface'
const db = require('../config/db.config')

export function signUp(req: Request, res: Response, next: NextFunction) {
  console.log('inside signup controller')
  try {
    const userRecord: IUser = req.body
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
      res.send(result.rows[0])
    })
  } catch (e) {
    e
  }
}

export function findUserById(req: Request, res: Response, next: NextFunction) {
  console.log('inside findUserById controller')
  try {
    const id = req.params.userId
    const queryText = 'SELECT * FROM users WHERE user_id=$1'
    const values = [id]

    db.query(queryText, values, (err: any, result: { rows: any[] }) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows[0])
    })
  } catch (e) {
    e
  }
}
