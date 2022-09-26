<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="p-3 sm:p-16">
    <div class="px-3 md:px-16">
      <div class="box mx-auto relative flex justify-center items-center">
        <input type="text"
          class="w-full py-2 px-10 text-base focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none"
          placeholder="Rechercher un mot clé" />
        <svg class="absolute left-4 top-5" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
            fill="#9CA3AF" />
        </svg>
      </div>
      <div class="pt-12 pb-8 text-center">
        <h2 class="text-3xl tracking-tight font-bold text-primary sm:text-4xl">
          Les questions fréquentes
        </h2>
        <div class="flex justify-center py-12" v-if="loader == true">
          <div role="status">
            <svg aria-hidden="true" class="w-12 h-12 text-gray animate-spin fill-primary" viewBox="0 0 100 101"
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
        </div>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200" v-else>
          <div v-if="faqs.length == 0">
            <h1 class="">Aucune FAQ disponible</h1>
          </div>
          <Disclosure as="div" v-for="faq in faqs" :key="faq.id" class="pt-6" v-slot="{ open }" v-else>
            <dt class="text-lg">
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                <span class="font-medium text-gray-900">{{
                faq.title
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <ChevronDownIcon :class="[
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform',
                  ]" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                <span v-html="faq.content"></span>
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
        <hr class="mt-20 separator" />
        <div class="py-10 flex justify-between items-center hidden">
          <div class="md-only text-sm text-sp">
            Résultats 1 à 10 sur 24
          </div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a href="#"
              class="relative inline-flex items-center rounded-l-md border border-sp bg-white px-2 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Previous</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#" aria-current="page"
              class="relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium active focus:z-20">1</a>
            <a href="#"
              class="relative inline-flex items-center border border-sp bg-white px-4 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20">2</a>
            <a href="#"
              class="relative hidden items-center border border-sp bg-white px-4 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
            <span
              class="relative inline-flex items-center border border-sp bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
            <a href="#"
              class="relative hidden items-center border border-sp bg-white px-4 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
            <a href="#"
              class="relative inline-flex items-center border border-sp bg-white px-4 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20">9</a>
            <a href="#"
              class="relative inline-flex items-center border border-sp bg-white px-4 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20">10</a>
            <a href="#"
              class="relative inline-flex items-center rounded-r-md border border-sp bg-white px-2 py-2 text-sm font-medium text-sp hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Next</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div class="py-12 grid gap-5 grid-cols-1 lg:grid-cols-2 lg:col-span-2 w-full">
          <div class="text-left">
            <h4 class="text-3xl leading-9 font-extrabold tracking-tight mb-4">Vous avez une question précise ?</h4>
            <p class="text-md tracking-tight leading-7 text-subtitlegray">
              Posez-la et nous vous répondons par mail ou via whatsapp.
              Ou, rendez-vous dans nos locaux à Ganhi. Notre équipe est prête à vous recevoir du lundi au vendredi de
              08h à 12h pour répondre à vos questions et vous satisfaire.
            </p>
            <p class="mt-4 text-md tracking-tight leading-7 text-subtitlegray">
              <span class="">
                Cotonou, Ganhi
              </span><br />
              01 BP 31 Recette Principale, <br />
              Avenue Général de GAULLE
            </p>
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


                <span class="ml-3">ccibj@example.com</span>
              </span>
            </p>
          </div>
          <div class="text-left">
            <form>
              <input type="text" placeholder="Votre nom complet" required
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <input type="text" placeholder="Votre adresse email, pour recevoir notre réponse" required
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <input type="text" placeholder="Votre numéro de téléphone" required
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <textarea rows="5" type="text" placeholder="Posez ici votre question" required
                class="w-full mb-6 border-borderInput focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900  focus:outline-none" />
              <button class="btn-middle-primary bg-primary px-10 py-2 text-white">Envoyer</button>
              <TransitionRoot as="template" :show="open">
                <Dialog as="div" class="relative z-10" @close="open = false">
                  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </TransitionChild>

                  <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
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
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import store from "@/store";
import { ref, onMounted, computed } from 'vue'
import { services } from "@/api"
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
export default {
  components: {
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
    TransitionRoot
  },
  data () {
    return {
      loader: false,
      faqs: [],
      open: false
    }
  },
  async created () {
    this.loader = true
    await services.get_faq().then((res) => {
    if (res.status == 200 && res.data) {
      this.faqs = res.data
    }
    this.loader = false
  })
  } 
}
</script>
<style lang="scss" scoped>
.box {
  max-width: 860px !important;
  min-width: 280px;

  input {
    height: 62px;
  }
}

.separator {
  border: 1px solid #e5e7eb !important;
}

::v-deep .divide-y> :not([hidden])~ :not([hidden]) {
  border-top: 1px solid #E5E7EB !important;
  border-bottom: none !important;
}

.active {
  border: 1px solid #DD7A4B;
  background: #FAEBE0 !important;
  color: #DD7A4B !important;
}

::placeholder {
  font-weight: 400;
  font-size: 16px !important;
  color: #6B7280 !important;
}
</style>
