<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <main class="pb-20">
        <div class="
          barner
          sm:h-96
          lg:h-auto
          flex
          items-center
          p-4
          md:px-10
          lg:px-20
          w-full
        ">
            <div class="flex items-center w-full">
                <div>
                    <h1 class="
                text-blue text-4xl
                lg:text-6xl
                leading-none
                font-extrabold
                tracking-tight
              ">
                        Investissez
                        <br /> <span class="text-primary"> en toute sécurité </span>
                    </h1>
                    <p class="
                text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray
                mt-6
              ">
                        En toute liberté et sans aucune contrainte de temps ni <br /> de lieu, créer la future
                        entreprise révolutionnaire du <br /> Bénin.
                    </p>
                </div>
            </div>
        </div>
        <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
            <h1 class="text-4xl text-center leading-10 font-extrabold tracking-tight mb-20"> Que souhaitez vous faire ?
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray px-8 py-6">
                    <div class="text-lg leading-6 font-medium">
                        Rester informé(e)
                    </div>
                    <div class="pt-12 pb-4 text-4xl leading-10 font-extrabold ">
                        Souscrivez à notre <br>
                        newsletter
                    </div>
                    <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-6">
                        Nous vous tenons informé(e) des actualités relatives aux démarches administratives.
                    </p>
                    <a type="button" @click="$router.push({name: 'index'})"
                        class="btn text-center btn-light text-primary hover:text-white hover:bg-primary w-full text-sm leading-5 font-medium">
                        S'abonner
                </a>
                </div>
                <div class="bg-gray px-8 py-6">
                    <div class="text-lg leading-6 font-medium">
                        Nouvel Investisseur
                    </div>
                    <div class="pt-12 pb-4 text-4xl leading-10 font-extrabold ">
                        Investir
                    </div>
                    <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-6">
                        Quis suspendisse ut fermentum neque vivamus non tellus. </p>
                    <div class="w-full">
                        <a type="button" href="https://apiex.bj/" target="_blank"                         class="btn text-center btn-light text-primary hover:text-white hover:bg-primary w-full text-sm leading-5 font-medium">
                           <span class="w-full">
                            Visiter <span
                                class="text-underline border-b-2 border-primary hover:border-white w-full">Apiex.bj</span>
                           </span>
                        </a>
                    </div>
                </div>
                <div class="bg-gray px-8 py-6">
                    <div class="text-lg leading-6 font-medium">
                        Parler à des experts
                    </div>
                    <div class="pt-12 pb-4 text-4xl leading-10 font-extrabold ">
                        Comprendre le marché béninois
                    </div>
                    <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-6">
                        Quis suspendisse ut fermentum neque vivamus non tellus. </p>
                    <button @click="$router.push({name: 'rdv-experts'})"
                        class="btn btn-light text-primary hover:text-white hover:bg-primary w-full text-sm leading-5 font-medium">
                        Voir le planning
                    </button>
                </div>
            </div>
            <div class="pt-12 lg:pt-20">
                <div class="flex items-center flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16 pb-8 md:pb-16">
                    <div>
                        <svg class="mb-4" width="48" height="48" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                            <path
                                d="M32 25V18C32 16.8954 31.1046 16 30 16H18C16.8954 16 16 16.8954 16 18V25M32 25V30C32 31.1046 31.1046 32 30 32H18C16.8954 32 16 31.1046 16 30V25M32 25H29.4142C29.149 25 28.8946 25.1054 28.7071 25.2929L26.2929 27.7071C26.1054 27.8946 25.851 28 25.5858 28H22.4142C22.149 28 21.8946 27.8946 21.7071 27.7071L19.2929 25.2929C19.1054 25.1054 18.851 25 18.5858 25H16"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2 class="text-2xl tracking-tight font-extrabold leading-9 text-gray-900 sm:text-3xl">
                            Besoins en investissement
                            et exportation
                        </h2>
                        <p class="my-3 leading-7 text-lg text-subtitlegray sm:my-4">
                            L’Agence de Promotion des Investissements et des Exportations (APIEx) est l’un des
                            instruments mis en place par le Gouvernement pour promouvoir les investissements et les
                            exportations et assurer, au profit des entreprises la veille stratégique et l’intelligence
                            économique.

                        </p>
                        <button type="button"
                            class="mt-4 btn btn-light w-1/3 text-primary hover:text-white hover:bg-primary text-sm leading-5 font-medium">
                            Investir
                        </button>
                    </div>
                    <div class="asset-session-one hidden md:flex" />
                </div>
                <div class="flex items-center flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16 pb-8 md:pb-16">
                    <div class="asset-session-two hidden md:flex" />


                    <div>
                        <svg class="mb-4" width="48" height="48" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                            <path
                                d="M32 25V18C32 16.8954 31.1046 16 30 16H18C16.8954 16 16 16.8954 16 18V25M32 25V30C32 31.1046 31.1046 32 30 32H18C16.8954 32 16 31.1046 16 30V25M32 25H29.4142C29.149 25 28.8946 25.1054 28.7071 25.2929L26.2929 27.7071C26.1054 27.8946 25.851 28 25.5858 28H22.4142C22.149 28 21.8946 27.8946 21.7071 27.7071L19.2929 25.2929C19.1054 25.1054 18.851 25 18.5858 25H16"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2 class="text-2xl tracking-tight font-extrabold leading-9 text-gray-900 sm:text-3xl">
                            Comprendre le marchés Béninois
                            en matière d’investissement
                        </h2>
                        <p class="my-3 leading-7 text-lg text-subtitlegray sm:my-4">
                            Avoire la liste des entreprises à haute performance dans différend domaine. lorem impsum
                            lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
                            lorem impsum lorem impsum lorem impsum lorem impsum.
                        </p>
                        <button type="button"
                            class="mt-4 btn btn-light text-primary hover:text-white hover:bg-primary text-sm leading-5 font-medium">
                            Consulter nos archives
                        </button>

                    </div>
                </div>
                <div class="flex items-center flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16 pb-8 md:pb-16">
                    <div>
                        <svg class="mb-4" width="48" height="48" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                            <path
                                d="M32 25V18C32 16.8954 31.1046 16 30 16H18C16.8954 16 16 16.8954 16 18V25M32 25V30C32 31.1046 31.1046 32 30 32H18C16.8954 32 16 31.1046 16 30V25M32 25H29.4142C29.149 25 28.8946 25.1054 28.7071 25.2929L26.2929 27.7071C26.1054 27.8946 25.851 28 25.5858 28H22.4142C22.149 28 21.8946 27.8946 21.7071 27.7071L19.2929 25.2929C19.1054 25.1054 18.851 25 18.5858 25H16"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2 class="text-2xl tracking-tight font-extrabold leading-9 text-gray-900 sm:text-3xl">
                            Découvrez des opportunités d’affaires et élargissez votre réseau 
                        </h2>
                        <p class="my-3 leading-7 text-lg text-subtitlegray sm:my-4">
                            Avoire la liste des entreprises à haute performance dans différend domaine. lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum.

                        </p>
                        <button type="button"
                            class="mt-4 btn btn-light w-1/3 text-primary hover:text-white hover:bg-primary text-sm leading-5 font-medium">
                            Découvrir
                        </button>
                    </div>
                    <div class="asset-session-three hidden md:flex" />
                </div>
            </div>
        </div>
        <div class="px-6 md:px-10 lg:px-20 py-10 bg-gray">
            <div
                class="bg-green end-box pt-12 pl-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                <div class="py-6">
                    <h1 class="text-4xl leading-10 font-extrabold mb-4">Recevez nos appels d’offres via whatsapp/sms ou
                        par mails </h1>
                    <p class="text-lg leading-6 font-normal mb-6">Les meilleures opportunités d’affaires, plus proches
                        de vous, en instantané.</p>
                    <div class="flex items-center w-full">
                        <form class="w-full">
                            <input type="text" class=" mb-3 md:w-full lg:w-3/5 mr-4"
                                placeholder="Email ou numéro de téléphone" />
                            <button class="btn btn-middle-primary mb-3">Souscrire</button>
                        </form>
                    </div>
                </div>
                <div class="hidden lg:flex">
                    <img class="w-full" src="@/assets/images/endof.jpeg" />

                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            current_tab: "renew",
        };
    },
};
</script>
    
<style lang="scss" scoped>
.barner {
    background: linear-gradient(180deg,
            rgba(72, 127, 80, 0.1) 0%,
            rgba(72, 127, 80, 0) 100%),
        url("../assets/images/investissement.jpeg") !important;
    height: 520px !important;
    background-position: top !important;
    background-attachment: local !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}

.asset-session-one {
    background: url("../assets/images/rdv-cover.jpg") center !important;
    background-size: cover !important;
    height: 400px;
    width: 100%;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
        0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}
.asset-session-two {
    background: url("../assets/images/ass.jpeg") !important;
    background-size: cover !important;
    height: 400px;
    width: 100%;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
        0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}

.asset-session-three {
    background: url("../assets/actu_one.jpeg") !important;
    background-size: cover !important;
    height: 400px;
    width: 100%;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
        0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
}
.end-box {
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 8px;

}
</style>
  
  