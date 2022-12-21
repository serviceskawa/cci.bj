<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <!-- <img :src="slide" /> -->
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover"
          :src="slide"
          alt="People working on laptops"
        />
        <div class="absolute inset-0 bg-back mix-blend-multiply" />
      </div>
      <div
        class="
          top-20
          relative
          max-w-7xl
          mx-auto
          py-12
          px-4
          sm:px-6
          lg:py-32 lg:px-8
        "
      >
        <h1
          class="
            text-left text-4xl
            font-extrabold
            sp
            tracking-tight
            w-50
            sm:text-5xl
            lg:text-6xl
          "
        >
          <span class="block tracking-normal text-white">
            {{ slide_content.heading }}
          </span>
        </h1>
        <p
          class="
            mt-3
            text-left
            tracking-normal
            text-base text-white
            sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
            md:mt-5 md:text-xl
            lg:text-xl lg:mx-0
          "
          v-html="slide_content.content"
        ></p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              :href="slide_content.button1_url"
              :target="slide_content.new_windows_button1 == 1 ? '_blank' : ''"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                text-lg
                font-medium
                rounded-md
                text-white
                bg-primary
                hover:bg-white hover:text-primary
                md:py-4 md:text-lg md:px-10
              "
            >
              {{ slide_content.button1_text }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              :href="slide_content.button2_url"
              :target="slide_content.new_windows_button2 == 1 ? '_blank' : ''"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                text-lg
                font-medium
                rounded-md
                text-primary
                bg-white
                hover:bg-primary hover:text-white
                md:py-4 md:text-lg md:px-10
              "
            >
              {{ slide_content.button2_text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "slide_content", "currentSlide", "index", "direction"],
  mounted() {},
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
  watch: {
    slide_content() {},
  },
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
