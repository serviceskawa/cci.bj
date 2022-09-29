<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="p-3 sm:p-16">
    <div class="px-3 md:px-16">
      <div class="box mx-auto relative flex justify-center items-center">
        <input
          type="text"
          class="w-full py-2 px-10 text-base focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none"
          placeholder="Rechercher un mot clé"
        />
        <svg
          class="absolute left-4 top-5"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
            fill="#9CA3AF"
          />
        </svg>
      </div>
      <div class="tabs-block flex justify-center pt-12">
        <nav class="space-x-8 tabs inline-flex m-auto flex-col sm:flex-row">
          <button
            @click="select_tab('appels')"
            class="tab text-gray py-4 px-6 block hover:text-primary focus:outline-none"
            :class="current_tab == 'appels' ? 'active' : ''"
          >
            Appels à projets en cours</button
          ><button
            @click="select_tab('resultats')"
            :class="current_tab == 'resultats' ? 'active' : ''"
            class="tab text-gray-900 py-4 px-6 block hover:text-primary focus:outline-none"
          >
            Résultats des appels d'offres
          </button>
        </nav>
      </div>
    </div>

    <div id="panels">
      <div class="tab-content p-3 md:p-16" v-if="current_tab == 'appels'">
        <div class="mb-8" v-for="(line, index) in 8" :key="index">
          <div class="flex items-center justify-between flex-wrap">
            <div class="py-3 mb-4">
              <p class="text-sm leading-5 text-subtitlegray tracking-tight mb-2">
                Publié le 23 Mars 2022 - Prend fin le 05 Avril 2022
              </p>
              <h5 class="text-xl leading-7 font-semibold">
                Fourniture de matétriels informatiques pour la ccib
              </h5>
              <p class="text-base leading-6 text-subtitlegray tracking-tight my-2">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae
                illo. Non aliquid <br />
                explicabo necessitatibus unde. Sed exercitationem placeat consectetur
                nulla
                <br />
                deserunt vel. Iusto corrupti dicta.
              </p>
              <a href="#" class="text-primary flex items-center">
                En savoir plus
                <ArrowRightIcon class="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <img src="@/assets/actu_two.jpeg" class="rounded-md appels mb-4" alt="" />
          </div>
          <hr class="divider">
        </div>
      </div>
      <div class="tab-content p-3 md:p-16" v-if="current_tab == 'resultats'">
        <div class="document-box pt-16" v-for="(document, index) in 6" :key="index">
          <div class="text-base text-primary">Publié le 17.06.2022</div>
          <h4 class="text-xl font-semibold mt-2 mb-3">
            Décret N° 2022-283 du 11 mai 2022
          </h4>
          <p class="text-lg text-subtitlegray">
            Fixant les modalités de répartition des sièges des représentants des
            travailleurs et des employeurs au sein du Conseil d'administration de la
            Caisse nationale de Sécurité Sociale
          </p>
          <div class="text-base mb-2">
            <span>760 Ko</span>
            <span> - </span>
            <span> 114 Téléchargements</span>
          </div>
          <div>
            <div class="text-sm leading-5 font-medium text-subtitlegray mb-2">
              Attachments
            </div>
            <div
              class="attachment-box w-full flex items-center flex-wrap justify-between"
            >
              <div class="mb-0 flex items-center">
                <span class="mr-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4C6.34315 4 5 5.34315 5 7V11C5 13.7614 7.23858 16 10 16C12.7614 16 15 13.7614 15 11V7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V11C17 14.866 13.866 18 10 18C6.13401 18 3 14.866 3 11V7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7V11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11V7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 5.34315 9.65685 4 8 4Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </span>
                <span class="text-sm leading-5">Décret N° 2022-283 du 11 mai 2022</span>
              </div>
              <div class="text-sm leading-5 font-medium">
                <a href="#" class="text-primary">Télécharger</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Pagination,
    ArrowRightIcon,
  },
  data() {
    return {
      current_tab: "appels",
    };
  },
  methods: {
    select_tab(tab_id) {
      this.current_tab = tab_id;
    },
  },
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

.attachment-box {
  border: 1px solid #e5e7eb !important;
  padding: 14px 16px !important;
  border-radius: 6px !important;
}
.appels {
  width: 340px;
  height: 230px;
}
.tab-content.active {
  display: block;
}
nav.tabs {
  box-shadow: inset 0px -1px 0px #9ca3af !important;
}
.tab {
  font-size: 24px !important;
  line-height: 125%;
  letter-spacing: -0.01em;
  font-weight: 800 !important;
  color: #9ca3af !important;
}
.tab.active {
  color: #dd7a4b !important;
  border-bottom: 4px solid;
}
.divider {
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
}
</style>
