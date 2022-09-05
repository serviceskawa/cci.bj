<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div>
      <!-- Hero card -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="">
          <div class="relative sm:overflow-hidden">
            <carousel :items-to-show="1">
              <slide v-for="slide in 10" :key="slide">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div class="absolute inset-0 bg-back mix-blend-multiply" />
                </div>
                <div
                  class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8"
                >
                  <h1
                    class="text-left text-4xl font-bold tracking-tight w-50 sm:text-5xl lg:text-6xl"
                  >
                    <span class="block text-white"
                      >Benin Investment Forum 2022</span
                    >
                    <span class="block text-primary">customer support</span>
                  </h1>
                  <p
                    class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div
                    class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                  >
                    <div class="rounded-md shadow">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10"
                      >
                        Get starteds
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 ml-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white md:py-4 md:text-lg md:px-10"
                      >
                        Live demo {{ slide }}
                      </a>
                    </div>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </div>

    <div id="indicators-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div
          class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item="1"
        >
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div
          class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
          data-carousel-item="2"
        >
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div
          class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
          data-carousel-item="3"
        >
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div
          class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
          data-carousel-item="4"
        >
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div
          class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
          data-carousel-item="5"
        >
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <!-- offres sections -->
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Des offres adaptées à votre profil
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500">
          Quel que soit votre besoin, la CCI-Bénin vous accompagne à chaque
          étape du processus vers l’atteinte de vos objectifs. Nous vous
          simplifions les démarches pour votre satisfaction complète.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="pt-6">
              <div class="flow-root border rounded-lg">
                <div class="-mt-6">
                  <div class="px-6">
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
                          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg px-6 font-medium tracking-tight text-gray-900"
                  >
                    Créateur d’entreprise
                  </h3>
                  <p class="mt-5 text-base px-6 pb-4 text-gray-500">
                    Aspirant entrepreneur ou commerçant désirant créer une
                    entreprise au Bénin, faites-vous accompagner, aider et
                    guider par nos spécialistes en création et gestion
                    d’entreprise.
                  </p>
                  <div class="bg-gray pb-8 pt-4 px-6">
                    <a href="" class="text-primary">
                      Lire plus <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flow-root border rounded-lg">
                <div class="-mt-6">
                  <div class="px-6">
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
                          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg px-6 font-medium tracking-tight">
                    Chef d’entreprise
                  </h3>
                  <p class="mt-5 text-base px-6 pb-4 text-gray-500">
                    Directeur Général, PDG ou Gérant de société souhaitant
                    optimiser les résultats de vos entreprises, faites-vous
                    accompagner par nos spécialistes en développement
                    d’entreprise
                  </p>
                  <div class="bg-gray pb-8 pt-4 px-6">
                    <a href="" class="text-primary">
                      Lire plus <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flow-root border rounded-lg">
                <div class="-mt-6">
                  <div class="px-6">
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
                          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 px-6 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Investisseur
                  </h3>
                  <p class="mt-5 px-6 text-base text-gray-500">
                    Homme d’affaires, entrepreneur, investisseur souhaitant
                    comprendre le marché béninois et ces opportunités,
                    faites-vous accompagner par nos spécialistes en analyses et
                    investissement.
                  </p>
                  <div class="bg-gray pb-8 pt-4 px-6">
                    <a href="" class="text-primary">
                      Lire plus <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flow-root border rounded-lg">
                <div class="-mt-6">
                  <div class="px-6">
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
                          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    class="mt-8 px-6 text-lg font-medium tracking-tight text-gray-900"
                  >
                    Institutionnel
                  </h3>
                  <p class="mt-5 px-6 text-base text-gray-500">
                    Représentant d’organisation internationnale souhaitant
                    recueillir des données sur les entreprises, consultez nos
                    rapports et diverses données prises lors de nos collectes
                  </p>
                  <div class="bg-gray px-6 pb-8 pt-4 px-6">
                    <a href="" class="text-primary">
                      Lire plus <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end offres sections -->

    <!-- Blog section -->
    <div class="relative bg-gris">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3" />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <div class="text-center">
          <h2
            class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl"
          >
            Nos actualités
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
            Ne ratez aucune opportunité - Ne manquez aucun événement de la
            Chambre de Commerce et d’Industrie du Bénin
          </p>
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <ArticleCard
            v-for="branch in commits"
            :key="branch.id"
            :branch="branch"
          />
        </div>
      </div>
    </div>
    <!-- end blog section -->

    <!-- indicateur -->
    <div class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="relative lg:grid lg:grid-cols-4 lg:gap-x-8">
          <div class="lg:col-span-2 xl:mt-20">
            <p class="mt-2 text-base font-bold tracking-tight text-primary">
              Indicateurs clés
            </p>
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Une communauté d’affaires forte, résiliente et diversifiée
            </h2>
            <p>
              Nous connectons divers acteurs autour d’une vision stratégique
              commune afin susciter des leviers d’innovation et de croissance
              pour les entreprises.
            </p>
          </div>
          <dl
            class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2"
          >
            <div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="../assets/160-trenging-up-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  3,8%
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Taux de croissance du PIB au Bénin en 2020
              </dd>
            </div>
            <div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="../assets/16-assessment-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  52.378
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Entreprises créées au Bénin en 2021
              </dd>
            </div>
            <div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="../assets/work-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  114 ANS
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                D’activités de la CCI-Bénin au service du secteur privé
              </dd>
            </div>
            <div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="../assets/199-attribution-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                  60
                </p>
              </dt>
              <dd class="mt-2 text-base text-gray-500">Elus consulaires</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <!-- end indicateur -->

    <!-- services -->
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Des services aussi accessibles que divers
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500">
          Spécialistes de l’accompagnement et du conseil aux entreprises, nous
          fournissons une gamme variée de solutions innovantes pour accompagner
          les sociétés béninoises dans leur croissance.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="pt-6" v-for="service in services" :key="service.id">
              <div
                class="flow-root bg-blanc rounded-lg group hover:bg-primaryInfo hover:border-primary"
              >
                <div class="mt-6 pb-6">
                  <div class="px-6">
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
                        src="../assets/Vector.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h3
                    class="mt-4 text-lg px-6 font-medium tracking-tight text-gray-900"
                  >
                    name
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
          <div class="tracking-tight mt-6 text-left text-dark">
            <span class="block sm:ml-2 sm:inline-block">
              <a href="" class="text-primary">
                Voir tous les services <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- end services -->

    <!-- agenda -->
    <div class="relative bg-white">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3" />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <div class="text-center">
          <h2
            class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl"
          >
            Agenda
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
            Retrouvez nos futurs évènements
          </p>
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="event in events"
            :key="event.id"
            :event="event"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div
              class="flex-1 bg-white pt-6 px-6 pb-3 flex flex-col justify-between"
            >
              <div class="flex-1">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primaryInfo text-primary"
                >
                  Présentiel
                </span>
                <a href="" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    Titre de l’évenement
                  </p>
                  <p class="text-sm font-medium text-indigo-600">
                    <a href="" class="hover:underline"> 20 - 24 Sept 2022 </a>
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Palais de la Marina, Cotonou, Bénin
                  </p>
                </a>
              </div>
            </div>
            <div class="tracking-tight bg-white px-6 py-3 text-left text-dark">
              <span class="block sm:inline-block">
                <a href="" class="text-primary">
                  Participer <span aria-hidden="true">&rarr;</span></a
                >
              </span>
            </div>
          </div>
        </div>
        <div class="tracking-tight mt-6 text-left text-dark">
          <span class="block sm:ml-2 sm:inline-block">
            <a href="" class="text-primary">
              Voir tous les évènements <span aria-hidden="true">&rarr;</span></a
            >
          </span>
        </div>
      </div>
    </div>
    <!-- end agenda -->

    <!-- appels d'offres -->
    <!-- <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Appels d’offres et appels à projets
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500">
          La CCIB vous informe des opportunités d’affaires localisées au Bénin.
          Retrouvez tous les appels à concurrence, communiqués et appels à
          candidatures.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-white">
            <div>
              <ul role="list" class="mt-6 space-y-6">
                <OffreCard />
              </ul>
            </div>
            <div class="mt-6 text-sm font-medium">
              <a
                href="#"
                class="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
              >
                View all posts
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Appels d’offres et appels à projets
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500">
          La CCIB vous informe des opportunités d’affaires localisées au Bénin.
          Retrouvez tous les appels à concurrence, communiqués et appels à
          candidatures.
        </p>
        <div class="grid gap-12 lg:grid-cols-2 mt-12">
          <div class="p-1 group sm:flex space-x-6 bg-white bg-opacity-50">
            <img
              src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top transition duration-500"
            />
            <div class="sm:w-7/12 pl-0">
              <div class="space-y-2">
                <div class="space-y-4">
                  <span
                    class="inline-flex items-center rounded-full bg-primaryInfo px-2.5 py-0.5 text-xs font-medium text-primary"
                    >Appel d'offre</span
                  >
                  <p class="text-dark font-semibold">
                    Publié le 23 Mars 2022 - Prend fin le 05 Avril 2022
                  </p>

                  <h4 class="text-lg font-semibold text-cyan-900">
                    Concours de recrutement de 662 aspirants pour la formation
                    d'enseignants au profit des Lycées techniques agricoles
                  </h4>
                </div>
                <a href="#" class="block font-semibold w-max text-primary"
                  >En savoir plus →</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end appels d'offres -->

    <!-- devenir partenaires -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl tracking-tight font-bold text-blue">
          Nos partenaires, plus dévoués que jamais pour votre succès
        </h2>
        <div class="flow-root mt-8 lg:mt-10">
          <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                alt="Tuple"
              />
            </div>
            <div
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg"
                alt="Mirage"
              />
            </div>
            <div
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"
                alt="StaticKit"
              />
            </div>
            <div
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
                alt="Transistor"
              />
            </div>
            <div
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>

        <div class="tracking-tight text-right text-dark">
          <span class="block sm:ml-2 sm:inline-block">
            <a href="" class="text-primary">
              Devenir partenaire <span aria-hidden="true">&rarr;</span></a
            >
          </span>
        </div>
      </div>
    </div>
    <!-- en partenaires -->

    <ul>
      <!-- <li v-for="branch in commits">{{ branch.name }}</li> -->
    </ul>
    <!-- More main page content here... -->
  </main>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import ServiceCard from "../components/ServiceCard.vue";
import OffreCard from "../components/OffreCard.vue";
import ArticleCard from "../components/ArticleCard.vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import axiosClient from "../axios";

const NEWS_CAT = `http://localhost/cciwebsite/public/api/news`;
const services_api = `http://localhost/cciwebsite/public/api/services`;
const events = `http://localhost/cciwebsite/public/api/events`;
const setting = `http://localhost/cciwebsite/public/api/setting`;

export default {
  components: {
    ServiceCard,
    OffreCard,
    ArticleCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    branches: ["main", "v2-compat"],
    currentBranch: "main",
    commits: null,
    services: null,
    events: null,
    setting: null,
  }),

  created() {
    // fetch on init
    this.fetchData();
  },
  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: "fetchData",
  },

  methods: {
    async fetchData() {
      const url = `${NEWS_CAT}`;
      this.commits = await (await fetch(url)).json();
      console.log(this.commits);
    },
    async fetchServices() {
      const url = `${services_api}`;
      this.services = await (await fetch(url)).json();
      console.log(this.services);
    },
    async fetchEvents() {
      const url = `${events}`;
      this.events = await (await fetch(url)).json();
      console.log(this.events);
    },
    async fetchSetting() {
      const url = `${setting}`;
      this.setting = await (await fetch(url)).json();
      console.log(this.setting);
    },
  },
};
</script>

<style>
.bg-back {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ) !important;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  /* display: flex; */
  justify-content: left;
  align-items: left;
}

.carousel__slide {
  padding: 10px;
  display: block;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__pagination-button {
  background-color: black !important;
  margin-top: -32px;
}
</style>
