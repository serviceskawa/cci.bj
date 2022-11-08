<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="barner sm:h-96 lg:h-auto flex items-center w-full">
      <div class="flex items-center w-full h-full">
        <div class="w-full lg:w-3/5 p-6 md:p-10 lg:p-12 xl:p-20">
          <h1
            class="
              text-blue text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight0
            "
          >
            Accedez à des <br />
            données fiables
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-6">
            Découvrez les rapports et informations acualisées de la <br />
            Chambre de Commerce et d’Industrie sur les <br />
            entreprises et sociétés du Bénin.
          </p>
        </div>
        <div class="right-section hidden lg:flex w-2/5"></div>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-12 xl:p-20">
      <div
        class="
          flex flex-wrap
          justify-center
          grid grid-cols-1
          md:grid-cols-2
          gap-6
          md:gap-8
          mb-3
        "
      >
        <div class="mb-4 pr-4">
          <!--<p class="uppercase text-primary text-sm leading-5 font-semibold tracking-wide uppercase mb-4">
            Section 1
          </p>-->
          <h2 class="text-3xl text-blue leading-9 font-extrabold mb-6">
            Vérifiez les informations d’entreprises <br />
            avec la CCI Bénin
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div class="pr-2">
              <p class="text-2xl leading-8 font-bold">01</p>
              <div class="text-base tracking-tight leading-6 text-subtitlegray">
                <b>Explorez</b> l’outil de connexion aux opportunités pour
                obtenir les donnees d'identité des entreprises et
                etablisssements locaux.
              </div>
            </div>
            <div>
              <p class="text-2xl leading-8 font-bold">02</p>
              <div class="text-base tracking-tight leading-6 text-subtitlegray">
                <b>Retrouvez</b> une entreprise en quelques clics grace au
                moteur de recherche integre
              </div>
            </div>
          </div>

          <div class="tracking-tight mt-6 text-left text-dark">
            <span class="block sm:inline-block">
              <a
                href="http://www.ahilido.bj"
                target="_blank"
                class="text-primary"
                >Visiter www.ahilido.bj
                <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
          <p><a></a></p>
        </div>
        <div class="mb-4 pr-4">
          <!--<p class="uppercase text-primary text-sm leading-5 font-semibold tracking-wide uppercase mb-4">
            Section 1
          </p>-->
          <h2 class="text-3xl text-blue leading-9 font-extrabold mb-6">
            Decouvrez les indicateurs conjecturels sur <br />
            l’environnement des affaires
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-1 gap-3 items-center">
            <div class="pr-2">
              <p class="text-2xl leading-8 font-bold">01</p>
              <div class="text-base tracking-tight leading-6 text-subtitlegray">
                <b
                  >À travers l’Observatoire du Commerce, de l’industrie et des
                  Services,</b
                >
                la CCl Bénin met à disposition des acteurs économiques des
                statistiques de qualité et des informations crédibles pour les
                aider dans leurs prises de decision.
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <!--<p class="uppercase text-primary text-sm leading-5 font-semibold tracking-wide uppercase mb-4">
            Section 1
          </p>-->
          <h2 class="text-3xl text-blue leading-9 font-extrabold mb-6">
            Consultez toutes les données chiffrées <br />
            en libre accès
          </h2>
          <div class="flex justify-between items-center">
            <div>
              <p class="text-2xl leading-8 font-bold">01</p>
              <div class="text-base tracking-tight leading-6 text-subtitlegray">
                <b>Formulez</b>
                vos demandes par messagerie electronique pour recevoir les
                chiffres clés, les dossiers économiques, les rapports et le
                baromètre de l’opinion des entreprises au Bénin, élaborés sur la
                base des données ici de nos collectes.
              </div>
              <div class="text-blue text-lg font-bold">
                Formulez vos demandes sur le info@ccib.bj
              </div>
            </div>
          </div>
          <div class="tracking-tight mt-6 text-left text-dark">
            <span class="block sm:inline-block">
              <router-link
                :to="{ name: 'documents' }"
                target="_blank"
                class="text-primary"
                >Retrouvez toute l’information économique
                <span aria-hidden="true">&rarr;</span></router-link
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
</script>

<style lang="scss" scoped>
.barner {
  background: linear-gradient(
    180deg,
    rgba(72, 127, 80, 0.1) 0%,
    rgba(72, 127, 80, 0) 100%
  ) !important;
}
.right-section {
  background: linear-gradient(
      180deg,
      rgba(72, 127, 80, 0.1) 0%,
      rgba(72, 127, 80, 0) 100%
    ),
    url("../assets/images/bulding.jpeg") !important;
  height: 520px !important;
  background-position: center !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
</style>
