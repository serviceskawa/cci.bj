<template>
  <div class="space-y-6">
    <div v-for="contact in contacts" :key="contact.id" class="flex flex-col gap-2">
      <div class="font-bold text-gray-900">{{ contact.label }}</div>
      <div v-if="contact.role" class="text-sm text-gray-500">{{ contact.role }}</div>
      <div class="space-y-1 text-sm text-gray-600">
        <div v-if="contact.phone_primary" class="flex items-center gap-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <a :href="'tel:' + contact.phone_primary" class="hover:text-primary">{{ contact.phone_primary }}</a>
        </div>
        <div v-if="contact.phone_secondary" class="flex items-center gap-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <a :href="'tel:' + contact.phone_secondary" class="hover:text-primary">{{ contact.phone_secondary }}</a>
        </div>
        <div v-if="contact.email" class="flex items-center gap-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <a :href="'mailto:' + contact.email" class="hover:text-primary">{{ contact.email }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProRecedContactList',
  props: {
    contacts: { type: Array, default: () => [] }
  }
}
</script>
