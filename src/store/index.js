
import { createStore } from "vuex";

const store = createStore({
  state: {
    app_ready: false,
    news: [],
    show_alert: true,
    configs: {},
    faqs: [],
    home_elements: {},
    current_notif_message: "",
    categories: []
  },
  getters: {},
  actions: {
  },
  mutations: {
  },
  modules: {},
});

export default store;
