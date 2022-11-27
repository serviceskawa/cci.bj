<template>
  <div class="bg-gray py-10">
    <div class="relative max-w-7xl mx-auto">
      <div aria-hidden="true" class="hidden sm:block">
        <div class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
      </div>
      <div class="px-10 md:px-20">
        <div
          class="
            relative
            px-6
            py-10
            bg-indigo-600
            overflow-hidden
            sm:px-12 sm:py-20
          "
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          ></div>
          <div class="relative">
            <div class="sm:text-center">
              <h2
                class="text-3xl font-bold text-blue tracking-tight sm:text-4xl"
              >
                Newsletter
              </h2>
              <p class="mt-6 mx-auto max-w-lg text-lg text-indigo-200">
                Abonnez-vous à notre bulletin d’information pour être informé(e)
                de nos dernières actualités.
              </p>
            </div>
            <form
              @submit.prevent="sendRequest"
              class="
                sm:justfy-start
                md:justify-center
                mt-8
                block
                md:flex
                flex-wrap
              "
            >
              <div class="mt-4 mr-0 md:mr-4">
                <label for="cta-email" class="sr-only">Email address</label>
                <div class="lg:w-full lg:min-w-[420px]">
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
              <div class="mt-4">
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
      </div>
    </div>
  </div>
</template>
<script>
import { services } from "@/api";
export default {
  props: {},
  data() {
    return {
      on_loading_request: false,
      email: "",
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
            this.$emit("sucess");
            this.$store.state.current_notif_message = response.message;
          } else {
            this.$emit("error");
          }
        });
      } catch (error) {
        this.on_loading_request = false;
        this.$emit("error");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  height: 48px !important;
}
</style>