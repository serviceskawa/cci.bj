<template>
  <div class="max-w-7xl mx-auto px-6 lg:px-20 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div class="uppercase text-primary text-base font-medium mb-2">
          404 Error
        </div>
        <div class="text-5xl font-extrabold text-blue mb-2">
          Cette page <br />
          n'existe pas
        </div>
        <p class="text-subtitlegray tracking-tight text-base">
          La page que vous recherchez n'a pas pu être trouvée.
        </p>
      </div>
      <div>
        <p class="text-subtitlegray tracking-tight text-base">
          La page que vous recherchez n'a pas pu être trouvée.
        </p>
        <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <router-link
            :to="{ name: 'cci' }"
            class="py-3 cursor-pointer flex items-center justify-between link"
          >
            <div class="flex items-center">
              <span class="mr-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M33.3333 36V14.6667C33.3333 13.1939 32.1394 12 30.6667 12H17.3333C15.8606 12 14.6667 13.1939 14.6667 14.6667V36M33.3333 36L36 36M33.3333 36H26.6667M14.6667 36L12 36M14.6667 36H21.3333M20 17.3333H21.3333M20 22.6666H21.3333M26.6667 17.3333H28M26.6667 22.6666H28M21.3333 36V29.3333C21.3333 28.5969 21.9303 28 22.6667 28H25.3333C26.0697 28 26.6667 28.5969 26.6667 29.3333V36M21.3333 36H26.6667"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-blue font-medium">Ma CCI</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'services' }"
            class="py-3 cursor-pointer flex items-center justify-between link"
          >
            <div class="flex items-center">
              <span class="mr-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M20.8846 30.6667H27.1152M23.9999 12V13.3333M32.4852 15.5147L31.5424 16.4575M36 23.9999H34.6667M13.3333 23.9999H12M16.4575 16.4575L15.5146 15.5147M19.2859 28.7141C16.6824 26.1106 16.6824 21.8895 19.2859 19.286C21.8894 16.6825 26.1105 16.6825 28.714 19.286C31.3175 21.8895 31.3175 26.1106 28.714 28.7141L27.9845 29.4435C27.1407 30.2874 26.6666 31.4319 26.6666 32.6253V33.3333C26.6666 34.8061 25.4727 36 23.9999 36C22.5272 36 21.3333 34.8061 21.3333 33.3333V32.6253C21.3333 31.4319 20.8592 30.2874 20.0153 29.4435L19.2859 28.7141Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-blue font-medium">Nos services</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'formations' }"
            class="py-3 cursor-pointer flex items-center justify-between link"
          >
            <div class="flex items-center">
              <span class="mr-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M24 18.2528V31.2528M24 18.2528C22.8321 17.4769 21.2465 17 19.5 17C17.7535 17 16.1679 17.4769 15 18.2528V31.2528C16.1679 30.4769 17.7535 30 19.5 30C21.2465 30 22.8321 30.4769 24 31.2528M24 18.2528C25.1679 17.4769 26.7535 17 28.5 17C30.2465 17 31.8321 17.4769 33 18.2528V31.2528C31.8321 30.4769 30.2465 30 28.5 30C26.7535 30 25.1679 30.4769 24 31.2528"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-blue font-medium">Formations</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'blog-articles' }"
            class="py-3 cursor-pointer flex items-center justify-between link"
          >
            <div class="flex items-center">
              <span class="mr-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M24 26.6296L36 19.9629L24 13.2963L12 19.9629L24 26.6296ZM24 26.6296L32.2121 22.0673C32.9357 23.8917 33.3333 25.8808 33.3333 27.9629C33.3333 28.8979 33.2531 29.8143 33.0992 30.7054C29.6191 31.0438 26.4654 32.4971 24 34.7037C21.5346 32.4971 18.3809 31.0438 14.9008 30.7054C14.7469 29.8143 14.6667 28.8979 14.6667 27.9628C14.6667 25.8808 15.0643 23.8917 15.7878 22.0673L24 26.6296ZM18.6667 34.6295V24.6296L24 21.6666"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-blue font-medium">Blog</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'contact' }"
            class="py-3 cursor-pointer flex items-center justify-between link"
          >
            <div class="flex items-center">
              <span class="mr-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M20.2279 12.6838L21.1766 12.3675L21.1766 12.3675L20.2279 12.6838ZM22.3924 19.1772L23.3411 18.861V18.861L22.3924 19.1772ZM18.6227 22.022L18.1755 21.1276C17.6954 21.3676 17.4905 21.9437 17.711 22.433L18.6227 22.022ZM25.978 29.3773L25.567 30.2889C26.0563 30.5095 26.6324 30.3046 26.8724 29.8245L25.978 29.3773ZM28.8228 25.6076L29.139 24.6589L28.8228 25.6076ZM35.3162 27.7721L35 28.7208L35.3162 27.7721ZM14 11C12.3431 11 11 12.3431 11 14H13C13 13.4477 13.4477 13 14 13V11ZM19.2792 11H14V13H19.2792V11ZM21.1766 12.3675C20.9044 11.5509 20.1401 11 19.2792 11V13L19.2792 13L21.1766 12.3675ZM23.3411 18.861L21.1766 12.3675L19.2792 13L21.4437 19.4934L23.3411 18.861ZM22.3381 21.2823C23.2284 20.8372 23.6558 19.8052 23.3411 18.861L21.4437 19.4934V19.4934L22.3381 21.2823ZM19.0699 22.9164L22.3381 21.2823L21.4437 19.4934L18.1755 21.1276L19.0699 22.9164ZM26.389 28.4657C23.3517 27.0963 20.9037 24.6483 19.5343 21.611L17.711 22.433C19.2809 25.915 22.085 28.7191 25.567 30.2889L26.389 28.4657ZM26.7177 25.6619L25.0836 28.9301L26.8724 29.8245L28.5066 26.5563L26.7177 25.6619ZM29.139 24.6589C28.1948 24.3442 27.1628 24.7716 26.7177 25.6619L28.5066 26.5563H28.5066L29.139 24.6589ZM35.6325 26.8234L29.139 24.6589L28.5066 26.5563L35 28.7208L35.6325 26.8234ZM37 28.7208C37 27.8599 36.4491 27.0956 35.6325 26.8234L35 28.7208H37ZM37 34V28.7208H35V34H37ZM34 37C35.6569 37 37 35.6569 37 34H35C35 34.5523 34.5523 35 34 35V37ZM32 37H34V35H32V37ZM11 16C11 27.598 20.402 37 32 37V35C21.5066 35 13 26.4934 13 16H11ZM11 14V16H13V14H11Z"
                    fill="#DD7A4B"
                  />
                </svg>
              </span>
              <span class="text-blue font-medium">Nous contacter</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'appels-offres' }"
            class="py-3 cursor-pointer flex items-center justify-between link"
          >
            <div class="flex items-center">
              <span class="mr-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="#DD7A4B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M36 27.0072C32.2943 28.5073 28.2436 29.3333 24 29.3333C19.7564 29.3333 15.7057 28.5073 12 27.0072M29.3333 17.3333V14.6667C29.3333 13.1939 28.1394 12 26.6667 12H21.3333C19.8606 12 18.6667 13.1939 18.6667 14.6667V17.3333M24 25.3333H24.0133M14.6667 36H33.3333C34.8061 36 36 34.8061 36 33.3333V20C36 18.5272 34.8061 17.3333 33.3333 17.3333H14.6667C13.1939 17.3333 12 18.5272 12 20V33.3333C12 34.8061 13.1939 36 14.6667 36Z"
                    stroke="#DD7A4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-blue font-medium">Travailler avec nous</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </router-link>
        </div>
        <router-link :to="{name: 'index'}" class="text-base text-primary leading-6 font-medium">Ou, retournez à la page d'accueil →</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.link {
  border-bottom: 1px solid #e5e7eb !important;
}
</style>