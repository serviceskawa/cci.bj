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
      <div class="flex text-white items-center w-full">
        <div>
          <h1
            class="
              text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Documentation
          </h1>
          <p class="text-md md:text-lg leading-7 mt-6">
            Accédez aux documents et rapports de la Chambre de Commerce et de
            l'Industrie <br />
            sur l'environnement des affaires au Bénin.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div class="">
        <div class="box mx-auto relative flex justify-center items-center">
          <input
            type="text"
            class="
              w-full
              py-2
              px-10
              text-base
              focus:border-white
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-gray-800
              text-gray-900
              placeholder-gray-500
              focus:placeholder-gray-400 focus:outline-none
            "
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
        <div class="pt-12 pb-8">
          <h2 class="text-4xl tracking-tight font-bold text-gray-900">
            Documentation
          </h2>
          <p
            class="
              text-md
              md:text-lg
              tracking-tight
              text-subtitlegray
              leading-7
              text-blue
              mt-4
            "
          >
            Accédez aux documents et rapports de la Chambre de Commerce et de
            l'Industrie sur l'environnement
            <br />des affaires au Bénin.
          </p>
        </div>
        <div class="flex justify-center py-8" v-if="loader == true">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-12 h-12 text-gray animate-spin fill-primary"
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
        </div>
        <div v-else-if="loader == false">
          
          <div class="flex justify-between mt-6 flex-wrap">
            <div class="flex items-center">
              <div class="relative inline-block text-left mr-3 mb-3">
                <div>
                  <button
                    @click="show_doc_type = !show_doc_type"
                    type="button"
                    class="
                      inline-flex
                      w-full
                      justify-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      shadow-sm
                      hover:bg-gray-50
                      py-4
                      dropdown
                    "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {{
                      docs_filters.type_doc === ""
                        ? "Types de documents"
                        : docs_filters.type_doc.name
                    }}
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
                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                        fill="#374151"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-if="show_doc_type"
                  class="
                    absolute
                    right-0
                    z-10
                    mt-2
                    w-48
                    origin-top-right
                    rounded-md
                    bg-white
                    shadow-lg
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      v-for="(type, index) in types"
                      :key="index"
                      @click="
                        (docs_filters.type_doc = type),
                          (show_doc_type = !show_doc_type)
                      "
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                      >{{ type.name }}</a
                    >
                  </div>
                </div>
              </div>
              <div class="relative inline-block text-left mb-3">
                <div>
                  <button
                    @click="show_year = !show_year"
                    type="button"
                    class="
                      inline-flex
                      w-full
                      justify-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      shadow-sm
                      hover:bg-gray-50
                      py-4
                      dropdown
                    "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {{
                      docs_filters.current_year === ""
                        ? "Année"
                        : docs_filters.current_year
                    }}
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
                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                        fill="#374151"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-if="show_year"
                  class="
                    absolute
                    right-0
                    z-10
                    mt-2
                    w-24
                    origin-top-right
                    rounded-md
                    bg-white
                    shadow-lg
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      v-for="(year, index) in years"
                      :key="'year' + index"
                      @click="
                        (docs_filters.current_year = year),
                          (show_year = !show_year)
                      "
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                      >{{ year }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="relative inline-block text-left mb-3">
                <div>
                  <button
                    @click="show_per_page = !show_per_page"
                    type="button"
                    class="
                      inline-flex
                      w-full
                      justify-center
                      rounded-md
                      border border-gray-300
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      shadow-sm
                      hover:bg-gray-50
                      py-4
                      dropdown
                    "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {{
                      docs_filters.nb_pages === ""
                        ? "Nombre d'éléments"
                        : docs_filters.nb_pages
                    }}
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
                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                        fill="#374151"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  v-if="show_per_page"
                  class="
                    absolute
                    right-0
                    z-10
                    mt-2
                    w-48
                    origin-top-right
                    rounded-md
                    bg-white
                    shadow-lg
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      v-for="(range, index) in page_ranges"
                      :key="'range' + index"
                      @click="
                        (docs_filters.nb_pages = range),
                          (show_per_page = !show_per_page)
                      "
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                      >{{ range }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center py-20" v-if="files_datas.data.length == 0">
            <p class="text-lg text-subtitlegray tracking-tight">
              Aucun fichier trouvé
            </p>
          </div>
          <div v-if="files_datas.data.length > 0">
            <div
              class="document-box pt-8"
              v-for="(el, index) in files_datas.data"
              :key="index"
            >
              <div class="text-base text-subtitlegray italic">
                Publié le {{ el.created_at }}
              </div>
              <h4 class="text-xl font-semibold mt-2 mb-3">{{ el.title }}</h4>
              <p
                class="text-lg text-subtitlegray"
                v-html="el.short_content"
              ></p>
              <div class="text-base mb-2">
                <span>{{ el.file_size }}</span>
                <span v-if="el.file_size.trim() !== ''"> - </span>
                <span>
                  {{ el.nbre_downloads }}
                  {{
                    el.nbre_downloads > 0 ? "Téléchargements" : "Téléchargement"
                  }}</span
                >
              </div>
              <div>
                <div
                  class="text-sm leading-5 font-medium text-subtitlegray mb-2"
                >
                  Fichier
                </div>
                <div
                  class="
                    attachment-box
                    w-full
                    flex
                    items-center
                    flex-wrap
                    justify-between
                  "
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
                    <span class="text-sm leading-5">{{ el.file_name }}</span>
                  </div>
                  <div class="text-sm leading-5 font-medium">
                    <a :href="el.file_url" target="_blank" class="text-primary"
                      >Télécharger</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="py-20">
              <Pagination
                :pagesNumber="files_datas.last_page"
                @previous="previousPage()"
                @get-page="getCurrentPage()"
                @next="nextPage()"
                :current_page="files_datas.current_page"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pb-20">
        <div class="bg-grayCard grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <h3 class="text-4xl leading-10 font-extrabold text-primary">
              Retrouvez toute <br />
              l'information <br />
              économique
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
              Formulez vos demandes par messagerie électronique pour recevoir
              les chiffres clés, les dossiers économiques, les rapports et le
              baromètre de l'opinion des entreprises au Bénin élaborés sur la
              base des données issues de nos collectes.
            </p>

            <a href="mailto:info@ccib.bj?subject=Information%20économique">
              <button
                type="button"
                class="
                  mt-4
                  btn btn-light
                  bg-white
                  shadow-md
                  text-primary
                  w-full
                "
              >
                Formuler une demande
              </button>
            </a>
          </div>
          <div>
            <img
              src="@/assets/images/jpays.jpeg"
              class="w-full h-80 object-cover"
            />
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
import Pagination from "@/components/Pagination.vue";
import { services } from "@/api";
import moment from "moment";
export default {
  components: {
    Notifications,
    Pagination,
  },
  data: () => ({
    configs: "",
    loader: false,
    files_datas: {},
    current_page: 1,
    email: "",
    phone: "",
    notif: {
      type: "",
      title: "",
      description: "",
    },
    docs_filters: {
      type_doc: "",
      current_year: "",
      nb_pages: "",
    },
    on_loading_request: false,
    types: [],
    years: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
    page_ranges: [20, 50, 100],
    on_loading_request: false,
    show_per_page: false,
    show_doc_type: false,
    show_year: false,
  }),
  async created() {
    moment().locale("fr");
    this.configs = sessionStorage.getItem("configs");
    if (this.configs !== undefined && this.configs !== null) {
      this.configs = JSON.parse(this.configs);
    }
    this.load_files(1);
  },
  beforeDestroy() {
    this.current_page = 1;
  },
  methods: {
    formatDate(date, format) {
      return moment(date).format(format);
    },
    previousPage() {
      this.load_files(this.current_page - 1);
    },
    nextPage() {
      this.load_files(this.current_page + 1);
    },
    getCurrentPage() {
      this.load_files(this.current_page);
    },
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
    async load_files(current_page) {
      this.getDocumentsCategories();
      this.loader = true;
      await services.get_document_rapports(current_page).then((response) => {
        this.loader = false;
        this.files_datas = response.data;
        this.files_datas.data = this.files_datas.data.map((element) => {
          return {
            ...element,
            file_name: element.file_name.split("/")[1],
            file_url: this.configs.image_url + "/" + element.file_name,
          };
        });
      });
    },
    async apply_filters() {
      this.loader = true;
      const data = {
        categoryId: this.docs_filters.type_doc.id
          ? this.docs_filters.type_doc.id
          : "",
        year: this.docs_filters.current_year,
        nbr_pagination: this.docs_filters.nb_pages,
      };
      await services.apply_docs_filters(data).then((response) => {
        this.loader = false;
        this.files_datas = response.data;
        this.files_datas.data = this.files_datas.data.map((element) => {
          return {
            ...element,
            file_name: element.file_name.split("/")[1],
            file_url: this.configs.image_url + "/" + element.file_name,
          };
        });
      });
    },
    async getDocumentsCategories() {
      await services.get_documents_categories().then((response) => {
        this.types = response.data.data;
      });
    },
  },
  watch: {
    files_datas() {
      this.current_page = this.files_datas.current_page;
    },
    docs_filters: {
      handler(val) {
        this.apply_filters();
      },
      deep: true,
    },
  },
};
</script>
    
<style lang="scss" scoped>
.barner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/images/docs.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
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
</style>
