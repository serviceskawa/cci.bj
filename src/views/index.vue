<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div>
      <div class="relative">
        <carousel :slides="slides" :interval="5000" controls indicators></carousel>
      </div>
    </div>
    <Offres />
    <Blog />
    <Indicateur />
    <Services />
    <Agenda />
    <AppelsOffresBox />
    <!-- end appels d'offres -->

    <!-- devenir partenaires -->
    <Partenaires />
    <!-- en partenaires -->
    <NewsLettersBox />
  </main>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import ServiceCard from "@/components/ServiceCard.vue";
import OffreCard from "@/components/OffreCard.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import axiosClient from "@/axios";
import Carousel from "@/components/carousel/Carousel.vue";
import Offres from "@/components/home/Offres.vue";
import Blog from "@/components/home/Blog.vue";
import Indicateur from "@/components/home/Indicateur.vue";
import Services from "@/components/home/Services.vue";
import Agenda from "@/components/home/Agenda.vue";
import Partenaires from "@/components/home/Partenaires.vue";
import AppelsOffresBox from "@/components/home/AppelsOffresBox.vue";
import NewsLettersBox from "@/components/NewsLettersBox.vue";

const NEWS_CAT = `https://6cc4-41-138-89-246.ngrok.io/api/news`;
const services_api = `https://6cc4-41-138-89-246.ngrok.io/api/services`;
const events = `https://6cc4-41-138-89-246.ngrok.io/api/events`;
const setting = `https://6cc4-41-138-89-246.ngrok.io/api/setting`;

export default {
  components: {
    ServiceCard,
    OffreCard,
    ArticleCard,
    Carousel,
    Offres,
    Blog,
    Indicateur,
    Services,
    Agenda,
    Partenaires,
    AppelsOffresBox,
    NewsLettersBox
},
  data: () => ({
    branches: ["main", "v2-compat"],
    currentBranch: "main",
    commits: null,
    services: null,
    events: null,
    setting: null,
    slides: [
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ],
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
.bg-back {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) !important;
}
</style>
