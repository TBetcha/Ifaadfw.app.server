import auth from 'express'
import * as dotenv from 'dotenv'

dotenv.config({ debug: true })
const config = {
  authRequired: true,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: process.env.AUTH_BASE_URL,
  clientID: process.env.AUTH_CLIENT_ID,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
}

export default config
