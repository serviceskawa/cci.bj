<template>
  <div class="bg-white">
    <div class="mx-auto py-8">
      <h2
        class="
          px-6
          lg:px-10
          max-w-7xl
          mx-auto
          text-3xl
          tracking-tight
          font-bold
          text-blue
        "
      >
        Nos partenaires, plus dévoués que jamais pour votre succès
      </h2>
      <div class="mt-8 lg:mt-10 max-w-7xl mx-auto flex justify-center">
        <div class="px-6 lg:px-10">
          <Carousel
            :settings="settings"
            :breakpoints="breakpoints"
            :autoplay="2000"
            :wrap-around="true"
            class=""
          >
            <Slide v-for="(part, index) in partners" :key="index">
              <img
                :src="part.photo"
                :alt="part.responsable_name"
                class="carousel__item partner"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
      <div
        class="
          tracking-tight
          text-right text-dark
          mt-16
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        <span class="block sm:ml-2 sm:inline-block">
          <a
            @click="$router.push({ name: 'devenir-partenaire' })"
            class="text-primary"
          >
            Devenir partenaire <span aria-hidden="true">&rarr;</span></a
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  props: {
    partners: {
      type: [Array, Number],
      dafault: () => [],
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.partner {
  height: 120px !important;
}
</style>
