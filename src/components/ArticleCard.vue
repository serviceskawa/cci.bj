<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        :src="branch.cover"
        alt=""
      />
    </div>
    <div
      class="flex-1 bg-white p-6 flex flex-col justify-between group hover:bg-primaryInfo"
    >
      <div class="flex-1">
        <p class="text-sm text-primary text-indigo-600">
          <a href="" class="hover:underline">
            Publié le {{ branch.news_publication_date }}
          </a>
        </p>
        <a href="" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ branch.title }}
          </p>
          <p class="mt-3 text-sp text-base">
            {{ branch.short_content }}
          </p>
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
