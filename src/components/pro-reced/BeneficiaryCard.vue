<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-4 mb-4">
        <div v-if="beneficiary.logo_url" class="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-50">
          <img :src="beneficiary.logo_url" :alt="beneficiary.name" class="w-full h-full object-contain" />
        </div>
        <div v-else class="w-16 h-16 flex-shrink-0 rounded-md bg-primary/10 flex items-center justify-center">
          <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900">{{ beneficiary.name }}</h3>
          <span class="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full" :class="sectorClass">
            {{ sectorLabel }}
          </span>
          <span v-if="beneficiary.location" class="inline-flex items-center gap-1 mt-1 text-xs text-gray-500 ml-1">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {{ beneficiary.location }}
          </span>
        </div>
      </div>
      <p v-if="beneficiary.description" class="text-gray-600 text-sm flex-1">{{ beneficiary.description }}</p>
      <a v-if="beneficiary.website_url" :href="beneficiary.website_url" target="_blank" rel="noopener noreferrer"
        class="mt-4 text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
        Visiter le site
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProRecedBeneficiaryCard',
  props: {
    beneficiary: { type: Object, required: true },
    sectors: { type: Object, default: () => ({}) }
  },
  computed: {
    sectorLabel() { return this.sectors[this.beneficiary.sector] || this.beneficiary.sector || 'Autre' },
    sectorClass() {
      const classes = {
        'SOLAIRE': 'bg-yellow-100 text-yellow-800',
        'CUISSON': 'bg-orange-100 text-orange-800'
      }
      return classes[this.beneficiary.sector] || 'bg-gray-100 text-gray-800'
    }
  }
}
</script>
