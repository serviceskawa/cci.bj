
import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    news: [],
    show_alert: true
  },
  getters: {},
  actions: {
    async fetchNews({ commit }) {
      try {
        const data = await axios.get(axiosClient.baseURL + "news");
        commit("SET_NEWS", data.data);
        console.log(data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  modules: {},
});

export default store;
