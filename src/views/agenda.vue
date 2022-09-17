<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="flex items-center p-4 md:px-10 lg:px-20">
      <div class="py-8 lg:py-16 md:px-10 lg:px-20 w-full">
        <Agenda :agenda_data="8"/>
      </div>
    </div>
  </main>
</template>

<script>
import Agenda from "@/components/home/Agenda.vue";
export default {
  components: {
    Agenda,
  },
};
</script>

<style scoped></style>
