<template>
  <div>
    <!-- ProReCED sub-navigation -->
    <ProRecedNav />

    <!-- Banner -->
    <div class="relative bg-primary text-white">
      <div class="px-6 lg:px-10 max-w-7xl mx-auto py-16 space-y-4">
        <h1 class="md:text-4xl text-2xl font-extrabold">Équipe du projet</h1>
        <p class="text-lg text-white/80 lg:w-7/12">L'équipe ProReCED de la CCI Bénin coordonne le dispositif d'accompagnement et assure le suivi des entreprises bénéficiaires en lien avec les Structures d'Appui aux Entreprises (SAE) et le Programme EnDev.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="px-6 lg:px-10 max-w-7xl mx-auto py-16">
      <!-- Organisation -->
      <div class="mb-12 bg-primary/5 rounded-lg p-6 md:p-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Organisation du dispositif</h2>
        <div class="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div class="space-y-2">
            <div class="font-semibold text-primary">CCI Bénin</div>
            <p>Coordination globale du projet, pilotage stratégique, sélection des bénéficiaires et suivi-évaluation des résultats.</p>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-primary">2 SAE spécialisées</div>
            <p>Structures d'Appui aux Entreprises recrutées pour l'accompagnement de proximité : une pour le secteur solaire, une pour le secteur cuisson.</p>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-primary">Programme EnDev - GIZ</div>
            <p>Partenaire financier et technique, dans le cadre du programme Energising Development avec le cofinancement de l'Union Européenne.</p>
          </div>
        </div>
      </div>

      <h2 class="text-xl font-bold text-gray-900 mb-6">Équipe CCI Bénin</h2>
      <div v-if="team_members.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <TeamMemberCard v-for="member in team_members" :key="member.id" :member="member" />
      </div>
      <div v-else class="text-center py-20">
        <p class="italic font-light text-gray-500">Les informations de l'équipe seront bientôt disponibles.</p>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberCard from '@/components/pro-reced/TeamMemberCard.vue'
import ProRecedNav from '@/components/pro-reced/ProRecedNav.vue'
import { teamMembers } from '@/data/pro-reced'

export default {
  components: { TeamMemberCard, ProRecedNav },
  data() {
    return {
      team_members: teamMembers
    }
  }
}
</script>
