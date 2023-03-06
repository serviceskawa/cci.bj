<template>
  <div class="bg-white overflow-hidden">
    <div class="py-12 ">
      <div class="relative grid lg:grid-cols-4 gap-x-8">
        <div class="lg:col-span-2 xl:mt-20 space-y-4">
          <p class="mt-2 text-base font-medium tracking-tight text-primary">
            {{ indicateurs.title }}
          </p>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ indicateurs.subtitle }}
          </h2>
          <p class="text-subtitlegray">
            {{ indicateurs.description }}
          </p>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 grid grid-cols-2 gap-x-8 gap-y-10 lg:mt-0 lg:col-span-2">
          <div v-for="indi, index in indicateurs.composants" :key="index">
            <div>
            <dt>
              <div class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white">
                <img class="h-8 w-auto sm:h-10 hover:animate-ping" :src="indi.icon" alt="" />
              </div>
              <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                {{ indi.metrique }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-sp">
              {{ indi.description }}
            </dd>
          </div></div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    indicateurs: {
      type: [Array, Number],
      dafault: () => [],
    },
    isNotFull: {
      type: Boolean,
      default: false,
    },
  },
};
</script>