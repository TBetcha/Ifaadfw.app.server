/** @format */

import express from 'express'
import requestLogger from '../middleware/logger.middleware'
import { findUserById, signUp } from '../controllers/membership.controllers'

const router = express.Router()

router.get('/membership-form', (req, res, next) => {
  requestLogger(req, res, next)
  console.log('membership')
  res.send('<h1>Downloading mmebership form<h1>')
})

router.post('/member', [requestLogger], signUp)
router.get('/member/:userId', [requestLogger], findUserById)

export default router
