<template>
  <div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
    <div class="container m-auto text-gray-600">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Appels d’offres et appels à projets
      </p>
      <p class="mx-auto mt-5 text-xl text-subtitlegray">
        La CCI Bénin vous informe des opportunités d’affaires localisées au Bénin. Retrouvez
        tous les appels à concurrence, communiqués et appels à candidatures.
      </p>
      <hr class="separation mt-5">
      <div class="grid gap-5 lg:grid-cols-2 mt-12">
        <div class="p-1 group sm:flex space-x-6 bg-white bg-opacity-50 mb-5" v-for="(el, index) in appels_offres" :key="index">
          <!--<img
          :src="el.photo"
            alt="art cover"
            loading="lazy"
            class="h-56 rounded sm:h-[208px] w-full sm:w-[200px] object-cover object-top transition duration-500"
          />-->
          <div class="pl-0">
            <div class="space-y-2">
              <div class="space-y-4">
                <span
                  class="inline-flex items-center rounded-full bg-primaryInfo px-2.5 py-0.5 text-xs font-medium text-primary"
                  >{{el.title}}</span
                >
                <p class="text-dark text-sm">
                  Publié le {{el.start_date}} - Prend fin le {{el.end_date}}
                </p>

                <h4 class="text-xl font-semibold text-cyan-900">
                  {{el.short_content}}
                </h4>
              </div>
              <!--<a :href="configs.image_url + '/' + el.document" target="_blank" class="block text-base w-max text-primary">Télécharger</a>-->
              <a href="#" class="block text-base w-max text-primary">En savoir plus →</a>
            </div>
          </div>
        </div>
      </div>
      <div class="tracking-tight mt-8 text-left text-dark">
        <span class="block sm:ml-2 sm:inline-block">
          <a @click="$router.push({ name: 'appels-offres' })" class="text-primary">
            Voir tous appels d'offres / projets <span aria-hidden="true">&rarr;</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
  props: {
    appels_offres: {
      type: [Array, Number],
      dafault: () => []
    },
  }
 }
</script>
<style>
  .separation {
    border: 1px solid #E5E5E5 !important;
    background: #E5E5E5 !important;
  }
</style>
