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
              text-primary text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Obtenez des subventions <br />
            ou financements pour <br />
            vos projets
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
            La CCI Bénin accompagne les entreprises qui <br />
            souhaitent postuler aux dispositifs de financement <br />
            ou subvention en toute simplicité.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            Accompagnement au montage de dossiers <br />
            d'aides et financement
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Quel que soit votre besoin, la CCI Bénin vous accompagne à chaque
            étape du processus vers l’atteinte <br />
            de vos objectifs. Nous vous simplifions les démarches pour votre
            satisfaction complète.
          </p>
        </div>
        <div class="flex grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
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
                Ce produit de la CCI Bénin s'adresse aux entreprises, <br />
                commerce et industries qui souhaitent postuler à des <br />
                dispositifs d'aide ou de financement.
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
                Une équipe de conseillers rompus à la tâche accompagne <br />
                les promoteurs dans leurs démarches pour augmenter <br />
                leurs chances de réussite.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-10 pb-20">
          <h1 class="text-2xl lg:text-4xl leading-10 font-extrabold tracking-tight">
            En quoi consiste l'accompagnement au montage <br />
            de dossiers de la CCI Bénin ?
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
                  <div class="font-medium">Étape 01</div>
                  <div class="mt-1 tracking-tight text-subtitlegray">
                    Rendez-vous avec un conseiller <br />
                    pour identifier vos besoins
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
                  <div class="font-medium">Étape 02</div>
                  <div class="mt-1 tracking-tight text-subtitlegray">
                    Formalisation des besoins <br />
                    en financement du projet
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
                  <div class="font-medium">Étape 03</div>
                  <div class="mt-1 tracking-tight text-subtitlegray">
                    Recherche des dispositifs les plus <br />
                    adaptés et validation de l'éligibilité
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
                  <div class="font-medium">Étape 04</div>
                  <div class="mt-1 tracking-tight text-subtitlegray">
                    Préparation du dossier de demande <br />
                    de financement
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
                  <div class="font-medium">Étape 05</div>
                  <div class="mt-1 tracking-tight text-subtitlegray">
                    Mise en relation du promoteur <br />
                    avec les financeurs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-20">
          <div class="bg-grayCard grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <img
                src="@/assets/images/sset.jpeg"
                class="w-full h-96 object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl lg:text-4xl leading-10 font-extrabold text-greenDark">
                Faites-vous <br />
                accompagner par un <br />
                expert en montage de <br />
                dossiers
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
                Vous souhaitez gagner en rapidité et efficacité dans
                l'élaboration de vos dossiers de subventions ou de financement ?
                Visitez la plateforme ImPULSE pour être mis en relation avec un
                conseiller.
              </p>
              <a
                @click="$router.push({ name: 'impulse' })"
              >
              <button
                type="button"
                class="mt-6 btn bg-primary shadow-md text-white w-full"
              >
                Aller sur <span class="underline">Impulse.bj</span>
              </button>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center">
            <div>
              <h3 class="text-2xl lg:text-4xl leading-10 font-extrabold text-blue">
                Discutons maintenant !
              </h3>
              <p
                class="text-lg mt-6 tracking-tight leading-7 text-subtitlegray"
              >
                Vous souhaitez en savoir plus ? Utilisez le chat <br />
                en ligne. Nos agents sont disponibles pour répondre <br />
                à vos questions diverses et préoccupations.
              </p>
              <a href="javascript:SBChat.initChat();SBChat.open()">
                <button type="button" class="mt-8 btn btn-light bg-white shadow-md text-primary w-full">
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
              <img src="@/assets/images/chatbot.gif" class="h-64" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
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
          nos dernières actualités.
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
          photo: configs.image_url + "/" + element.photo,
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
</style>
