<template>
  <div class="relative bg-primaryInfo py-3" v-if="$store.state.show_alert == true">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="text-primary text-base leading-6 font-medium">
          <span class="md:inline">
            Vous êtes invités à prendre part au FORUM ECONOMIQUE POLOGNE – AFRIQUE
          </span>
          <span class="block sm:ml-12 sm:inline-block">
            <a href="#" class="font-bold underline">
              En savoir plus <span aria-hidden="true">&rarr;</span></a
            >
          </span>
        </p>
      </div>
      <div
        class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
      >
        <button
          @click="closeAlert()"
          type="button"
          class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span class="sr-only">Dismiss</span>
          <svg
            class="h-6 w-6 text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { XMarkIcon } from "@heroicons/vue/solid/XIcon";
export default {
  components: {},
  methods: {
    closeAlert() {
      this.$store.state.show_alert = false;
    },
  },
};
</script>
<style scoped>
.closer {
  position: absolute;
  right: 24px !important;
  cursor: pointer !important;
  top: 12px !important;
}
</style>
