<template>
  <nav class="bg-white border-b border-gray-200 sticky top-[99px] z-10 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-12">

        <!-- Brand badge -->
        <router-link
          :to="{ name: 'proreced.index' }"
          class="text-primary font-extrabold text-sm tracking-wide uppercase shrink-0"
        >
          ProReCED
        </router-link>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link
            v-for="link in links"
            :key="link.route"
            :to="{ name: link.route }"
            :class="[
              'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
              isActive(link.route)
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            ]"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Mobile: horizontal scroll -->
        <div class="flex md:hidden items-center overflow-x-auto gap-1 -mr-4 pr-4 scrollbar-hide">
          <router-link
            v-for="link in links"
            :key="link.route"
            :to="{ name: link.route }"
            :class="[
              'whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors shrink-0',
              isActive(link.route)
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:text-primary'
            ]"
          >
            {{ link.label }}
          </router-link>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ProRecedNav',
  data() {
    return {
      links: [
        { label: 'Accueil',        route: 'proreced.index' },
        { label: 'À propos',       route: 'proreced.about' },
        { label: 'Bénéficiaires',  route: 'proreced.beneficiaries' },
        { label: 'Équipe',         route: 'proreced.team' },
        { label: 'Contact',        route: 'proreced.contact' }
      ]
    }
  },
  methods: {
    isActive(routeName) {
      return this.$route.name === routeName
    }
  }
}
</script>

<style scoped>
/* Hide scrollbar on mobile horizontal scroll */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
