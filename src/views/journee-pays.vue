<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="barner flex items-center p-4 md:px-10 lg:px-20">
      <div>
        <h1 class="text-primary text-4xl lg:text-6xl leading-none font-extrabold tracking-tight">
          Journée Pays
        </h1>
        <p class="text-white text-xl leading-7 font-normal mt-4">
          Rencontrez des conseillers et experts pays pour découvrir les opportunités
          <br />
          de développement et les marchés porteurs dans les pays qui vous <br />
          intéressent. Évaluez avec des spécialistes le potentiel et vos stratégies <br />
          d’approche des marchés étrangers.
        </p>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
      <div
        class="flex items-top flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16 pb-8 md:pb-16"
      >
        <div>
          <h2
            class="text-2xl tracking-tight font-extrabold leading-9 text-gray-900 sm:text-3xl"
          >
            Journée pays
          </h2>
          <h2
            class="text-2xl text-primary tracking-tight font-extrabold leading-9 sm:text-3xl"
          >
            Qu'est ce que c'est
          </h2>
          <p class="my-3 leading-7 text-lg text-subtitlegray sm:my-4">
            La CCI-Bénin déploie différentes actions au profit des entreprises afin de
            leur faire découvrir les opportunités de développement offertes par diVers
            pays. Il s’agit de susciter l’intérêt des entreprises béninoises pour
            certaines destinations en vue de créer des relations commerciales avec les
            pays choisis. Les « Journées Pays » offrent aux entreprises l’occasion de
            découvrir les clefs pour aborder les marchés étrangers dans les meilleures
            conditions et d’identifier des opportunités commerciales pertinentes.
          </p>
          <a href="#" class="text-primary">S’inscrire aux prochaines journées pays</a>
        </div>
        <div class="asset-session hidden md:flex" />
      </div>
      <div class="pt-16 pb-8">
        <h3 class="text-4xl leading-10 font-extrabold tracking-tight mb-4">
          Qui peut participer aux «Journées Pays» ?
        </h3>
        <p class="text-sm leading-5 text-subtitlegray">
          Nos experts pays répondent à vos besoins en information, financement ou
          prospection sur les marchés étrangers, quel que soit votre profil.
        </p>
      </div>
      <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="p-6 rounded-lg bg-gris mb-2 md:mb-0">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="8" fill="#FAE8E0" />
            <path
              d="M21 24L23 26L27 22M33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15C28.9706 15 33 19.0294 33 24Z"
              stroke="#DD7A4B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="mt-6">
            <h4 class="text-lg leading-7 font-medium text-borderSimple">
              Les entreprises intéressées à l’international
            </h4>
            <p class="text-sm leading-5 text-subtitlegray">
              Vous êtes une entreprise béninoise avec des projets de développement de vos
              activités ldans des pays étrangers ? Nous vous fournissons les informations
              sur le marché et les opportunités existantes.
            </p>
          </div>
        </div>
        <div class="p-6 rounded-lg bg-gris">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="8" fill="#FAE8E0" />
            <path
              d="M21 24L23 26L27 22M33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15C28.9706 15 33 19.0294 33 24Z"
              stroke="#DD7A4B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="mt-6">
            <h4 class="text-lg leading-7 font-medium text-borderSimple">
              Les organisations professionnelles du commerce, des services et de
              l’industrie
            </h4>
            <p class="text-sm leading-5 text-subtitlegray">
              Profitez de notre réseau de Chambres de Commerce à l’internationnal pour
              Identifier les secteurs porteurs.
            </p>
          </div>
        </div>
      </div>
      <div class="py-16">
        <h3 class="text-4xl leading-10 font-extrabold tracking-tight mb-4">
          Calendrier des prochains « Journées Pays »
        </h3>
        <div class="flex flex-wrap justify-between">
          <p class="text-sm leading-5 text-subtitlegray mb-2 md:mb-0">
            Inscrivez-vous et recevez dans votre boite mail toutes <br />
            les informations utiles sur les prochains rendez-vous <br />
            des experts
          </p>
          <div class="flex items-center flex-wrap">
            <input
              type="text"
              class="mt-0 sm:mt-3 max-w-lg p-2 text-base focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none mr-4"
              placeholder="Entrez votre adresse mail"
            />
            <a
              href="#"
              class="mt-3 md:mt-0 but flex items-center justify-center px-4 text-lg font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white md:py-4 md:text-lg"
            >
              Restez informé
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16 py-16">
        <div v-for="(section, index) in 4" :key="'section' + index">
          <div class="mb-2.5">
            <span class="badge text-xs text-green font-medium">Catégorie</span>
          </div>
          <h4 class="text-xl leading-7 font-semibold text-blue mb-3">
            Digitaliser son business
          </h4>
          <p class="text-base leading-6 text-sutitlegray mb-6">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.
            Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat
            consectetur nulla deserunt vel. Iusto corrupti dicta.
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center text-subtitlegray">
              <div class="flex aitems-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4180_71497)">
                    <path
                      d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
                      fill="#6B7280"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4180_71497">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span class="ml-2">20/02/2020</span>
              </div>
              <div class="ml-4">
                <ul class="list-outside">
                  <li>Cotonou</li>
                </ul>
              </div>
            </div>
            <a href="#" class="text-primary flex items-center">
              S'inscrire
              <ArrowRightIcon class="ml-2 h-4 w-4 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16 py-16">
        <div class="">
          <h2 class="text-gray900 text-3xl font-extrabold">Contactez-nous</h2>
          <p class="mt-3 text-lg leading-7">
            Notre équipe se tient à votre disposition pour vous recevoir aux jours et
            heures ouvrables et répondre à vos préoccupations.
          </p>
          <p class="mt-4 text-xl font-bold">Mme Appoline AHO GLELE</p>
        </div>
        <div class="flex flex-wrap grid-cols-1 md:grid-cols-2 gap-16 justify-center">
          <div class="text-center text-base leading-6">
            <div class="flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="my-1">(+229) 51 10 56 52</div>
            <div>
              Lundi - Vendredi de <br />
              08:00 à 18:00
            </div>
          </div>
          <div class="text-center text-base leading-6">
            <div class="flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-1">fleur.djegnonde@ccib.bj</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
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
input,
.but {
  height: 42px !important;
}
input {
  min-width: 280px !important;
}
.but {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05) !important;
  border-radius: 6px !important;
}
.puce {
  height: 4px;
  width: 4px;
  border-radius: 50%;
}
.badge {
  background: rgba(72, 127, 80, 0.1);
  border-radius: 16px;
  padding: 4px 24px !important;
}
</style>
