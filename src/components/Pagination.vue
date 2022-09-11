<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="flex items-center justify-between px-4 sm:px-0 text-subtitlegray">
    <div class="-mt-px flex w-0 flex-1">
      <a
        href="#"
        class="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 hover:text-primary"
      >
        <ArrowLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        Previous
      </a>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <a
        href="#"
        class="inline-flex items-center border-t-2 border-primary px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >1</a
      >
      <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
      <a
        href="#"
        class="inline-flex items-center px-4 pt-4 text-sm font-medium text-indigo-600"
        aria-current="page"
        >2</a
      >
      <a
        href="#"
        class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >3</a
      >
      <span class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500"
        >...</span
      >
      <a
        href="#"
        class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >8</a
      >
      <a
        href="#"
        class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >9</a
      >
      <a
        href="#"
        class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >10</a
      >
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end">
      <a
        href="#"
        class="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 hover:text-primary"
      >
        Next
        <ArrowRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
</script>
