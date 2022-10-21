import { createApp } from "vue";
import router from './router'
import store from "./store";
import VueSocialSharing from 'vue-social-sharing'
import "./styles/main.scss";
import "flowbite";
import App from "./App.vue";
createApp(App).use(VueSocialSharing)
createApp(App).use(router).use(store).mount("#app");
