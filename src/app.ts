/** @format */

import express from 'express'
import { Express } from 'express-serve-static-core'
import { auth } from 'express-openid-connect'
import * as dotenv from 'dotenv'
import loggerMiddleware from './middleware/logger.middleware'
import membershipRoutes from './routes/membership.routes'
import authRoutes from './routes/auth.routes'
import config from './config/auth.config'
dotenv.config({ debug: true })

const app = express()

//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Auth0
app.use(auth(config))

//Routes
app.use(membershipRoutes)
app.use(authRoutes)

//Middleware
app.use(loggerMiddleware)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`🚀 🚀 Server started on port ${PORT} 🚀 🚀`))
