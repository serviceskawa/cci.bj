<template>
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div
        class="mx-auto max-w-md  sm:max-w-3xl  lg:max-w-7xl "
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Des services aussi accessibles que divers
        </p>
        <p class="mx-auto mt-5 text-xl text-subtitlegray">
          Spécialistes de l’accompagnement et du conseil aux entreprises, nous
          fournissons une gamme variée de solutions innovantes pour accompagner
          les sociétés béninoises dans leur croissance.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div class="pt-6" v-for="i in 4" :key="i">
              <div
                class="flow-root bg-blanc rounded-lg group hover:border hover:bg-primaryInfo hover:border-primary"
              >
                <div class="mt-6 pb-6">
                  <div class="flex justify-between px-6">
                    <span
                      class="inline-flex items-start justify-start text-left rounded-md bg-primary p-3 shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <span class="inline-flex rounded-md ml-36">
                      <img
                        class="h-4 w-auto sm:h-4"
                        src="@/assets/Vector.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3
                    class="mt-4 text-lg px-6 font-bold tracking-tight text-gray-900"
                  >
                   Services spécifiques
                  </h3>
                  <p class="mt-5 text-base px-6 text-gray-500">
                    Vérification d’existence et de fiabilité des entreprises,
                    pour la facilitation des affaires
                  </p>
                </div>
              </div>
            </div>
            <!-- <ServiceCard /> -->
          </div>
          <div class="tracking-tight mt-12 text-left text-dark">
            <span class="block sm:ml-2 sm:inline-block">
              <a href="" class="text-primary">
                Voir tous les services <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
</template>