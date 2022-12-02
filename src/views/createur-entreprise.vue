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
      <div class="flex justify-end w-full">
        <div class="">
          <h1
            class="
              text-white text-4xl lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Créez et lancez <br />
            votre entreprise
          </h1>
          <p class="tracking-tight leading-7 text-white mt-6">
            Importer et exporter des produits au Bénin, participer <br />
            aux marchés publics, la CCI Bénin vous accompagne <br />
            dans la gestion de votre entreprise, afin que vous <br />
            soyez le prochain succès entrepreneurial du Bénin.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <h1
        class="text-blue text-3xl lg:text-4xl leading-none font-extrabold tracking-tight"
      >
        La CCI Bénin vous accompagne dans la mise en place de votre entreprise
        au Bénin
      </h1>
      <p
        class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray mt-4 mb-10"
      >
        Quel que soit votre besoin, la CCI Bénin vous accompagne à chaque étape
        du processus vers l’atteinte de vos objectifs. Nous vous simplifions les
        démarches pour votre satisfaction complète.
      </p>
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
                Nouvelle entreprise
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Créez votre entreprise. Explorez la plateforme de formalisation
                et création en ligne des entreprises au Bénin.
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <a
              href="https://monentreprise.bj/"
              target="_blank"
              class="btn btn-primary bg-primary text-white text-sm w-full"
            >
              S'inscrire sur <span class="underline">monentreprise.bj</span>
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
                  d="M29.3333 22.1464H40M40 22.1464V31.5122M40 22.1464L29.3333 31.5122L24 26.8293L16 33.8537"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Etre orienté
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Notre équipe s’engage à vous guider et vous orienter vers les
                services compétents en fonction de vos préoccupations.
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <button
              @click="$router.push({ name: 'services-infos' })"
              type="button"
              class="btn btn-primary bg-primary text-white text-sm w-full"
            >
              En savoir plus
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
                  d="M39 28C39 34.0751 34.0751 39 28 39V41C35.1797 41 41 35.1797 41 28H39ZM28 39C21.9249 39 17 34.0751 17 28H15C15 35.1797 20.8203 41 28 41V39ZM17 28C17 21.9249 21.9249 17 28 17V15C20.8203 15 15 20.8203 15 28H17ZM28 17C34.0751 17 39 21.9249 39 28H41C41 20.8203 35.1797 15 28 15V17ZM32.3333 28C32.3333 30.3932 30.3932 32.3333 28 32.3333V34.3333C31.4978 34.3333 34.3333 31.4978 34.3333 28H32.3333ZM28 32.3333C25.6068 32.3333 23.6667 30.3932 23.6667 28H21.6667C21.6667 31.4978 24.5022 34.3333 28 34.3333V32.3333ZM23.6667 28C23.6667 25.6068 25.6068 23.6667 28 23.6667V21.6667C24.5022 21.6667 21.6667 24.5022 21.6667 28H23.6667ZM28 23.6667C30.3932 23.6667 32.3333 25.6068 32.3333 28H34.3333C34.3333 24.5022 31.4978 21.6667 28 21.6667V23.6667ZM35.7782 18.8076L31.0641 23.5217L32.4783 24.9359L37.1924 20.2218L35.7782 18.8076ZM31.0641 32.4783L35.7782 37.1924L37.1924 35.7782L32.4783 31.0641L31.0641 32.4783ZM24.9359 23.5217L20.2218 18.8076L18.8076 20.2218L23.5217 24.9359L24.9359 23.5217ZM23.5217 31.0641L18.8076 35.7782L20.2218 37.1924L24.9359 32.4783L23.5217 31.0641Z"
                  fill="#DD7A4B"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Rester informé
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Souscrivez à notre newsletter. Nous vous tenons informé(e) des
                actualités relatives aux démarches pour la création
                d'entreprise.
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <button
              @click="scrollToAnchorPoint('subscribe')"
              type="button"
              class="btn btn-primary bg-primary text-white text-sm w-full"
            >
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20 pt-0">
      <div class="bg-grayCard px-6 py-8 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div class="">
          <h1
            class="text-primary text-4xl leading-none font-bold tracking-tight"
          >
            Vous êtes interessé(e)s <br />
            par le commerce ?
          </h1>
          <p class="text-blue text-lg leading-6 font-normal mt-4">
            Consultez les procédures applicables au Bénin en <br />
            matière d'importation et d'exportation
          </p>
          <div class="mt-8">
            <button
              type="button"
              class="btn btn-light bg-white shadow-md text-primary underline"
            >
              Consulter
            </button>
          </div>
        </div>
        <div class="chef-box">
          <img
            src="@/assets/images/chef.jpeg"
            class="w-full h-60 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20 pt-0 pb-0">
      <AppelsOffresBox :appels_offres="appels_offres" class="pt-0" />
    </div>
    <div class="bg-gray-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <h1
          class="text-blue text-3xl lg:text-4xl leading-none font-extrabold tracking-tight text-center"
        >
          Ne ratez aucun appels à projets
        </h1>
        <p
          class="text-md md:text-lg tracking-tight leading-7 text-blue mt-4 text-center"
        >
          Abonnez-vous soyez informé(e) des appels d’offres et des appels à
          projets.
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
                class="block w-full border border-borderInput rounded-md px-5 py-3 text-base text-dark"
                placeholder="Entrez votre adresse mail"
              />
              <input
                id=""
                type="hidden"
                value="appels_offres"
                required
                class="block w-full border border-borderInput rounded-md px-5 py-3 text-base text-dark"
                placeholder="Entrez votre adresse mail"
              />
            </div>
          </div>
          <div class="w-full">
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
              <div v-else>Restez informé(e)</div>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div
        class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-10"
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
                  d="M23.967 28L26.6557 30.6887L32.033 25.3113M22.4005 18.1824C23.3651 18.1055 24.2809 17.7261 25.0174 17.0985C26.7361 15.6338 29.2639 15.6338 30.9826 17.0985C31.7191 17.7261 32.6349 18.1055 33.5995 18.1824C35.8505 18.3621 37.6379 20.1495 37.8176 22.4005C37.8945 23.3651 38.2739 24.2809 38.9015 25.0174C40.3662 26.7361 40.3662 29.2639 38.9015 30.9826C38.2739 31.7191 37.8945 32.6349 37.8176 33.5995C37.6379 35.8505 35.8505 37.6379 33.5995 37.8176C32.6349 37.8945 31.7191 38.2739 30.9826 38.9015C29.2639 40.3662 26.7361 40.3662 25.0174 38.9015C24.2809 38.2739 23.3651 37.8945 22.4005 37.8176C20.1495 37.6379 18.3621 35.8505 18.1824 33.5995C18.1055 32.6349 17.7261 31.7191 17.0985 30.9826C15.6338 29.2639 15.6338 26.7361 17.0985 25.0174C17.7261 24.2809 18.1055 23.3651 18.1824 22.4005C18.3621 20.1495 20.1495 18.3621 22.4005 18.1824Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Émission de BFU/USU
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Procédez à la vérification de votre facture <br />
                et à son émission
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <button
              type="button"
              class="btn btn-light bg-white shadow-md text-primary underline w-full"
            >
              Consulter
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
                  d="M28 17.8056C28.9773 16.6983 30.4071 16 32 16C34.9455 16 37.3333 18.3878 37.3333 21.3333C37.3333 24.2789 34.9455 26.6667 32 26.6667C30.4071 26.6667 28.9773 25.9683 28 24.8611M32 40H16V38.6667C16 34.2484 19.5817 30.6667 24 30.6667C28.4183 30.6667 32 34.2484 32 38.6667V40ZM32 40H40V38.6667C40 34.2484 36.4183 30.6667 32 30.6667C30.5429 30.6667 29.1767 31.0562 28 31.7369M29.3333 21.3333C29.3333 24.2789 26.9455 26.6667 24 26.6667C21.0545 26.6667 18.6667 24.2789 18.6667 21.3333C18.6667 18.3878 21.0545 16 24 16C26.9455 16 29.3333 18.3878 29.3333 21.3333Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Partenariats
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Profitez des opportunités de partenariats dans divers <br />
                domaines avec les partenaires de la CCI Bénin
              </p>
            </div>
          </div>
          <div class="p-6 py-4 bg-grayCard w-full">
            <button
              type="button"
              class="btn btn-light bg-white shadow-md text-primary underline w-full"
            >
              Consulter
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12 pt-0">
      <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
        Nos programmes d'accompagnement
      </h1>
      <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
        Bénéficiez des outils élaborés par la CCI Bénin pour accompagner les
        créateurs d'entreprise.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
        <div>
          <img
            class="h-48 w-full object-cover"
            src="@/assets/images/box-one.jpeg"
            alt=""
          />
          <div class="p-6 bg-lightGray">
            <h5 class="text-blue text-lg font-bold">Formation</h5>
            <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
              Nous vous faisons monter en compétences dans divers domaines liés
              à la vie de l'entreprise. Développez une maîtrise de compétences
              clés pour votre projet.
            </p>
            <div class="mt-4 w-full">
              <button
                type="button"
                @click="$router.push({ name: 'formations' })"
                class="btn btn-light bg-white shadow-md text-primary w-full"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            class="h-48 w-full object-cover"
            src="@/assets/images/box-two.jpeg"
            alt=""
          />

          <div class="p-6 bg-lightGray">
            <h5 class="text-blue text-lg font-bold">
              Parcours de l'entrepreneur
            </h5>
            <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
              Inscrivez-vous aux sessions de coaching offertes en gestion et en
              développement d'entreprise. Découvrez les étapes et enjeux du
              lancement de votre projet.
            </p>
            <div class="mt-4 w-full">
              <button
                type="button"
                class="btn btn-light bg-white shadow-md text-primary w-full"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
          Nos services phares
        </h1>
        <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
          Nous mettons à votre disposition une grande variété de services pour
          vous aider à développer plus sereinement vos activités.
        </p>
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
          <div
            class="bg-lightGray p-6 rounded-md mb-2 md:mb-0 cursor-pointer flex flex-col justify-between"
          >
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
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Arbitrage et médiation
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                À travers la CAMeC, la Chambre de Commerce et d'Industrie du
                Bénin offre gratuitement des sessions sur les modes alternatifs
                de règlement des litiges.
              </p>
            </div>
            <div class="mt-4 w-full">
              <button
                type="button"
                @click="$router.push({ name: 'arbitrage-mediation' })"
                class="btn btn-light bg-white shadow-md text-primary w-full"
              >
                En savoir plus
              </button>
            </div>
          </div>
          <div
            class="bg-lightGray p-6 rounded-md mb-2 md:mb-0 cursor-pointer flex flex-col justify-between"
          >
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
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Étude de marché sectoriel
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Nous vous aidons à identifier les secteurs porteurs en vous
                fournissant les informations nécessaires pour réaliser une
                analyse sectorielle de vos marchés cible.
              </p>
            </div>
            <div class="mt-4 w-full">
              <button
                @click="$router.push({ name: 'etude-marche' })"
                type="button"
                class="btn btn-light bg-white shadow-md text-primary w-full"
              >
                En savoir plus
              </button>
            </div>
          </div>
          <div
            class="bg-lightGray p-6 rounded-md mb-2 md:mb-0 cursor-pointer flex flex-col justify-between"
          >
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
                  d="M16.0732 26.6667H18.6667C20.1394 26.6667 21.3333 27.8606 21.3333 29.3333V30.6667C21.3333 32.1394 22.5272 33.3333 24 33.3333C25.4728 33.3333 26.6667 34.5272 26.6667 36V39.9268M22.6667 17.2474V19.3333C22.6667 21.1743 24.1591 22.6667 26 22.6667H26.6667C28.1394 22.6667 29.3333 23.8606 29.3333 25.3333C29.3333 26.8061 30.5272 28 32 28C33.4728 28 34.6667 26.8061 34.6667 25.3333C34.6667 23.8606 35.8606 22.6667 37.3333 22.6667L38.7526 22.6667M32 39.3172V36C32 34.5272 33.1939 33.3333 34.6667 33.3333H38.7526M40 28C40 34.6274 34.6274 40 28 40C21.3726 40 16 34.6274 16 28C16 21.3726 21.3726 16 28 16C34.6274 16 40 21.3726 40 28Z"
                  stroke="#DD7A4B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="mt-4">
              <h4 class="text-lg leading-none font-bold text-blue">
                Journées Pays
              </h4>
              <p class="text-sm leading-5 text-subtitlegray mt-4">
                Rencontrez des conseillers et experts pays pour découvrir les
                opportunités de développement et les marchés porteurs dans les
                pays qui vous intéressent.
              </p>
            </div>
            <div class="mt-4 w-full">
              <button
                @click="$router.push({ name: 'journees-pays' })"
                type="button"
                class="btn btn-light bg-white shadow-md text-primary w-full"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-20">
      <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
        Agenda
      </h1>
      <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
        Ne ratez aucune opportunité - Ne manquez aucun événement de la Chambre
        <br />
        de Commerce et d’Industrie du Bénin
      </p>
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(agen, i) in agenda_datas"
          :key="i"
          :event="event"
          class="flex flex-col shadow overflow-hidden mb-4 mt-6 rounded-b-md"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="agen.photo" alt="" />
          </div>
          <div class="flex-1 bg-white pt-6 px-6 flex flex-col justify-between">
            <div class="flex-1">
              <span
                class="inline-flex items-center px-6 py-1 rounded-full text-sm bg-primaryInfo text-primary mt-4"
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
    <div class="bg-grayCard" ref="subscribe">
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
              class="mt-2 text-4xl leading-10 font-extrabold tracking-tight text-primary"
            >
              Restons connectés
            </h1>
            <p class="mt-4 text-lg leading-7 font-normal text-blue">
              Recevez les appels d’offres via whatsapp/sms ou par mails. Les
              meilleures opportunités d’affaires, plus proches de vous, en
              instantané.
            </p>
            <!-- <div class="mt-4">
              <div>
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
                  type="button"
                  class="btn btn-light bg-white shadow-md text-primary w-full"
                >
                  Souscrire
                </button>
              </div>
            </div> -->
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
import Notifications from "@/components/Notifications.vue";
import { services } from "@/api";
import ArticleCard from "@/components/ArticleCard.vue";
import AppelsOffresBox from "@/components/home/AppelsOffresBox.vue";
export default {
  components: {
    Notifications,
    ArticleCard,
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
      news: [],
      appels_offres: [],
      on_loading_request: false,
      agenda_datas: [],
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
    // console.log(this.appels_offres[0])
  },
  methods: {
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
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.barner {
  background: linear-gradient(
      180deg,
      rgba(72, 127, 80, 0.1) 0%,
      rgba(72, 127, 80, 0) 100%
    ),
    url("../assets/images/creatair-min.jpg") !important;
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

.end-box {
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}

::placeholder {
  font-weight: 400 !important;
}

input {
  height: 48px !important;
}
</style>
