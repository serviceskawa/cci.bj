<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div>
      <!-- Hero card -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="">
          <div class="relative sm:overflow-hidden">
            <div class="absolute inset-0">
              <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div class="absolute inset-0 bgHeader mix-blend-multiply" />
            </div>
            <div
              class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8"
            >
              <span class="block text-primary"></span>

              <h1
                class="text-left text-4xl font-bold tracking-tight w-50 sm:text-5xl lg:text-6xl"
              >
                <span class="block text-white"></span>
                <span class="block text-primary"></span>
              </h1>
              <p
                class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-start">
      <ul
        class="nav nav-pills flex flex-col flex-wrap list-none pl-0 mr-4"
        id="pills-tabVertical"
        role="tablist"
      >
        <li class="nav-item flex-grow text-center mb-2" role="presentation">
          <a
            href="#pills-homeVertical"
            class="nav-link block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0 active"
            id="pills-home-tabVertical"
            data-bs-toggle="pill"
            data-bs-target="#pills-homeVertical"
            role="tab"
            aria-controls="pills-homeVertical"
            aria-selected="true"
            >Home</a
          >
        </li>
        <li class="nav-item flex-grow text-center my-2" role="presentation">
          <a
            href="#pills-profileVertical"
            class="nav-link block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0"
            id="pills-profile-tabVertical"
            data-bs-toggle="pill"
            data-bs-target="#pills-profileVertical"
            role="tab"
            aria-controls="pills-profileVertical"
            aria-selected="false"
            >Profile</a
          >
        </li>
        <li class="nav-item flex-grow text-center my-2" role="presentation">
          <a
            href="#pills-contactVertical"
            class="nav-link block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0"
            id="pills-contact-tabVertical"
            data-bs-toggle="pill"
            data-bs-target="#pills-contactVertical"
            role="tab"
            aria-controls="pills-contactVertical"
            aria-selected="false"
            >Contact</a
          >
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContentVertical">
        <div
          class="tab-pane fade show active"
          id="pills-homeVertical"
          role="tabpanel"
          aria-labelledby="pills-home-tabVertical"
        >
          Tab 1 content vertical
        </div>
        <div
          class="tab-pane fade"
          id="pills-profileVertical"
          role="tabpanel"
          aria-labelledby="pills-profile-tabVertical"
        >
          Tab 2 content vertical
        </div>
        <div
          class="tab-pane fade"
          id="pills-contactVertical"
          role="tabpanel"
          aria-labelledby="pills-contact-tabVertical"
        >
          Tab 3 content vertical
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import ServiceCard from "../components/ServiceCard.vue";
import OffreCard from "../components/OffreCard.vue";
import ArticleCard from "../components/ArticleCard.vue";
import axiosClient from "../axios";

const NEWS_CAT = `http://localhost/cciwebsite/public/api/news`;
const services_api = `http://localhost/cciwebsite/public/api/services`;
const events = `http://localhost/cciwebsite/public/api/events`;
const setting = `http://localhost/cciwebsite/public/api/setting`;

export default {
  name: "Macci",
  components: {
    ServiceCard,
    OffreCard,
    ArticleCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    branches: ["main", "v2-compat"],
    currentBranch: "main",
    commits: null,
    services: null,
    events: null,
    setting: null,
  }),

  created() {
    // fetch on init
    this.fetchData();
  },
  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: "fetchData",
  },

  methods: {
    async fetchData() {
      const url = `${NEWS_CAT}`;
      this.commits = await (await fetch(url)).json();
      console.log(this.commits);
    },
    async fetchServices() {
      const url = `${services_api}`;
      this.services = await (await fetch(url)).json();
      console.log(this.services);
    },
    async fetchEvents() {
      const url = `${events}`;
      this.events = await (await fetch(url)).json();
      console.log(this.events);
    },
    async fetchSetting() {
      const url = `${setting}`;
      this.setting = await (await fetch(url)).json();
      console.log(this.setting);
    },
  },
};
</script>
