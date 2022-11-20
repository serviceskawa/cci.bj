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
    <div
      v-else-if="$store.state.app_ready == true"
      class="relative min-h-screen"
    >
      <Header class="fixed left-0 top-0 header w-full" />
      <div class="content">
        <Alert :alert="alert" />
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import { services } from "@/api";
import store from "@/store";
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
      alert: "",
      loader: false,
      configs: "",
    };
  },
  async created() {
    this.getNotifications(
      setInterval(() => {
        this.getNotifications();
      }, 180000)
    );
  },
  watch: {},
  methods: {
    async getNotifications() {
      await services.get_notifcations().then((response) => {
        if (response.status == 200) {
          if (response.status == 200) {
            this.alert = response.data;
          }
        }
      });
    },
  },
};
</script>
<style>
.content {
  margin-top: 99px !important;
  min-height: calc(100vh - 409px) !important;
  z-index: 999 !important;
}
.header {
  z-index: 2 !important;
}
</style>
