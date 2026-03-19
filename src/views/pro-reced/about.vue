<template>
  <div>
  <!-- ProReCED sub-navigation -->
  <ProRecedNav />

  <!-- Banner -->
  <div class="barner flex items-center p-4 md:px-10 lg:px-20">
    <div class="max-w-7xl px-6 lg:px-10 mx-auto flex items-center w-full">
      <div>
        <h6 class="text-primary text-2xl leading-6 font-semibold tracking-wide uppercase">À propos</h6>
        <h1 class="text-white text-4xl lg:text-6xl leading-none font-extrabold tracking-tight mt-4">
          Découvrez le <span class="text-primary">ProReCED</span>
        </h1>
      </div>
    </div>
  </div>

  <!-- Contexte du projet -->
  <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
    <div class="md:text-3xl text-2xl font-extrabold relative mb-8">Contexte du projet</div>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Le Bénin, à travers son <strong>Plan National de Développement (PND) 2018-2025</strong>, vise la transformation structurelle de l'économie et le développement durable. Le secteur tertiaire contribue à plus de 50% du PIB, et la CCI Bénin s'est dotée d'un Plan Stratégique et de sa <strong>Vision 2025</strong> pour accompagner le développement du secteur privé.</p>
        <p>Malgré un potentiel important, l'accès à l'énergie reste un défi majeur. Le taux d'accès à l'électricité est de <strong>64,96% en milieu urbain</strong> contre seulement <strong>10,35% en milieu rural</strong>. Pour la cuisson propre, les chiffres sont encore plus bas : <strong>12% en milieu urbain</strong> et <strong>5% en milieu rural</strong>.</p>
        <p>Les entreprises du <strong>secteur solaire</strong> font face à une faible structuration, un accès limité au financement, un manque de compétences managériales et techniques, et des difficultés d'accès aux marchés.</p>
      </div>
      <div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Le <strong>sous-secteur énergie de cuisson</strong> est confronté à une insuffisance de la production locale, une faible qualité des produits, une couverture limitée du marché et un manque d'entreprises structurées.</p>
        <p>C'est dans ce contexte que le <strong>Projet de Renforcement des Capacités Entrepreneuriales et de Développement des Entreprises (ProReCED)</strong> a été conçu pour accompagner la mise à l'échelle des PME de ces deux sous-secteurs stratégiques.</p>
        <p>Le ProReCED est mis en œuvre par la <strong>CCI Bénin</strong>, sous le financement du <strong>Programme EnDev de la GIZ</strong> et de l'<strong>Union Européenne</strong>, avec une couverture nationale sur les <strong>6 régions économiques</strong> du Bénin.</p>
      </div>
    </div>
  </div>

  <!-- Objectifs -->
  <div class="bg-gray-50">
    <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
      <div class="md:text-3xl text-2xl font-extrabold relative mb-4">Objectifs du projet</div>
      <p class="text-gray-600 mb-4"><strong>Objectif général :</strong> {{ objectifGeneral }}</p>
      <p class="text-gray-500 text-sm mb-10">Le projet s'articule autour de 3 objectifs spécifiques :</p>
      <div class="space-y-8">
        <div v-for="(objective, index) in objectives" :key="index" class="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 rounded-full flex items-center justify-center shrink-0" :class="objective.sector === 'SOLAIRE' ? 'bg-yellow-100' : objective.sector === 'CUISSON' ? 'bg-orange-100' : 'bg-primary/10'">
              <span class="font-bold text-sm" :class="objective.sector === 'SOLAIRE' ? 'text-yellow-700' : objective.sector === 'CUISSON' ? 'text-orange-700' : 'text-primary'">{{ objective.code }}</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 text-lg">{{ objective.title }}</h3>
              <span v-if="objective.sector" class="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full" :class="objective.sector === 'SOLAIRE' ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'">{{ sectors[objective.sector] }}</span>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4">{{ objective.description }}</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-800 text-sm mb-2">Activités clés</h4>
              <ul class="space-y-1.5">
                <li v-for="(activity, ai) in objective.activities" :key="ai" class="flex items-start gap-2 text-sm text-gray-600">
                  <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{{ activity }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 text-sm mb-2">Indicateurs cibles</h4>
              <ul class="space-y-1.5">
                <li v-for="(indicator, ii) in objective.targetIndicators" :key="ii" class="flex items-start gap-2 text-sm text-gray-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5"></span>
                  <span>{{ indicator }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Approche & Méthodologie -->
  <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
    <div class="md:text-3xl text-2xl font-extrabold relative mb-4">Notre approche</div>
    <div class="text-lg font-semibold text-primary mb-8">Holistique à 360 degrés</div>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Le ProReCED opère selon un modèle d'accompagnement <strong>holistique et personnalisé</strong>. Chaque PME bénéficiaire fait l'objet d'un diagnostic entrepreneurial approfondi, suivi de l'élaboration d'un plan de renforcement individualisé couvrant <strong>5 thématiques clés</strong> : gestion financière, marketing et commercialisation, qualité des produits, management opérationnel et planification stratégique.</p>
        <p>Le dispositif repose sur le recrutement de <strong>Structures d'Appui aux Entreprises (SAE)</strong> spécialisées pour assurer un accompagnement de proximité. <strong>2 SAE</strong> ont été recrutées : une pour le secteur cuisson et une pour le secteur solaire.</p>
        <p>L'accompagnement est structuré autour de <strong>6 modes d'intervention</strong> complémentaires pour maximiser les performances et assurer la pérennité des résultats.</p>
      </div>
      <div class="space-y-4">
        <div v-for="(mode, index) in interventionModes" :key="index" class="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
          <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
            <CheckIcon class="w-4 h-4 text-primary" />
          </div>
          <div>
            <div class="font-semibold text-gray-900">{{ mode.name }}</div>
            <p class="text-gray-600 text-sm mt-1">{{ mode.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CCI Bénin -->
  <div class="bg-primary/5">
    <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
      <div class="md:text-3xl text-2xl font-extrabold relative mb-8">La CCI Bénin, maître d'œuvre</div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p>La <strong>Chambre de Commerce et d'Industrie du Bénin (CCI Bénin)</strong> est l'institution consulaire de référence pour le secteur privé béninois. Elle s'est dotée d'un <strong>Plan Stratégique et de sa Vision 2025</strong> pour accompagner le développement des entreprises et la compétitivité de l'économie nationale.</p>
          <p>Dans le cadre du ProReCED, la CCI Bénin assure la <strong>coordination globale du projet</strong> : pilotage stratégique, sélection des entreprises bénéficiaires selon des critères rigoureux, recrutement et supervision des Structures d'Appui aux Entreprises (SAE), et suivi-évaluation des résultats.</p>
          <p>Forte de son expertise dans l'appui aux PME et de son réseau étendu sur les 6 régions économiques du Bénin, la CCI Bénin constitue le pivot institutionnel garantissant la qualité et la durabilité de l'accompagnement offert par le ProReCED.</p>
        </div>
        <div class="flex justify-center">
          <img src="@/assets/logo.png" alt="CCI Bénin" class="max-w-xs" />
        </div>
      </div>
    </div>
  </div>

  <!-- Partenaires financiers -->
  <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
    <div class="md:text-3xl text-2xl font-extrabold relative mb-8 text-center">Partenaires financiers</div>
    <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <div class="bg-gray-50 rounded-lg p-8 text-center space-y-4 border border-gray-100">
        <div class="text-xl font-bold text-gray-900">Programme EnDev - GIZ</div>
        <p class="text-gray-600 text-sm leading-relaxed">Le programme Energising Development (EnDev) est un partenariat multi-donateurs mis en œuvre par la GIZ, financé par les Pays-Bas, l'Allemagne, la Norvège et la Suisse. Au Bénin, il promeut un marché durable des produits et services énergétiques via deux composantes : énergie solaire et énergie de cuisson. Phase actuelle : 2019-2026.</p>
      </div>
      <div class="bg-gray-50 rounded-lg p-8 text-center space-y-4 border border-gray-100">
        <div class="text-xl font-bold text-gray-900">Union Européenne</div>
        <p class="text-gray-600 text-sm leading-relaxed">Un cofinancement avec la Délégation de l'Union Européenne a été signé en novembre 2022 pour l'action "Promouvoir l'énergie durable au Bénin à travers des solutions solaires et de cuisson propre, énergétiquement efficaces et écologiquement responsables". Période : 2022-2026.</p>
      </div>
    </div>
  </div>

  <!-- Zones d'intervention -->
  <div class="bg-gray-50">
    <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
      <div class="md:text-3xl text-2xl font-extrabold relative mb-4">Zones d'intervention</div>
      <p class="text-gray-600 mb-8">Le ProReCED intervient à l'échelle nationale, couvrant les 6 régions économiques du Bénin.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(zone, index) in zonesIntervention" :key="index" class="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span class="text-primary font-bold text-sm">{{ index + 1 }}</span>
          </div>
          <span class="text-gray-700 text-sm font-medium">{{ zone }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Critères de sélection -->
  <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
    <div class="md:text-3xl text-2xl font-extrabold relative mb-4">Critères de sélection des bénéficiaires</div>
    <p class="text-gray-600 mb-8">Les entreprises bénéficiaires du ProReCED ont été sélectionnées à l'issue d'un processus rigoureux d'assurance qualité. Les critères de sélection suivants ont été appliqués :</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
      <div v-for="(criterion, index) in selectionCriteria" :key="index" class="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
        <CheckIcon class="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <span class="text-gray-700 text-sm">{{ criterion }}</span>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-primary">
    <div class="px-6 lg:px-10 py-16 max-w-7xl mx-auto text-center text-white space-y-6">
      <h2 class="text-2xl md:text-3xl font-extrabold">Vous souhaitez en savoir plus ?</h2>
      <p class="md:w-6/12 mx-auto text-white/80">Contactez notre équipe pour toute question sur le ProReCED, nos modes d'intervention ou les critères de sélection des entreprises bénéficiaires.</p>
      <div class="flex justify-center gap-4 flex-wrap">
        <router-link :to="{ name: 'proreced.contact' }" class="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition">Nous contacter</router-link>
        <router-link :to="{ name: 'proreced.beneficiaries' }" class="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition">Voir les bénéficiaires</router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'
import ProRecedNav from '@/components/pro-reced/ProRecedNav.vue'
import { objectives, objectifGeneral, interventionModes, sectors, zonesIntervention, selectionCriteria } from '@/data/pro-reced'

export default {
  components: { CheckIcon, ProRecedNav },
  data() {
    return { objectives, objectifGeneral, interventionModes, sectors, zonesIntervention, selectionCriteria }
  }
}
</script>

<style scoped>
.barner {
  background: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("@/assets/pro-reced-hero.jpeg");
  height: 500px !important;
  background-position: center !important;
  background-size: cover !important;
}
</style>
