import axios from 'axios'
// Backend HTTP client
const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 80000

})
export default client

export const clientInstall = {
  install(Vue) {
    Vue.prototype.$client = client
  }
}
