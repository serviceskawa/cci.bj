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
            Services phares
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
            Nos programmes d'accompagnement dédiés aux <br />
            entreprises et industries locales
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Pour les entrepreneurs et commerçants
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            La CCI Bénin met à disposition des entreprises et des industries une
            grande <br />
            variété de dispositifs pour accompagner leurs activités.
          </p>
        </div>
        <div
          class="
            flex
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
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
                  Rendez-vous mensuel des experts
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
                  Reprenez rendez-vous avec nos experts spécialisés pour des
                  séances de conseils et consultation gratuites.
                </p>
              </div>
            </div>
            <div class="bg-grayCard px-6 py-4">
              <button
                type="button"
                class="btn btn-primary bg-primary text-white text-sm w-full"
                @click="$router.push({ name: 'rdv-experts' })"
              >
                En savoir plus
              </button>
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
                  Programme Impulse
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
                  Faites vous accompagner par un conseiller d'entreprise pour
                  structurer et développer votre projet
                </p>
              </div>
            </div>
            <div class="bg-grayCard px-6 py-4">
              <button
                type="button"
                class="btn btn-primary bg-primary text-white text-sm w-full"
                @click="$router.push({ name: 'impulse' })"
              >
                En savoir plus
              </button>
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
                  Arbitrage et médiation
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
                  Réglez plus simplement les litiges commerciaux grâce aux modes
                  alternatifs de règlement de litiges
                </p>
              </div>
            </div>
            <div class="bg-grayCard px-6 py-4">
              <button
                type="button"
                class="btn btn-primary bg-primary text-white text-sm w-full"
                @click="$router.push({ name: 'arbitrage-mediation' })"
              >
                En savoir plus
              </button>
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
                  Plateforme qualité
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
                  Bénéficiez d'un accompagnement et de nos outils d'aide à
                  l'accès au marché des produits locaux de qualité
                </p>
              </div>
            </div>
            <div class="bg-grayCard px-6 py-4">
              <button
                type="button"
                class="btn btn-primary bg-primary text-white text-sm w-full"
                @click="$router.push({ name: 'aide-montage' })"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Pour les porteurs de projets
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Nous vous mettons en relation avec des experts pour renforcer vos
            compétences <br />
            dans la mise en œuvre de votre projet entrepreneurial.
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
                Rencontres thématiques
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Les rencontres thématiques sont un cadre d'échanges et
                d'information sur des thématiques ciblées en rapport avec la
                performance des entreprises. Ces thématiques sont animées par
                des experts ou consultants spécialisés, issus du secteur public
                ou privé.
              </p>
              <router-link
                :to="{ name: 'contact' }"
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
              </router-link>
            </div>
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
                Parcours de l'entrepreneur
              </div>
              <p class="text-md tracking-tight text-subtitlegray leading-6">
                Le programme parcours de l'entrepreneur propose des sessions de
                formation en gestion et en développement d'entreprise à
                destination des porteurs de projets de création d'entreprise
                pour les aider à mieux structurer et concevoir leur projet.
              </p>
              <router-link
                :to="{ name: 'parcours-entrepreneur' }"
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
                En savoir plus
              </router-link>
            </div>
          </div>
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
              Parcours du créateur
            </div>
            <p class="text-md tracking-tight text-subtitlegray leading-6">
              À travers ce produit de CCI Bénin, les porteurs de projet
              aspirants à la création d'une entreprise sont initiés à la méthode
              TRIE/CRE du BIT. Nous vous offrons les clés pour faciliter la
              création d’entreprise et l'établissement d'un plan d'affaires
              finalisé.
            </p>
            <router-link
              :to="{ name: 'observatoire-commerce' }"
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
              S'inscrire
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-20">
      <h1 class="text-blue text-center text-4xl leading-none font-bold tracking-tight">
        Nos évènements
      </h1>
      <p class="text-subtitlegray text-center text-lg leading-6 font-normal mt-4">
        Mettez en avant votre entreprise à l'occasion des événements de promotion organisés par la CCI Bénin
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
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center">
        <div>
          <h3 class="text-4xl leading-10 font-extrabold text-blue">
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
     <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12 pt-0">
      <h1 class="text-blue text-4xl leading-none font-bold tracking-tight">
        Autres services
      </h1>
      <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
        Découvrez nos programmes d’accompagnement dédiés aux entreprises et industries locales.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
        <div>
          <img
            class="h-48 w-full object-cover"
            src="@/assets/images/box-one.jpeg"
            alt=""
          />
          <div class="p-6 bg-lightGray">
            <h5 class="text-blue text-lg font-bold">Information et orientation</h5>
            <p class="text-subtitlegray text-lg leading-6 font-normal mt-4">
              Accédez à nos dispositifs de support pour vous orienter dans votre recherche d’informations.
            </p>
            <div class="mt-4 w-full">
              <button
                type="button"
                @click="$router.push({ name: 'services-infos' })"
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
              Faites-vous former et conseiller par nos experts dans divers domaines touchant à la vie de l’entreprise
            </p>
            <div class="mt-4 w-full">
              <button
               @click="$router.push({name: 'services-formations'})"
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
