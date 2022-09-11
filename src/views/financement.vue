<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="p-8 sm:p-16">
    <div>
      <div class="flex items-top flex-wrap grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Facilitation de l’accès <br />
            au financement
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-lg text-subtitlegray sm:mt-4">
            Dans sa mission d’accompagnement des entreprises, la Chambre de Commerce et
            d’Industrie du Bénin (CCI Bénin) permet aux Petites et Moyennes Entreprises
            (PME), au Petites et Moyennes Industries (PMI), et aux grosses entreprises
            béninoises de découvrir et de comprendre les mécanismes utilisés dans la
            facilitation de l’accès au financement.
          </p>
          <p class="mt-3 max-w-2xl mx-auto text-lg text-subtitlegray sm:mt-4">
            Afin de répondre de manière plus efficace aux besoins exprimés par chaque
            entreprise, la CCI-Bénin met en place une initiative à la mesure des besoins :
            la plateforme imPULSE. Une équipe de conseillers formés pour la tâche vous
            donneront les informations nécessaires pour vous faciliter l’accès au
            financement dont vous avez besoin.
          </p>
        </div>
        <div class="asset-session hidden md:flex" />
      </div>
    </div>
    <div class="pt-16">
      <div class="md:pt-16 md:pb-8 pt-16 pb-8">
        <div class="md:px-16 px-0">
          <div
            class="w-full rounded-lg p-8 bg-gray flex flex-wrap justify-between items-center"
          >
            <div class="w-3/4 pr-4 mb-4">
              <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
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

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.asset-session {
  background: url("../assets/images/financement.jpeg");
  background-size: cover !important;
  height: 400px;
  width: 100%;
}
</style>
