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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NewsLettersBox from "@/components/NewsLettersBox.vue";
import Alert from "@/components/Alert.vue";
export default {
  components: {
    Header,
    Footer,
    NewsLettersBox,
    Alert,
  },
  methods: {},
};
</script>
<style>
.content {
  margin-top: 72px !important;
}
</style>
