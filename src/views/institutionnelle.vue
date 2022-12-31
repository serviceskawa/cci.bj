<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="">
    <Notifications
      :notif="notif"
      v-if="notif.type !== ''"
      @close="notif.type = ''"
    />
    <div
      class="barner sm:h-96 lg:h-auto flex items-center p-4 md:px-10 lg:px-20 w-full"
    >
      <div class="max-w-7xl px-6 lg:px-10 mx-auto flex items-center w-full">
        <div>
          <h1
            class="
              text-primary text-3xl lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            La CCI Bénin une source <br />de données fiables.
          </h1>
          <p class="text-md md:text-lg tracking-tight leading-7 text-blue mt-6">
            Découvrez les rapports et informations actualisées de la
            <br />Chambre de Commerce et de l'Industrie sur les entreprises
            <br />et sociétés au Bénin.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div class="flex justify-between items-center">
        <h1
          class="text-blue text-3xl leading-none font-extrabold tracking-tight"
        >
          A LA UNE
        </h1>
        <span class="block sm:ml-2 sm:inline-block">
          <a
            @click="$router.push({ name: 'blog-articles' })"
            class="text-primary"
          >
            Voir toute l'actualité<span aria-hidden="true">&rarr;</span></a
          >
        </span>
      </div>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard v-for="n in news" :key="n.id" :branch="n" />
      </div>
    </div>
    <div class="bg-gray-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div class="mb-10 flex justify-between flex-wrap">
          <div class="flex items-center">
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
                d="M26.6667 19.8429V37.6536C26.6667 38.9495 25.6161 40 24.3202 40C23.3286 40 22.444 39.3766 22.1105 38.4428L19.2486 30.2438M36 29.3333C38.2091 29.3333 40 27.5425 40 25.3333C40 23.1242 38.2091 21.3333 36 21.3333M19.2486 30.2438C17.3391 29.4321 16 27.5391 16 25.3333C16 22.3878 18.3878 20 21.3333 20H23.7761C29.2436 20 33.9425 18.3545 36 16L36 34.6667C33.9425 32.3121 29.2436 30.6667 23.7761 30.6667L21.3333 30.6667C20.5936 30.6667 19.889 30.5161 19.2486 30.2438Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1
              class="ml-4 text-greenDark text-3xl leading-none font-extrabold tracking-tight"
            >
              Nos communiqués
            </h1>
          </div>
          <div>
            <a href="#" class="text-primary">
              Voir les communiqués<span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(n, index) in newsComm.slice(0, 4)" :key="index">
            <a @click="$router.push({ name: 'read-article', params: { id: n.id, slug: n.slug } })">
            <div
              class="text-sm font-light text-primary mb-3"
              
            >
              {{ n.created_at }}
            </div>
            <div
              class="text-blue font-bold text-md mb-3 max-three-lines"
              @click="
                $router.push({ name: 'read-article', params: { id: n.id, slug: n.slug } })
              "
            >
              {{ n.title }}
            </div>
            <p
              class="text-md tracking-tight leading-7 text-subtitlegray max-three-lines"
              v-html="n.short_content"
              @click="
                $router.push({ name: 'read-article', params: { id: n.id, slug: n.slug } })
              "
            ></p>
          </a>
          </div>
          <!-- <div>
            <div class="text-sm font-light text-primary mb-3">Nov 2022</div>
            <div class="text-blue font-bold text-md mb-3 max-three-lines">
              9ème salon des produits Halal des états membres de l’OCI,
              Istanbul-Turquie, du 24 au 27 novembre 2022
            </div>
            <p
              class="
                text-md
                tracking-tight
                leading-7
                text-subtitlegray
                max-three-lines
              "
            >
              La Fédération des Chambres de Commerce et d'Industrie de l'Afrique
              de l'Ouest (FEWACCI) a l'honneur de vous informer que dans le
              cadre de la mise en œuvre du Programme de Compétitivité de
              l'Afrique de l'Ouest (WACOMP), en partenariat avec la Commission
              de la CEDEAO et le Centre de Commerce International (CCI), elle
              organise une formation en ligne sur la Politique de la Concurrence
              le 25 novembre 2022 à 15 heures, heure d'Abuja (GMT+I).
            </p>
          </div>
          <div>
            <div class="text-sm font-light text-primary mb-3">Nov 2022</div>
            <div class="text-blue font-bold text-md mb-3 max-three-lines">
              Rappel du DGDDI relatif à la recevabilité des déclarations en
              douanes et dossiers d’intention d’importation (IDI) de Benin
              Control SA ou du GUCE
            </div>
            <p
              class="
                text-md
                tracking-tight
                leading-7
                text-subtitlegray
                max-three-lines
              "
            >
              La Fédération des Chambres de Commerce et d'Industrie de l'Afrique
              de l'Ouest (FEWACCI) a l'honneur de vous informer que dans le
              cadre de la mise en œuvre du Programme de Compétitivité de
              l'Afrique de l'Ouest (WACOMP), en partenariat avec la Commission
              de la CEDEAO et le Centre de Commerce International (CCI), elle
              organise une formation en ligne sur la Politique de la Concurrence
              le 25 novembre 2022 à 15 heures, heure d'Abuja (GMT+I).
            </p>
          </div>
          <div>
            <div class="text-sm font-light text-primary mb-3">Oct 2022</div>
            <div class="text-blue font-bold text-md mb-3 max-three-lines">
              Tunisia Africa Business Mettings : Evènement de référence de
              Business Matching en Afrique - Tunis, 6-7-8 décembre 2022
            </div>
            <p
              class="
                text-md
                tracking-tight
                leading-7
                text-subtitlegray
                max-three-lines
              "
            >
              La Fédération des Chambres de Commerce et d'Industrie de l'Afrique
              de l'Ouest (FEWACCI) a l'honneur de vous informer que dans le
              cadre de la mise en œuvre du Programme de Compétitivité de
              l'Afrique de l'Ouest (WACOMP), en partenariat avec la Commission
              de la CEDEAO et le Centre de Commerce International (CCI), elle
              organise une formation en ligne sur la Politique de la Concurrence
              le 25 novembre 2022 à 15 heures, heure d'Abuja (GMT+I).
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <h1
        class="text-blue text-3xl lg:text-4xl leading-none font-extrabold tracking-tight mb-6"
      >
        Que voulez vous faire ?
      </h1>
      <div
        class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10"
      >
        <div
          class="rounded-md mb-2 md:mb-0 cursor-pointer flex flex-col justify-between shadow-md"
        >
          <div class="p-6">
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
                  d="M40 31.0072C36.2943 32.5073 32.2436 33.3333 28 33.3333C23.7564 33.3333 19.7057 32.5073 16 31.0072M33.3333 21.3333V18.6667C33.3333 17.1939 32.1394 16 30.6667 16H25.3333C23.8606 16 22.6667 17.1939 22.6667 18.6667V21.3333M28 29.3333H28.0133M18.6667 40H37.3333C38.8061 40 40 38.8061 40 37.3333V24C40 22.5272 38.8061 21.3333 37.3333 21.3333H18.6667C17.1939 21.3333 16 22.5272 16 24V37.3333C16 38.8061 17.1939 40 18.6667 40Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Faites vos vérifications d'entreprises en accédant à AHILIDO
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Explorez l'outil de connexion aux opportunités pour obtenir les
                données d'identité des entreprises et établissements locaux.
                Retrouvez une entreprise en quelques clics grâce au moteur de
                recherche intégré.
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <a href="https://ahilido.bj/" target="_blank">
              <button
                type="button"
                class="btn btn-primary bg-primary text-white text-sm w-full"
              >
                Visiter Ahilido
              </button>
            </a>
          </div>
        </div>
        <div
          class="rounded-md mb-2 md:mb-0 cursor-pointer flex flex-col justify-between shadow-md"
        >
          <div class="p-6">
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
                  d="M40 31.0072C36.2943 32.5073 32.2436 33.3333 28 33.3333C23.7564 33.3333 19.7057 32.5073 16 31.0072M33.3333 21.3333V18.6667C33.3333 17.1939 32.1394 16 30.6667 16H25.3333C23.8606 16 22.6667 17.1939 22.6667 18.6667V21.3333M28 29.3333H28.0133M18.6667 40H37.3333C38.8061 40 40 38.8061 40 37.3333V24C40 22.5272 38.8061 21.3333 37.3333 21.3333H18.6667C17.1939 21.3333 16 22.5272 16 24V37.3333C16 38.8061 17.1939 40 18.6667 40Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Découvrez les indicateurs conjoncturels sur l'environnement des
                affaires
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                À travers le Baromètre de l'opinion des entreprises et les chiffres clés, retrouvez 
                les indicateurs de suivi des entreprises locales et sous-régionales dans la branche d'activité qui
                 vous intéresse ainsi que les tendances à considérer.
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <button
            @click="$router.push({ name: 'observatoire-commerce' })"
              type="button"
              class="btn btn-primary bg-primary text-white text-sm w-full"
            >
            Découvrir l'Observatoire
            </button>
          </div>
        </div>
        <div
          class="rounded-md mb-2 md:mb-0 cursor-pointer flex flex-col justify-between shadow-md"
        >
          <div class="p-6">
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
                  d="M40 31.0072C36.2943 32.5073 32.2436 33.3333 28 33.3333C23.7564 33.3333 19.7057 32.5073 16 31.0072M33.3333 21.3333V18.6667C33.3333 17.1939 32.1394 16 30.6667 16H25.3333C23.8606 16 22.6667 17.1939 22.6667 18.6667V21.3333M28 29.3333H28.0133M18.6667 40H37.3333C38.8061 40 40 38.8061 40 37.3333V24C40 22.5272 38.8061 21.3333 37.3333 21.3333H18.6667C17.1939 21.3333 16 22.5272 16 24V37.3333C16 38.8061 17.1939 40 18.6667 40Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Retrouvez toute l'information économique du Bénin
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Accédez à des informations fiables sur les mesures fiscales prises par l'État dans votre secteur d'activité. 
                Explorez les dernières études thématiques et les dossiers économiques pour faciliter vos prises de décisions.
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <button
            @click="$router.push({ path: 'documents-rapports', query: { slug: 'ocis' } })"
              type="button"
              class="btn btn-primary bg-primary text-white text-sm w-full"
            >
              Accéder aux documents
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grayCard">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-10">
        <h1
          class="text-primary text-3xl lg:text-4xl leading-none font-extrabold tracking-tight mb-4"
        >
          Publications
        </h1>
        <div
          class="bg-white px-4 py-6 grid grids-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div>
            <div class="text-light font-light text-sm mb-4">VISION 2025</div>
            <div>
              <h1
                class="mb-3 text-blue text-2xl leading-none font-extrabold tracking-tight mb-4"
              >
                PLAN STRATÉGIQUE DE DÉVELOPPEMENT DE <br />
                LA CCI BÉNIN VISION 2025
              </h1>
              <p class="text-subtitlegray text-lg leading-6 font-light mb-4">
                Convaincue de l’importance du secteur privé et du rôle qu’il
                devra jouer pour le développement économique du Bénin, la CCI
                Bénin, en tant que porte-parole institutionnel du secteur privé,
                s’est dotée d’un Plan Stratégique.
              </p>
              <a 
              :href="static_file_url + '/publications/file_54aa50d69f68f6cb71d46d7a0800ac4f.pdf'"
              target="_blank" 
              >
                <button type="button" class="btn btn-light bg-white shadow-md text-primary w-full">
                  Télécharger le plan stratégique 2025
                </button>
              </a>
            </div>
          </div>
          <div class="w-full">
            <img src="@/assets/images/preview.png" class="w-full" alt="" />
          </div>
        </div>
        <div class="mb-8">
          <div class="flex justify-between items-center mb-4">
            <h1
              class="text-blue text-2xl lg:text-3xl leading-none font-extrabold tracking-tight mb-4"
            >
              Nos dernières publications
            </h1>
            <div>
              <a
                @click="$router.push({ name: 'documents-rapports' })"
                class="text-primary"
              >
                Voir toutes les publications<span aria-hidden="true"
                  >&rarr;</span
                ></a
              >
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="border border-gray p-4"
              v-for="(doc, index) in persona.files.data"
              :key="index"
            >
              <div class="italic font-light text-gray-rbg">
                {{ doc.created_at }}
              </div>
              <div class="mt-3">
                {{ doc.title }}
              </div>
              <div>
                <a
                  :href="configs.image_url + '/' + doc.file_name"
                  target="_blank"
                  class="text-primary underline"
                >
                  Télécharger<span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <!-- <div class="border border-gray p-4">
              <div class="italic font-light text-gray-rbg">
                18 Novembre 2022
              </div>
              <div class="mt-3">
                RECEVABILITE DES DECLARATIONS EN DOUANES ET DOSSIERS D’INTENTION
                D’IMPORTATION (IDI) DE BENIN CONTROL SA OU DU GUCE
              </div>
              <div>
                <a href="#" class="text-primary underline">
                  Télécharger<span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
            <div class="border border-gray p-4">
              <div class="italic font-light text-gray-rbg">
                18 Novembre 2022
              </div>
              <div class="mt-3">
                RECEVABILITE DES DECLARATIONS EN DOUANES ET DOSSIERS D’INTENTION
                D’IMPORTATION (IDI) DE BENIN CONTROL SA OU DU GUCE
              </div>
              <div>
                <a href="#" class="text-primary underline">
                  Télécharger<span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div> -->
          </div>
        </div>

        <!--<div class="mb-8">
          <div class="flex justify-between items-center mb-4">
            <h1
              class="text-blue text-2xl lg:text-3xl leading-none font-extrabold tracking-tight mb-4"
            >
              Rapports de l’observatoire
            </h1>
            <div>
              <a
                :href="static_file_url + '/publications/1662111194.pdf'"
                class="text-primary"
              >
                Voir les rapports<span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div class="flex">
              <img
                src="@/assets/svg/rapport-box.svg"
                class="w-40 h-auto object-cover"
              />
              <div class="ml-4">
                <div class="italic font-light text-gray-rbg">
                  18 Novembre 2022
                </div>
                <div class="mt-3 font-extrabold text-lg">
                  ALLOCUTION DU PRESIDENT DE LA CCI BENIN A L’OCCASION DES
                  CONFERENCES PUBLIQUES DE L’ASSEMBLEE NATIONALE
                </div>
                <div class="mt-10 w-full">
                  <button
                    class="border border-primary text-primary text-center justify-center w-full flex items-center p-4"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM17.5 11L16.09 9.59L13.5 12.17V4H11.5V12.17L8.91 9.59L7.5 11L12.5 16L17.5 11Z"
                        fill="#DD7A4B"
                      />
                    </svg>

                    <span class="ml-3">Télécharger</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex">
              <img
                src="@/assets/svg/rapport-box.svg"
                class="w-40 h-auto object-cover"
              />
              <div class="ml-4">
                <div class="italic font-light text-gray-rbg">
                  18 Novembre 2022
                </div>
                <div class="mt-3 font-extrabold text-lg">
                  ALLOCUTION DU PRESIDENT DE LA CCI BENIN A L’OCCASION DES
                  CONFERENCES PUBLIQUES DE L’ASSEMBLEE NATIONALE
                </div>
                <div class="mt-10 w-full">
                  <button
                    class="border border-primary text-primary text-center w-full flex items-center justify-center p-4"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM17.5 11L16.09 9.59L13.5 12.17V4H11.5V12.17L8.91 9.59L7.5 11L12.5 16L17.5 11Z"
                        fill="#DD7A4B"
                      />
                    </svg>

                    <span class="ml-3">Télécharger</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>-->

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
                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
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
                      class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
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
                      class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
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
                      class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
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
                      class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
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
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-0 pb-20">
      <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
        Notre médiathèque
      </h1>
      <div
        class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        <div class="col-span-2">
          <a
            href="https://www.flickr.com/photos/ccibenin/albums/72177720303919630"
            target="_blank"
          >
            <img
              src="@/assets/images/mediateq.jpeg"
              class="h-48 w-full object-cover rounded-lg mb-6"
              alt=""
            />
            <p class="text-blue text-sm mb-2 max-two-lines">
              Ateliers de la Coopération Consulaire et Économique et Rendez-vous
              d'Affaires Francophones Africains : La CCI Bénin et l’APIEx
              représentées à la CCI Bordeaux Gironde
            </p>
            <div class="text-subtitlegray text-sm">13 photos</div>
          </a>
        </div>

        <div class="">
          <a
            href="https://www.flickr.com/photos/ccibenin/albums/72177720303671892"
            target="_blank"
          >
            <img
              src="@/assets/images/media3.jpg"
              class="h-48 w-full object-cover rounded-lg mb-6"
              alt=""
            />
            <p class="text-blue text-sm mb-2 max-two-lines">
              Projet e-Tchité ; Renforcement des capacités digitales des
              bénéficiaires sur la thématique « Comment optimiser la présence de
              son entreprise sur les Réseaux Sociaux »
            </p>
            <div class="text-subtitlegray text-sm">15 photos</div>
          </a>
        </div>
        <div class="">
          <a
            href="https://www.flickr.com/photos/ccibenin/albums/72177720303576988"
            target="_blank"
          >
            <img
              src="@/assets/images/media4.jpg"
              class="h-48 w-full object-cover rounded-lg mb-6"
              alt=""
            />
            <p class="text-blue text-sm mb-2 max-two-lines">
              La CCI Bénin et le CIPB outillent les opérateurs économiques sur
              la prévention des risques d’incendie en entreprise
            </p>
            <div class="text-subtitlegray text-sm">27 photos</div>
          </a>
        </div>

        <div class="">
          <a
            href="https://www.flickr.com/photos/ccibenin/albums/72177720302992758"
            target="_blank"
          >
            <img
              src="@/assets/images/media5.jpg"
              class="h-48 w-full object-cover rounded-lg mb-6"
              alt=""
            />
            <p class="text-blue text-sm mb-2 max-two-lines">
              Signature de conventions avec la CCI de Bahreïn et la CCI de
              Koweit
            </p>
            <div class="text-subtitlegray text-sm">2 photos</div>
          </a>
        </div>

        <div class="">
          <a
            href="https://www.flickr.com/photos/ccibenin/albums/72177720302854249"
            target="_blank"
          >
            <img
              src="@/assets/images/media6.jpg"
              class="h-48 w-full object-cover rounded-lg mb-6"
              alt=""
            />
            <p class="text-blue text-sm mb-2 max-two-lines">
              3ème édition du « Mois du Consommons local » : La CCI Bénin œuvre
              pour l’implication des journalistes dans la promotion des produits
              locaux
            </p>
            <div class="text-subtitlegray text-sm">40 photos</div>
          </a>
        </div>

        <div class="col-span-2">
          <a
            href="https://www.flickr.com/photos/ccibenin/albums/72177720302811144"
            target="_blank"
          >
            <img
              src="@/assets/images/media7.jpg"
              class="h-48 w-full object-cover rounded-lg mb-6"
              alt=""
            />
            <p class="text-blue text-sm mb-2 max-two-lines">
              Formation CAMeC sur le thème Exercer comme arbitre médiateur ;
              Habilités techniques et procédurales
            </p>
            <div class="text-subtitlegray text-sm">54 photos</div>
          </a>
        </div>
      </div>
      <div>
        <a href="https://www.flickr.com/photos/ccibenin/albums" target="_blank">
          <button
            type="button"
            class="btn btn-light bg-white shadow-md text-primary underline"
          >
            Visiter la médiathèque
          </button>
        </a>
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
              class="mt-2 text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight text-primary"
            >
              Restons connectés
            </h1>
            <p class="mt-4 text-lg leading-7 font-normal text-blue">
              Abonnez-vous à notre bulletin d’information pour être informé(e)
              de nos dernières actualités.
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
      agenda_datas: [],
      notif: {
        type: "",
        title: "",
        description: "",
      },
      newsComm: [],
      persona: [],
      loader: true,
      configs: [],
      static_file_url: import.meta.env.VITE_FILE_URL,
    };
  },
  async created() {
    this.configs = JSON.parse(sessionStorage.getItem("configs"));
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
    await this.getCategoryArticles();
    await this.getPersonaById();
  },
  methods: {
    async sendRequest() {
      const data = {
        email: this.email,
        subject: "Appel offre",
        slug: "L’institutionnel(lle)",
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
    async getCategoryArticles() {
      this.loader = true;
      try {
        await services.getCategory_articles(3).then((response) => {
          this.newsComm = response.data.data;
        });
        this.loader = false;
      } catch (error) {
        this.loader = false;
      }
    },

    async getPersonaById() {
      this.loader = true;
      try {
        await services.getPersona_by_id(16).then((response) => {
          this.persona = response.data;
        });
        this.loader = false;
      } catch (error) {
        this.loader = false;
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
    url("../assets/images/institutionnel.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
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
