<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div>
      <!-- Hero card -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="">
          <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <carousel :items-to-show="1">
              <slide v-for="slide in 10" :key="slide">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div class="absolute inset-0 bg-primary mix-blend-multiply" />
                </div>
                <div
                  class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
                >
                  <h1
                    class="text-left text-4xl font-bold tracking-tight w-50 sm:text-5xl lg:text-6xl"
                  >
                    <span class="block text-white"
                      >Benin Investment Forum 2022</span
                    >
                    <span class="block text-primary">customer support</span>
                  </h1>
                  <p
                    class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div
                    class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                  >
                    <div class="rounded-md shadow">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white md:py-4 md:text-lg md:px-10"
                      >
                        Live demo {{ slide }}
                      </a>
                    </div>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog section -->
    <div class="relative bg-gris">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3" />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <div class="text-center">
          <h2
            class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl"
          >
            Nos actualités
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
            Ne ratez aucune opportunité - Ne manquez aucun événement de la
            Chambre de Commerce et d’Industrie du Bénin
          </p>
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <ArticleCard
            v-for="branch in commits"
            :key="branch.id"
            :branch="branch"
          />
        </div>
      </div>
    </div>
    <!-- end blog section -->
  </main>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import ServiceCard from "../components/ServiceCard.vue";
import OffreCard from "../components/OffreCard.vue";
import ArticleCard from "../components/ArticleCard.vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import axiosClient from "../axios";

const NEWS_CAT = `http://localhost/cciwebsite/public/api/news`;
const services_api = `http://localhost/cciwebsite/public/api/services`;
const events = `http://localhost/cciwebsite/public/api/events`;
const setting = `http://localhost/cciwebsite/public/api/setting`;

export default {
  name: "Blog",
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

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  /* display: flex; */
  justify-content: left;
  align-items: left;
}

.carousel__slide {
  padding: 10px;
  display: block;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__pagination-button {
  background-color: black !important;
  margin-top: -32px;
}
</style>
