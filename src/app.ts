/** @format */

import express from 'express'
import { Express } from 'express-serve-static-core'
import loggerMiddleware from './middleware/logger.middleware'
import membershipRoutes from './routes/membership.routes'
import * as dotenv from 'dotenv'
dotenv.config({ debug: true })

const app = express()

//body parser
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(membershipRoutes)
app.use(loggerMiddleware)

app.use('/', (req, res) => {
  res.send('<h1>hello bruh<h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`🚀 🚀 Server started on port ${PORT} 🚀 🚀`))
