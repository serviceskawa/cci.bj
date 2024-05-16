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
          SME Business Training  <br />
          and Coaching Loop
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
        Renforcement des entreprises au Bénin  <br />
        via le projet SME Loop
        </h1>
        <p
          class="
            text-md
            md:text-lg
            tracking-tight
            leading-7
            text-subtitlegray
            my-14
          "
        >
        Le Programme SME Loop vise à renforcer les MPME au Bénin par évaluation, formation 
        et accompagnement. Son objectif : améliorer la gestion, accroître la résilience 
        commerciale et faciliter l'accès 
        aux marchés et au financement pour favoriser la croissance et la création d'emplois.
        </p>
        <div class="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                Objectifs 
              </span>
            </div>
            <div class="text-sm leading-5 text-subtitlegray">
              Le programme SME Loop vise à évaluer, former, et coacher les entreprises pour les aider à appliquer les 
              connaissances acquises, améliorer leurs pratiques 
              commerciales, et accéder aux financements, tout en s'adaptant aux besoins spécifiques de chaque participant.
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
                Impact
              </span>
            </div>
            <div class="text-sm leading-5 text-subtitlegray">
              Les impacts attendus sont la création d'emplois, l'augmentation du chiffre d'affaires, le renforcement des compétences, l'accès aux 
              marchés et aux financements, ainsi que la participation à des missions économiques internationales.
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
                Beneficiaires
              </span>
            </div>
            <div class="text-sm leading-5 text-subtitlegray">
              Les bénéficiaires de ce programme sont les Micro, Petites et Moyennes Entreprises (MPME) 
              au Bénin, notamment les entrepreneurs, les employés et la société dans son ensemble.
            </div>
          </div>
        </div>       
        
        <!-- Ahilido where here -->

      </div>

      <!-- Indicateurs cles -->

      <div class="my-10">

        <IndicateurSME/>

      </div>

      <!-- News -->

      <div class="relative bg-gris">
        <div class="relative max-w-7xl mx-auto ">
          <div class="absolute inset-0">
            <div class="h-1/3 sm:h-2/3" ></div>
          </div>
          <div class="relative mx-auto py-12 px-6 lg:px-10 lg:py-16">
            <div class="text-center">
              <h2
                class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl"
              >
                Actualités SME Loop
              </h2>
              <p class="mt-3 max-w-2xl mx-auto text-lg text-subtitlegray sm:mt-4">
                Ne ratez aucune opportunité - Ne manquez aucun événement de la
                Chambre de Commerce et d’Industrie du Bénin
              </p>
            </div>
            <div
              class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" v-if="news.length > 0"
            >
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
      </div>

      <!-- News end -->

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
          Documentation
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
          comprendre <br />
          l'approche SME Loop
        </p>
        
        <div class="my-10">
          <div class="flex justify-between items-center mb-4">
            
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
                <!-- <a
                  :href="configs.image_url + '/' + doc.file_name"
                  target="_blank"
                  class="text-primary underline"
                >
                
                  Télécharger<span aria-hidden="true">&rarr;</span></a
                > -->

                <a
                  :href="static_file_url + '/' + doc.file_name"
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

          <div class="tracking-tight mt-12 text-left text-dark">
              <span class="block sm:ml-2 sm:inline-block">
                <a @click="$router.push({name: 'ressources'})" class="text-primary">
                  Voir tous les documents <span aria-hidden="true">&rarr;</span></a
                >
              </span>
            </div>

        </div>

      </div>

      <div class="mt-20 section grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div class="p-8">
            <h1 class="text-4xl text-greenDark leading-10 font-extrabold">
              Découvrez les ressources vidéos sur la méthodologie SME Business Loop
            </h1>
            <div class="mt-8 w-full">
              <a href="https://ahilido.bj/" target="_blank">
                <button type="button" class="btn btn-primary bg-primary text-white text-sm w-full">
                  Consulter
                </button>
              </a>
            </div>
          </div>
        </div>

    </div>

    <!-- Start articles -->

    <!-- <div class="bg-rad-primary mb-20">
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
    </div> -->


    <!-- Section : Ne manquez aucun article de blog -->
    
    <!-- <div class="bg-gray-dark mb-20">
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
    </div> -->

    <!-- Agenda section -->

    <!-- Testimonials -->

    
    <!-- Contact section -->

    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-10">

      <div class="pb-8 text-center">   
        
        <div class="py-6 grid gap-5 grid-cols-1 lg:grid-cols-2 lg:col-span-2 w-full">
          <div class="text-left">
            <h4 class="text-3xl leading-9 font-extrabold tracking-tight mb-4">Contact et demande d'information</h4>
            <p class="text-md tracking-tight leading-7 text-subtitlegray">
              Posez-la et nous vous répondons par mail ou via whatsapp.
              Ou, rendez-vous dans nos locaux à Ganhi. Notre équipe est prête à vous recevoir du lundi au vendredi de
              08h à 12h pour répondre à vos questions et vous satisfaire.
            </p>
            <!-- <p class="mt-4 text-md tracking-tight leading-7 text-subtitlegray">
              <span class="">
                Cotonou, Ganhi
              </span><br />
              01 BP 31 Recette Principale, <br />
              Avenue Général de GAULLE
            </p> -->
            <p class="mt-4 text-md tracking-tight leading-none text-subtitlegray">

              <span class="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="24" height="24" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_5564_10079" transform="scale(0.01)" />
                    </pattern>
                    <image id="image0_5564_10079" width="100" height="100"
                      xlink:href="data:image/png;base64,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" />
                  </defs>
                </svg>

                <span class="ml-3">+229 21 31 12 38</span>
              </span><br />
              <span class="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <span class="ml-3">info@ccib.bj</span>
              </span>
            </p>
          </div>
          <div class="text-left">
            <form @submit.prevent="sendFaqRequest">
              <input type="text" placeholder="Votre nom complet" required v-model="form.name"
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <input type="email" placeholder="Votre adresse email, pour recevoir notre réponse" required
                v-model="form.email"
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <textarea rows="5" type="text" placeholder="Posez ici votre question" required v-model="form.title"
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <button class="btn-middle-primary bg-primary px-10 py-2 text-white" :disabled="on_loading_request">
                <div role="status" v-if="on_loading_request">
                  <svg aria-hidden="true" class="w-6 h-6 text-white animate-spin fill-primary" viewBox="0 0 100 101"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor" />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <div v-else>
                  Envoyer
                </div>
              </button>
              <TransitionRoot as="template" :show="open">
                <Dialog as="div" class="relative z-10" @close="open = false">
                  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0"
                    :show="true"
                    >
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </TransitionChild>

                  <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        :show="true">
                        <DialogPanel
                          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                          <div>
                            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#D1FAE5" />
                                <path d="M17 25L21 29L31 19" stroke="#059669" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>

                            </div>
                            <div class="mt-3 text-center sm:mt-5">
                              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Question envoyée
                                avec succès</DialogTitle>
                              <div class="mt-2">
                                <p class="text-sm text-gray-500"> Nous vous répondons par mail bientôt</p>
                              </div>
                            </div>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
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
import IndicateurSME from "@/components/home/IndicateurSME.vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Partenaires from "@/components/home/Partenaires.vue";

export default {
  components: {
    ArticleCard,
    AppelsOffresBox,
    Notifications,
    Partenaires,
    Disclosure,
    DisclosurePanel,
    DisclosureButton,
    DisclosureButton,
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    IndicateurSME
  },
  data() {
    return {
      loader: false,
      news: [],
      appels_offres: [],
      on_loading_request: false,
      email: "",
      open: false,
      phone: "",
      persona: [],
      configs: [],
      agenda_datas: [],
      notif: {
        type: "",
        title: "",
        description: "",
      },
      form: {
        title: '',
        name: '',
        email: ''
      },
      static_file_url: import.meta.env.VITE_FILE_URL,
      partners : []
    };
  },
  async created() {
    let configs = sessionStorage.getItem("configs");
    if (configs !== undefined && configs !== null) {
      configs = JSON.parse(configs);
    }
    if (
      this.$store.state.home_elements.news_smeloop !== undefined &&
      this.$store.state.home_elements.news_smeloop !== null
    ) {
      this.news = this.$store.state.home_elements.news_smeloop;
      
      this.news = this.news.data.map((element) => {
        return {
          ...element,
          cover: configs.image_url + "/" + element.photo,
        };
      });

      // alert(JSON.stringify(this.news))

      this.news = this.news.slice(0, 3);
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
    await this.getPersonaById();
  },
  methods: {
    async sendFaqRequest() {
      this.on_loading_request = true
      await services.send_faq_request(this.form).then((response) => {
        this.on_loading_request = false
        this.form = {
          title: '',
          name: '',
          email: ''
        }
        if (response.status == 200 && response.data.success !== '') {
          this.notif.type = 'success'
          this.notif.title = "Effectuée"
          this.notif.description = "Votre requête a été transmise avec succès."
        } else {
          this.notif.type = 'error'
          this.notif.title = "Erreur"
          this.notif.description = "Une erreur s'est produite. Veuillez réessayer."
        }
        setTimeout(() => {
          this.notif.type = ''
        }, 6000)
      })
    },
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
    async getPersonaById() {
      this.loader = true;
      try {
        await services.getCategory_by_slug('sme-loop').then((response) => {
          // alert(JSON.stringify(response.data))
          this.persona = response.data;
        });
        this.loader = false;
      } catch (error) {
        // alert(error)
        this.loader = false;
      }
    },
  },
  mounted () {
    let configs = sessionStorage.getItem('configs')
    if (configs !== undefined && configs !== null) {
      configs = JSON.parse(configs)
    }
    this.partners = this.$store.state.home_elements
    if (this.partners.partners !== undefined && this.partners.partners !== null) {
      this.partners = this.partners.partners
      console.log('partenaires', this.partners)
      this.partners = this.partners.map((element => {
        return {
          ...element,
          photo: configs.image_url + '/' + element.photo,
        }
      }))
    }
  }
};
</script>
  
<style lang="scss" scoped>

.box {
  max-width: 860px !important;
  min-width: 280px;

  input {
    height: 62px;
  }
}
.barner {
  background: linear-gradient(
      90deg,
      #ffffff 26.01%,
      rgba(255, 255, 255, 0) 63.54%
    ),
    url("../assets/images/sme-loop.png") !important;
  height: 520px !important;
  background-position: bottom !important;
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
    url("../assets/images/bg-sme-loop-mediatech.jpg") !important;
  background-position: center bottom !important;
  background-attachment: local !important;
  background-size: 100% !important;
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

