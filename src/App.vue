<template>
  <div class="min-h-screen relative">
    <div v-if="$store.state.app_ready == false">
      <div id="loader" class="">
        <div class="loading">
          <div class="effect-1 effects"></div>
          <div class="effect-2 effects"></div>
          <div class="effect-3 effects"></div>
        </div>
      </div>

    </div>
    <div v-else-if="$store.state.app_ready == true">
      <Header class="fixed top-0 w-full z-10" />
      <div class="content">
        <Alert :alert="alert" />
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import { services } from '@/api'
import store from '@/store'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Alert from "@/components/Alert.vue";
export default {
  components: {
    Header,
    Footer,
    Alert,
  },
  data() {
    return {
      alert: '',
      loader: false,
      configs: ''
    }
  },
  async created() {
    this.getNotifications(
      setInterval(() => {
        this.getNotifications()
      }, 180000)
    )
  },
  watch: {

  },
  methods: {
    async getNotifications() {
      await services.get_notifcations().then((response) => {
        if (response.status == 200) {
          if (response.status == 200) {
            this.alert = response.data
          }
        }
      })
    }
  },
};
</script>
<style>
.content {
  margin-top: 72px !important;
}
</style>
