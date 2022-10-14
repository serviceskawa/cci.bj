<template>
  <div class="relative bg-gris md:px-10 lg:px-20">
    <div class="absolute inset-0">
      <div class="h-1/3 sm:h-2/3" />
    </div>
    <div class="relative mx-auto py-12 lg:py-16">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
          Nos actualités
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-lg text-subtitlegray sm:mt-4">
          Ne ratez aucune opportunité - Ne manquez aucun événement de la Chambre de
          Commerce et d’Industrie du Bénin
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <ArticleCard v-for="n in news" :key="n.id" :branch="n" />
      </div>
      <div class="mt-12 flex justify-between items-center flex-wrap">
        <div class="px-3 lg:px-0">
          <span class="block sm:ml-2 sm:inline-block">
            <a @click="$router.push({name: 'blog-articles'})" class="text-primary">
              Voir toute l'actualité<span aria-hidden="true">&rarr;</span></a
            >
          </span>
        </div>
        <div class="flex" v-if="news.length > 3">
          <a href="#" class="mr-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="23.5901"
                y="24"
                width="23.41"
                height="24"
                rx="11.705"
                transform="rotate(-180 23.5901 24)"
                fill="#E9E9E9"
              />
              <path
                d="M14.1801 18L15.5901 16.59L11.0101 12L15.5901 7.41L14.1801 6L8.18009 12L14.1801 18Z"
                fill="#F7F9F9"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.590088" width="23.41" height="24" rx="11.705" fill="#FAE8E0" />
              <path
                d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z"
                fill="#DD7A4B"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleCard from "@/components/ArticleCard.vue";
import ActuOne from "@/assets/actu_one.jpeg";
import ActuTwo from "@/assets/actu_two.jpeg";
import ActuThree from "@/assets/actu_three.jpeg";
export default {
  components: {
    ArticleCard,
  },
  data: () => ({
    news: [
    ],
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

  methods: {},
};
</script>

<style></style>
