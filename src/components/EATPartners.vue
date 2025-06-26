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

      <div class="flex mx-auto mt-8 lg:mt-10 max-w-7xl justify-center">
        <div
          tabindex="-1"
          class="uk-position-relative uk-visible-toggle uk-light"
          uk-slider="autoplay: true; finite: true; autoplay-interval: 3000"
        >
          <div class="uk-position-relative">
            <div class="uk-slider-container uk-light mb-16">
              <ul
                class="
                  uk-slider-items
                  uk-child-width-1-2
                  uk-child-width-1-4@s
                  uk-child-width-1-6@m
                  px-6
                  lg:px-10
                "
              >
                <li v-for="(part, index) in partners" :key="index">
                  <a :href="part.url" target="_blank">
                    <div class="uk-panel">
                      <img
                        :src="part.photo"
                        :alt="part.name"
                        class="partner"
                      />
                    </div>
                  </a> 
                </li>
                <li v-for="(part, index) in partners" :key="index">
                  <a :href="part.url" target="_blank">
                    <div class="uk-panel">
                      <img
                        :src="part.photo"
                        :alt="part.name"
                        class="partner"
                      />
                    </div>
                  </a> 
                </li>
                <li v-for="(part, index) in partners" :key="index">
                  <a :href="part.url" target="_blank">
                    <div class="uk-panel">
                      <img
                        :src="part.photo"
                        :alt="part.name"
                        class="partner"
                      />
                    </div>
                  </a>  
                </li>
              </ul>
            </div>

            <div class="uk-hidden@s uk-light">
              <a
                class="uk-position-center-left uk-position-small text-primary"
                href="#"
                uk-slidenav-previous
                uk-slider-item="previous"
              ></a>
              <a
                class="uk-position-center-right uk-position-small text-primary"
                href="#"
                uk-slidenav-next
                uk-slider-item="next"
              ></a>
            </div>

          </div>

          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>

      <div
        class="
          tracking-tight
          text-right text-dark
          mt-16 mb-8
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        <!-- <span class="block sm:ml-2 sm:inline-block">
          <a
            @click="$router.push({ name: 'devenir-partenaire' })"
            class="text-primary"
          >
            Devenir partenaire <span aria-hidden="true">&rarr;</span></a
          >
        </span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    partners: {
      type: [Array, Number],
      dafault: () => [],
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.partner {
  height: 120px !important;
}
::v-deep .uk-light .uk-dotnav>*>* {
  background-color: #D1D5DB !important;
    border-color: #F7F9F9 !important;
    height: 15px !important;
    width: 15px !important;
}
::v-deep .uk-dotnav .uk-active a {
  background-color: #DD7A4B !important;
    border-color: #DD7A4B !important;
}
</style>
