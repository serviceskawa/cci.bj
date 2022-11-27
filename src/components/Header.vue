<template>
  <header>
    <Popover class="relative bg-white shadow">
      <div class="px-6 lg:px-10 max-w-7xl mx-auto flex justify-between items-center mx-auto py-2 xl:justify-start xl:space-x-4">
        <div class="flex justify-start">
          <router-link :to="{ name: 'index' }" class="mr-8">
            <span class="sr-only">CCI Bénin</span>
            <img class="w-40" src="@/assets/logo.png" alt="CCI Bénin" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 xl:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-subtitlegray tracking-tight hover:bg-gray-100 focus:outline-none  ">
            <span class="sr-only">Menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden xl:flex space-x-10">
          <router-link :to="{name: 'cci'}"
            class="text-base font-medium tracking-tight hover:text-primary active:text-primary cursor-pointer">
            Ma CCI
          </router-link>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[
              open ? 'text-gray-900' : 'text-subtitlegray tracking-tight',
              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-primary active:text-primary focus:outline-none',
            ]">
              <span>Vous êtes</span>
              <ChevronDownIcon :class="[
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-subtitlegray tracking-tight',
              ]" aria-hidden="true" />
            </PopoverButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 mt-6 w-screen max-w-md transform lg:left-full lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-primary ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <router-link :to="{name: 'createur-entreprise'}"
                      class="-m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary cursor-pointer">
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                          <path
                            d="M21 31V25C21 23.8954 20.1046 23 19 23H17C15.8954 23 15 23.8954 15 25V31C15 32.1046 15.8954 33 17 33H19C20.1046 33 21 32.1046 21 31ZM21 31V21C21 19.8954 21.8954 19 23 19H25C26.1046 19 27 19.8954 27 21V31M21 31C21 32.1046 21.8954 33 23 33H25C26.1046 33 27 32.1046 27 31M27 31V17C27 15.8954 27.8954 15 29 15H31C32.1046 15 33 15.8954 33 17V31C33 32.1046 32.1046 33 31 33H29C27.8954 33 27 32.1046 27 31Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Créateur d’entreprise
                        </p>
                        <!-- <p class="mt-1 text-sm text-subtitlegray tracking-tight">
                          Get a better understanding of where your traffic is coming from.
                        </p> -->
                      </div>
                    </router-link>
                    <router-link :to="{name: 'chef-entreprise'}"
                      class="-m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary cursor-pointer">
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                          <path
                            d="M26.9998 26.9998L24.9998 31.9998L20.9998 20.9998L31.9998 24.9998L26.9998 26.9998ZM26.9998 26.9998L31.9998 31.9998M19.1881 14.2383L19.9645 17.1361M17.1361 19.9645L14.2383 19.188M25.9495 16.05L23.8282 18.1714M18.1715 23.8281L16.0501 25.9494"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Chef d'entreprise
                        </p>
                        <!-- <p class="mt-1 text-sm text-subtitlegray tracking-tight">
                          Speak directly to your customers in a more meaningful way.
                        </p> -->
                      </div>
                    </router-link>
                    <router-link :to="{name: 'investissement'}"
                      class="-m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary cursor-pointer">
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                          <path
                            d="M26.9998 26.9998L24.9998 31.9998L20.9998 20.9998L31.9998 24.9998L26.9998 26.9998ZM26.9998 26.9998L31.9998 31.9998M19.1881 14.2383L19.9645 17.1361M17.1361 19.9645L14.2383 19.188M25.9495 16.05L23.8282 18.1714M18.1715 23.8281L16.0501 25.9494"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Investisseur
                        </p>
                      </div>
                    </router-link>
                    <router-link :to="{ name: 'institutionnelle' } "
                      class="-m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary cursor-pointer">
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                          <path
                            d="M16 18C16 16.8954 16.8954 16 18 16H20C21.1046 16 22 16.8954 22 18V20C22 21.1046 21.1046 22 20 22H18C16.8954 22 16 21.1046 16 20V18Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M26 18C26 16.8954 26.8954 16 28 16H30C31.1046 16 32 16.8954 32 18V20C32 21.1046 31.1046 22 30 22H28C26.8954 22 26 21.1046 26 20V18Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M16 28C16 26.8954 16.8954 26 18 26H20C21.1046 26 22 26.8954 22 28V30C22 31.1046 21.1046 32 20 32H18C16.8954 32 16 31.1046 16 30V28Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M26 28C26 26.8954 26.8954 26 28 26H30C31.1046 26 32 26.8954 32 28V30C32 31.1046 31.1046 32 30 32H28C26.8954 32 26 31.1046 26 30V28Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Institutionnel
                        </p>
                      </div>
                    </router-link>
                    <!-- <router-link :to=" {name: 'industriel-commercant'}"
                      class="-m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary cursor-pointer">
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="6" fill="#DD7A4B" />
                          <path
                            d="M16 16V21H16.5815M31.9381 23C31.446 19.0537 28.0796 16 24 16C20.6426 16 17.7683 18.0682 16.5815 21M16.5815 21H21M32 32V27H31.4185M31.4185 27C30.2317 29.9318 27.3574 32 24 32C19.9204 32 16.554 28.9463 16.0619 25M31.4185 27H27"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Commerçant ou industriel
                        </p>
                      </div>
                    </router-link> -->
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <!-- Services -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[
              open ? 'text-gray-900' : '',
              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-primary active:text-primary focus:outline-none',
            ]">
              <span>Nos Services</span>
              <ChevronDownIcon :class="[
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-subtitlegray tracking-tight',
              ]" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-primary ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a @click="$router.push({name: 'services-specs'})"
                      class="cursor-pointer -m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19ZM9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19Z"
                          stroke="#DD7A4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Services spécifiques</p>

                      </div>
                    </a>
                    <a @click="$router.push({name: 'services-infos'})"
                      class="cursor-pointer -m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.9998 14.9998L12.9998 19.9998L8.99983 8.99976L19.9998 12.9998L14.9998 14.9998ZM14.9998 14.9998L19.9998 19.9998M7.18806 2.23828L7.96452 5.13606M5.13606 7.96448L2.23828 7.18802M13.9495 4.05005L11.8282 6.17137M6.17146 11.8281L4.05014 13.9494"
                          stroke="#DD7A4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Informations et orientation</p>
                      </div>
                    </a>
                    <a @click="$router.push({name: 'services-formations'})"
                      class="cursor-pointer -m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 11.999L11 13.999L15 9.99903M20.6179 5.98336C20.4132 5.99374 20.2072 5.999 20 5.999C16.9265 5.999 14.123 4.84356 11.9999 2.94336C9.87691 4.84348 7.07339 5.99887 4 5.99887C3.79277 5.99887 3.58678 5.99362 3.38213 5.98324C3.1327 6.94685 3 7.95745 3 8.99903C3 14.5906 6.82432 19.2889 12 20.621C17.1757 19.2889 21 14.5906 21 8.99903C21 7.95749 20.8673 6.94694 20.6179 5.98336Z"
                          stroke="#DD7A4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Formation, assistance et appui-conseil</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <router-link :to="{ name: 'formations' }"
            class="text-base font-medium hover:text-primary active:text-primary cursor-pointer">
            Formations
          </router-link>

          <router-link :to="{ name: 'blog-articles' }"
            class="text-base font-medium hover:text-primary active:text-primary cursor-pointer">
            Blog
          </router-link>

          <!-- Travailler avec nous -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[
              open ? 'text-gray-900' : '',
              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-primary active:text-primary focus:outline-none',
            ]">
              <span>Travailler avec nous</span>
              <ChevronDownIcon :class="[
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-subtitlegray tracking-tight',
              ]" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-primary ring-opacity-5">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                    <!-- Appel d'offre-->
                    <a @click="$router.push({ name: 'appels-offres' })"
                      class="cursor-pointer -m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19ZM9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19Z"
                          stroke="#DD7A4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Appels d’offres</p>
                      </div>
                    </a>

                    <!-- Appel a projets-->
                    <router-link :to="{ name: 'appels-offres' }"
                      class="cursor-pointer -m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.9998 14.9998L12.9998 19.9998L8.99983 8.99976L19.9998 12.9998L14.9998 14.9998ZM14.9998 14.9998L19.9998 19.9998M7.18806 2.23828L7.96452 5.13606M5.13606 7.96448L2.23828 7.18802M13.9495 4.05005L11.8282 6.17137M6.17146 11.8281L4.05014 13.9494"
                          stroke="#DD7A4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Appels à projets</p>
                      </div>
                    </router-link>
                    <router-link :to="{name: 'devenir-partenaire'}"
                      class="cursor-pointer -m-3 flex items-center rounded-lg p-3 hover:text-primary active:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 11.999L11 13.999L15 9.99903M20.6179 5.98336C20.4132 5.99374 20.2072 5.999 20 5.999C16.9265 5.999 14.123 4.84356 11.9999 2.94336C9.87691 4.84348 7.07339 5.99887 4 5.99887C3.79277 5.99887 3.58678 5.99362 3.38213 5.98324C3.1327 6.94685 3 7.95745 3 8.99903C3 14.5906 6.82432 19.2889 12 20.621C17.1757 19.2889 21 14.5906 21 8.99903C21 7.95749 20.8673 6.94694 20.6179 5.98336Z"
                          stroke="#DD7A4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Devenir partenaire</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="h-full hidden xl:flex items-center justify-end xl:flex-1 xl:w-0">
          <router-link :to="{ name: 'contact' }"
            class="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-dark">
            Nous contacter
          </router-link>
        </div>
      </div>
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right xl:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-primary ring-opacity-5 bg-white">
            <div class="px-8 py-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="w-28 h-14" src="@/assets/logo.png" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-subtitlegray tracking-tight hover:bg-gray-100">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6 grid grid-cols-2 gap-8">
                <nav class="">
                  <router-link v-for="item in solutions_left" :key="item.name" :to="{name: item.route_name}"
                    class="-m-3 p-3 flex items-center rounded-lg hover:text-primary active:text-primary">
                    <div class="text-base font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </router-link>
                </nav>
                <nav class="">
                  <router-link v-for="item in solutions_right" :key="item.name" :to="{name: item.route_name}"
                    class="-m-3 p-3 flex items-center rounded-lg hover:text-primary active:text-primary">
                    <div class="text-base font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </router-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="">
                <a @click="$router.push({ name: 'contact' })"
                  class="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-dark">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
  SearchIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
export default {
  components: {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
    SearchIcon,
    Popover, PopoverButton, PopoverGroup, PopoverPanel,
    ChevronDownIcon
  },
  data() {
    return {
      solutions_left: [
        {
          name: "Ma CCI",
          route_name: "cci",
          icon: InboxIcon,
        },
        {
          name: "Services spécifiques",
          route_name: "services-specs",
          icon: QuestionMarkCircleIcon,
        },
        {
          name: "Informations et orientation",
          route_name: "services-infos",
          icon: QuestionMarkCircleIcon,
        },
        {
          name: "Formation, assistance et appui-conseil",
          route_name: "services-infos",
          icon: QuestionMarkCircleIcon,
        },
        {
          name: "Formations",
          route_name: "formations",
          icon: QuestionMarkCircleIcon,
        },
        {
          name: "Blog",
          route_name: "blog-articles",
          icon: QuestionMarkCircleIcon,
        }
      ],
      solutions_right: [
        {
          name: "Créateur d'entreprise",
          route_name: "createur-entreprise",
          icon: AnnotationIcon,
        },
        {
          name: "Chef d'entreprise",
          route_name: "chef-entreprise",
          icon: ChatAlt2Icon,
        },
        // {
        //   name: "Commerçant ou industriel",
        //   route_name: "industriel-commercant",
        //   icon: QuestionMarkCircleIcon,
        // },
        {
          name: "Investisseur",
          route_name: "investissement",
          icon: QuestionMarkCircleIcon,
        },
        {
          name: "Institutionnelle",
          route_name: "institutionnelle",
          icon: QuestionMarkCircleIcon,
        },
        {
          name: "Appels à projets ",
          route_name: "appels-offres",
          icon: QuestionMarkCircleIcon,
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep button:active,
button:focus {
  outline: none !important;
  border: none !important;
}
::v-deep .router-link-exact-active {
  color: #DD7A4B !important
}
</style>
