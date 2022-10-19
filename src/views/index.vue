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
      <Agenda :agenda_data="agenda_datas" isNotFull />
      <AppelsOffresBox :appels_offres="appels_offres" />
      <Partenaires :partners="partners" />
    </div>
    <NewsLettersBox id="souscrire"  @sucess="update_notif('success')" @error="update_notif('error')" />
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
    ],
    notif: {
      type: '',
      title: '',
      description: ''
    },
    agenda_datas: [],
    appels_offres: [],
    partners: []
  }),

  mounted() {
    let configs = sessionStorage.getItem('configs')
    if (configs !== undefined && configs !== null) {
      configs = JSON.parse(configs)
    }
    this.slides = this.$store.state.home_elements
    this.slides = this.slides.sliders
    if (this.slides !== undefined) {
      this.slides = this.slides.map((element) => {
        return {
          ...element,
          slide: configs.image_url + '/' + element.photo,
          slide_content: {
            heading: element.heading,
            content: element.content,
            button1_text: element.button1_text,
            button1_url: element.button1_url,
            button2_text: element.button2_text,
            button2_url: element.button2_url
          }
        }
      })
    }
    this.agenda_datas = this.$store.state.home_elements
    if (this.agenda_datas.events !== undefined && this.agenda_datas.events !== null) {
      this.agenda_datas = this.agenda_datas.events
      this.agenda_datas = this.agenda_datas.data.map((element => {
        return {
          ...element,
          photo: configs.image_url + '/' + element.photo,
        }
      }))
    }
    console.log('..... actus ===>', this.agenda_datas)
    this.appels_offres = this.$store.state.home_elements
    if (this.appels_offres.appels !== undefined && this.appels_offres.appels !== null) {
      this.appels_offres = this.appels_offres.appels
      this.appels_offres = this.appels_offres.map((element => {
        return {
          ...element,
          photo: configs.image_url + '/' + element.photo,
        }
      }))
    }
    this.partners = this.$store.state.home_elements
    if (this.partners.partners !== undefined && this.partners.partners !== null) {
      this.partners = this.partners.partners
      this.partners = this.partners.map((element => {
        return {
          ...element,
          photo: configs.image_url + '/' + element.photo,
        }
      })).slice(0, 4)
    }
  },
  watch: {
  },

  methods: {
    update_notif(type) {
      if (type == 'success') {
        this.notif.type = 'success'
        this.notif.title = "Effectuée"
        this.notif.description = this.$store.state.current_notif_message
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
