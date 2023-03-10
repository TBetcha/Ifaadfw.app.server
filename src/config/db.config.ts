/** @format */

import { Pool } from 'pg'

module.exports = {
  query: (text: any, params: any, callback: any) => {
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: 5432,
    })
    console.log('connected to db')
    return pool.query(text, params, callback)
  },

  getClient: (callback: any) => {
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: 5432,
    })
    pool.connect((err: any, client: any, done: any) => {
      callback(err, client, done)
    })
  },
}
