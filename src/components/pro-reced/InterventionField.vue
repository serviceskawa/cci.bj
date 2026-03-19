<template>
  <div class="pt-6 flex">
    <div class="flow-root border border-borederSimple rounded-2xl">
      <div class="-mt-6">
        <div class="px-6">
          <span class="inline-flex items-start justify-start text-left rounded-md bg-primary p-3 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
          </span>
        </div>
        <h3 class="mt-8 text-xl px-6 pb-4 font-medium tracking-tight text-primary" v-html="axe.name" />
        <p class="self-stretch font-normal text-base borderSimple px-6 pb-8 lg:min-h-[150px]" v-html="axe.text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProRecedInterventionField',
  props: {
    axe: { type: Object, required: true }
  }
}
</script>
