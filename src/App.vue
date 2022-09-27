<template>
  <div class="min-h-screen relative">
    <Header class="fixed top-0 w-full z-10" />
    <div class="content">
      <Alert />
      <router-view />
      <Footer />
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
  async mounted () {
    await services.get_settings().then((response) => {
      if (response.status == 200) {
        sessionStorage.setItem('configs', JSON.stringify(response.data))
      }
    })
  },  
  methods: {

  },
};
</script>
<style>
.content {
  margin-top: 72px !important;
}
</style>
