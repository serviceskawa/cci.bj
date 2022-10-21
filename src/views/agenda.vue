          <!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="flex items-center p-4 md:px-10 lg:px-20">
      <div class="flex w-full justify-center py-20" v-if="loader == true">
        <div role="status" class="py-10">
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
      <div class="py-8 lg:py-16 md:px-10 lg:px-20 w-full" v-else>
        <div v-if="agenda_datas.length == 0">
          <h1 class="">Aucune donnée disponible</h1>
        </div>
        <Agenda v-else :agenda_data="agenda_datas" />
      </div>
    </div>
  </main>
</template>

<script>
import { services } from "@/api"
import Agenda from "@/components/home/Agenda.vue";
export default {
  components: {
    Agenda,
  },
  data: () => ({
    commits: null,
    services: null,
    events: null,
    setting: null,
    slides: [
    ],
    notif: {
      type: '',
      title: '',
      description: ''
    },
    agenda_datas: [],
    loader: false,
    configs: '',
    current_page: ''
  }),
  async created() {
    this.configs = sessionStorage.getItem('configs')
    if (this.configs !== undefined && this.configs !== null) {
      this.configs = JSON.parse(this.configs)
    }
    this.current_page = 1
    this.load_agenda_datas()
  },
  methods: {
    async load_agenda_datas() {
      this.loader = true
      try {
        await services.get_agenda_datas().then((response) => {
          this.loader = false
          this.agenda_datas = response.data
          this.agenda_datas = this.agenda_datas.data.map((element) => {
            return {
              ...element,
              photo: this.configs.image_url + '/' + element.photo,
              banner: this.configs.image_url + '/' + element.banner
            }
          })
        })
      } catch (error) {
        this.loader = false
      }
    },
    update_notif(type) {
      if (type == 'success') {
        this.notif.type = 'success'
        this.notif.title = "Effectuée"
        this.notif.description = "Votre requête a été transmise avec succès."
      } else {
        this.notif.type = 'error'
        this.notif.title = "Erreur"
        this.notif.description = "Une erreur s'est produite. Veuillez réessayer."
      }
      setTimeout(() => {
        this.notif.type = ''
      }, 6000)
    }
  },
};
</script>

<style scoped>

</style>
