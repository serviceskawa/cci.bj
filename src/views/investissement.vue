<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="">
    <Notifications
      :notif="notif"
      v-if="notif.type !== ''"
      @close="notif.type = ''"
    />
    <div
      class="
        barner
        sm:h-96
        lg:h-auto
        flex
        items-center
        p-4
        md:px-10
        lg:px-20
        w-full
      "
    >
      <div class="flex items-center w-full">
        <div>
          <h1
            class="
              text-primary text-4xl lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Explorez les opportunités <br />
            d'investissement au Bénin
          </h1>
          <p class="text-md md:text-lg tracking-tight leading-7 text-blue mt-6">
            La CCI Bénin met à disposition des opérateurs <br />
            économiques, des outils et ressources pour <br />
            faciliter leurs projets d'investissement.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div class="bg-white overflow-hidden pb-20">
        <div class="">
          <div class="relative grid lg:grid-cols-2 gap-x-8">
            <div class="space-y-4">
              <p class="mt-2 text-base font-medium tracking-tight text-primary">
                Indicateurs clés
              </p>
              <h2
                class="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                Une communauté <br />
                d’affaires forte, résiliente <br />
                et diversifiée
              </h2>
              <p class="text-subtitlegray">
                Nous connectons divers acteurs autour d’une vision <br />
                stratégique commune afin de susciter des leviers <br />
                d’innovation et de croissance pour les entreprises.
              </p>
            </div>
            <div>
              <dl
                class="grid grid-cols-2 gap-x-8 gap-y-10 lg:mt-0 lg:col-span-2"
              >
                <div>
                  <dt>
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        bg-white
                        h-12
                        w-12
                        rounded-md
                        text-white
                      "
                    >
                      <img
                        class="h-8 w-auto sm:h-10 hover:animate-ping"
                        src="@/assets/160-trenging-up-solid.svg"
                        alt=""
                      />
                    </div>
                    <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                      3,8%
                    </p>
                  </dt>
                  <dd class="mt-2 text-base text-sp">
                    Taux de croissance du <br />
                    PIB au Bénin en 2020
                  </dd>
                </div>
                <div>
                  <dt>
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        bg-white
                        h-12
                        w-12
                        rounded-md
                        text-white
                      "
                    >
                      <img
                        class="h-8 w-auto sm:h-10 hover:animate-ping"
                        src="@/assets/16-assessment-solid.svg"
                        alt=""
                      />
                    </div>
                    <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                      52.378
                    </p>
                  </dt>
                  <dd class="mt-2 text-base text-sp">
                    Entreprises créées <br />
                    au Bénin en 2021
                  </dd>
                </div>
                <div>
                  <dt>
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        bg-white
                        h-12
                        w-12
                        rounded-md
                        text-white
                      "
                    >
                      <img
                        class="h-8 w-auto sm:h-10 hover:animate-ping"
                        src="@/assets/work-solid.svg"
                        alt=""
                      />
                    </div>
                    <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                      114 ANS
                    </p>
                  </dt>
                  <dd class="mt-2 text-base text-sp">
                    D’activités de la CCI Bénin <br />
                    au service du secteur privé
                  </dd>
                </div>
                <div>
                  <dt>
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        bg-white
                        h-12
                        w-12
                        rounded-md
                        text-white
                      "
                    >
                      <img
                        class="h-8 w-auto sm:h-10 hover:animate-ping"
                        src="@/assets/199-attribution-solid.svg"
                        alt=""
                      />
                    </div>
                    <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                      60
                    </p>
                  </dt>
                  <dd class="mt-2 text-base text-sp">Elus consulaires</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-grayCard px-6 lg:px-10 py-10">
        <h1
          class="
            text-primary text-3xl
            lg:text-4xl
            leading-none
            font-extrabold
            tracking-tight
          "
        >
          Ahilido vous permet de plonger au coeur des <br />
          performances des entreprises béninoises.
        </h1>
        <p
          class="
            text-md
            md:text-lg
            tracking-tight
            leading-7
            text-subtitlegray
            mt-4
            mb-10
          "
        >
          La plateforme Ahilido a pour vocation de rendre disponible et
          accessible en temps réel la base de <br />
          données nationale des entreprises béninoises. L‘objectif : regrouper
          les informations et opportunité <br />
          d’affaires au profit des opérateurs économiques.
        </p>
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="">
            <div class="flex mb-4">
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56.0016"
                  height="56"
                  rx="8"
                  fill="#DD7A4B"
                  fill-opacity="0.1"
                />
                <path
                  d="M16 20L20 21.3333M20 21.3333L16 33.3333C18.3634 35.1112 21.6382 35.1112 24.0016 33.3334M20 21.3333L24.0001 33.3333M20 21.3333L28 18.6667M36 21.3333L40 20M36 21.3333L32 33.3333C34.3634 35.1112 37.6382 35.1112 40.0016 33.3334M36 21.3333L40.0001 33.3333M36 21.3333L28 18.6667M28 16V18.6667M28 40V18.6667M28 40H24M28 40H32"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="ml-4 text-blue font-bold text-lg">
                Trouver des <br />
                informations sur les <br />
                entreprises
              </span>
            </div>
            <div class="text-sm leading-5 text-subtitlegray">
              Recherchez des informations légales, juridiques et financières sur
              les entreprises béninoises (Registre de Commerce, IFU, bilan
              d’exercice, décisions de justice, etc.).
            </div>
          </div>
          <div class="">
            <div class="flex mb-4">
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56.0016"
                  height="56"
                  rx="8"
                  fill="#DD7A4B"
                  fill-opacity="0.1"
                />
                <path
                  d="M16 20L20 21.3333M20 21.3333L16 33.3333C18.3634 35.1112 21.6382 35.1112 24.0016 33.3334M20 21.3333L24.0001 33.3333M20 21.3333L28 18.6667M36 21.3333L40 20M36 21.3333L32 33.3333C34.3634 35.1112 37.6382 35.1112 40.0016 33.3334M36 21.3333L40.0001 33.3333M36 21.3333L28 18.6667M28 16V18.6667M28 40V18.6667M28 40H24M28 40H32"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="ml-4 text-blue font-bold text-lg">
                Connecter les <br />
                opportunités aux <br />
                entreprises
              </span>
            </div>
            <div class="text-sm leading-5 text-subtitlegray">
              Nous connectons vos besoins avec diverses opportunités (mise en
              place de partenariats d’affaires, offres ou demandes de produits
              et de services, accès au financement).
            </div>
          </div>
          <div class="">
            <div class="flex mb-4">
              <svg
                width="57"
                height="56"
                viewBox="0 0 57 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56.0016"
                  height="56"
                  rx="8"
                  fill="#DD7A4B"
                  fill-opacity="0.1"
                />
                <path
                  d="M16 20L20 21.3333M20 21.3333L16 33.3333C18.3634 35.1112 21.6382 35.1112 24.0016 33.3334M20 21.3333L24.0001 33.3333M20 21.3333L28 18.6667M36 21.3333L40 20M36 21.3333L32 33.3333C34.3634 35.1112 37.6382 35.1112 40.0016 33.3334M36 21.3333L40.0001 33.3333M36 21.3333L28 18.6667M28 16V18.6667M28 40V18.6667M28 40H24M28 40H32"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="ml-4 text-blue font-bold text-lg">
                Rester informé et <br />
                prendre les bonnes <br />
                décisions
              </span>
            </div>
            <div class="text-sm leading-5 text-subtitlegray">
              Restez informé(e) des réglementations en vigueur et obtenez des
              statistiques sur l’activité économique des entreprises au Bénin.
              Vérifiez la crédibilité des entreprises et potentiels partenaires.
            </div>
          </div>
        </div>
        <div class="mt-10 section grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div class="p-8">
            <h1 class="text-4xl text-greenDark leading-10 font-extrabold">
              Découvrir les <br />
              entreprises béninoises <br />
              sur Ahilido
            </h1>
            <div class="mt-8 w-full">
              <a href="https://ahilido.bj/" target="_blank">
                <button type="button" class="btn btn-primary bg-primary text-white text-sm w-full">
                  Visiter
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h1
          class="
            text-blue text-3xl
            lg:text-4xl
            leading-none
            font-extrabold
            tracking-tight
          "
        >
          Ressources pour les investisseurs
        </h1>
        <p
          class="
            text-md
            md:text-lg
            tracking-tight
            leading-7
            text-subtitlegray
            mt-4
            mb-10
          "
        >
          Nous mettons à votre disposition la documentation essentielle pour
          votre implantation <br />
          sur le marché des affaires au Bénin.
        </p>
        <div
          class="
            flex flex-wrap
            grid grid-cols-1
            md:grid-cols-2
            gap-6
            md:gap-8
            pb-10
          "
        >
          <div
            class="
              rounded-md
              mb-2
              md:mb-0
              cursor-pointer
              flex flex-col
              justify-between
              bg-grayCard
            "
          >
            <div class="py-10 px-6">
              <div class="">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.666672"
                    width="56"
                    height="54.6667"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M22.6667 28.6667V27.3333M28 28.6667V24.6667M33.3333 28.6667V22M22.6667 39.3333L28 34L33.3333 39.3333M16 16.6667H40M17.3333 16.6667H38.6667V32.6667C38.6667 33.4031 38.0697 34 37.3333 34H18.6667C17.9303 34 17.3333 33.4031 17.3333 32.6667V16.6667Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="my-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Tableau de bord de l'investisseur
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Découvrez les chiffres et données décrivant l‘état des 
                  <br>lieux des particuliers et investissements qui interviennent  
                  <br>sur le marché béninois.
                </p>
              </div>
              <a 
              :href="static_file_url + '/publications/file_da68308533576edbd27393e0eb9ff87a.pdf'"
              target="_blank"
              >
              <button
                type="button"
                class="btn btn-light bg-white text-primary text-sm w-full"
              >
                <span class="underline">Consulter</span>
              </button>
              </a>
            </div>
          </div>
          <div
            class="
              rounded-md
              mb-2
              md:mb-0
              cursor-pointer
              flex flex-col
              justify-between
              bg-grayCard
            "
          >
            <div class="py-10 px-6">
              <div class="">
                <svg
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56.0016"
                    height="56"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M16 20L20 21.3333M20 21.3333L16 33.3333C18.3634 35.1112 21.6382 35.1112 24.0016 33.3334M20 21.3333L24.0001 33.3333M20 21.3333L28 18.6667M36 21.3333L40 20M36 21.3333L32 33.3333C34.3634 35.1112 37.6382 35.1112 40.0016 33.3334M36 21.3333L40.0001 33.3333M36 21.3333L28 18.6667M28 16V18.6667M28 40V18.6667M28 40H24M28 40H32"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="my-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Lois et réglementations <br />
                  en vigueur au Bénin
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Accédez aux documents pour découvrir les lois et 
                  <br>réglémentations qui encadrent l‘activité des investisseurs 
                  <br>au Bénin.
                </p>
              </div>
              <a @click="$router.push({ name: 'documents' })">
              <button
                type="button"
                class="btn btn-light bg-white text-primary text-sm w-full"
              >
                <span class="underline">Consulter</span>
              </button>
            </a>
            </div>
          </div>
          <div
            class="
              rounded-md
              mb-2
              md:mb-0
              cursor-pointer
              flex flex-col
              justify-between
              bg-grayCard
            "
          >
            <div class="py-10 px-6">
              <div class="">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M24 37.3333V29.3333C24 27.8606 22.8061 26.6667 21.3333 26.6667H18.6667C17.1939 26.6667 16 27.8606 16 29.3333V37.3333C16 38.8061 17.1939 40 18.6667 40H21.3333C22.8061 40 24 38.8061 24 37.3333ZM24 37.3333V24C24 22.5272 25.1939 21.3333 26.6667 21.3333H29.3333C30.8061 21.3333 32 22.5272 32 24V37.3333M24 37.3333C24 38.8061 25.1939 40 26.6667 40H29.3333C30.8061 40 32 38.8061 32 37.3333M32 37.3333V18.6667C32 17.1939 33.1939 16 34.6667 16H37.3333C38.8061 16 40 17.1939 40 18.6667V37.3333C40 38.8061 38.8061 40 37.3333 40H34.6667C33.1939 40 32 38.8061 32 37.3333Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="my-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Baromètre de l'opinion des entreprises et chiffres clés
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Explorez les statistiques et données clefs relatives au 
                  <br>climat économique des entreprises locales pour mieux 
                  <br>comprendre le marché.
                </p>
              </div>
              <a @click="$router.push({ name: 'documents' })">
              <button
                type="button"
                class="btn btn-light bg-white text-primary text-sm w-full"
              >
                <span class="underline">Consulter</span>
              </button>
            </a>
            </div>
          </div>
          <div
            class="
              rounded-md
              mb-2
              md:mb-0
              cursor-pointer
              flex flex-col
              justify-between
              bg-grayCard
            "
          >
            <div class="py-10 px-6">
              <div class="">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M26.6993 16C20.681 16.6653 16 21.7676 16 27.9633C16 34.611 21.389 40 28.0367 40C34.2324 40 39.3347 35.319 40 29.3007H26.6993V16Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M39.3885 23.951H32.049V16.6117C35.469 17.8205 38.1796 20.531 39.3885 23.951Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="my-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Annuaire statistique des entreprises
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Accédez aux données de cadrage et statistiques
                  <br>actualisées sur les entreprises et activités économiques
                  <br>en lien avec les industries et le commerce.
                </p>
              </div>
              <a href="mailto:info@ccib.bj?subject=Annuaire%20statistique%20des%20entreprises">
              <button
                type="button"
                class="btn btn-light bg-white text-primary text-sm w-full"
              >
                <span class="underline">Demander</span>
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-grayCard px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="">
          <h1
            class="text-primary text-4xl leading-none font-bold tracking-tight"
          >
            Investir au Bénin
          </h1>
          <p class="text-blue text-lg leading-6 font-normal text-subtitlegray tracking-tight mt-4">
            L'Agence de Promotion des Investissements et des Exportations (APIEx) est un instrument mis en place par le gouvernement béninois pour vous informer et vous accompagner dans vos démarches
          </p>
          <div class="mt-8 w-full">
            <a href="https://apiex.bj/" target="_blank">
            <button
              type="button"
              class="btn btn-light bg-white shadow-md text-primary underline w-full"
            >
              Visiter
            </button>
          </a>
          </div>
        </div>
        <div>
          <img
            src="@/assets/images/boxer.jpeg"
            class="w-full h-56 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bg-rad-primary mb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <h1
          class="
            text-blue text-3xl
            lg:text-4xl
            leading-none
            font-extrabold
            tracking-tight
          "
        >
          Informez-vous pour mieux investir au Bénin
        </h1>
        <p
          class="
            text-md
            md:text-lg
            tracking-tight
            leading-7
            text-subtitlegray
            mt-4
          "
        >
          Comprenez le marché béninois, la fiscalité, les politiques, les lois réglementations et législation en <br> matière d’investissement grâces aux billets des experts de la CCI Bénin
        </p>
        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="n in news" :key="n.id" :branch="n" />
        </div>
        <div class="mt-12 flex justify-between items-center flex-wrap">
          <div class="px-3 lg:px-0">
            <span class="block sm:ml-2 sm:inline-block">
              <a
                @click="$router.push({ name: 'blog-articles' })"
                class="text-primary"
              >
                Voir toute l'actualité<span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
          <div class="flex" v-if="news.length > 3">
            <a href="#" class="mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="23.5901"
                  y="24"
                  width="23.41"
                  height="24"
                  rx="11.705"
                  transform="rotate(-180 23.5901 24)"
                  fill="#E9E9E9"
                />
                <path
                  d="M14.1801 18L15.5901 16.59L11.0101 12L15.5901 7.41L14.1801 6L8.18009 12L14.1801 18Z"
                  fill="#F7F9F9"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.590088"
                  width="23.41"
                  height="24"
                  rx="11.705"
                  fill="#FAE8E0"
                />
                <path
                  d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z"
                  fill="#DD7A4B"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-dark mb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <h1
          class="
            text-blue text-3xl
            lg:text-4xl
            leading-none
            font-extrabold
            tracking-tight
            text-center
          "
        >
          Ne manquez aucun article de blog
        </h1>
        <p
          class="
            text-md
            md:text-lg
            tracking-tight
            leading-7
            text-blue
            mt-4
            text-center
          "
        >
          Abonnez-vous à notre newsletter pour être informé(e) des parutions d’articles de blogs relatifs à l’investissement au Bénin.
        </p>
        <form
          @submit.prevent="sendRequest"
          class="grid grid-cols-1 md:grid-cols-4 mt-6 gap-6"
        >
          <div class="md:col-span-3">
            <label for="cta-email" class="sr-only">Email</label>
            <div>
              <input
                id="cta-email"
                type="email"
                required
                v-model="email"
                class="
                  block
                  w-full
                  border border-borderInput
                  rounded-md
                  px-5
                  py-3
                  text-base text-dark
                "
                placeholder="Entrez votre adresse mail"
              />
            </div>
          </div>
          <div class="w-full">
            <button
              type="submit"
              class="
                block
                w-full
                rounded-md
                px-5
                py-3
                bg-white
                text-base
                font-medium
                text-primary
                hover:bg-indigo-400
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                focus:ring-offset-2
                sm:px-10
                flex
                justify-center
              "
              :disabled="on_loading_request"
            >
              <div role="status" v-if="on_loading_request">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray animate-spin fill-primary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div v-else>Restez informé(e)</div>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-20">
      <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
        Agenda
      </h1>
      <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
        Participez aux rencontres thématiques pour échanger avec d'autres opérateurs
        <br />
        économiques sur des sujets d'intérêt pour les affaires.
      </p>
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(agen, i) in agenda_datas"
          :key="i"
          class="flex flex-col shadow overflow-hidden mb-4 mt-6 rounded-b-md"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="agen.photo" alt="" />
          </div>
          <div class="flex-1 bg-white pt-6 px-6 flex flex-col justify-between">
            <div class="flex-1">
              <span
                class="
                  inline-flex
                  items-center
                  px-6
                  py-1
                  rounded-full
                  text-sm
                  bg-primaryInfo
                  text-primary
                  mt-4
                "
              >
                {{ agen.type.name }}
              </span>
              <a href="" class="block mt-2 spaxe-y-2">
                <p class="text-base font-semibold text-gray-900">
                  {{ agen.title }}
                </p>
                <p class="text-base font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    {{ agen.start_date }}
                  </a>
                </p>
                <p class="mt-1.5 text-base text-gray-500">
                  {{ agen.short_content }}
                </p>
              </a>
            </div>
          </div>
          <div class="tracking-tight bg-white px-6 py-9 text-left text-dark">
            <span class="block sm:inline-block">
              <a :href="agen.link" class="text-primary">
                Participer <span aria-hidden="true">&rarr;</span></a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grayCard">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 items-center">
          <div>
            <img
              class="h-96 w-full object-cover rounded-md"
              src="@/assets/images/last.jpeg"
              alt=""
            />
          </div>
          <div>
            <h5
              class="text-base leading-6 font-semibold tracking-wider uppercase"
            >
              NEWSLETTER
            </h5>
            <h1
              class="
                mt-2
                text-4xl
                leading-10
                font-extrabold
                tracking-tight
                text-primary
              "
            >
            Recevez nos appels d’offres via email
            </h1>
            <p class="mt-4 text-lg leading-7 font-normal text-blue">
              Les meilleures opportunités d’affaires, plus proches de vous, en instantané.
            </p>
            <form @submit.prevent="sendRequest" class="">
              <div class="mt-4">
                <label for="cta-email" class="sr-only">Email</label>
                <div>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    v-model="email"
                    class="block w-full border border-borderInput rounded-md px-5 py-3 text-base text-dark"
                    placeholder="Entrez votre adresse mail"
                  />
                </div>
              </div>
              <div class="mt-4">
                <button
                  type="submit"
                  class="block w-full rounded-md px-5 py-3 bg-white text-base font-medium text-primary hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-10 flex justify-center"
                  :disabled="on_loading_request"
                >
                  <div role="status" v-if="on_loading_request">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray animate-spin fill-primary"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div v-else>Souscrire</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import moment from "moment";
import ArticleCard from "@/components/ArticleCard.vue";
import AppelsOffresBox from "@/components/home/AppelsOffresBox.vue";
import { services } from "@/api";
import Notifications from "@/components/Notifications.vue";
export default {
  components: {
    ArticleCard,
    AppelsOffresBox,
    Notifications,
  },
  data() {
    return {
      news: [],
      appels_offres: [],
      on_loading_request: false,
      email: "",
      phone: "",
      agenda_datas: [],
      notif: {
        type: "",
        title: "",
        description: "",
      },
      static_file_url: import.meta.env.VITE_FILE_URL,
    };
  },
  created() {
    let configs = sessionStorage.getItem("configs");
    if (configs !== undefined && configs !== null) {
      configs = JSON.parse(configs);
    }
    if (
      this.$store.state.home_elements.news !== undefined &&
      this.$store.state.home_elements.news !== undefined
    ) {
      let news = this.$store.state.home_elements.news;
      news = news.data.map((element) => {
        return {
          ...element,
          cover: configs.image_url + "/" + element.photo,
        };
      });

      this.news = news.slice(0, 3);
    }
    this.appels_offres = this.$store.state.home_elements;
    if (
      this.appels_offres.appels !== undefined &&
      this.appels_offres.appels !== null
    ) {
      this.appels_offres = this.appels_offres.appels;
      this.appels_offres = this.appels_offres.map((element) => {
        return {
          ...element,
          photo: configs.image_url + "/" + element.document,
        };
      });
    }
    this.agenda_datas = this.$store.state.home_elements;
    if (
      this.agenda_datas.events !== undefined &&
      this.agenda_datas.events !== null
    ) {
      this.agenda_datas = this.agenda_datas.events;
      this.agenda_datas = this.agenda_datas.data.map((element) => {
        return {
          ...element,
          photo: configs.image_url + "/" + element.photo,
        };
      });
    }
  },
  methods: {
    async sendRequest() {
      const data = {
        email: this.email,
        subject: "Appel offre",
        slug: "Investisseur",
      };
      try {
        this.on_loading_request = true;
        await services.subscribe_newsletter(data).then((response) => {
          this.on_loading_request = false;
          this.email = "";
          if (response.status == 200) {
            this.notif.type = "success";
            this.notif.title = "Effectuée";
            this.notif.description = this.$store.state.current_notif_message;
            this.$store.state.current_notif_message = response.message;
          } else {
            this.notif.type = "error";
            this.notif.title = "Erreur";
            this.notif.description =
              "Une erreur s'est produite. Veuillez réessayer.";
          }
        });
        setTimeout(() => {
          this.notif.type = "";
        }, 6000);
      } catch (error) {
        this.on_loading_request = false;
        this.$emit("error");
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
.barner {
  background: linear-gradient(
      90deg,
      #ffffff 26.01%,
      rgba(255, 255, 255, 0) 63.54%
    ),
    url("../assets/images/investisseur.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.section {
  background: linear-gradient(
      270deg,
      #ffffff 45.82%,
      rgba(255, 255, 255, 0) 67.94%
    ),
    url("../assets/images/interessed.jpeg") !important;
  background-position: center !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
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

.active-tab {
  padding: 10px 6px !important;
  padding-left: 12px !important;
  background: #f8f8f8;
  box-shadow: inset 5px 0px 0px #dd7a4b;
  color: #dd7a4b !important;
}

ul {
  list-style: inside !important;
}
.bg-green {
  background: rgba(72, 127, 80, 0.1) !important;
}
input {
  height: 48px !important;
}
.box-img {
  height: 240px !important;
}
</style>

