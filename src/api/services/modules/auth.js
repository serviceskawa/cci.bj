import client from '@/api/client'
import {
  AUTH_LOGIN
} from '@/api/routes'

export async function login (credentials) {
  const response = await client.post(AUTH_LOGIN, credentials)
  return response
}