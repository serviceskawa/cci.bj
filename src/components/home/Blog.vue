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
        <ArticleCard v-for="branch in commits" :key="branch.id" :branch="branch" />
      </div>
      <div class="mt-12 flex justify-between items-center flex-wrap">
        <div>
          <span class="block sm:ml-2 sm:inline-block">
            <a href="" class="text-primary">
              Voir toute l'actualité<span aria-hidden="true">&rarr;</span></a
            >
          </span>
        </div>
        <div class="flex">
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
    commits: [
      {
        cover: ActuTwo,
        news_publication_date: "20/02/2022",
        title: "6 eme édition du world Cooperation Industries Forum (WCI FORUM)",
        short_content:
          "Il se tient depuis ce mercredi 16 mars 2022 à Ankara en Turquie, la 6ème édition du World Cooperation Industries Forum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
      },
      {
        cover: ActuOne,
        news_publication_date: "20/02/2022",
        title: "6 eme édition du world Cooperation Industries Forum (WCI FORUM)",
        short_content:
          "Il se tient depuis ce mercredi 16 mars 2022 à Ankara en Turquie, la 6ème édition du World Cooperation Industries Forum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
      },
      {
        cover: ActuThree,
        news_publication_date: "20/02/2022",
        title: "6 eme édition du world Cooperation Industries Forum (WCI FORUM)",
        short_content:
          "Il se tient depuis ce mercredi 16 mars 2022 à Ankara en Turquie, la 6ème édition du World Cooperation Industries Forum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
      },
    ],
  }),

  created() {},

  methods: {},
};
</script>

<style></style>
