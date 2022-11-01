import client from '@/api/client'
import {
  SETTINGS,
  CONTACT_US,
  FAQS,
  ACTUALITES,
  SERVICES,
  CLIENTS,
  SUBSCRIBE_NEWSLETTERS,
  NOTIFICATIONS,
  ARTICLES_BY_CATEGORY,
  EVENTS,
  READ_ARTICLE,
  APPELS_OFFRES,
  CATEGORIES,
  ARTICLES,
  FILES,
  PERSONAS,
  PERSONA
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

export async function get_articles_by_categories () {
  return await client.get(ARTICLES_BY_CATEGORY)
}

export async function get_agenda_datas () {
  return await client.get(EVENTS)
}

export async function get_article_read (slug) {
  return await client.get(`${READ_ARTICLE}` + slug)
}

export async function get_appels_offres () {
  return await client.get(`${APPELS_OFFRES}`)
}
export async function get_categories () {
  return await client.get(`${CATEGORIES}`)
}

export async function getCategory_articles (id, current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${ARTICLES}/${id}`)
  }
  return await client.get(`${ARTICLES}/${id}?page=${current_page}`)
}

export async function get_document_rapports (current_page) {
  if (current_page == 1 || current_page == 1) {
    return await client.get(`${FILES}`)
  }
  return await client.get(`${FILES}?page=${current_page}`)
}

export async function get_personas () {
  return await client.get(`${PERSONAS}`)
}

export async function getPersona_type (slug, current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${PERSONA}` + slug)
  }
  return await client.get(`${PERSONA}`+ slug +`?page=${current_page}`)
}