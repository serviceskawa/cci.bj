<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <main>
        <div class="barner flex items-center p-4 md:px-10 lg:px-20">
            <div>
                <h1 class="text-primary text-4xl lg:text-6xl leading-none font-extrabold tracking-tight">
                    <span class="text-white">Formation conseil et appui-conseil</span>
                </h1>
                <p class="text-white text-xl leading-7 font-normal mt-4">
                    Vérification d’existence et de fiabilité des entreprises, <br>
                    pour la facilitation des affaires.
                </p>
            </div>
        </div>
        <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                <Disclosure as="div" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                            <span class="font-bold text-blue text-sm text-gray-900">
                                Formation dans tous les domaines touchant à la vie de l’entreprise
                            </span>
                            <span class="ml-6 flex h-7 items-center">
                                <ChevronDownIcon :class="[
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform',
                                ]" aria-hidden="true" />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                            <a @click="$router.push({name: 'formations'})" class="text-primary font-medium text-sm">
                                <span class="underline">Nous vous faisons monter en compétences dans divers domaines liés à la gestion de l’entreprise</span> <span class="ml-2">→</span> </a>
                        </p>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                            <span class="font-bold text-blue text-sm text-gray-900">
                                Programme de formation ( Anglais, Mandarin )
                            </span>
                            <span class="ml-6 flex h-7 items-center">
                                <ChevronDownIcon :class="[
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform',
                                ]" aria-hidden="true" />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                            <a @click="$router.push({name: 'agenda'})" class="text-primary font-medium text-sm">
                                <span class="underline">
                                    Développez une maitrise des langues les plus utilisées pour les affaires et boostez votre croissance
                                </span> <span class="ml-2">→</span> </a>
                        </p>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                            <span class="font-bold text-blue text-sm text-gray-900">
                                Plateforme E-learning 
                            </span>
                            <span class="ml-6 flex h-7 items-center">
                                <ChevronDownIcon :class="[
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform',
                                ]" aria-hidden="true" />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                            <a @click="$router.push({name: 'formations'})" class="text-primary font-medium text-sm">
                                <span class="underline">
                                    Accédez à nos cours en ligne sur la plateforme de la CCI Bénin dédiée à l’apprentissage en ligne
                                </span> <span class="ml-2">→</span> </a>
                        </p>
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                            <span class="font-bold text-blue text-sm text-gray-900">
                                Programme G.E.R.M.E
                            </span>
                            <span class="ml-6 flex h-7 items-center">
                                <ChevronDownIcon :class="[
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform',
                                ]" aria-hidden="true" />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                            <a @click="$router.push({name: 'contact'})" class="text-primary font-medium text-sm">
                                <span class="underline">
                                    Familiarisez-vous avec la méthodologie du BIT pour améliorer la gestion de votre entreprise
                                </span> <span class="ml-2">→</span> </a>
                        </p>
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                            <span class="font-bold text-blue text-sm text-gray-900">
                                École de commerce en lien avec les partenaires techniques
                            </span>
                            <span class="ml-6 flex h-7 items-center">
                                <ChevronDownIcon :class="[
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform',
                                ]" aria-hidden="true" />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                            <a @click="$router.push({name: 'contact'})" class="text-primary font-medium text-sm">
                                <span class="underline">
                                    Suivez des formations certifiantes et obtenez un diplôme en gestion grâce à nos partenaires
                                </span> <span class="ml-2">→</span> </a>
                        </p>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                        <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                            <span class="font-bold text-blue text-sm text-gray-900">
                                Appui-conseils pour prendre en charge différentes préoccupations de l’entreprise
                            </span>
                            <span class="ml-6 flex h-7 items-center">
                                <ChevronDownIcon :class="[
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform',
                                ]" aria-hidden="true" />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                            <a @click="$router.push({name: 'pere'})" class="text-primary font-medium text-sm">
                                <span class="underline">Nos consultants et experts en gestion et croissance d’entreprise vous aident à résoudres vos préoccupations</span> <span class="ml-2">→</span> </a>
                        </p>
                    </DisclosurePanel>
                </Disclosure>
            </dl>
            <div class="py-12">
                <h1 class="text-primary text-4xl lg:text-6xl leading-none font-extrabold tracking-tight">
                    <span class="text-white">Autres services</span>
                </h1>
                <div class="mt-8">
                    <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-10">
                        <div class="p-6 rounded-lg bg-gris mb-2 md:mb-0 cursor-pointer"
                            v-for="(service, index) in services" :key="'service' + index"
                            @click="$router.push({name: service.route})">
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
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';
import store from "@/store";
import { ref, onMounted, computed } from 'vue'
import { services } from "@/api"
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Notifications from "@/components/Notifications.vue"
export default {
    components: {
        Notifications,
        Disclosure,
        DisclosurePanel,
        DisclosureButton,
        DisclosureButton,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot
    },
    data() {
        return {
            open: true,
            services: [
                {
                    name: 'Services spécifiques',
                    short_description: 'Découvrez nos programmes d’accompagnement dédiés aux entreprises et industries locales.',
                    route: 'services-specs'
                },
                {
                    name: 'Information et orientation',
                    short_description: 'Accédez à nos dispositifs de support pour vous orienter dans votre recherche d’informations.',
                    route: 'services-infos'
                }
            ]
        }
    },
    async created() {
    },
    methods: {}
}
</script>
<style scoped>
.barner {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("../assets/images/rdv-cover.jpg");
    height: 600px !important;
    background-position: center !important;
}

.asset-session {
    background: url("../assets/images/ass.jpeg");
    background-size: cover !important;
    height: 400px;
    width: 100%;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
        0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}

:deep(.divide-y > :not([hidden]) ~ :not([hidden])) {
    border-top: 1px solid #E5E7EB !important
}
</style>
      