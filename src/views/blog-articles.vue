<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <Notifications :notif="notif" v-if="notif.type !== ''" @close="notif.type = ''" />
    <div class="barner flex items-center p-4 md:px-10 lg:px-20">
      <div>
        <h6
          class="text-primary text-base leading-6 font-semibold tracking-wide uppercase"
        >
          Le blog
        </h6>
        <h1 class="text-primary text-4xl leading-none font-extrabold tracking-tight">
          <span class="text-white">une CCI au service de votre </span> <br />
          stratégie à l'international
        </h1>
        <p class="text-white text-xl leading-7 font-normal mt-5">
          Sagittis scelerisque nulla cursus in enim consectetur quam. <br />
          Dictum urna sed consectetur neque tristique pellentesque. <br />
          Blandit amet, sed aenean erat arcu morbi.
        </p>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
      <div class="mx-auto pb-10 flex justify-center flex-wrap items-center">
        <div class="relative mr-2 sm:mr-5 mb-3">
          <input
            type="text"
            class="w-full py-2 px-8 text-base focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none"
            placeholder="Rechercher un mot clé"
          />
          <svg
            class="absolute left-2 top-2.5"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>
        <button class="btn bg-white text-primary mb-3">Filtrer</button>
      </div>
      <div class="mb-16">
        <h1 class="text-blue text-3xl leading-10 font-extrabold tracking-tight mb-3">
          Notre sélection d’articles sur l’entreprenariat
        </h1>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard class="mb-8" v-for="n in news" :key="n.id" :branch="n"  />
        </div>
      </div>
      <div class="mb-16">
        <h1 class="text-blue text-3xl leading-10 font-extrabold tracking-tight mb-3">
          Les dernières actu-ecobusiness
        </h1>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="n in news" :key="n.id" :branch="n"  />
        </div>
      </div>
      <div class="mb-16">
        <h1 class="text-blue text-3xl leading-10 font-extrabold tracking-tight mb-3">
          Actu-Entreprise
        </h1>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="n in news" :key="n.id" :branch="n"  />
        </div>
      </div>
    </div>
    <NewsLettersBox @sucess="update_notif('success')" @error="update_notif('error')" />
  </main>
</template>

<script>
import NewsLettersBox from "@/components/NewsLettersBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import ActuOne from "@/assets/actu_one.jpeg";
import ActuTwo from "@/assets/actu_two.jpeg";
import ActuThree from "@/assets/actu_three.jpeg";
import Notifications from "@/components/Notifications.vue";
export default {
  components: {
    NewsLettersBox,
    ArticleCard,
    NewsLettersBox,
    Notifications
  },
  data: () => ({
    notif: {
      type: '',
      title: '',
      description: '',
      news: [
    ],
    },
  }),
  
  created() {
    let configs = sessionStorage.getItem('configs')
    if (configs !== undefined && configs !== null) {
      configs = JSON.parse(configs)
    }
    if ( this.$store.state.home_elements.news !== undefined &&  this.$store.state.home_elements.news !== undefined)  {
      let news = this.$store.state.home_elements.news
      news = news.data.map((element) => {
        return {
          ...element,
          cover: configs.image_url + '/' + element.photo,
        }
      })
      this.news = news.slice(0, 3)
    } 
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

<style scoped>
.barner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/actu_one.jpeg");
  height: 600px !important;
  background-position: center !important;
}
.partenaire {
  height: 140px !important;
}
input {
  min-width: 280px !important;
  max-width: 420px !important;
}
input,
button {
  height: 40px !important;
}
</style>
