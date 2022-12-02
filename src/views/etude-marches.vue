<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="">
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
            Évaluez le potentiel de <br />
            vos projets d'activité <br />
            commerciale
          </h1>
          <p
            class="
              text-md
              md:text-lg
              tracking-tight
              text-subtitlegray
              leading-7
              text-blue
              mt-6
            "
          >
            Nous vous aidons à identifier les secteurs porteurs <br />
            en vous fournissant les informations nécessaires <br />
            pour réaliser une analyse sectorielle de vos <br />
            marché cibles
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Des réponses adaptées pour mieux connaître <br />
            votre secteur d'activité
          </h1>
          <p
            class="text-lg tracking-tight leading-7 text-subtitlegray mt-3 mb-8"
          >
            L'étude de marché est un passage obligé pour tout projet
            d'entreprise. Elle vous apporte les réponses adaptées et vous aide à
            mieux connaître le secteur d'activité, la zone de chalandise et
            l'environnement de votre future entreprise.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-grayCard rounded p-6 flex items-center">
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
              <span class="ml-3">
                Grande tendances, acteurs et poids économique
              </span>
            </div>
            <div class="bg-grayCard rounded p-6 flex items-center">
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
              <span class="ml-3"> Acheteurs et concurrents </span>
            </div>
            <div class="bg-grayCard rounded p-6 flex items-center">
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
              <span class="ml-3"> Contraintes et opportunités </span>
            </div>
          </div>
          <div class="py-20">
            <div class="bg-grayCard grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <img
                  src="@/assets/images/institutionnel.jpeg"
                  class="w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 class="text-4xl leading-10 font-extrabold text-greenDark">
                  Demandez une étude <br />
                  de marché sectorielle
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
                  Nos experts établissent une analyse consolidée des <br />
                  informations recueillies sur le terrain pour vous livrer un
                  <br />
                  rapport comprenant nos recommandations précises.
                </p>
                <button
                  type="button"
                  class="mt-4 btn bg-primary shadow-md text-white w-full"
                >
                  Formuler une demande
                </button>
              </div>
            </div>
          </div>
          <div class="pb-20 mb-6">
            <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
              Validez l’opportunité commerciale de votre offre en vue <br />
              d'une future implantation
            </h1>
            <div
              class="
                flex
                grid grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                md:gap-8
                mt-8
              "
            >
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
                    d="M24 37.3333V29.3333C24 27.8606 22.8061 26.6667 21.3333 26.6667H18.6667C17.1939 26.6667 16 27.8606 16 29.3333V37.3333C16 38.8061 17.1939 40 18.6667 40H21.3333C22.8061 40 24 38.8061 24 37.3333ZM24 37.3333V24C24 22.5272 25.1939 21.3333 26.6667 21.3333H29.3333C30.8061 21.3333 32 22.5272 32 24V37.3333M24 37.3333C24 38.8061 25.1939 40 26.6667 40H29.3333C30.8061 40 32 38.8061 32 37.3333M32 37.3333V18.6667C32 17.1939 33.1939 16 34.6667 16H37.3333C38.8061 16 40 17.1939 40 18.6667V37.3333C40 38.8061 38.8061 40 37.3333 40H34.6667C33.1939 40 32 38.8061 32 37.3333Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div class="mt-4">
                  <h4
                    class="
                      text-lg
                      leading-7
                      font-medium
                      text-blue
                      max-three-lines
                    "
                  >
                    Bénéficiez de nos données locales et notre exclusivité
                  </h4>
                  <p class="text-md text-light leading-5 text-subtitlegray">
                    Grâce à notre expérience et à notre excellent réseau
                    national, nous disposons des chiffres actuels, exclusifs
                    concernant votre marché, les profils des consommateurs et
                    concurrents. Obtenez l'accès à des données d'enquêtes
                    précises sur le comportement d'achat local.
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

                <div class="mt-4">
                  <h4
                    class="
                      text-lg
                      leading-7
                      font-medium
                      text-blue
                      max-three-lines
                    "
                  >
                    Obtenez une étude de marché complète et objective
                  </h4>
                  <p class="text-md text-light leading-5 text-subtitlegray">
                    Nous vous aidons à élaborer une étude de marché basée sur
                    notre forte connaissance en amont des projets dans votre
                    zone de chalandise commerciale. Ce document constitue une
                    1ère étape de réflexion pour organiser votre projet
                    d'entreprise.
                  </p>
                </div>
              </div>
              <div class="p-6 pb-12 shadow-lg mb-2 md:mb-0">
                <svg
                  width="57"
                  height="56"
                  viewBox="0 0 57 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56.4377"
                    height="56"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M24.1459 28.2944L26.8612 31.0097L32.2918 25.5791M39.9189 20.1273C39.6411 20.1413 39.3614 20.1485 39.08 20.1485C34.9074 20.1485 31.1011 18.5798 28.2187 16C25.3364 18.5797 21.5302 20.1483 17.3576 20.1483C17.0763 20.1483 16.7966 20.1412 16.5188 20.1271C16.1802 21.4353 16 22.8074 16 24.2215C16 31.8128 21.1921 38.1914 28.2188 40C35.2456 38.1914 40.4377 31.8128 40.4377 24.2215C40.4377 22.8074 40.2575 21.4355 39.9189 20.1273Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div class="mt-4">
                  <h4
                    class="
                      text-lg
                      leading-7
                      font-medium
                      text-blue
                      max-three-lines
                    "
                  >
                    Découvrez des projections concrètes pour préparer votre
                    business plan
                  </h4>
                  <p class="text-md text-light leading-5 text-subtitlegray">
                    Nous concluons l'étude marketing par des préconisations
                    objectives et qualifiées avec des partenaires. Vous recevez
                    ainsi des éléments concrets pour préparer votre business
                    plan, évaluer votre business et calculer votre chiffre
                    d'affaires potentiel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="section grid grid-cols-1 md:grid-cols-2 items-center">
            <div></div>
            <div class="p-8">
              <h1 class="text-4xl text-greenDark leading-10 font-extrabold">
                Demandez une étude <br />
                de marché sectorielle
              </h1>
              <div class="mt-8 w-full">
                <button
                  type="button"
                  class="btn btn-primary bg-primary text-white text-sm w-full"
                >
                  Formuler la demande
                </button>
              </div>
            </div>
          </div>

          <div class="pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center">
            <div>
              <h3 class="text-4xl leading-10 font-extrabold text-blue">
                Vous avez des questions ? <br> Discutons maintenant !
              </h3>
              <p
                class="text-lg mt-6 tracking-tight leading-7 text-subtitlegray"
              >
                Vous souhaitez en savoir plus ? Utilisez le chat en <br> ligne. Nos agents sont disponibles pour répondre <br>
à vos questions diverses et préoccupations.
              </p>
              <button
                type="button"
                class="
                  mt-8
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
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
              <svg
                width="236"
                height="195"
                viewBox="0 0 236 195"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect x="0.5" width="235" height="195" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_311_3233"
                      transform="translate(0 -0.106007) scale(0.00142857 0.00172161)"
                    />
                  </pattern>
                  <image
                    id="image0_311_3233"
                    width="700"
                    height="704"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAALACAYAAABxWqH5AAAgAElEQVR4Xu3dzY5cB1qA4VNl50fASIxExoxkfqSJlJFG9mI0cCWIm2DlXEiyYs1NzJYbGBCLsRgNKPxFCMaTRRYREYntOqjasWnbXV2nuqurT731eMNinO7zPd+3eDkqdy8GfwgQIECAAAECBAiEBRbh2YxGgAABAgQIECBAYBC8joAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAibxLX8AAA1nSURBVATSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNvCXwwccPxuWwGIZxGFaLcfjik8fuxJ0QIECAAAECRysgZI52dTfz4PcePRzXrfvmn9UgfG9G3FclQIAAAQIEblpA8N608BF9/Vdvdjc98zgMTz79pZs5op16VAIECBAgQGC46F0ellMVuPfxw3HK7E8+Eb1TnPwdAgQIECBAYB4C3tbNYw+3/hT3Hj0Yh8X0cxC9t74yD0CAAAECBAhMFJheOBO/oL92nAJT3+6en070HueuPTUBAgQIEDg1AcF7ahvfMO9Vgnf9Uxx8ptcBESBAgAABAnMXELxz39ABnu9KsXvuubzpPcCSfAsCBAgQIEDgygKC98p0nf9w18/vvja5t7ydQzAJAQIECBCICgje6GJ3GetawTsMgze8u2j7uwQIECBAgMChBQTvocVn+P2u+5EGn+Wd4VI9EgECBAgQIPBKQPA6hmFT8I7PV8PiznKSkLe8k5j8JQIECBAgQOAWBATvLaDP7VteFrzLZ4thfH8xrN/ibvsjercJ+d8JECBAgACB2xAQvLehPrPvedlHGpZfrYbV7y23/06+cRyefPrYPc1stx6HAAECBAgQ2J4xjE5AYD/B62fynsCpGJEAAQIECBylgDdyR7m2/T70ZcF758vnw/PfvzPp/zXykYb97sVXI0CAAAECBPYjIHj343jUX+WyH0u2/kjD+O5iGN/bfiqC96jPwMMTIECAAIGswPaKyY5usJcC234O79S3vILXTREgQIAAAQJzFBC8c9zKgZ/p3qOH43DJJdx9shqe3fPjyQ68Ft+OAAECBAgQ2JOA4N0T5LF/mcs+xyt4j327np8AAQIECJy2gOA97f2/mn7bT2o4+xzvu4ut/3jNxxocFAECBAgQIDA3AcE7t43c0vNs+/XCU9/yCt5bWqBvS4AA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AgRmJSBOZrUOD0OAAAECBAgQILBvAcG7b9ET/3re8p74ARifAAECBAjMUEDwznApx/xIf/rTD8d//4fP3NUxL9GzEyBAgACBmIAwiS3UOAQIECBAgAABAq8LCF4XQYAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAtIHjT6zUcAQIECBAgQICA4HUDBAgQIECAAAECaQHBm16v4QgQIECAAAECBASvGyBAgAABAgQIEEgLCN70eg1HgAABAgQIECAgeN0AAQIECBAgQIBAWkDwptdrOAIECBAgQIAAAcHrBggQIECAAAECBNICgje9XsMRIECAAAECBAgIXjdAgAABAgQIECCQFhC86fUajgABAgQIECBAQPC6AQIECBAgQIAAgbSA4E2v13AECBAgQIAAAQKC1w0QIECAAAECBAikBQRver2GI0CAAAECBAgQELxugAABAgQIECBAIC0geNPrNRwBAgQIECBAgIDgdQMECBAgQIAAAQJpAcGbXq/hCBAgQIAAAQIEBK8bIECAAAECBAgQSAsI3vR6DUeAAAECBAgQICB43QABAgQIECBAgEBaQPCm12s4AgQIECBAgAABwesGCBAgQIAAAQIE0gKCN71ewxEgQIAAAQIECAheN0CAAAECBAgQIJAWELzp9RqOAAECBAgQIEBA8LoBAgQIECBAgACBtIDgTa/XcAQIECBAgAABAoLXDRAgQIAAAQIECKQFBG96vYYjQIAAAQIECBAQvG6AAAECBAgQIEAgLSB40+s1HAECBAgQIECAgOB1AwQIECBAgAABAmkBwZter+EIECBAgAABAgQErxsgQIAAAQIECBBICwje9HoNR4AAAQIECBAgIHjdAAECBAgQIECAQFpA8KbXazgCBAgQIECAAAHB6wYIECBAgAABAgTSAoI3vV7DESBAgAABAgQICF43QIAAAQIECBAgkBYQvOn1Go4AAQIECBAgQEDwugECBAgQIECAAIG0gOBNr9dwBAgQIECAAAECgtcNECBAgAABAgQIpAUEb3q9hiNAgAABAgQIEBC8boAAAQIECBAgQCAt8H92orTf0ze7WwAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import store from "@/store";
import { ref, onMounted, computed } from "vue";
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
    ArticleCard,
    AppelsOffresBox,
    Notifications,
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
      news: [],
      email: "",
      agenda_datas: [],
      loader: false,
      faqs: [],
      open: false,
      on_loading_request: false,
    };
  },
  async created() {
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
    url("../assets/images/jpays.jpeg") !important;
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
</style>

