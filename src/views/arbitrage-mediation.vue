<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="barner sm:h-96 lg:h-auto flex items-center p-8 md:px-10 lg:px-20 w-full">
      <div class="flex items-center w-full">
        <h1 class="text-primary text-4xl lg:text-6xl leading-none font-extrabold tracking-tight">
          <span class="text-blue">CAMeC-CCI</span> <br />
          Véritables outils pour <br />
          l’amélioration du climat <br />
          des affaires
        </h1>
        <div class="right-section hidden lg:flex w-2/5">
        </div>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
          CAMeC-CCI
        </h2>
        <p class="text-lg text-center tracking-tight leading-7 text-subtitlegray mt-6">
          Le Centre d’Arbitrage, de Médiation et de Conciliation de la Chambre de Commerce
          et d’Industrie du Bénin (CAMeC - CCIB) est un organe mis à la disposition des
          commerçants, industriels et hommes d’affaires pour faciliter le règlement des
          litiges nés de leurs relations d’affaires. Les modes alternatifs de règlement
          des litiges mis en œuvre par le CAMeC-CCIB sont l’arbitrage, la médiation et la
          conciliation.
        </p>
      </div>
      <div class="py-16 flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card p-5 md:p-10 rounded-lg">
          <div class="mb-4">
            <span class="badge text-sm mb-4 text-green w-auto">1</span>
          </div>
          <h2 class="text-blue text-3xl mb-4 leading-7 font-semibold">L’arbitrage</h2>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray">
            L’arbitrage désigne la technique visant à faire donner la solution d'une
            question, intéressant les rapports entre deux ou plusieurs personnes, par une
            ou plusieurs autres personnes - l'arbitre ou les arbitres - lesquelles
            tiennent leurs pouvoirs d'une convention privée et statuent sur la base de
            cette convention, sans être investies de cette mission par l'État.
          </p>
        </div>
        <div class="card p-5 md:p-10 rounded-lg">
          <div class="mb-4">
            <span class="badge text-sm mb-4 text-green w-auto">2</span>
          </div>
          <h2 class="text-blue text-3xl mb-4 leading-7 font-semibold">La médiation</h2>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray">
            La médiation désigne la technique visant à faire donner la solution d'une
            question, intéressant les rapports entre deux ou plusieurs personnes, par une
            ou plusieurs autres personnes - l'arbitre ou les arbitres - lesquelles
            tiennent leurs pouvoirs d'une convention privée et statuent sur la base de
            cette convention, sans être investies de cette mission par l'État.
          </p>
        </div>
        <div class="card p-5 md:p-10 rounded-lg">
          <div class="mb-4">
            <span class="badge text-sm mb-4 text-green w-auto">3</span>
          </div>
          <h2 class="text-blue text-3xl mb-4 leading-7 font-semibold">La conciliation</h2>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray">
            La conciliation, comme la médiation est un mode non juridictionnel, un
            processus amiable de règlement des litiges dans lequel, les parties
            recherchent ensemble à établir les bases d’un accord avec l’aide d’un tiers
            indépendant appelé conciliateur. Elle s’achève comme la médiation par la
            rédaction d’un protocole d’Accord.
          </p>
        </div>
      </div>
      <div class="px-0 lg:px-20">
        <div class="lg:px-20 px-0">
          <div
            class="w-full rounded-lg p-4 md:p-8 bg-gray flex flex-wrap justify-between items-center"
          >
            <div class="w-3/4 pr-4 mb-4">
              <h2
                class="text-2xl md:text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl"
              >
                Voulez vous en savoir plus ?
              </h2>
              <p class="mt-3 text-lg text-subtitlegray sm:mt-4">
                Connectez-vous sur notre plateforme imPULSE pour avoir plus de détails et
                éventuellement prendre contact avec un de nos conseillers
              </p>
            </div>
            <div class="w-auto">
              <a
                href="#"
                class="flex items-center justify-center px-4 py-2 text-lg font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white md:py-2.5 md:text-lg md:px-5"
              >
                Aller sur impulse.bj
              </a>
            </div>
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
    ),
    #ffffff !important;
}
.right-section {
    background: url('../assets/images/arbitrage.png') !important; 
    height: 520px !important;
    background-position: center !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.card {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  .badge {
    border-radius: 16px !important;
    background: rgba(72, 127, 80, 0.1) !important;
    padding: 2px 16px !important;
  }
}
</style>
