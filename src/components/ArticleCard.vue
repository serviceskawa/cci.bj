<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden" v-if="on_loading == true">
    <div class="card-img skeleton">
    </div>
    <div class="card-body">
      <div class="card-publication w-1/2 skeleton mb-3">
      </div>
      <h2 class="card-title skeleton mb-3">
      </h2>
      <p class="card-intro skeleton">
      </p>
    </div>
  </div>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer" @click="$router.push({ name: 'read-article', params: { id: branch.id, slug: branch.slug } })" v-else-if="on_loading == false">
    <div class="flex-shrink-0 cursor-pointer" @click="$router.push({ name: 'read-article', params: { id: branch.id, slug: branch.slug } })">
      <img class="h-48 w-full object-cover" :src="branch.cover == undefined ? branch.photo : branch.cover" alt="" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between group hover:bg-primaryInfo">
      <div class="flex-1">
        <p class="text-sm text-primary text-indigo-600">
          <span class="hover:underline">
            Publié le {{ branch.created_at }}
          </span>
        </p>
        <a @click="$router.push({ name: 'read-article', params: { id: branch.id, slug: branch.slug } })" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900" v-html="branch.title">
          </p>
          <p class="mt-3 text-sp text-base truncate ..." v-html="branch.short_content" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    branch: [String, Number, Object, Array],
    on_loading: {
      type: Boolean,
      default: false
    }
  }
};

</script>
<style lang="scss">
.card-img {
   padding-bottom: 50%;
   position: relative;

   img {
     position: absolute;
     width: 100%;
   }
 }

 .card-body {
   padding: 1.5rem;
 }

 .card-publication {
   &.skeleton {
     min-height: 28px;
     border-radius: 4px;
   }
 }

 .card-title {
   &.skeleton {
     min-height: 28px;
     border-radius: 4px;
   }
 }

 .card-intro {
   line-height: 1.5;

   &.skeleton {
     min-height: 72px;
     border-radius: 4px;
   }
 }

 .skeleton {
   background-color: #E5E7EB;
   background-image:
     linear-gradient(90deg,
       rgba(#fff, 0),
       rgba(#fff, 0.5),
       rgba(#fff, 0));
   background-size: 70px 100%; // width of the shine
   background-repeat: no-repeat; // No need to repeat the shine effect
   background-position: left -70px top 0; // Place shine on the left side, with offset on the left based on the width of the shine - see background-size
   animation: shine 1s ease infinite; // increase animation time to see effect in 'slow-mo'
 }

 @keyframes shine {
   to {
     // Move shine from left to right, with offset on the right based on the width of the shine - see background-size
     background-position: right -70px top 0;
   }
 }
</style>