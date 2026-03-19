<template>
  <div class="bg-primary/10 space-y-2 py-6 px-4 lg:px-6 max-w-sm mx-auto text-center min-h-[120px] rounded-md font-extrabold">
    <div class="md:text-4xl text-3xl text-green">{{ indicator.metric }}</div>
    <div class="md:text-lg text-dark">{{ indicator.label }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProRecedIndicatorWrapper',
  props: {
    indicator: { type: Object, required: true }
  }
}
</script>
