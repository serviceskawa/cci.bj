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
            Obtenez des financements <br />
            pour vos projets
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
            Vous avez un projet et souhaitez obtenir un appui <br />
            financier ? La CCI Bénin vous connecte aux mécanismes <br />
            de financement les plus adaptés à vos besoins.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            Mécanismes d'appui pour l'accès aux financements
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            La CCI Bénin guide les entreprises et initiatives locales dans leur
            recherche de financements <br />
            pour démarrer ou accélérer leurs projets.
          </p>
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
                d="M24.8846 34.6667H31.1152M27.9999 16V17.3333M36.4852 19.5147L35.5424 20.4575M40 27.9999H38.6667M17.3333 27.9999H16M20.4575 20.4575L19.5146 19.5147M23.2859 32.7141C20.6824 30.1106 20.6824 25.8895 23.2859 23.286C25.8894 20.6825 30.1105 20.6825 32.714 23.286C35.3175 25.8895 35.3175 30.1106 32.714 32.7141L31.9845 33.4435C31.1407 34.2874 30.6666 35.4319 30.6666 36.6253V37.3333C30.6666 38.8061 29.4727 40 27.9999 40C26.5272 40 25.3333 38.8061 25.3333 37.3333V36.6253C25.3333 35.4319 24.8592 34.2874 24.0153 33.4435L23.2859 32.7141Z"
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
              <p
                class="
                  text-base
                  tracking-tight
                  text-light
                  leading-7
                  text-subtitlegray
                "
              >
                Ce dispositif de la CCI Bénin est un <br />
                programme destiné à offrir un <br />
                accompagnement technique aux <br />
                entreprises et projets qui <br />
                souhaitent être connectés aux options de financement.
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
              <p
                class="
                  text-base
                  tracking-tight
                  text-light
                  leading-7
                  text-subtitlegray
                "
              >
                À travers la plateforme ImPulse, notre équipe de conseillers
                formés pour la tâche vous donnera les informations nécessaires
                pour vous faciliter l’accès au financement dont vous avez
                besoin.
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
              <p
                class="
                  text-base
                  tracking-tight
                  text-light
                  leading-7
                  text-subtitlegray
                "
              >
                À travers la plateforme ImPulse, <br />
                notre équipe de conseillers formés <br />
                pour la tâche vous donnera les <br />
                informations nécessaires pour vous <br />
                faciliter l’accès au financement dont <br />
                vous avez besoin.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            Opportunités de financement alternatifs <br />
            pour accélérer votre croissance
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Nous mettons à votre disposition une grande variété de services pour
            vous aider à développer <br />
            plus sereinement vos activités.
          </p>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 mt-10"
          >
            <div class="p-6 rounded-lg bg-grayCard">
              <div class="mb-3">
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
              <div class="text-blue mb-4 font-extrabold text-lg">
                ImPulse, une initiative à la mesure <br />
                des besoins en financement
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Plateforme de solutions et de services dédiés à la croissance
                des entreprises, Impulse est une initiative de la CCI Bénin qui
                connecte les porteurs de projets aux opportunités de financement
              </p>
              <router-link
                :to="{ name: 'impulse' }"
                type="button"
                class="
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                  mt-4
                  text-center
                "
              >
                Visiter <span class="underline">impulse</span>
              </router-link>
            </div>
            <div class="p-6 rounded-lg bg-grayCard">
              <div class="mb-3">
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
              <div class="text-blue mb-4 font-extrabold text-lg">
                Le Fonds d'Appui Catalytique et de <br />
                Solidarité de la CCI Bénin
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Fonds d'amorçage et de promotion de l'innovation, ce dispositif
                complémentaire à la plateforme imPulse vise à faciliter l'accès
                au capital risque pour les entreprises innovantes à l'échelle
                locale.
              </p>
              <router-link
                :to="{ name: 'impulse' }"
                type="button"
                class="
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                  mt-4
                  text-center
                "
              >
                Visiter <span class="underline">impulse</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            Faites vous accompagner dans votre <br />
            recherche de financements
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray">
            Nos conseillers et experts vous conseillent sur l’ensemble de votre
            cycle de financement
          </p>
          <div
            class="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              md:gap-8
              mb-6
              mt-16
            "
          >
            <div class="p-6 rounded-lg bg-grayCard relative">
              <div class="flex justify-center -mt-12">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_378_3558)">
                    <rect
                      x="12"
                      y="2"
                      width="48"
                      height="48"
                      rx="6"
                      fill="#DD7A4B"
                    />
                    <path
                      d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_378_3558"
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
                        result="effect1_dropShadow_378_3558"
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
                        result="effect1_dropShadow_378_3558"
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
                        result="effect2_dropShadow_378_3558"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_378_3558"
                        result="effect2_dropShadow_378_3558"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_378_3558"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="text-blue mb-6 text-center font-bold text-lg">
                Leviers de financement
              </div>
              <p
                class="
                  text-md
                  md:text-lg
                  tracking-tight
                  text-subtitlegray text-center
                "
              >
                Découvrez les mécanismes de financement les plus adaptés pour
                votre projet.
              </p>
            </div>
            <div class="p-6 rounded-lg bg-grayCard relative">
              <div class="flex justify-center -mt-12">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_378_3586)">
                    <rect
                      x="12"
                      y="2"
                      width="48"
                      height="48"
                      rx="6"
                      fill="#DD7A4B"
                    />
                    <path
                      d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_378_3586"
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
                        result="effect1_dropShadow_378_3586"
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
                        result="effect1_dropShadow_378_3586"
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
                        result="effect2_dropShadow_378_3586"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_378_3586"
                        result="effect2_dropShadow_378_3586"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_378_3586"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="text-blue mb-6 text-center font-bold text-lg">
                Plan de financement
              </div>
              <p
                class="
                  text-md
                  md:text-lg
                  tracking-tight
                  text-subtitlegray text-center
                "
              >
                Montez un dossier de financement solide pour maximiser vos
                chances de réussite.
              </p>
            </div>
            <div class="p-6 rounded-lg bg-grayCard relative">
              <div class="flex justify-center -mt-12">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_378_3558)">
                    <rect
                      x="12"
                      y="2"
                      width="48"
                      height="48"
                      rx="6"
                      fill="#DD7A4B"
                    />
                    <path
                      d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_378_3558"
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
                        result="effect1_dropShadow_378_3558"
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
                        result="effect1_dropShadow_378_3558"
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
                        result="effect2_dropShadow_378_3558"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_378_3558"
                        result="effect2_dropShadow_378_3558"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_378_3558"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="text-blue mb-6 text-center font-bold text-lg">
                Levée de fonds
              </div>
              <p
                class="
                  text-md
                  md:text-lg
                  tracking-tight
                  text-subtitlegray text-center
                "
              >
                Connectez-vous à notre vaste réseau de financeurs privés et
                publics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
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
          <div class="">
            <div class="p-4">
              <h3 class="text-2xl lg:text-4xl leading-10 font-extrabold text-primary">
                Rejoignez imPulse !
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
                Visitez la plateforme imPulse pour explorer les <br />
                mécanismes de financement les plus appropriés <br />
                pour votre projet.
              </p>
              <router-link
                type="button"
                class="
                  mt-8
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                  text-center
                "
                :to="{ name: 'impulse' }"
              >
                Voir <span class="underline">impulse</span>
              </router-link>
            </div>
          </div>
          <div>
            <img
              src="@/assets/images/impulse2.jpeg"
              class="w-full h- object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <AppelsOffresBox :appels_offres="appels_offres" class="pt-0" />
      <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center"
          >
            <div>
              <h3 class="text-2xl lg:text-4xl leading-10 font-extrabold text-blue">
                Discutons maintenant !
              </h3>
              <p
                class="text-lg mt-6 tracking-tight leading-7 text-subtitlegray"
              >
                Utilisez le chat en ligne. Nos agents sont <br> disponibles pour répondre à vos questions diverses <br> et préoccupations.
              </p>
              
              <button
                type="button"
                class="
                  mt-8
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-auto
                "
              >
                Commencer le chat
              </button>
            </div>
            <div
              class="
                rounded-lg
                bg-primaryInfo
                flex
                items-center
                justify-center
                py-8
                px-6
              "
            >
              <img src="@/assets/images/chatbot.gif" class="h-56" alt="" />
            </div>
          </div>
    </div>
    <div class="bg-gray-dark">
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
          Newsletter
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
          Abonnez-vous à notre bulletin d’information pour être informé(e) de
          nos prochaines formations
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
              <input
                id=""
                type="hidden"
                value="appels_offres"
                required
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
  </main>
</template>

<script>
import Notifications from "@/components/Notifications.vue";
import { services } from "@/api";
import AppelsOffresBox from "@/components/home/AppelsOffresBox.vue";

export default {
  components: {
    Notifications,
    AppelsOffresBox,
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
      appels_offres: [],
      loader: false,
      faqs: [],
      open: false,
      on_loading_request: false,
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
  },
  methods: {},
  async sendRequest() {
    const data = {
      email: this.email,
      subject: "Appel offre",
      slug: "Créateur d’entreprise",
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
  
  
};
</script>
    
<style lang="scss" scoped>
.barner {
  background: linear-gradient(
      90deg,
      #ffffff 35.49%,
      rgba(255, 255, 255, 0) 65.73%
    ),
    url("../assets/images/finance.jpeg") !important;
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
