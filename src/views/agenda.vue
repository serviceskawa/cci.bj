          <!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="flex items-center md:px-6 lg:px-10 max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        v-if="loader == true"
      >
        <ArticleCard
          class="mb-8"
          v-for="(article, index) in 20"
          :key="index"
          :on_loading="loader"
        />
      </div>
      <div class="py-8 lg:py-16 w-full" v-else>
        <div v-if="agenda_datas.length == 0">
          <h1 class="">Aucune donnée disponible</h1>
        </div>
        <div v-else>
          <Agenda :agenda_data="agenda_datas.data" />
          <div class="flex justify-end">
            <div
              class="flex"
              v-if="agenda_datas.total > agenda_datas.data.length"
            >
              <a
                @click="load_agenda_datas(genda_datas.current_page - 1)"
                v-if="agenda_datas.current_page > 1"
                class="mr-4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="23.5901"
                    y="24"
                    width="23.41"
                    height="24"
                    rx="11.705"
                    transform="rotate(-180 23.5901 24)"
                    fill="#E9E9E9"
                  />
                  <path
                    d="M14.1801 18L15.5901 16.59L11.0101 12L15.5901 7.41L14.1801 6L8.18009 12L14.1801 18Z"
                    fill="#F7F9F9"
                  />
                </svg>
              </a>
              <a @click="load_agenda_datas(genda_datas.current_page + 1)">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.590088"
                    width="23.41"
                    height="24"
                    rx="11.705"
                    fill="#FAE8E0"
                  />
                  <path
                    d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z"
                    fill="#DD7A4B"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { services } from "@/api";
import EmptyState from "@/components/ArticleCard.vue";
import Agenda from "@/components/home/Agenda.vue";
export default {
  components: {
    Agenda,
    EmptyState
  },
  data: () => ({
    commits: null,
    services: null,
    events: null,
    setting: null,
    slides: [],
    notif: {
      type: "",
      title: "",
      description: "",
    },
    agenda_datas: [],
    loader: false,
    configs: "",
    current_page: "",
  }),
  async created() {
    this.configs = sessionStorage.getItem("configs");
    if (this.configs !== undefined && this.configs !== null) {
      this.configs = JSON.parse(this.configs);
    }
    this.current_page = 1;
    this.load_agenda_datas();
  },
  methods: {
    async load_agenda_datas(page) {
      this.loader = true;
      try {
        await services.get_agenda_datas(page).then((response) => {
          this.loader = false;
          this.agenda_datas = response.data;
          this.agenda_datas.data = this.agenda_datas.data.map((element) => {
            return {
              ...element,
              photo: this.configs.image_url + "/" + element.photo,
              banner: this.configs.image_url + "/" + element.banner,
            };
          });
        });
      } catch (error) {
        this.loader = false;
      }
    },
    update_notif(type) {
      if (type == "success") {
        this.notif.type = "success";
        this.notif.title = "Effectuée";
        this.notif.description = "Votre requête a été transmise avec succès.";
      } else {
        this.notif.type = "error";
        this.notif.title = "Erreur";
        this.notif.description =
          "Une erreur s'est produite. Veuillez réessayer.";
      }
      setTimeout(() => {
        this.notif.type = "";
      }, 6000);
    },
  },
};
</script>

<style scoped>
</style>
