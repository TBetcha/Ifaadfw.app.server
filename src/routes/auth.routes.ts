import express, { NextFunction } from 'express'
import logUserIn from '../controllers/auth.controllers'
import requestLogger from '../middleware/logger.middleware'

const router = express.Router()

router.use('/login', [requestLogger], logUserIn)

export default router
