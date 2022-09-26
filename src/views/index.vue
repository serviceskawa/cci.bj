<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div>
      <div class="relative">
        <carousel :slides="slides" :interval="5000" controls indicators></carousel>
      </div>
    </div>
    <div class="px-10 lg:px-20">
      <Offres />

    </div>
    <Blog />

    <div class="px-10 lg:px-20">
      <Indicateur />
      <Services />
    </div>
    <div class="px-10 lg:px-20">
      <Agenda :agenda_data="3" isNotFull />
      <AppelsOffresBox />
      <Partenaires />
    </div>

    <!-- end appels d'offres -->

    <!-- devenir partenaires -->

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
    NewsLettersBox,
  },
  data: () => ({
    commits: null,
    services: null,
    events: null,
    setting: null,
    slides: [
      "src/assets/agenda.jpeg",
      "src/assets/actu_one.jpeg",
      "src/assets/actu_two.jpeg",
      "src/assets/actu_three.jpeg",
      "src/assets/images/financement.jpeg",
    ],
  }),

  created() {
  },
  watch: {
  },

  methods: {
  },
};
</script>

<style>
.bg-back {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) !important;
}
</style>
