<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="barner flex items-center p-4 md:px-10 lg:px-20">
      <div>
        <h1 class="text-primary text-4xl lg:text-6xl leading-none font-extrabold tracking-tight">
          <span class="text-white">Devenir</span>
          partenaires
        </h1>
        <p class="text-white text-xl leading-7 font-normal mt-4">
          Pour nos équipes, l’efficacité et le professionnalisme sont des principes <br> primordiaux. Devenir
          partenaire de la Chambre de Commerce et de l’Industrie <br> du Bénin, c’est contribuer à bâtir un
          environnement propice au <br> développement des affaires.
        </p>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
      <h6 class="text-blue mb-4">Remplissez ce formulaire et nous vous contacterons <br> ultérieument pour un
        rendez-vous physique.</h6>
      <div class="w-full lg:w-1/2">
        <form @submit.prevent="sumbitRequest">
          <div class="mb-3">
            <label class="block">
              <span class="block text-sm font-medium leading-5 mb-2 text-label">Nom complet</span>
              <input required v-model="form.fullname" type="text"
                class="w-full border-borderInput px-3 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" />
            </label>
          </div>
          <div class="mb-3">
            <label class="block">
              <span class="block text-sm font-medium leading-5 mb-2 text-label">Email</span>
              <input required v-model="form.email" type="email"
                class="w-full border-borderInput px-3 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" />
            </label>
          </div>
          <div class="mb-3">
            <label class="block">
              <span class="block text-sm font-medium leading-5 mb-2 text-label">Téléphone</span>
              <input required v-model="form.phone" type="tel"
                class="w-full border-borderInput px-3 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" />
            </label>
          </div>
          <div class="mb-3">
            <span class="block text-sm font-medium leading-5 mb-2 text-label">Document</span>
            <label class="block uploadFile">
              <span class="flex">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2120_21508)">
                  <path
                    d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
                    fill="#111827" />
                </g>
                <defs>
                  <clipPath id="clip0_2120_21508">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span class="ml-3">{{filename}}</span>
              </span>
              <input type="file" class="inputfile form-control" name="file">
            </label>
          </div>
          <div class="mb-6">
            <label class="block">
              <span class="flex justify-between text-sm mb-2"><span class="font-medium leading-5 text-label">
                  Message</span>
                <span class="text-subtitlegray"> {{form.message.length}}/500 caractères</span>
              </span>
              <textarea v-model="form.message" rows="4" required maxlength="500"
                class="w-full border-borderInput px-3 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" />
            </label>
          </div>
          <div>
            <button type="submit" class="btn-light px-10 py-2 text-primary" :disabled="on_loading_request">
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
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
  
<script>
import { services } from '@/api'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
export default {
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
  },
  data() {
    return {
      form: {
        message: "",
        fullname: "",
        email: "",
        phone: "",
      },
      filename: ''
    }
  },
  async created() {
  }
}
</script>
  
<style lang="scss" scoped>
.barner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/images/associes.jpeg");
  height: 600px !important;
  background-position: center !important;
}

input {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05) !important;
  border-radius: 6px;
  height: 40px;
}

.uploadFile {
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05) !important;
  border-radius: 6px;
  height: 40px;
  overflow: hidden;
  padding: 10px 10px 4px 10px;
  position: relative;
  resize: none;
  border: 1px solid #d1d5db !important;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px !important;
  color: #6B7280 !important;
  font-weight: 500 !important;

  [type="file"] {
    cursor: pointer !important;
    display: block;
    filter: alpha(opacity=0);
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
    z-index: 1;
  }
}
</style>
  