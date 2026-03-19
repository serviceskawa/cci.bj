<template>
  <div>

    <!-- In-page scroll nav -->
    <nav class="bg-white border-b border-gray-200 sticky top-[99px] z-10 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Desktop: horizontal pills -->
        <div class="hidden md:flex items-center h-12 gap-1">
          <span class="text-primary font-extrabold text-sm tracking-wide uppercase shrink-0 mr-4">PARGeQ</span>
          <a v-for="section in sections" :key="'d-'+section.id"
            @click.prevent="scrollTo(section.id)"
            :class="[
              'whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer',
              activeSection === section.id
                ? 'bg-primary/10 text-primary'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            ]"
          >
            {{ section.label }}
          </a>
        </div>

        <!-- Mobile: current section + toggle -->
        <div class="md:hidden">
          <button @click="mobileNavOpen = !mobileNavOpen"
            class="flex items-center justify-between w-full h-12 text-sm font-medium cursor-pointer">
            <div class="flex items-center gap-2">
              <span class="text-primary font-extrabold uppercase tracking-wide">PARGeQ</span>
              <span class="text-gray-400">|</span>
              <span class="text-gray-700">{{ activeSectionLabel }}</span>
            </div>
            <svg :class="['w-5 h-5 text-gray-400 transition-transform duration-200', mobileNavOpen ? 'rotate-180' : '']"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown -->
          <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[300px]"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 max-h-[300px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="mobileNavOpen" class="pb-3 grid grid-cols-2 gap-1 overflow-hidden">
              <a v-for="section in sections" :key="'m-'+section.id"
                @click.prevent="mobileScrollTo(section.id)"
                :class="[
                  'px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer text-center',
                  activeSection === section.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 text-gray-700 active:bg-primary/10'
                ]"
              >
                {{ section.label }}
              </a>
            </div>
          </transition>
        </div>

      </div>
    </nav>

    <!-- Hero Banner -->
    <div class="relative text-white overflow-hidden">
      <div class="absolute inset-0 bg-no-repeat bg-center bg-cover scale-105" :style="{ backgroundImage: `url(${heroImg})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      <div class="relative px-6 lg:px-10 max-w-7xl mx-auto min-h-[500px] flex flex-col justify-center py-20 space-y-6">
        <div class="inline-flex items-center gap-2">
          <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Projet CCI Bénin × GIZ</span>
        </div>
        <h1 class="md:text-5xl sm:text-4xl text-3xl font-extrabold lg:w-8/12 text-white drop-shadow-lg">{{ project.shortName }}</h1>
        <p class="text-xl md:text-2xl font-medium lg:w-8/12 text-white drop-shadow-lg">{{ project.fullName }}</p>
        <div class="flex flex-wrap gap-4 pt-4">
          <div class="bg-primary/80 backdrop-blur-sm rounded-lg px-5 py-3 text-center border border-white/10">
            <div class="text-2xl font-extrabold text-white">100</div>
            <div class="text-xs text-white/80">PME ciblées</div>
          </div>
          <div class="bg-primary/80 backdrop-blur-sm rounded-lg px-5 py-3 text-center border border-white/10">
            <div class="text-2xl font-extrabold text-white">12</div>
            <div class="text-xs text-white/80">Départements</div>
          </div>
          <div class="bg-primary/80 backdrop-blur-sm rounded-lg px-5 py-3 text-center border border-white/10">
            <div class="text-2xl font-extrabold text-white">{{ project.budgetTotal }}</div>
            <div class="text-xs text-white/80">Budget total</div>
          </div>
          <div class="bg-primary/80 backdrop-blur-sm rounded-lg px-5 py-3 text-center border border-white/10">
            <div class="text-2xl font-extrabold text-white">14 mois</div>
            <div class="text-xs text-white/80">Durée</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contexte & Justification -->
    <section id="contexte" class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
      <h2 class="md:text-3xl text-2xl font-extrabold mb-8">Contexte et justification</h2>
      <div class="grid md:grid-cols-2 gap-10">
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p v-for="(paragraph, i) in context.slice(0, 2)" :key="i">{{ paragraph }}</p>
        </div>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p v-for="(paragraph, i) in context.slice(2)" :key="i">{{ paragraph }}</p>
          <!-- Project card -->
          <div class="bg-gray-50 rounded-lg p-6 border border-gray-100 space-y-3 mt-4">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Fiche projet
            </div>
            <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt class="font-medium text-gray-500">Financement</dt><dd>{{ project.funder }}</dd>
              <dt class="font-medium text-gray-500">Mise en œuvre</dt><dd>{{ project.implementer }}</dd>
              <dt class="font-medium text-gray-500">Zone</dt><dd>{{ project.zone }}</dd>
              <dt class="font-medium text-gray-500">Durée</dt><dd>{{ project.duration }}</dd>
              <dt class="font-medium text-gray-500">Cible</dt><dd>{{ project.targetGroup }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectifs -->
    <section id="objectifs" class="bg-gray-50">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <h2 class="md:text-3xl text-2xl font-extrabold mb-4">Objectifs du projet</h2>
        <p class="text-gray-600 mb-10 lg:w-8/12">{{ objectivesData.general }}</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="obj in objectivesData.specific" :key="obj.id"
            class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span class="text-primary font-bold">{{ obj.id }}</span>
              </div>
              <h3 class="font-bold text-gray-900">{{ obj.title }}</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">{{ obj.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Résultats & Indicateurs -->
    <section id="resultats">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <h2 class="md:text-3xl text-2xl font-extrabold mb-10">Résultats clés</h2>

        <!-- Key metrics row -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          <div v-for="result in keyResultsData" :key="result.label"
            class="bg-primary/5 rounded-lg p-4 text-center space-y-1">
            <div class="text-2xl md:text-3xl font-extrabold text-primary">{{ result.metric }}</div>
            <div class="text-xs text-gray-600 leading-tight">{{ result.label }}</div>
          </div>
        </div>

        <!-- Outputs -->
        <div class="space-y-8">
          <div v-for="output in outputsData" :key="output.id"
            class="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span class="text-primary font-bold text-sm">{{ output.id }}</span>
              </div>
              <div class="space-y-3 flex-1">
                <h3 class="font-bold text-gray-900">{{ output.title }}</h3>
                <p class="text-gray-600 text-sm">{{ output.description }}</p>
                <ul class="space-y-2">
                  <li v-for="(kpi, i) in output.kpis" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleIcon class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{{ kpi }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Q-Boost -->
    <section id="qboost" class="bg-primary/5">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <h2 class="md:text-3xl text-2xl font-extrabold mb-4">Accompagnement Q-Boost</h2>
        <p class="text-gray-600 mb-10 lg:w-8/12">30 PME sélectionnées bénéficient d'un accompagnement de proximité Quality-Boost pour le renforcement de leur Système de Management de la Qualité.</p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Gender split -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold mb-4">Répartition par genre</h3>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Femmes</span><span class="font-bold text-primary">{{ qboost.womenLed }}</span>
                </div>
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full" :style="{ width: Math.round(qboost.womenLed / qboost.totalPme * 100) + '%' }"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Hommes</span><span class="font-bold text-gray-700">{{ qboost.menLed }}</span>
                </div>
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-gray-400 rounded-full" :style="{ width: Math.round(qboost.menLed / qboost.totalPme * 100) + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sector split -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold mb-4">Par secteur d'activité</h3>
            <div class="space-y-3">
              <div v-for="s in qboost.bySector" :key="s.sector" class="flex items-center justify-between text-sm">
                <span>{{ s.sector }}</span>
                <span class="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full text-xs">{{ s.count }}</span>
              </div>
            </div>
          </div>

          <!-- Department split -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold mb-4">Par département</h3>
            <div class="space-y-2">
              <div v-for="d in qboost.byDepartment" :key="d.department" class="flex items-center justify-between text-sm">
                <span>{{ d.department }}</span>
                <span class="bg-gray-100 font-medium px-2 py-0.5 rounded-full text-xs">{{ d.count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galerie -->
    <section id="galerie">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <h2 class="md:text-3xl text-2xl font-extrabold mb-10">Galerie photos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(photo, i) in gallery" :key="photo.id"
            :class="['relative group overflow-hidden rounded-lg', i === 0 ? 'sm:col-span-2 sm:row-span-2' : '']">
            <img :src="photo.src" :alt="photo.caption" loading="lazy"
              class="w-full h-full object-cover min-h-[200px] transition-transform duration-300 group-hover:scale-105"
              :class="i === 0 ? 'sm:min-h-[420px]' : 'min-h-[200px]'" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p class="text-white text-sm">{{ photo.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Équipe -->
    <section id="equipe" class="bg-gray-50">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <h2 class="md:text-3xl text-2xl font-extrabold mb-10">Équipe du projet</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="member in team" :key="member.id"
            class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden text-center">
            <div v-if="member.photoSrc" class="h-48 overflow-hidden">
              <img :src="member.photoSrc" :alt="member.name" class="w-full h-full object-cover object-top" />
            </div>
            <div v-else class="h-48 bg-primary/5 flex items-center justify-center">
              <svg class="w-16 h-16 text-primary/30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div class="p-4 space-y-1">
              <div class="font-bold text-gray-900">{{ member.name }}</div>
              <div class="text-sm text-primary">{{ member.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prochaines étapes -->
    <section id="etapes">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <h2 class="md:text-3xl text-2xl font-extrabold mb-10">Prochaines étapes</h2>
        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          <div v-for="(step, i) in nextStepsData" :key="i" class="relative pl-12 pb-8 last:pb-0">
            <div class="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/10"></div>
            <p class="text-gray-700">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="bg-primary">
      <div class="px-6 lg:px-10 py-16 max-w-7xl mx-auto text-center text-white space-y-6">
        <h2 class="text-2xl md:text-3xl font-extrabold">Vous souhaitez en savoir plus sur le PARGeQ ?</h2>
        <p class="md:w-6/12 mx-auto text-white/80">Contactez la CCI Bénin pour toute question sur le projet, les critères de sélection ou l'accompagnement Q-Boost.</p>
        <router-link :to="{ name: 'contact' }"
          class="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition">
          Nous contacter
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/outline'
import {
  projectInfo, context, objectives, outputs, keyResults,
  qboostStats, nextSteps, teamMembers, galleryMeta
} from '@/data/pargeq'

// Static image imports - Vite needs these at build time
import imgTrainingCotonou1 from '@/assets/pargeq/training-cotonou-1.jpg'
import imgTrainingCotonou2 from '@/assets/pargeq/training-cotonou-2.jpg'
import imgTrainingPortoNovo from '@/assets/pargeq/training-porto-novo.jpg'
import imgGroupQboost1 from '@/assets/pargeq/group-qboost-1.jpg'
import imgGroupQboost2 from '@/assets/pargeq/group-qboost-2.jpg'
import imgPointFocal from '@/assets/pargeq/point-focal-bello.jpg'

const imageMap = {
  'training-cotonou-1.jpg': imgTrainingCotonou1,
  'training-cotonou-2.jpg': imgTrainingCotonou2,
  'training-porto-novo.jpg': imgTrainingPortoNovo,
  'group-qboost-1.jpg': imgGroupQboost1,
  'group-qboost-2.jpg': imgGroupQboost2,
  'point-focal-bello.jpg': imgPointFocal
}

export default {
  components: { CheckCircleIcon },
  data() {
    return {
      project: projectInfo,
      context,
      objectivesData: objectives,
      outputsData: outputs,
      keyResultsData: keyResults,
      qboost: qboostStats,
      nextStepsData: nextSteps,
      heroImg: imgGroupQboost1,
      activeSection: 'contexte',
      mobileNavOpen: false,
      observer: null,
      sections: [
        { id: 'contexte', label: 'Contexte' },
        { id: 'objectifs', label: 'Objectifs' },
        { id: 'resultats', label: 'Résultats' },
        { id: 'qboost', label: 'Q-Boost' },
        { id: 'galerie', label: 'Galerie' },
        { id: 'equipe', label: 'Équipe' },
        { id: 'etapes', label: 'Prochaines étapes' }
      ],
      team: teamMembers.map(m => ({
        ...m,
        photoSrc: m.photo ? imageMap[m.photo] || null : null
      })),
      gallery: galleryMeta.map(g => ({
        ...g,
        src: imageMap[g.file] || ''
      }))
    }
  },
  mounted() {
    this.initScrollSpy()
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
    document.removeEventListener('click', this.handleClickOutside)
  },
  computed: {
    activeSectionLabel() {
      const found = this.sections.find(s => s.id === this.activeSection)
      return found ? found.label : ''
    }
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    mobileScrollTo(id) {
      this.mobileNavOpen = false
      this.$nextTick(() => {
        this.scrollTo(id)
      })
    },
    handleClickOutside(e) {
      if (this.mobileNavOpen && this.$el) {
        const nav = this.$el.querySelector('nav')
        if (nav && !nav.contains(e.target)) {
          this.mobileNavOpen = false
        }
      }
    },
    initScrollSpy() {
      const ids = this.sections.map(s => s.id)
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id
            }
          }
        },
        { rootMargin: '-150px 0px -60% 0px', threshold: 0 }
      )
      this.$nextTick(() => {
        ids.forEach(id => {
          const el = document.getElementById(id)
          if (el) this.observer.observe(el)
        })
      })
    }
  }
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
