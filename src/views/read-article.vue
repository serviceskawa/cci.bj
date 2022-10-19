<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <Notifications :notif="notif" v-if="notif.type !== ''" @close="notif.type = ''" />
    <div class="barner flex items-center p-4 md:px-10 lg:px-20">
      <div>
        <h6 class="text-primary text-base leading-6 font-semibold tracking-wide uppercase">
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
      <div class="flex justify-center py-12" v-if="loader == true">
        <div role="status">
          <svg aria-hidden="true" class="w-12 h-12 text-gray animate-spin fill-primary" viewBox="0 0 100 101"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else-if="loader == false">
        <div v-if="current_article.news == undefined">
          <h1 class="">Article non trouvé</h1>
        </div>
        <div v-else>
          <div class="grid grid-cols-7 gap-10">
            <div class="col-span-5">
              <img class="w-full mb-10" :src="configs.image_url+ '/' +current_article.news.banner" alt="">
              <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                <span v-html="current_article.news.content"></span>
              </p>
            </div>
            <div class="col-span-2">
              <ArticleCard class="mb-8" v-for="(article, index) in current_article.recent_news" :key="article.id + index + 'arread' " :branch="article" />
            </div>
          </div>

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
import { services } from "@/api"
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
    },
    loader: false,
    current_article: {},
    configs: ''
  }),

  async created() {
    const slug = this.$route.params['slug']
    this.configs = sessionStorage.getItem('configs')
    if (this.configs !== undefined && this.configs !== null) {
      this.configs = JSON.parse(this.configs)
    }
    this.load_current_article(slug)
  },
  methods: {
    async load_current_article(params) {
      this.loader = true
      try {
        await services.get_article_read(params).then((response) => {
          this.loader = false
          this.current_article = response.data
          this.current_article.recent_news = this.current_article.recent_news.map((element) => {
            return {
              ...element,
              photo: this.configs.image_url + '/' + element.photo,
              banner: this.configs.image_url + '/' + element.bannner
            }
          })
          console.log('ciurrenbt artticle  ==<', this.current_article)
        })
      } catch (error) {
        this.loader = false
      }
    },
    update_notif(type) {
      if (type == 'success') {
        this.notif.type = 'success'
        this.notif.title = "Effectuée"
        this.notif.description = this.$store.state.current_notif_message
        this.notif.type = 'error'
        this.notif.title = "Erreur"
        this.notif.description = "Une erreur s'est produite. Veuillez réessayer."
      }
      setTimeout(() => {
        this.notif.type = ''
      }, 6000)
    }
  },
  watch: {
    '$route.params' () {
      this.load_current_article(this.$route.params.slug)
    }
  }
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
  