<template>
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div
        class="mx-auto"
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Des services aussi accessibles que divers
        </p>
        <p class="mx-auto mt-5 text-xl text-subtitlegray">
          Spécialistes de l’accompagnement et du conseil aux entreprises, nous
          fournissons une gamme variée de solutions innovantes pour accompagner
          les entreprises béninoises dans leur croissance.
        </p>
        <div class="mt-12">
          <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div class="p-6 rounded-lg bg-gris mb-2 md:mb-0 cursor-pointer" v-for="(service, index) in services"
                        :key="'service' + index" @click="$router.push({name: service.route})">
                        <div class="flex justify-between">
                            <span class="p-2.5 rounded-xl bg-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                        stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                        stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5735_1034)">
                                    <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" fill="#DD7A4B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5735_1034">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div class="mt-6">
                            <h4 class="text-lg leading-none font-bold text-blue">
                                {{service.name}}
                            </h4>
                            <p class="text-sm leading-5 text-blue mt-4">
                                {{service.short_description}}
                            </p>
                        </div>
                    </div>
                </div>
          <div class="tracking-tight mt-12 text-left text-dark">
            <span class="block sm:ml-2 sm:inline-block">
              <a @click="$router.push({name: 'services'})" class="text-primary">
                Voir tous les services <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
export default {
    components: {
        ArrowLeftIcon,
        ArrowRightIcon
    },
    data() {
        return {
            loader: false,
            services: []
        }
    },
    async mounted() {
        setTimeout(() => {
            this.services = [
                {
                    name: 'Services spécifiques',
                    short_description: 'Découvrez nos programmes d’accompagnement dédiés aux entreprises et industries locales.',
                    route: 'services-specs'
                },
                {
                    name: 'Information et orientation',
                    short_description: 'Accédez à nos dispositifs de support pour vous orienter dans votre recherche d’informations.',
                    route: 'services-infos'
                },
                {
                    name: 'Formation, assistance et appui-conseil',
                    short_description: 'Faites-vous former et conseiller par nos experts dans divers domaines touchant à la vie de l’entreprise.',
                    route: 'services-formations'
                },
            ]
            this.loader = false
        }, 2500)
    }
}
</script>
  