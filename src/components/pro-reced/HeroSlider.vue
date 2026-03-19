<template>
  <div class="relative text-white z-0 overflow-hidden" :class="slides.length === 0 ? 'bg-gray-800' : ''">

    <!-- Slides -->
    <transition-group v-if="slides.length > 0" name="fade" tag="div" class="relative min-h-[500px]">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id || index"
        v-show="currentIndex === index"
        class="absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-700"
        :style="{ backgroundImage: `url(${slideImage(slide)})` }"
      >
        <div class="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
        <div class="relative px-6 lg:px-10 max-w-7xl mx-auto min-h-[500px] flex flex-col justify-center py-20 z-10 space-y-6">
          <div class="md:text-4xl sm:text-3xl text-2xl font-extrabold lg:w-7/12 md:w-9/12">
            {{ slide.title }}
          </div>
          <div v-if="slideSubtitle(slide)" class="pt-4 lg:w-7/12 md:w-9/12 text-lg">
            {{ slideSubtitle(slide) }}
          </div>
        </div>
      </div>
    </transition-group>

    <!-- Fallback when no slides -->
    <div v-if="slides.length === 0" class="relative min-h-[500px] hero-fallback">
      <div class="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
      <div class="relative px-6 lg:px-10 max-w-7xl mx-auto min-h-[500px] flex flex-col justify-center py-20 z-10 space-y-6">
        <div class="md:text-4xl sm:text-3xl text-2xl font-extrabold lg:w-7/12 md:w-9/12">
          Projet ProReCED
        </div>
        <div class="pt-4 lg:w-7/12 md:w-9/12 text-lg">
          Sous financement de EnDev GIZ
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <div v-if="slides.length > 1" class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="'dot-' + index"
        @click="goTo(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300 cursor-pointer',
          currentIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
        ]"
        :aria-label="'Slide ' + (index + 1)"
      />
    </div>

    <!-- Arrows -->
    <button v-if="slides.length > 1" @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition cursor-pointer" aria-label="Previous slide">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
    </button>
    <button v-if="slides.length > 1" @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition cursor-pointer" aria-label="Next slide">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
    </button>

  </div>
</template>

<script>
export default {
  name: 'ProRecedHeroSlider',
  props: {
    slides: { type: Array, default: () => [] },
    fallbackImage: { type: String, default: '' }
  },
  data() {
    return { currentIndex: 0, timer: null }
  },
  mounted() { this.startAutoplay() },
  beforeUnmount() { this.stopAutoplay() },
  methods: {
    slideImage(slide) {
      return slide.image_url || slide.image || this.fallbackImage || ''
    },
    slideSubtitle(slide) { return slide.subtitle || slide.description || '' },
    next() { this.currentIndex = (this.currentIndex + 1) % this.slides.length; this.resetAutoplay() },
    prev() { this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length; this.resetAutoplay() },
    goTo(index) { this.currentIndex = index; this.resetAutoplay() },
    startAutoplay() { if (this.slides.length > 1) { this.timer = setInterval(() => { this.currentIndex = (this.currentIndex + 1) % this.slides.length }, 5000) } },
    stopAutoplay() { if (this.timer) { clearInterval(this.timer); this.timer = null } },
    resetAutoplay() { this.stopAutoplay(); this.startAutoplay() }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.7s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.hero-fallback {
  background: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("@/assets/pro-reced-hero.jpeg");
  background-position: center;
  background-size: cover;
}
</style>
