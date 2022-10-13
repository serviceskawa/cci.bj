<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <Notifications :notif="notif" v-if="notif.type !== ''" @close="notif.type = ''" />
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
    <NewsLettersBox @sucess="update_notif('success')" @error="update_notif('error')" />
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
import Notifications from "@/components/Notifications.vue";
import AgendaAss from '@/assets/agenda.jpeg'
import ActuOne from '@/assets/actu_one.jpeg'
import ActuTwo from '@/assets/actu_two.jpeg'
import ActuThree from '@/assets/actu_three.jpeg'
import Financement from '@/assets/images/financement.jpeg'
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
    Notifications,
    AgendaAss,
    ActuOne,
    ActuTwo,
    ActuThree,
    Financement
  },
  data: () => ({
    commits: null,
    services: null,
    events: null,
    setting: null,
    slides: [
    AgendaAss,
    ActuOne,
    ActuTwo,
    ActuThree,
    Financement
    ],
    notif: {
      type: '',
      title: '',
      description: ''
    }
  }),

  created() {
  },
  watch: {
  },

  methods: {
    update_notif(type) {
      if (type == 'success') {
        this.notif.type = 'success'
        this.notif.title = "Effectuée"
        this.notif.description = "Votre requête a été transmise avec succès."
      } else {
        this.notif.type = 'error'
        this.notif.title = "Erreur"
        this.notif.description = "Une erreur s'est produite. Veuillez réessayer."
      }
      setTimeout(() => {
        this.notif.type = ''
      }, 6000)
    }
  },
};
</script>

<style>
.bg-back {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) !important;
}
</style>
