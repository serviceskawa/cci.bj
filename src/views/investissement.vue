<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="pb-20">
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
              text-blue text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Investissez
            <br />
            <span class="text-primary"> en toute sécurité </span>
          </h1>
          <p
            class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mt-6
            "
          >
            En toute liberté et sans aucune contrainte de temps ni <br />
            de lieu, créer la future entreprise révolutionnaire du <br />
            Bénin.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div>
        <h1
          class="
            text-4xl text-center
            leading-10
            font-extrabold
            tracking-tight
            mb-20
          "
        >
          Que souhaitez vous faire ?
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray px-8 py-6">
            <div class="text-lg leading-6 font-medium">Rester informé(e)</div>
            <div
              class="
                pt-12
                pb-4
                text-4xl
                leading-10
                font-extrabold
                text-subtitlegray
              "
            >
              Souscrivez à notre <br />
              newsletter
            </div>
            <a
              type="button"
              @click="scrollToAnchorPoint('subscribe')"
              class="
                btn
                text-center
                btn-light
                text-primary
                hover:text-white hover:bg-primary
                w-full
                text-sm
                leading-5
                font-medium
              "
            >
              S'abonner
            </a>
          </div>
          <div class="bg-gray px-8 py-6">
            <div class="text-lg leading-6 font-medium">Nouvel Investisseur</div>
            <div
              class="
                pt-12
                pb-4
                text-4xl
                leading-10
                font-extrabold
                text-subtitlegray
              "
            >
              Investir
            </div>
            <br /><br />
            <div class="w-full">
              <a
                type="button"
                href="https://apiex.bj/"
                target="_blank"
                class="
                  btn
                  text-center
                  btn-light
                  text-primary
                  hover:text-white hover:bg-primary
                  w-full
                  text-sm
                  leading-5
                  font-medium
                "
              >
                <span class="w-full">
                  Visiter
                  <span
                    class="
                      text-underline
                      border-b-2 border-primary
                      hover:border-white
                      w-full
                    "
                    >Apiex.bj</span
                  >
                </span>
              </a>
            </div>
          </div>
          <div class="bg-gray px-8 py-6">
            <div class="text-lg leading-6 font-medium">
              Parler à des experts
            </div>
            <div
              class="
                pt-12
                pb-4
                text-4xl
                leading-10
                font-extrabold
                text-subtitlegray
              "
            >
              Comprendre le marché béninois
            </div>

            <button
              @click="gotoApiex()"
              class="
                btn btn-light
                text-primary
                hover:text-white hover:bg-primary
                w-full
                text-sm
                leading-5
                font-medium
              "
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray" ref="subscribe">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div
          class="
            bg-green
            end-box
            pt-12
            pl-12
            pb-0
            grid grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
            text-white
          "
        >
          <div class="py-6">
            <h1 class="text-4xl leading-10 font-extrabold mb-4">
              Recevez nos appels d’offres via email
            </h1>
            <p class="text-lg leading-6 font-normal mb-6">
              Les meilleures opportunités d’affaires, plus proches de vous, en
              instantané.
            </p>
            <div class="flex items-center w-full">
              <form @submit.prevent="sendRequest" class="w-full">
                <input
                  required
                  v-model="email"
                  type="email"
                  class="mb-3 md:w-full lg:w-3/5 mr-4"
                  placeholder="Email"
                />
                <button
                  class="btn btn-middle-primary mb-3"
                  :disabled="on_loading_request"
                  type="submit"
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
              </form>
            </div>
          </div>
          <div class="hidden lg:flex">
            <img class="w-full" src="@/assets/images/endof.jpeg" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Notifications from "@/components/Notifications.vue";
import { services } from "@/api";
export default {
  components: {
    Notifications,
  },
  data() {
    return {
      current_tab: "renew",
      on_loading_request: false,
      email: "",
      notif: {
        type: "",
        title: "",
        description: "",
      },
    };
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
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
    gotoApiex() {
      window.open(
        "https://apiex.bj/vous-accompagner/principaux-secteurs-agriculture-et-agroalimentaire/"
      );
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
    url("../assets/images/investissement.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.asset-session-one {
  background: url("../assets/images/rdv-cover.jpg") center !important;
  background-size: cover !important;
  height: 400px;
  width: 100%;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}
.asset-session-two {
  background: url("../assets/images/ass.jpeg") !important;
  background-size: cover !important;
  height: 400px;
  width: 100%;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}

.asset-session-three {
  background: url("../assets/actu_one.jpeg") !important;
  background-size: cover !important;
  height: 400px;
  width: 100%;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}
.end-box {
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
</style>
  
  