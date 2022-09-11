<template>
  <div class="bg-white pt-16 sm:pt-16">
    <div class="relative bg-gray">
      <div aria-hidden="true" class="hidden sm:block">
        <div class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
      </div>
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative px-6 py-10 bg-indigo-600 overflow-hidden sm:px-12 sm:py-20">
          <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"></div>
          <div class="relative">
            <div class="sm:text-center">
              <h2 class="text-3xl font-bold text-blue tracking-tight sm:text-4xl">
                Newsletter
              </h2>
              <p class="mt-6 mx-auto max-w-lg text-lg text-indigo-200">
                Abonnez-vous à notre bulletin d’information pour être informé(e) de nos
                dernières actualités.
              </p>
            </div>
            <form action="#" class="justify-center mt-12 sm:flex">
              <div class="">
                <label for="cta-email" class="sr-only">Email address</label>
                <div class="w-[420px]">
                  <input
                    id="cta-email"
                    type="email"
                    class="block w-full border border-borderInput rounded-md px-5 py-3 text-base text-dark placeholder-dark focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Entrez votre adresse mail"
                  />
                </div>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  class="block w-full rounded-md px-5 py-3 bg-white text-base font-medium text-primary hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                >
                  Restez informé
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
