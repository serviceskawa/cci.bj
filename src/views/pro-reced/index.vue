<template>
  <main>

    <!-- ProReCED sub-navigation -->
    <ProRecedNav />

    <!-- Hero Slider -->
    <HeroSlider :slides="heroSlides" :fallbackImage="heroImage" />

    <!-- Contexte du projet -->
    <div id="contexte" class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
      <div class="md:text-3xl text-2xl font-extrabold relative">Contexte du projet</div>
      <div class="mt-8 grid md:grid-cols-2 gap-10">
        <div class="space-y-5 text-gray-700 leading-relaxed">
          <p>Le Bénin, à travers son <strong>Plan National de Développement (PND) 2018-2025</strong>, s'est engagé dans une transformation structurelle de son économie. L'accès à l'énergie constitue un levier stratégique, mais les disparités restent importantes :</p>
          <div class="grid grid-cols-2 gap-4 my-6">
            <div class="bg-primary/10 rounded-lg p-4 text-center">
              <div class="text-2xl font-extrabold text-primary">64,96%</div>
              <div class="text-sm text-gray-600 mt-1">Accès électricité en milieu urbain</div>
            </div>
            <div class="bg-primary/10 rounded-lg p-4 text-center">
              <div class="text-2xl font-extrabold text-primary">10,35%</div>
              <div class="text-sm text-gray-600 mt-1">Accès électricité en milieu rural</div>
            </div>
            <div class="bg-primary/10 rounded-lg p-4 text-center">
              <div class="text-2xl font-extrabold text-primary">12%</div>
              <div class="text-sm text-gray-600 mt-1">Cuisson propre en milieu urbain</div>
            </div>
            <div class="bg-primary/10 rounded-lg p-4 text-center">
              <div class="text-2xl font-extrabold text-primary">5%</div>
              <div class="text-sm text-gray-600 mt-1">Cuisson propre en milieu rural</div>
            </div>
          </div>
          <p>Face à ces défis, les entreprises locales des filières <strong>énergie solaire hors réseau</strong> et <strong>cuisson propre</strong> jouent un rôle crucial mais font face à de nombreux obstacles : faible structuration, accès limité au financement, manque de compétences managériales et difficultés d'accès aux marchés.</p>
        </div>
        <div class="space-y-5 text-gray-700 leading-relaxed">
          <p>C'est dans ce contexte que le <strong>Projet de Renforcement des Capacités Entrepreneuriales et de Développement des Entreprises (ProReCED)</strong> a été conçu pour accompagner la mise à l'échelle des PME intervenant dans ces deux sous-secteurs stratégiques.</p>
          <p>Mis en œuvre par la <strong>CCI Bénin</strong> sous le financement du <strong>Programme EnDev de la GIZ</strong> et de l'<strong>Union Européenne</strong>, le ProReCED couvre les <strong>6 régions économiques</strong> du Bénin avec un accompagnement structuré autour du diagnostic, de la formation, du coaching, de la facilitation financière et du suivi opérationnel.</p>
          <router-link :to="{ name: 'proreced.about' }" class="inline-block mt-4 text-primary font-medium hover:underline cursor-pointer">
            En savoir plus sur le projet &rarr;
          </router-link>
        </div>
      </div>
    </div>

    <!-- Présentation du dispositif -->
    <div id="presentation" class="bg-gray-50">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto">
        <div class="md:text-3xl text-2xl font-extrabold relative">Présentation du dispositif</div>
        <div class="mt-14 grid md:grid-cols-2 gap-10">
          <div class="space-y-10">
            <p>Le <strong>Projet de Renforcement des Capacités Entrepreneuriales et de Développement des Entreprises (ProReCED)</strong> est un dispositif d'accompagnement innovant mis en œuvre par la CCI Bénin sous le financement du Programme EnDev de la GIZ et de l'Union Européenne.</p>
            <p><strong>Objectif général :</strong> Mise à l'échelle des PME intervenant dans les sous-secteurs de l'énergie de cuisson et solaire et leur consolidation.</p>
            <p>Le projet s'articule autour de <strong>3 objectifs spécifiques</strong> : améliorer les performances des PME solaires (7 entreprises), accroître les capacités des PME de cuisson propre (5 entreprises), et renforcer la visibilité des entreprises accompagnées.</p>
            <p>L'accompagnement est assuré par <strong>2 Structures d'Appui aux Entreprises (SAE)</strong> spécialisées, une pour chaque sous-secteur, qui assurent un suivi de proximité et un coaching rapproché.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="indicator in indicators" :key="indicator.metric">
              <IndicatorWrapper :indicator="indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notre approche -->
    <div class="relative bg-primary/10">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto space-y-5">
        <div class="md:text-3xl text-2xl font-extrabold relative">Notre approche</div>
        <div class="text-lg font-semibold text-primary">Holistique à 360 degrés</div>
        <p>Le ProReCED opère selon un modèle d'accompagnement holistique et personnalisé. Chaque entreprise bénéficiaire fait l'objet d'un <strong>diagnostic entrepreneurial approfondi</strong>, suivi de l'élaboration d'un plan de renforcement individualisé couvrant 5 thématiques clés : gestion financière, marketing et commercialisation, qualité des produits, management opérationnel et planification stratégique.</p>
        <p>Le dispositif repose sur le recrutement de <strong>Structures d'Appui aux Entreprises (SAE)</strong> spécialisées - une pour le secteur solaire et une pour le secteur cuisson - qui assurent un accompagnement de proximité, un coaching rapproché et un suivi rigoureux des entreprises bénéficiaires.</p>
        <div class="mt-14">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(line, index) in approach" :key="index" class="bg-white/60 rounded-md p-5 space-y-5">
              <div class="font-bold text-primary">{{ line.name }}</div>
              <div>{{ line.text }}</div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-wrap gap-4">
          <div class="bg-white rounded-lg px-6 py-4 shadow-sm">
            <div class="text-2xl font-extrabold text-primary">2</div>
            <div class="text-sm text-gray-600">SAE recrutées</div>
          </div>
          <div class="bg-white rounded-lg px-6 py-4 shadow-sm">
            <div class="text-sm font-medium text-gray-700">1 pour le secteur cuisson</div>
            <div class="text-sm font-medium text-gray-700 mt-1">1 pour le secteur solaire</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mode d'intervention -->
    <div class="relative">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto space-y-5">
        <div class="md:text-3xl text-2xl font-extrabold relative">Mode d'intervention</div>
        <p>Le ProReCED structure son accompagnement autour de six modes d'intervention complémentaires, déployés par les SAE sous la coordination de la CCI Bénin, pour maximiser les performances des entreprises bénéficiaires dans les filières énergie solaire et cuisson propre.</p>
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
            <InterventionField v-for="(axe, index) in interventionModes" :key="index" :axe="axe" />
          </div>
        </div>
      </div>
    </div>

    <!-- Entreprises bénéficiaires (preview) -->
    <div id="beneficiaries-section" class="relative bg-gray-50">
      <div class="px-6 lg:px-10 py-20 max-w-7xl mx-auto space-y-5">
        <div class="md:text-3xl text-2xl font-extrabold relative">Entreprises bénéficiaires</div>
        <p>Les entreprises bénéficiaires du ProReCED ont été sélectionnées à l'issue d'un processus rigoureux basé sur des critères précis : au moins 2 ans d'existence, minimum 3 employés qualifiés, entreprise formalisée, et un chiffre d'affaires annuel d'au moins 5 000 000 FCFA. Elles sont réparties entre les secteurs énergie solaire (7 PME) et cuisson propre (5 PME).</p>
        <div class="mt-14" v-if="homeBeneficiaries.length > 0">
          <div class="grid grid-cols-2 justify-center gap-5">
            <div
              v-for="(beneficiary, index) in homeBeneficiaries"
              :key="index"
              :class="[
                'bg-primary/20 p-5 rounded-md font-extrabold flex md:flex-row flex-col items-center gap-3 text-center text-black/80',
                { 'col-span-2': index + 1 === homeBeneficiaries.length && homeBeneficiaries.length % 2 !== 0 }
              ]"
            >
              <CheckCircleIcon class="w-8"/>
              {{ typeof beneficiary === 'string' ? beneficiary : beneficiary.name }}
            </div>
          </div>
        </div>
        <div class="mt-10">
          <router-link :to="{ name: 'proreced.beneficiaries' }" class="text-primary font-medium hover:underline">
            En savoir plus &rarr;
          </router-link>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div class="pb-8 text-center">
        <div class="py-6 grid gap-5 grid-cols-1 lg:grid-cols-2 lg:col-span-2 w-full">
          <div class="text-left">
            <h4 class="md:text-3xl text-2xl leading-9 font-extrabold tracking-tight mb-4">Contact et demande d'information</h4>
            <p class="text-md tracking-tight leading-7 text-subtitlegray">
              Vous avez une question ? Nous sommes à votre écoute. Contactez-nous par téléphone,
              par email ou rendez-vous dans nos locaux à Ganhi. Notre équipe est prête à vous recevoir
              du lundi au vendredi de 08h à 12h.
            </p>
            <div v-if="homeContacts.length > 0" class="mt-6">
              <ContactList :contacts="homeContacts" />
            </div>
            <div v-else class="mt-4 space-y-2 text-md tracking-tight leading-6 text-subtitlegray">
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+229 01 7 69 73 66 - M. Bell (Point focal)</span>
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+229 01 97 37 27 60 - M. Octave (Contact principal)</span>
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@ccib.bj</span>
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+229 01 21 31 12 38</span>
              </span>
            </div>
          </div>
          <div class="text-left">
            <form @submit.prevent="sendFaqRequest">
              <input type="text" placeholder="Votre nom complet" required v-model="form.name"
                class="w-full mb-6 border-border-input focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 focus:outline-none" />
              <input type="email" placeholder="Votre adresse email, pour recevoir notre réponse" required v-model="form.email"
                class="w-full mb-6 border-border-input focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 focus:outline-none" />
              <textarea rows="5" placeholder="Posez ici votre question" required v-model="form.message"
                class="w-full mb-6 border-border-input focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 focus:outline-none"></textarea>
              <button class="btn-middle-primary bg-primary px-10 py-2 text-white cursor-pointer" :disabled="on_loading_request">
                <div v-if="on_loading_request" role="status">
                  <svg aria-hidden="true" class="w-6 h-6 text-white animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                </div>
                <div v-else>Envoyer</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import HeroSlider from '@/components/pro-reced/HeroSlider.vue'
import IndicatorWrapper from '@/components/pro-reced/IndicatorWrapper.vue'
import InterventionField from '@/components/pro-reced/InterventionField.vue'
import ContactList from '@/components/pro-reced/ContactList.vue'
import ProRecedNav from '@/components/pro-reced/ProRecedNav.vue'
import { CheckCircleIcon } from "@heroicons/vue/outline"
import heroImage from '@/assets/pro-reced-hero.jpeg'
import {
  heroSlides, indicators, approach, interventionModes, contacts as staticContacts, beneficiaries, contextData
} from '@/data/pro-reced'

export default {
  components: { HeroSlider, IndicatorWrapper, InterventionField, ContactList, ProRecedNav, CheckCircleIcon },
  data() {
    return {
      heroSlides,
      heroImage,
      indicators,
      approach,
      interventionModes,
      homeBeneficiaries: beneficiaries.slice(0, 5).map(b => b.name),
      homeContacts: staticContacts,
      form: { name: '', email: '', message: '' },
      on_loading_request: false
    }
  },
  methods: {
    scrollTo(_ref) {
      const el = document.getElementById(_ref)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    sendFaqRequest() {
      this.on_loading_request = true
      // Static mode - just show success after a brief delay
      setTimeout(() => {
        this.on_loading_request = false
        alert('Message envoyé avec succès ! Nous vous répondrons bientôt.')
        this.form = { name: '', email: '', message: '' }
      }, 800)
    }
  }
}
</script>

<style lang="scss" scoped>
.active-tab { padding: 10px 6px !important; padding-left: 12px !important; background: #f8f8f8; box-shadow: inset 5px 0px 0px #dd7a4b; color: #dd7a4b !important; }
ul { list-style: inside !important; }
.bg-green { background: rgba(72, 127, 80, 0.1) !important; }
input { height: 48px !important; padding: 0px 10px !important; }
</style>
