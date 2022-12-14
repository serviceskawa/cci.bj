<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <main class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div class="flex items-center">
            <div class="pt-8 pb-4 grid grid-cols-1  md:grid-cols-3">
                <div class="col-span-2">
                    <h1 class="text-3xl md:text-4xl leading-none font-extrabold tracking-tight">
                        Nos services aussi accessibles que divers
                    </h1>
                    <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray mt-6">
                        Vérification d’existence et de fiabilité des entreprises, <br>
                        pour la facilitation des affaires.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
        <div class="">
            <div class="flex justify-center py-20" v-if="loader == true">
                <div role="status" class="py-20">
                    <svg aria-hidden="true" class="w-12 h-12 text-gray animate-spin fill-primary" viewBox="0 0 100 101"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <div v-else>
                <div v-if="services.length == 0">
                    <h1 class="">Aucun service disponible</h1>
                </div>
                <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-10" v-else>
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
            </div>

        </div>
    </main>
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
        this.loader = true
        // await services.get_all_services().then((response) => {
        //     this.loader = false
        //     if (response.status == 200) {
        //         const services = 
        //         this.services = response.data
        //     }
        // })
        setTimeout(() => {
            this.services = [
                {
                    name: 'Services phares',
                    short_description: 'Nos programmes d\'accompagnement dédiés aux entreprises et industries locales',
                    route: 'services-specs'
                },
                {
                    name: 'Information et orientation',
                    short_description: 'Accédez à nos dispositifs de support pour vous orienter dans votre recherche d\'informations',
                    route: 'services-infos'
                },
                {
                    name: 'Formation, assistance et appui-conseil',
                    short_description: 'Faites-vous former et conseiller par nos experts dans divers domaines touchant à la vie de l’entreprise.',
                    route: 'services-formations'
                },
            ]
            this.loader = false
        })
    }
}
</script>
  
<style scoped>
.barner {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url("../assets/images/journee.jpeg");
    height: 600px !important;
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

.badge {
    background: rgba(72, 127, 80, 0.1);
    border-radius: 16px;
    padding: 4px 24px !important;
}
</style>
  