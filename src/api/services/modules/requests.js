import client from '@/api/client'
import {
  SETTINGS,
  CONTACT_US,
  FAQS,
  ACTUALITES,
  SERVICES,
  CLIENTS,
  SUBSCRIBE_NEWSLETTERS,
} from '@/api/routes'

export async function home_elements () {
  const response = await client.get()
  return response
}

export async function get_settings () {
  const response = await client.get(SETTINGS)
  return response
}

export async function contact_us (data) {
  const response = await client.post(CONTACT_US, data)
  return response
}

export async function get_faq () {
  const response = await client.get(FAQS)
  return response
}

export async function send_faq_request (data) {
  const response = await client.post(FAQS, data)
  return response
}


export async function get_all_clients () {
  const response = await client.get(CLIENTS)
  return response
}

export async function get_actualites () {
  const response = await client.get(ACTUALITES)
  return response
}

export async function get_all_services () {
  const response = await client.get(SERVICES)
  return response
}

export async function subscribe_newsletter (email) {
  const response = await client.post(SUBSCRIBE_NEWSLETTERS, email)
  return response
}

export async function get_notifcations () {
  return await client.get(NOTIFICATIONS)
}