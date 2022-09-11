<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
          Agenda
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-lg text-sp sm:mt-4">
          Retrouvez nos futurs évènements
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div
          v-for="i in 3"
          :key="i"
          :event="event"
          class="flex flex-col rounded-lg shadow overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src="@/assets/images/agenda.jpeg"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white pt-6 px-6 flex flex-col justify-between">
            <div class="flex-1">
              <span
                class="inline-flex items-center px-6 py-1 rounded-full text-sm bg-primaryInfo text-primary"
              >
                Présentiel
              </span>
              <a href="" class="block mt-2 spaxe-y-2">
                <p class="text-base font-semibold text-gray-900">Titre de l’évenement</p>
                <p class="text-base font-medium text-indigo-600">
                  <a href="" class="hover:underline"> 20 - 24 Sept 2022 </a>
                </p>
                <p class="mt-1.5 text-base text-gray-500">
                  Palais de la Marina, Cotonou, Bénin
                </p>
              </a>
            </div>
          </div>
          <div class="tracking-tight bg-white px-6 py-9 text-left text-dark">
            <span class="block sm:inline-block">
              <a href="" class="text-primary">
                Participer <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
        </div>
      </div>
      <div class="tracking-tight mt-12 text-left text-dark">
        <span class="block sm:ml-2 sm:inline-block">
          <a href="" class="text-primary">
            Voir tous les évènements <span aria-hidden="true">&rarr;</span></a
          >
        </span>
      </div>
    </div>
  </div>
</template>
