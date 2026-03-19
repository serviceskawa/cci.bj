<template>
  <div>
    <!-- ProReCED sub-navigation -->
    <ProRecedNav />

    <!-- Banner -->
    <div class="relative bg-primary text-white">
      <div class="px-6 lg:px-10 max-w-7xl mx-auto py-16 space-y-4">
        <h1 class="md:text-4xl text-2xl font-extrabold">Entreprises bénéficiaires</h1>
        <p class="text-lg text-white/80 lg:w-7/12">Découvrez les 12 PME accompagnées par le ProReCED dans les filières énergie solaire (7 entreprises) et cuisson propre (5 entreprises), sélectionnées selon des critères rigoureux.</p>
      </div>
    </div>

    <!-- Selection criteria summary -->
    <div class="bg-gray-50 border-b border-gray-200">
      <div class="px-6 lg:px-10 max-w-7xl mx-auto py-10">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Critères de sélection</h2>
        <p class="text-gray-600 text-sm mb-4">Les entreprises bénéficiaires ont été sélectionnées à l'issue d'un processus rigoureux d'assurance qualité basé sur les critères suivants :</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="(criterion, index) in selectionCriteria" :key="index" class="inline-flex items-center gap-1.5 bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-200">
            <svg class="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            {{ criterion }}
          </span>
        </div>
      </div>
    </div>

    <!-- Filters & Content -->
    <div class="px-6 lg:px-10 max-w-7xl mx-auto py-16 space-y-10">
      <!-- Sector filter -->
      <div class="flex flex-wrap gap-3">
        <button @click="selectedSector = null"
          :class="['px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer', selectedSector === null ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']">
          Tous les secteurs
        </button>
        <button v-for="(label, key) in sectors" :key="key" @click="selectedSector = key"
          :class="['px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer', selectedSector === key ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']">
          {{ label }}
        </button>
      </div>

      <!-- Beneficiaries grid -->
      <div v-if="filteredBeneficiaries.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BeneficiaryCard v-for="beneficiary in filteredBeneficiaries" :key="beneficiary.id" :beneficiary="beneficiary" :sectors="sectors" />
      </div>
      <div v-else class="text-center py-20">
        <p class="italic font-light text-gray-500">Aucun bénéficiaire trouvé pour ce secteur.</p>
      </div>
    </div>
  </div>
</template>

<script>
import BeneficiaryCard from '@/components/pro-reced/BeneficiaryCard.vue'
import ProRecedNav from '@/components/pro-reced/ProRecedNav.vue'
import { beneficiaries as staticBeneficiaries, sectors as staticSectors, selectionCriteria as staticCriteria } from '@/data/pro-reced'

export default {
  components: { BeneficiaryCard, ProRecedNav },
  data() {
    return {
      beneficiaries: staticBeneficiaries,
      sectors: staticSectors,
      selectionCriteria: staticCriteria,
      selectedSector: null
    }
  },
  computed: {
    filteredBeneficiaries() {
      if (!this.selectedSector) return this.beneficiaries
      return this.beneficiaries.filter(b => b.sector === this.selectedSector)
    }
  }
}
</script>
