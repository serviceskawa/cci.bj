<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="h-1/3 sm:h-2/3" />
    </div>
    <div class="relative">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
          Agenda
        </h2>
        <p class="text-lg text-center tracking-tight leading-7 text-subtitlegray mt-6">
          Retrouvez nos futurs évènements
        </p>
      </div>
      <div class="mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        <div
          v-for="(agen, i) in agenda_data"
          :key="i"
          :event="event"
          class="flex flex-col rounded-lg shadow overflow-hidden mb-4"
        >
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              :src="agen.photo"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white pt-6 px-6 flex flex-col justify-between">
            <div class="flex-1">
              <span
                class="inline-flex items-center px-6 py-1 rounded-full text-sm bg-primaryInfo text-primary"
              >
                {{agen.type.name}}
              </span>
              <a href="" class="block mt-2 spaxe-y-2">
                <p class="text-base font-semibold text-gray-900">{{ agen.title }}</p>
                <p class="text-base font-medium text-indigo-600">
                  <a href="#" class="hover:underline"> {{ agen.start_date }} </a>
                </p>
                <p class="mt-1.5 text-base text-gray-500">
                  {{agen.short_content}}
                </p>
              </a>
            </div>
          </div>
          <div class="tracking-tight bg-white px-6 py-9 text-left text-dark">
            <span class="block sm:inline-block">
              <a :href="agen.link" class="text-primary">
                Participer <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
        </div>
      </div>
      <div class="tracking-tight mt-12 text-left text-dark" v-if="isNotFull == true">
        <span class="block sm:ml-2 sm:inline-block">
          <a @click="$router.push({ name: 'agenda' })" class="text-primary">
            Voir tous les évènements <span aria-hidden="true">&rarr;</span></a
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
  props: {
    agenda_data: {
      type: [Array, Number],
      dafault: () => []
    },
    isNotFull: {
      type: Boolean,
      default: false
    }
  }
 }
</script>