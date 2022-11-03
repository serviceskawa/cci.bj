<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="flex items-center justify-between px-4 sm:px-0 text-subtitlegray">
    <div class="-mt-px flex w-0 flex-1">
      <a
        class="
          inline-flex
          items-center
          pt-4
          pr-1
          text-sm
          font-medium
          text-gray-500
          hover:text-primary
        "
        @click="$emit('previous')"
      >
        <ArrowLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        Précédent
      </a>
    </div>
    <div class="hidden md:-mt-px md:flex hidden">
      <a
        v-for="(page, index) in pagesNumber"
        :key="index"
        @click="get_page(index + 1)"
        class="
          inline-flex
          items-center
          border-t-2 border-primary
          px-4
          pt-4
          text-sm
          font-medium
          text-gray-500
          hover:border-gray-300 hover:text-gray-700
        "
        >{{ index + 1 }}</a
      >
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end" @click="$emit('next')">
      <a
        class="
          inline-flex
          items-center
          pt-4
          pl-1
          text-sm
          font-medium
          text-gray-500
          hover:text-primary
        "
      >
        Suivant
        <ArrowRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
export default {
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  props: {
    pagesNumber: Number
  },
  data() {},
  methods: {
    get_page(page) {
      this.$store.state.pagination_current_page = page;
      this.$emit("get-page");
    },
  },
};
</script>
