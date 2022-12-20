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
            Informations et orientation
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
            Accédez à nos dispositifs de support pour vous <br />
            orienter dans votre recherche d'informations
          </p>
          <button
            type="button"
            class="btn btn-primary bg-primary text-white text-sm w-auto mt-4"
            @click="$router.push({ name: 'contact' })"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            Dispositif d'accueil
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Nos équipes se tiennent à votre disposition pour vous recevoir et
            vous orienter aux jours et heures <br />
            ouvrables. Posez vos besoins en informations pour être guidés dans
            nos locaux ou en ligne (appel <br />
            téléphonique, email ou chat).
          </p>
        </div>
        <div
          class="
            flex
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            md:gap-8
            mb-6
          "
        >
          <div class="shadow-lg mb-2 md:mb-0 flex flex-col justify-between">
            <div class="p-6">
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

              <div class="mt-4">
                <h4
                  class="
                    text-lg
                    leading-6
                    font-extrabold
                    text-borderSimple
                    mb-3
                  "
                >
                  Accueil personnalisé
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
                  Nous prenons en charge vos préoccupations selon vos
                  disponibilités.
                </p>
              </div>
            </div>
          </div>
          <div class="shadow-lg mb-2 md:mb-0 flex flex-col justify-between">
            <div class="p-6">
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
                  d="M29.3333 22.1462H40M40 22.1462V31.5121M40 22.1462L29.3333 31.5121L24 26.8292L16 33.8536"
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
                    leading-6
                    font-extrabold
                    text-borderSimple
                    mb-3
                  "
                >
                  Information spécialisée
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
                  Obtenez des informations sur des thématiques précises auprès
                  de nos agents.
                </p>
              </div>
            </div>
          </div>
          <div class="shadow-lg mb-2 md:mb-0 flex flex-col justify-between">
            <div class="p-6">
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

              <div class="mt-4">
                <h4
                  class="
                    text-lg
                    leading-6
                    font-extrabold
                    text-borderSimple
                    mb-3
                  "
                >
                Orientation vers les services compétents
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
                Nous vous orientons vers les services spécialisés selon vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            Informations sur les entreprises et industries
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Trouvez toutes les informations sur les entreprises locales.
          </p>
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
            <div
              class="p-6 rounded-lg bg-grayCard flex flex-col justify-between"
            >
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
                Fichier des entreprises
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Accédez à la base de données des entreprises et établissements
                enregistrés au Bénin.
              </p>
              <button
                @click="$router.push({ name: 'contact' })"
                type="button"
                class="
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                  mt-4
                  text-center
                  underline
                "
              >
              Nous contacter
              </button>
            </div>
            <div
              class="p-6 rounded-lg bg-grayCard flex flex-col justify-between"
            >
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
                Liste d'entreprises disponible sur demande et par domaine
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Formulez vos demandes pour obtenir une liste d'entreprises
                suivant des critères précis.
              </p>
              <button
                @click="$router.push({ name: 'contact' })"
                type="button"
                class="
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                  mt-4
                  text-center
                  underline
                "
              >
              Nous contacter
              </button>
            </div>
            <div
              class="p-6 rounded-lg bg-grayCard flex flex-col justify-between"
            >
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
                Vérification d'existence ou de fiabilité des entreprises
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Accédez à la plateforme AHILIDO pour vérifier l'existence et la
                fiabilité d'une entreprise.
              </p>
              <a
                href="https://ahilido.bj/" target="_blank"
                type="button"
                class="
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                  mt-4
                  text-center
                  underline
                "
              >
              Visiter Ahilido
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
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
        <div>
          <img
            src="@/assets/images/docs.jpeg"
            class="w-full object-cover"
          />
        </div>
        <div class="p-6">
          <h3 class="text-2xl lg:text-4xl leading-10 font-extrabold text-greenDark">
            Documentation
          </h3>
          <p
            class="text-lg mt-4 tracking-tight leading-7 text-subtitlegray mt-3"
          >
            Retrouvez l'information économique sur les entreprises et <br> l'environnement des affaires au Bénin.
          </p>
          <button
            type="button"
            class="
              mt-6
              btn btn-light
              bg-white
              shadow-md
              text-primary
              w-full
            "
          >
            Voir les documents
          </button>
        </div>
      </div>
    </div>
    <div class="bg-primaryInfo py-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center">
          <div>
            <h3 class="text-2xl lg:text-4xl leading-10 font-extrabold text-blue">
              Discutons maintenant !
            </h3>
            <p class="text-lg mt-6 tracking-tight leading-7 text-subtitlegray">
              Utilisez le chat en ligne. Nos agents sont <br />
              disponibles pour répondre à vos questions diverses <br />
              et préoccupations.
            </p>

            <a href="javascript:SBChat.initChat();SBChat.open()">
                <button type="button" class="mt-8 btn btn-light bg-white shadow-md text-primary w-auto">
                  Commencer le chat
                </button>
              </a>
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
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12 pt-20">
      <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
        Autres services
      </h1>
      <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
        Découvrez nos programmes d’accompagnement dédiés aux entreprises et
        industries locales.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
        <div>
          <img
            class="h-48 w-full object-cover"
            src="@/assets/images/box-one.jpeg"
            alt=""
          />
          <div class="p-6 bg-lightGray">
            <h5 class="text-blue text-lg font-bold">
              Services phares
            </h5>
            <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
              Découvrez nos programmes d’accompagnement dédiés aux entreprises et industries locales.
            </p>
            <div class="mt-4 w-full">
              <button
                type="button"
                @click="$router.push({ name: 'services-specs' })"
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
              Formation, assistance et appui-conseil
            </h5>
            <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
              Faites-vous former et conseiller par nos experts dans divers
              domaines touchant à la vie de l’entreprise
            </p>
            <div class="mt-4 w-full">
              <button
                @click="$router.push({ name: 'services-formations' })"
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
      loader: false,
      faqs: [],
      open: false,
      agenda_datas: [],

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
