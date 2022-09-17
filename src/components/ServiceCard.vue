<template>
  <div class="pt-6">
    <div class="flow-root border bg-blanc rounded-lg">
      <div class="mt-6">
        <div class="px-6">
          <span
            class="inline-flex items-start justify-start text-left rounded-md bg-primary p-3 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <span class="inline-flex rounded-md ml-36">
            <img class="h-4 w-auto sm:h-4" src="@/assets/Vector.svg" alt="" />
          </span>
        </div>
        <h3 class="mt-4 text-lg px-6 font-medium tracking-tight text-gray-900">
          name
        </h3>
        <p class="mt-5 text-base px-6 text-gray-500">
          Vérification d’existence et de fiabilité des entreprises, pour la
          facilitation des affaires
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
};
</script>
