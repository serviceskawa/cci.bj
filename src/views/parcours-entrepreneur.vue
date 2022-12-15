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
              text-primary text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Le programme pour créer <br />
            et lancer votre entreprise
          </h1>
          <p
            class="
              text-md
              md:text-lg
              tracking-tight
              text-subtitlegray
              leading-7
              mt-6
            "
          >
            Développez en 5 jours une maîtrise des étapes pour <br />
            réussir votre projet entrepreneurial
          </p>
          <div class="mt-3">
            <a href="mailto:fleur.djegnonde@ccib.bj?subject=Parcours%20de%20l%27entrepreneur&body=J'aimerais prendre part aux séances de formation de la CCI. Gardez-moi au courant du prochain programme." class="text-sm tracking-tight text-subtitlegray underline ml-2" >
            <button
              type="button"
              class="
                btn btn-primary
                bg-primary
                underline
                text-white text-sm
                w-auto
              "
            >
              S'inscrire
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Le séminaire de formation «Parcours de l'entrepreneur»
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Dispositif de la CCI Bénin pour outiller les porteurs de projets
            entrepreneuriaux
          </p>
        </div>
        <div class="flex grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62"
                height="56"
                rx="8"
                fill="#DD7A4B"
                fill-opacity="0.1"
              />
              <path
                d="M38.5 40H46V37C46 34.5147 43.9853 32.5 41.5 32.5C40.0666 32.5 38.7897 33.1702 37.9656 34.2143M38.5 40H23.5M38.5 40V37C38.5 36.0156 38.3104 35.0756 37.9656 34.2143M23.5 40H16V37C16 34.5147 18.0147 32.5 20.5 32.5C21.9334 32.5 23.2103 33.1702 24.0344 34.2143M23.5 40V37C23.5 36.0156 23.6896 35.0756 24.0344 34.2143M24.0344 34.2143C25.1403 31.4515 27.8422 29.5 31 29.5C34.1578 29.5 36.8597 31.4515 37.9656 34.2143M35.5 20.5C35.5 22.9853 33.4853 25 31 25C28.5147 25 26.5 22.9853 26.5 20.5C26.5 18.0147 28.5147 16 31 16C33.4853 16 35.5 18.0147 35.5 20.5ZM44.5 25C44.5 26.6569 43.1569 28 41.5 28C39.8431 28 38.5 26.6569 38.5 25C38.5 23.3431 39.8431 22 41.5 22C43.1569 22 44.5 23.3431 44.5 25ZM23.5 25C23.5 26.6569 22.1569 28 20.5 28C18.8431 28 17.5 26.6569 17.5 25C17.5 23.3431 18.8431 22 20.5 22C22.1569 22 23.5 23.3431 23.5 25Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="mt-4">
              <h4 class="text-lg leading-7 font-medium text-borderSimple">
                Qu'est ce que c'est ?
              </h4>
              <p class="text-md text-light leading-5 text-subtitlegray">
                Parcours de l'entrepreneur est un <br />
                dispositif de la CCI Bénin pour <br />
                outiller les porteurs de projets <br />
                entrepreneuriaux, peu importe leur <br />
                parcours, leurs connaissances et <br />
                leurs compétences de départ.
              </p>
            </div>
          </div>
          <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62"
                height="56"
                rx="8"
                fill="#DD7A4B"
                fill-opacity="0.1"
              />
              <path
                d="M38.5 40H46V37C46 34.5147 43.9853 32.5 41.5 32.5C40.0666 32.5 38.7897 33.1702 37.9656 34.2143M38.5 40H23.5M38.5 40V37C38.5 36.0156 38.3104 35.0756 37.9656 34.2143M23.5 40H16V37C16 34.5147 18.0147 32.5 20.5 32.5C21.9334 32.5 23.2103 33.1702 24.0344 34.2143M23.5 40V37C23.5 36.0156 23.6896 35.0756 24.0344 34.2143M24.0344 34.2143C25.1403 31.4515 27.8422 29.5 31 29.5C34.1578 29.5 36.8597 31.4515 37.9656 34.2143M35.5 20.5C35.5 22.9853 33.4853 25 31 25C28.5147 25 26.5 22.9853 26.5 20.5C26.5 18.0147 28.5147 16 31 16C33.4853 16 35.5 18.0147 35.5 20.5ZM44.5 25C44.5 26.6569 43.1569 28 41.5 28C39.8431 28 38.5 26.6569 38.5 25C38.5 23.3431 39.8431 22 41.5 22C43.1569 22 44.5 23.3431 44.5 25ZM23.5 25C23.5 26.6569 22.1569 28 20.5 28C18.8431 28 17.5 26.6569 17.5 25C17.5 23.3431 18.8431 22 20.5 22C22.1569 22 23.5 23.3431 23.5 25Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="mt-4">
              <h4 class="text-lg leading-7 font-medium text-borderSimple">
                Pour qui ?
              </h4>
              <p class="text-md text-light leading-5 text-subtitlegray">
                Ce programme s'adresse à deux <br />
                profils de personnes : les aspirants <br />
                à l'entrepreneuriat qui souhaitent <br />
                créer et lancer leur entreprise, et <br />
                les experts qui veulent connaître les stratégies <br />
                pour améliorer leurs <br />
                résultats.
              </p>
            </div>
          </div>
          <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
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
                d="M25.7662 17.7564C26.3347 15.4145 29.6653 15.4145 30.2338 17.7564C30.6011 19.2692 32.3343 19.9872 33.6638 19.1771C35.7217 17.9232 38.0768 20.2783 36.8229 22.3362C36.0128 23.6657 36.7308 25.3989 38.2436 25.7662C40.5855 26.3347 40.5855 29.6653 38.2436 30.2338C36.7308 30.6011 36.0128 32.3343 36.8229 33.6638C38.0768 35.7217 35.7217 38.0768 33.6638 36.8229C32.3343 36.0128 30.6011 36.7308 30.2338 38.2436C29.6653 40.5855 26.3347 40.5855 25.7662 38.2436C25.3989 36.7308 23.6657 36.0128 22.3362 36.8229C20.2783 38.0768 17.9232 35.7217 19.1771 33.6638C19.9872 32.3343 19.2692 30.6011 17.7564 30.2338C15.4145 29.6653 15.4145 26.3347 17.7564 25.7662C19.2692 25.3989 19.9872 23.6657 19.1771 22.3362C17.9232 20.2783 20.2783 17.9232 22.3362 19.1771C23.6657 19.9872 25.3989 19.2692 25.7662 17.7564Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32 28C32 30.2091 30.2091 32 28 32C25.7909 32 24 30.2091 24 28C24 25.7909 25.7909 24 28 24C30.2091 24 32 25.7909 32 28Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="mt-4">
              <h4 class="text-lg leading-7 font-medium text-borderSimple">
                Comment ?
              </h4>
              <p class="text-md text-light leading-5 text-subtitlegray">
                Le programme Parcours de <br />
                l'entrepreneur aborde les <br />
                différentes étapes à suivre par les <br />
                entrepreneurs et porteurs de projets <br />
                pour développer une activité, <br />
                de l'idée de départ jusqu'à la <br />
                concrétisation du projet.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Les avantages du séminaire « Parcours de l'entrepreneur »
          </h1>
          <div
            class="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              md:gap-8
              mb-6
              mt-10
            "
          >
            <div class="p-6 rounded-lg bg-grayCard">
              <div class="flex justify-center">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_381_4012)">
                    <rect
                      x="12"
                      y="2"
                      width="48"
                      height="48"
                      rx="6"
                      fill="#DD7A4B"
                    />
                    <path
                      d="M37.3333 19.3333H48M48 19.3333V30M48 19.3333L37.3333 30L32 24.6667L24 32.6667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_381_4012"
                      x="0"
                      y="0"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="2"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_381_4012"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_381_4012"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_381_4012"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_381_4012"
                        result="effect2_dropShadow_381_4012"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_381_4012"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="text-blue mb-6 text-center font-bold text-lg">
                Se préparer au lancement
              </div>
              <p
                class="
                  text-md
                  md:text-lg
                  tracking-tight
                  text-subtitlegray
                  leading-6
                  text-center
                "
              >
                Adoptez la posture d'entrepreneur et explorez les challenges à
                relever au démarrage des affaires. Découvrez les formalités et
                les obligations légales liées à la création d'entreprise au
                Bénin.
              </p>
            </div>
            <div class="p-6 rounded-lg bg-grayCard">
              <div class="flex justify-center">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_381_4019)">
                    <rect
                      x="12"
                      y="2"
                      width="48"
                      height="48"
                      rx="6"
                      fill="#DD7A4B"
                    />
                    <path
                      d="M42 35.6H48V33.2C48 31.2118 46.3882 29.6 44.4 29.6C43.2533 29.6 42.2318 30.1362 41.5725 30.9715M42 35.6H30M42 35.6V33.2C42 32.4125 41.8483 31.6605 41.5725 30.9715M30 35.6H24V33.2C24 31.2118 25.6118 29.6 27.6 29.6C28.7467 29.6 29.7682 30.1362 30.4275 30.9715M30 35.6V33.2C30 32.4125 30.1517 31.6605 30.4275 30.9715M30.4275 30.9715C31.3122 28.7612 33.4738 27.2 36 27.2C38.5262 27.2 40.6878 28.7612 41.5725 30.9715M39.6 20C39.6 21.9882 37.9882 23.6 36 23.6C34.0118 23.6 32.4 21.9882 32.4 20C32.4 18.0118 34.0118 16.4 36 16.4C37.9882 16.4 39.6 18.0118 39.6 20ZM46.8 23.6C46.8 24.9255 45.7255 26 44.4 26C43.0745 26 42 24.9255 42 23.6C42 22.2745 43.0745 21.2 44.4 21.2C45.7255 21.2 46.8 22.2745 46.8 23.6ZM30 23.6C30 24.9255 28.9255 26 27.6 26C26.2745 26 25.2 24.9255 25.2 23.6C25.2 22.2745 26.2745 21.2 27.6 21.2C28.9255 21.2 30 22.2745 30 23.6Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_381_4019"
                      x="0"
                      y="0"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="2"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_381_4019"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_381_4019"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_381_4019"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_381_4019"
                        result="effect2_dropShadow_381_4019"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_381_4019"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="text-blue mb-6 text-center font-bold text-lg">
                Rejoindre un réseau
              </div>
              <p
                class="
                  text-md
                  md:text-lg
                  tracking-tight
                  text-subtitlegray
                  leading-6
                  text-center
                "
              >
                Faites vous former par des experts et entrez en contact avec
                d'autres entrepreneurs pour bénéficier de leur expérience.
                Profitez des services d'appui-conseil offerts par la CCI Bénin.
              </p>
            </div>
            <div class="p-6 rounded-lg bg-grayCard">
              <div class="flex justify-center">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_381_4026)">
                    <rect
                      x="12"
                      y="2"
                      width="48"
                      height="48"
                      rx="6"
                      fill="#DD7A4B"
                    />
                    <path
                      d="M33.7662 15.7564C34.3347 13.4145 37.6653 13.4145 38.2338 15.7564C38.6011 17.2692 40.3343 17.9872 41.6638 17.1771C43.7217 15.9232 46.0768 18.2783 44.8229 20.3362C44.0128 21.6657 44.7308 23.3989 46.2436 23.7662C48.5855 24.3347 48.5855 27.6653 46.2436 28.2338C44.7308 28.6011 44.0128 30.3343 44.8229 31.6638C46.0768 33.7217 43.7217 36.0768 41.6638 34.8229C40.3343 34.0128 38.6011 34.7308 38.2338 36.2436C37.6653 38.5855 34.3347 38.5855 33.7662 36.2436C33.3989 34.7308 31.6657 34.0128 30.3362 34.8229C28.2783 36.0768 25.9232 33.7217 27.1771 31.6638C27.9872 30.3343 27.2692 28.6011 25.7564 28.2338C23.4145 27.6653 23.4145 24.3347 25.7564 23.7662C27.2692 23.3989 27.9872 21.6657 27.1771 20.3362C25.9232 18.2783 28.2783 15.9232 30.3362 17.1771C31.6657 17.9872 33.3989 17.2692 33.7662 15.7564Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M40 26C40 28.2091 38.2091 30 36 30C33.7909 30 32 28.2091 32 26C32 23.7909 33.7909 22 36 22C38.2091 22 40 23.7909 40 26Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_381_4026"
                      x="0"
                      y="0"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="2"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_381_4026"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_381_4026"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_381_4026"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_381_4026"
                        result="effect2_dropShadow_381_4026"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_381_4026"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="text-blue mb-6 text-center font-bold text-lg">
                Structurer votre projet
              </div>
              <p
                class="
                  text-md
                  md:text-lg
                  tracking-tight
                  text-subtitlegray
                  leading-6
                  text-center
                "
              >
                Évaluez la viabilité, la conception technique et les
                opportunités de marchés autour de votre projet. Élaborez un plan
                d'affaires ou de financement pour développer l'entreprise et
                satisfaire les clients.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            La formation Parcours de l'entrepreneur en bref
          </h1>
        </div>
        <div class="flex grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
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
                d="M28 22.6667V28L32 32M40 28C40 34.6274 34.6274 40 28 40C21.3726 40 16 34.6274 16 28C16 21.3726 21.3726 16 28 16C34.6274 16 40 21.3726 40 28Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="mt-4">
              <p class="text-md text-light leading-5 text-subtitlegray">
                5 jours pour créer et lancer <br />
                votre entreprise
              </p>
            </div>
          </div>
          <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
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
                d="M24 23V19M32 23V19M23 27H33M21 37H35C36.1046 37 37 36.1046 37 35V23C37 21.8954 36.1046 21 35 21H21C19.8954 21 19 21.8954 19 23V35C19 36.1046 19.8954 37 21 37Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="mt-4">
              <p class="text-md text-light leading-5 text-subtitlegray">
                Un programme en présentiel <br />
                axé sur la pratique
              </p>
            </div>
          </div>
          <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
            <svg
              width="56"
              height="52"
              viewBox="0 0 56 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="56"
                height="51.2"
                rx="8"
                fill="#DD7A4B"
                fill-opacity="0.1"
              />
              <path
                d="M34 35.2H40V32.8C40 30.8118 38.3882 29.2 36.4 29.2C35.2533 29.2 34.2318 29.7362 33.5725 30.5715M34 35.2H22M34 35.2V32.8C34 32.0125 33.8483 31.2605 33.5725 30.5715M22 35.2H16V32.8C16 30.8118 17.6118 29.2 19.6 29.2C20.7467 29.2 21.7682 29.7362 22.4275 30.5715M22 35.2V32.8C22 32.0125 22.1517 31.2605 22.4275 30.5715M22.4275 30.5715C23.3122 28.3612 25.4738 26.8 28 26.8C30.5262 26.8 32.6878 28.3612 33.5725 30.5715M31.6 19.6C31.6 21.5882 29.9882 23.2 28 23.2C26.0118 23.2 24.4 21.5882 24.4 19.6C24.4 17.6118 26.0118 16 28 16C29.9882 16 31.6 17.6118 31.6 19.6ZM38.8 23.2C38.8 24.5255 37.7255 25.6 36.4 25.6C35.0745 25.6 34 24.5255 34 23.2C34 21.8745 35.0745 20.8 36.4 20.8C37.7255 20.8 38.8 21.8745 38.8 23.2ZM22 23.2C22 24.5255 20.9255 25.6 19.6 25.6C18.2745 25.6 17.2 24.5255 17.2 23.2C17.2 21.8745 18.2745 20.8 19.6 20.8C20.9255 20.8 22 21.8745 22 23.2Z"
                stroke="#DD7A4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="mt-4">
              <p class="text-md text-light leading-5 text-subtitlegray">
                Apprenez auprès des experts <br />
                et intégrez un réseau
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primaryInfo">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <img
          src="@/assets/images/impuls_cci.jpeg"
          class="h- object-cover mb-6 w-full"
          alt=""
        />
        <div>
          <h3 class="font-extrabold text-blue text-2xl">
            Les objectifs de la formation Parcours de l'entrepreneur
          </h3>
          <p
            class="text-lg mt-4 tracking-tight leading-7 text-subtitlegray mb-6"
          >
            Produit destiné à préparer les porteurs de projet de création
            d’entreprise aux difficultés liées aux affaires, Parcours de
            l'entrepreneur est un séminaire de formation de la Chambre de
            Commerce de l'Industrie du Bénin. <br />
            L'objectif de cette série de formations est de permettre à toute
            personne désireuse de créer une entreprise et construire une
            activité viable, de développer les compétences nécessaires pour y
            arriver. Plus spécifiquement, il s'agit de préparer les aspirants à
            la mise en œuvre de projets entrepreneuriaux aux réalités liées au
            démarrage et à la gestion des affaires, puis à les aider à mieux
            structurer leur projet.
          </p>
          <a href="javascript:SBChat.initChat();SBChat.open()">
                <button type="button" class="btn btn-light bg-white shadow-md text-primary w-auto">
                  Commencer le chat
                </button>
              </a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div class="pt-10 pb-20">
        <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
          Le contenu du programme Parcours de l'entrepreneur
        </h1>
        <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
          Nous vous mettons en relation avec des experts qui vous aident à
          rédiger un dossier argumenté <br />
          pour obtenir le financement qui vous convient.
        </p>
        <div class="mt-6 w-full">
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#1D7834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="ml-2">
                <div class="font-medium">Module 1</div>
                <div class="mt-1 tracking-tight text-subtitlegray">
                  Généralités sur le parcours de <br />
                  l'entrepreneur
                </div>
              </div>
            </div>
            <div class="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#1D7834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="ml-2">
                <div class="font-medium">Module 2</div>
                <div class="mt-1 tracking-tight text-subtitlegray">
                  Satisfaire au mieux les clients
                </div>
              </div>
            </div>
            <div class="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#1D7834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="ml-2">
                <div class="font-medium">Module 3</div>
                <div class="mt-1 tracking-tight text-subtitlegray">
                  Élaborer la planification financière
                </div>
              </div>
            </div>
            <div class="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#1D7834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="ml-2">
                <div class="font-medium">Module 4</div>
                <div class="mt-1 tracking-tight text-subtitlegray">
                  Encourager la productivité <br />
                  du personnel
                </div>
              </div>
            </div>
            <div class="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#1D7834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="ml-2">
                <div class="font-medium">Module 5</div>
                <div class="mt-1 tracking-tight text-subtitlegray">
                  Obligations fiscales et sociales <br />
                  de l'entreprise
                </div>
              </div>
            </div>
          </div>
          <!--<div class="mt-8 flex justify-center">
            <button type="button" class="btn btn-light bg-white shadow-md text-primary w-auto">
              Voir le programme complet
            </button>
          </div>-->
        </div>
      </div>
      <div class="pb-20">
        <div
          class="
            bg-grayCard
            grid grid-cols-1
            md:grid-cols-2
            items-center
            gap-6
            mb-6
          "
        >
          <div class="p-6">
            <h3 class="text-4xl leading-10 font-extrabold text-greenDark">
              Participez aux sessions <br />
              de formation de la CCI
            </h3>
            <p
              class="
                text-lg
                mt-4
                tracking-tight
                leading-7
                text-subtitlegray
                mt-3
              "
            >
              Élaborez et structurez votre projet entrepreneurial <br />
              en 5 jours grâce à un programme dynamique et <br />
              pratique.
            </p>
            <div class="mt-4 flex items-center">
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
              <a
                href="mailto:fleur.djegnonde@ccib.bj?subject=Parcours%20de%20l%27entrepreneur&body=J'aimerais prendre part aux séances de formation de la CCI. Gardez-moi au courant du prochain programme."
                class="text-sm tracking-tight text-subtitlegray underline ml-2"
                >fleur.djegnonde@ccib.bj</a
              >
            </div>

            <a href="mailto:fleur.djegnonde@ccib.bj?subject=Parcours%20de%20l%27entrepreneur&body=J'aimerais prendre part aux séances de formation de la CCI. Gardez-moi au courant du prochain programme." class="text-sm tracking-tight text-subtitlegray underline ml-2" >
              <button type="button" class="mt-8 btn btn-light bg-white shadow-md text-primary w-full underline">
                S'inscrire
              </button>
            </a>

          </div>

          <div>
            <img
              src="@/assets/images/institutionnel.jpeg"
              class="w-full h-96 object-cover"
            />
          </div>
        </div>

        <!--<div class="pt-20">
          <h2 class="text-3xl tracking-tight font-bold text-blue text-center mb-6">
            Foire aux questions
          </h2>
          <div class="flex justify-center py-12" v-if="loader == true">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-12 h-12 text-gray animate-spin fill-primary"
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
          </div>
          <dl class="mt-6 space-y-6 divide-y divide-gray-200" v-else>
            <div v-if="faqs.length == 0">
              <h1 class="">Aucune FAQ disponible</h1>
            </div>
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.id"
              class="pt-6"
              v-slot="{ open }"
              v-else
            >
              <dt class="text-lg">
                <DisclosureButton
                  class="
                    flex
                    w-full
                    items-start
                    justify-between
                    text-left text-gray-400
                  "
                >
                  <span class="font-medium text-gray-900">{{ faq.title }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      :class="[
                        open ? '-rotate-180' : 'rotate-0',
                        'h-6 w-6 transform',
                      ]"
                      aria-hidden="true"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p
                  class="
                    text-md
                    md:text-lg
                    tracking-tight
                    leading-7
                    text-subtitlegray
                  "
                >
                  <span v-html="faq.content"></span>
                </p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>-->
      </div>
    </div>
  </main>
</template>

<script>
import Notifications from "@/components/Notifications.vue";
import { services } from "@/api";
import ArticleCard from "@/components/ArticleCard.vue";
import AppelsOffresBox from "@/components/home/AppelsOffresBox.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    Notifications,
    ArticleCard,
    AppelsOffresBox,
    Disclosure,
    DisclosurePanel,
    DisclosureButton,
    DisclosureButton,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      email: "",
      phone: "",
      notif: {
        type: "",
        title: "",
        description: "",
      },
      loader: false,
      faqs: [],
      open: false,
    };
  },
  async created() {
    this.loader = true;
    await services.get_faq().then((res) => {
      if (res.status == 200 && res.data) {
        this.faqs = res.data;
      }
      this.loader = false;
    });
  },
  methods: {},
};
</script>
    
<style lang="scss" scoped>
.barner {
  background: linear-gradient(
      90deg,
      #ffffff 35.49%,
      rgba(255, 255, 255, 0) 65.73%
    ),
    url("../assets/images/aide-montage.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

::v-deep .divide-y > :not([hidden]) ~ :not([hidden]) {
  border-top: 0px solid #e5e7eb !important;
  border-bottom: none !important;
}

.active {
  border: 1px solid #dd7a4b;
  background: #faebe0 !important;
  color: #dd7a4b !important;
}

::placeholder {
  font-weight: 400;
  font-size: 16px !important;
  color: #6b7280 !important;
}
</style>
