import axios from 'axios'
import store from '@/store'
import Cookies from 'js-cookie'
import router from '@/router'
// Backend HTTP client
const client = axios.create({
  // baseURL: process.env.API_BASE_URL
  // baseURL: 'https://projet-sac-backend.africanode.com/',
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 80000

})


client.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (401 === error.response.status && error.response.data.message === 'Expired JWT Token') {
    store.dispatch('auth/logOut')
    router.push({ name: 'login' })
  } else {
    return Promise.reject(error);
  }
});


export function setToken(token) {
  if (token) {
    client.defaults.headers['Authorization'] = `Bearer ${token}`
  }
}


export function setCookies(cookie_name, cookies, life_time_secondes,) {
  var expire_date = new Date(new Date().getTime() + life_time_secondes * 1000)
  Cookies.set(`${cookie_name}`, cookies, {
    expires: expire_date, sameSite: 'None', secure: true
  })
}
export function getCookies(cookies_name) {
  return Cookies.get(`${cookies_name}`)
}

export function deleteCookies(cookies_name) {
  return Cookies.remove(`${cookies_name}`)
}

export default client

export const clientInstall = {
  install(Vue) {
    Vue.prototype.$client = client
  }
}
