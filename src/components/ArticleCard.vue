<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        :src="branch.cover == undefined ? branch.photo : branch.cover"
        alt=""
      />
    </div>
    <div
      class="flex-1 bg-white p-6 flex flex-col justify-between group hover:bg-primaryInfo"
    >
      <div class="flex-1">
        <p class="text-sm text-primary text-indigo-600">
          <span class="hover:underline">
            Publié le {{ branch.created_at }}
          </span>
        </p>
        <a @click="$router.push({ name: 'read-article', params: { slug: branch.slug } })" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900" v-html="branch.title">
          </p>
          <p class="mt-3 text-sp text-base truncate ..." v-html="branch.short_content" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

const NEWS_CAT = `https://6cc4-41-138-89-246.ngrok.io/api/news`;

export default {
  name: "ArticleCard",
  props: ["branch", ""],
};

</script>
