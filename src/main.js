import { createApp } from "vue";
import router from './router'
import store from "./store";
import "./styles/main.scss";
import "flowbite";
import VueGtag from "vue-gtag";
import App from "./App.vue";
const app = createApp(App)
app.use(router)
app.use(VueGtag, {
    config: { id: import.meta.env.GOOGLE_ANALYTICS_ID },
    params: {
        anonymize_ip: true
    }
},router)
app.use(store)
app.mount("#app")
