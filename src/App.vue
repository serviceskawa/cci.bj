<template>
  <div class="min-h-screen relative">
    <Header class="fixed top-0 w-full z-10" />
    <Alert class="alert-box" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NewsLettersBox from "@/components/NewsLettersBox.vue";
import Alert from "@/components/Alert.vue";
export default {
  components: {
    Header,
    Footer,
    NewsLettersBox,
    Alert
},
  methods: {
  }
};
</script>
<style>
  .alert-box {
    margin-top: 72px !important;
  }
</style>