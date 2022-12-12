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
            Transformez votre entreprise <br />
            grâce à l'apprentissage
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
            Développez des compétences dans divers domaines liés à la <br />
            gestion de l'entreprise grâce aux formations de la CCI-Bénin
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
      <div>
        <div class="pt-6 md:pt-20 mb-6">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Se former avec la CCI-Bénin
          </h1>
          <p class="text-lg tracking-tight leading-7 text-subtitlegray mt-3">
            Dispositif de la CCI-Bénin pour outiller les porteurs de projets
            entrepreneuriaux
          </p>
        </div>
        <div
          class="
            flex
            justify-center
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            md:gap-8
            mb-6
          "
        >
          <div>
            <div class="flex justify-center mb-4">
              <img src="@/assets/svg/formation-one.svg" class="h-40" alt="" />
            </div>
            <p
              class="
                text-center text-lg
                tracking-tight
                leading-6
                text-subtitlegray
              "
            >
              Une offre de <br />
              formation variée ;
            </p>
          </div>
          <div>
            <div class="flex justify-center mb-4">
              <img src="@/assets/svg/formation-two.svg" class="h-40" alt="" />
            </div>
            <p
              class="
                text-center text-lg
                tracking-tight
                leading-6
                text-subtitlegray
              "
            >
              Des programmes <br />
              selon votre profil ;
            </p>
          </div>
          <div>
            <div class="flex justify-center mb-4">
              <img src="@/assets/svg/formation-three.svg" class="h-40" alt="" />
            </div>
            <p
              class="
                text-center text-lg
                tracking-tight
                leading-6
                text-subtitlegray
              "
            >
              Faites-vous former <br />
              par des experts ;
            </p>
          </div>
        </div>
        <div class="py-20">
          <h1 class="text-4xl leading-10 font-extrabold tracking-tight">
            Quelle formation souhaitez-vous suivre ?
          </h1>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="
                bg-lightGray px-6 py-3
                p-6
                rounded-md
                mb-2
                md:mb-0
                cursor-pointer
                flex flex-col
                justify-between
              "
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
                    d="M25 34.6667L24 38.6667L22.6667 40H33.3333L32 38.6667L31 34.6667M16 29.3333H40M18.6667 34.6667H37.3333C38.8061 34.6667 40 33.4728 40 32V18.6667C40 17.1939 38.8061 16 37.3333 16H18.6667C17.1939 16 16 17.1939 16 18.6667V32C16 33.4728 17.1939 34.6667 18.6667 34.6667Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Formation en ligne
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Accédez à des cours en ligne depuis la plateforme e-learning
                  de la Chambre de Commerce et d'Industrie du Bénin.
                </p>
              </div>
              <div class="mt-4 w-full h-full">
                <button
                  type="button"
                  class="btn btn-light bg-white shadow-md text-primary w-full"
                >
                  Découvrir
                </button>
              </div>
            </div>
            <div
              class="
                bg-lightGray
                p-6
                rounded-md
                mb-2
                md:mb-0
                cursor-pointer
                flex flex-col
                justify-between
              "
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
                    d="M29.3333 21.3334H40M40 21.3334V32M40 21.3334L29.3333 32L24 26.6667L16 34.6667"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Programme G.E.R.M.E
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Familiarisez-vous avec les standards et la méthodologie du BIT
                  pour améliorer la gestion de votre entreprise
                </p>
              </div>
              <div class="mt-4 w-full h-full">
                <button
                  type="button"
                  class="btn btn-light bg-white shadow-md text-primary w-full"
                >
                  Voir le planning
                </button>
              </div>
            </div>
          </div>
          <div
            class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              class="
                bg-lightGray
                p-6
                rounded-md
                mb-2
                md:mb-0
                cursor-pointer
                flex flex-col
                justify-between
              "
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
                    d="M16 18.6667H32M24 16V18.6667M25.3976 31.3333C23.3611 29.2237 21.7076 26.7419 20.5492 24M28.6667 36H38M26.6667 40L33.3333 26.6667L40 40M29.0015 18.6667C27.7108 26.3603 22.7596 32.8127 16 36.1719"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Formation Anglais- Mandarin
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Développez une maîtrise des langues les plus utilisées pour
                  les affaires et boostez votre croissance.
                </p>
              </div>
              <div class="mt-4 w-full h-full">
                <button
                  type="button"
                  class="btn btn-light bg-white shadow-md text-primary w-full"
                >
                  Voir le planning
                </button>
              </div>
            </div>
            <div
              class="
                bg-lightGray
                p-6
                rounded-md
                mb-2
                md:mb-0
                cursor-pointer
                flex flex-col
                justify-between
              "
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
                    d="M28 30.6296L40 23.9629L28 17.2963L16 23.9629L28 30.6296ZM28 30.6296L36.2121 26.0673C36.9357 27.8917 37.3333 29.8808 37.3333 31.9629C37.3333 32.8979 37.2531 33.8143 37.0992 34.7054C33.6191 35.0438 30.4654 36.4971 28 38.7037C25.5346 36.4971 22.3809 35.0438 18.9008 34.7054C18.7469 33.8143 18.6667 32.8979 18.6667 31.9628C18.6667 29.8808 19.0643 27.8917 19.7878 26.0673L28 30.6296ZM22.6667 38.6295V28.6296L28 25.6666"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  École de commerce
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Suivez des formations certifiantes et obtenez un diplôme en
                  gestion grâce à nos divers partenaires académiques.
                </p>
              </div>
              <div class="mt-4 w-full h-full">
                <button
                  type="button"
                  class="btn btn-light bg-white shadow-md text-primary w-full"
                >
                  Voir le planning
                </button>
              </div>
            </div>
            <div
              class="
                bg-lightGray
                p-6
                rounded-md
                mb-2
                md:mb-0
                cursor-pointer
                flex flex-col
                justify-between
              "
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
                    d="M22.6667 28.6666V27.3333M28 28.6666V24.6666M33.3333 28.6666V22M22.6667 39.3333L28 34L33.3333 39.3333M16 16.6666H40M17.3333 16.6666H38.6667V32.6666C38.6667 33.403 38.0697 34 37.3333 34H18.6667C17.9303 34 17.3333 33.403 17.3333 32.6666V16.6666Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-none font-bold text-blue">
                  Formation sur l’accès aux marchés
                </h4>
                <p class="text-sm leading-5 text-subtitlegray mt-4">
                  Renforcez vos capacités en matière de montage et de
                  compréhension des dossiers de marchés publics
                </p>
              </div>
              <div class="mt-4 w-full h-full">
                <button
                  type="button"
                  class="btn btn-light bg-white shadow-md text-primary w-full"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-20">
           <h1 class="text-4xl leading-10 font-extrabold mb-8 tracking-tight">
            Nos thèmes de formation
          </h1>
          <div class="flex flex-wrap text-blue text-md">
            <div class="bg-lightGray px-6 py-3 mb-4 mr-6">Entrepreneuriat</div>
            <div class="bg-lightGray px-6 py-3 mb-4 mr-6">Ressources Humaines</div>
            <div class="bg-lightGray px-6 py-3 mb-4 mr-6">Gestion de la Transformation Digitale</div>
            <div class="bg-lightGray px-6 py-3 mb-4 mr-6">Marketing et Communication</div>
            <div class="bg-lightGray px-6 py-3 mb-4">Développement Personnel</div>
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
              Commencez <br> à apprendre dès <br> maintenant
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
              Profitez du catalogue de cours en ligne de la CCI <br> Bénin pour monter en compétences.
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
                underline
              "
            >
              Démarrer
            </button>
          </div>
          <div>
            <img
              src="@/assets/images/institutionnel.jpeg"
              class="w-full h-96 object-cover"
            />
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
    url("../assets/images/transform.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
</style>
