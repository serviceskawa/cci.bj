<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
    <div class="aspect-square overflow-hidden bg-gray-100">
      <img v-if="member.photo_url" :src="member.photo_url" :alt="member.full_name" class="w-full h-full object-cover" />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
        <svg class="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      </div>
    </div>
    <div class="p-6 flex flex-col flex-1">
      <h3 class="text-lg font-bold text-gray-900">{{ member.full_name }}</h3>
      <p class="text-primary font-medium text-sm mt-1">{{ member.role }}</p>
      <p v-if="member.bio" class="mt-3 text-gray-600 text-sm flex-1">{{ member.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProRecedTeamMemberCard',
  props: {
    member: { type: Object, required: true }
  }
}
</script>
