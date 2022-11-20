<template>
  <div class="bg-white">
    <div class="mx-auto py-8">
      <h2 class="text-3xl tracking-tight font-bold text-blue">
        Nos partenaires, plus dévoués que jamais pour votre succès
      </h2>
      <div class="flow-root mt-8 lg:mt-10">
        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
          <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4" v-for="(part, index) in partners" :key="index">
            <img :src="part.photo" :alt="part.responsable_name" />
          </div>
        </div>
      </div>

      <div class="tracking-tight text-right text-dark mt-16">
        <span class="block sm:ml-2 sm:inline-block">
          <a @click="$router.push({name: 'devenir-partenaire'})" class="text-primary">
            Devenir partenaire <span aria-hidden="true">&rarr;</span></a
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
  props: {
    partners: {
      type: [Array, Number],
      dafault: () => []
    },
  }
 }
</script>
