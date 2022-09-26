<template>
  <div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
    <div class="container m-auto text-gray-600">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Appels d’offres et appels à projets
      </p>
      <p class="mx-auto mt-5 text-xl text-subtitlegray">
        La CCIB vous informe des opportunités d’affaires localisées au Bénin. Retrouvez
        tous les appels à concurrence, communiqués et appels à candidatures.
      </p>
      <hr class="separation mt-5">
      <div class="grid gap-5 lg:grid-cols-2 mt-12">
        <div class="p-1 group sm:flex space-x-6 bg-white bg-opacity-50 mb-5" v-for="(el, index) in 4" :key="index">
          <img
            src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
            alt="art cover"
            loading="lazy"
            class="h-56 sm:h-[208px] w-full sm:w-[200px] object-cover object-top transition duration-500"
          />
          <div class="pl-0">
            <div class="space-y-2">
              <div class="space-y-4">
                <span
                  class="inline-flex items-center rounded-full bg-primaryInfo px-2.5 py-0.5 text-xs font-medium text-primary"
                  >Appel d'offres</span
                >
                <p class="text-dark text-sm">
                  Publié le 23 Mars 2022 - Prend fin le 05 Avril 2022
                </p>

                <h4 class="text-xl font-semibold text-cyan-900">
                  Concours de recrutement de 662 aspirants pour la formation d'enseignants
                  au profit des Lycées techniques agricoles
                </h4>
              </div>
              <a href="#" class="block text-base w-max text-primary">En savoir plus →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .separation {
    border: 1px solid #E5E5E5 !important;
    background: #E5E5E5 !important;
  }
</style>
