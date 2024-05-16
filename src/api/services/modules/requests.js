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
  PERSONA,
  PERSONA_BY_ID,
  SEARCH_NEWS,
  APPELS_SEARCH,
  FILES_CATEGORIES,
  DOCUMENTS_FILTERS,
  SEARCH_DOC,
  GET_CATEGORY_FILES_BY_SLUG,
  GET_CATEGORY_BY_SLUG,
  FOOTER
} from '@/api/routes'

export async function home_elements () {
  return await client.get()
}

export async function get_settings () {
  return await client.get(SETTINGS)
}

export async function contact_us (data) {
  return await client.post(CONTACT_US, data)
}

export async function get_faq () {
  return await client.get(FAQS)
}

export async function send_faq_request (data) {
  return await client.post(FAQS, data)
}


export async function get_all_clients () {
  return await client.get(CLIENTS)
}

export async function get_actualites () {
  return await client.get(ACTUALITES)
}

export async function get_all_services () {
  return await client.get(SERVICES)
}

export async function subscribe_newsletter (email) {
  return await client.post(SUBSCRIBE_NEWSLETTERS, email)
}

export async function get_notifcations () {
  return await client.get(NOTIFICATIONS)
}

export async function get_articles_by_categories () {
  return await client.get(ARTICLES_BY_CATEGORY)
}

export async function get_agenda_datas (current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${EVENTS}`)
  }
  return await client.get(`${EVENTS}/?page=${current_page}`)
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

export async function get_category_by_slug (slug,current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${GET_CATEGORY_BY_SLUG}${slug}`)
  }
  return await client.get(`${GET_CATEGORY_BY_SLUG}${slug}?page=${current_page}`)
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

export async function search_an_article (value, current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${SEARCH_NEWS}/${value}`)
  }
  return await client.get(`${SEARCH_NEWS}/${value}?page=${current_page}`)
}

export async function search_appels (value, current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${APPELS_SEARCH}/${value}`)
  }
  return await client.get(`${APPELS_SEARCH}/${value}?page=${current_page}`)
}

export async function getPersona_by_id(id, current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${PERSONA_BY_ID}` + id)
  }
  return await client.get(`${PERSONA_BY_ID}`+ id +`?page=${current_page}`)
}

export async function getCategory_by_slug(slug, current_page) {
  if (current_page == 1 || current_page == undefined) {
    return await client.get(`${GET_CATEGORY_FILES_BY_SLUG}` + slug)
  }
  return await client.get(`${GET_CATEGORY_FILES_BY_SLUG}`+ slug +`?page=${current_page}`)
}

export async function get_documents_categories () {
  return await client.get(FILES_CATEGORIES)
}

export async function apply_docs_filters (data) {
  return await client.post(DOCUMENTS_FILTERS, data)
}

export async function search_doc (value, current_page) {
  return await client.get(`${SEARCH_DOC}`+ value + `?page=${current_page}`)
}

export async function get_footer () {
  return await client.get(FOOTER)
}