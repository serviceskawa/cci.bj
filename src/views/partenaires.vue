<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div  class="
        barner
        sm:h-96
        lg:h-auto
        flex
        items-center
        p-4
        md:px-10
        lg:px-20
        w-full
      ">
      <div class="max-w-7xl px-6 lg:px-10 mx-auto flex items-center w-full">
        <div>
          <h1
            class="
              text-primary text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            "
          >
            Nos partenaires
          </h1>
          <p
            class="
              text-md
              md:text-lg
              tracking-tight
              text-white
              leading-7
              mt-6
            "
          >
            Le développement implique une action collective, inclusive, et à la
          bonne <br />
          échelle. Ainsi, la moitié de nos projets se font en cofinancement avec
          des
          <br />
          partenaires : autres banques de développement, mais aussi
          collectivités <br />
          territoriales, ONG, fondations… Le cofinancement permet de
          démultiplier les
          <br />
          effets, d’attirer d’autres investisseurs, et de rendre possibles les
          projets les
          <br />
          plus ambitieux.
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div>
        <div class="flex justify-center py-20" v-if="loader == true">
          <div role="status" class="py-20">
            <svg
              aria-hidden="true"
              class="w-12 h-12 text-gray animate-spin fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else>
          <div v-if="partnairs_list.length == 0">
            <h1 class="">Aucun partenaire trouvé</h1>
          </div>
          <div
            class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            v-else
          >
            <div
              class="p-5 mb-5 bg-gray"
              v-for="(part, index) in partnairs_list"
              :key="'partnair' + index"
            >
              <div class="flex justify-center">
                <img class="partenaire" :src="part.photo" alt="" />
              </div>
              <div class="mt-5 items-center">
                <div class="text-sm font-semibold">
                  <div class="text-primary pt-2">{{ part.name }}</div>
                </div>
                <div class="flex items-center mt-2">
                  <a href="#" class="mr-2">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5443_2158)">
                        <path
                          d="M5.92086 15.6238C11.9938 15.6238 15.3156 10.5921 15.3156 6.2291C15.3156 6.08587 15.3156 5.94344 15.3059 5.80262C15.9522 5.33471 16.51 4.75541 16.9531 4.09185C16.3505 4.35901 15.7111 4.53424 15.0565 4.61168C15.7458 4.19892 16.2617 3.54977 16.5081 2.78504C15.8601 3.16959 15.1512 3.44064 14.4119 3.58651C13.9141 3.05683 13.2556 2.70605 12.5383 2.58846C11.821 2.47087 11.085 2.59304 10.4441 2.93605C9.80326 3.27907 9.29337 3.82379 8.99339 4.48588C8.69341 5.14796 8.62008 5.89048 8.78474 6.59845C7.47197 6.53266 6.1877 6.19154 5.0153 5.59724C3.84291 5.00293 2.80859 4.16872 1.9795 3.14876C1.55729 3.87555 1.42796 4.73594 1.61782 5.55474C1.80769 6.37355 2.30247 7.08921 3.00145 7.55603C2.4762 7.54079 1.96232 7.39949 1.50313 7.14403V7.18587C1.50344 7.94815 1.76738 8.68686 2.25019 9.27674C2.73301 9.86662 3.40498 10.2714 4.15216 10.4223C3.66597 10.5549 3.15587 10.5741 2.66107 10.4787C2.87203 11.1349 3.28283 11.7087 3.83602 12.1199C4.3892 12.5311 5.05709 12.7591 5.74624 12.772C5.06155 13.31 4.27752 13.7077 3.43898 13.9425C2.60045 14.1772 1.72387 14.2443 0.859375 14.14C2.36945 15.1091 4.12656 15.6231 5.92086 15.6206"
                          fill="#9CA3AF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5443_2158">
                          <rect
                            width="16.0938"
                            height="16.0938"
                            fill="white"
                            transform="translate(0.859375 0.9375)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5443_2161)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.1939 14.0845H11.047V10.7225C11.047 9.92184 11.0333 8.89023 9.93085 8.89023C8.81234 8.89023 8.64255 9.76412 8.64255 10.6662V14.0845H6.49564V7.17222H8.55484V8.11692H8.58461C8.87108 7.57376 9.57196 7.00082 10.6172 7.00082C12.7923 7.00082 13.1947 8.43155 13.1947 10.2936V14.0845H13.1939ZM4.07434 6.22832C3.91075 6.22848 3.74874 6.19642 3.59755 6.13396C3.44636 6.07151 3.30895 5.97989 3.19317 5.86433C3.07739 5.74877 2.9855 5.61154 2.92275 5.46047C2.86001 5.3094 2.82763 5.14745 2.82747 4.98387C2.82731 4.82029 2.85938 4.65828 2.92183 4.50709C2.98428 4.3559 3.07591 4.21849 3.19146 4.10271C3.30702 3.98692 3.44425 3.89504 3.59532 3.83229C3.74639 3.76954 3.90834 3.73717 4.07192 3.73701C4.40229 3.73669 4.71926 3.86762 4.95309 4.101C5.18692 4.33438 5.31846 4.65109 5.31879 4.98146C5.31911 5.31183 5.18817 5.62879 4.95479 5.86262C4.72142 6.09645 4.4047 6.228 4.07434 6.22832ZM2.99847 14.0845H5.14859V7.17222H2.99766V14.0845H2.99847ZM14.2641 1.74219H1.92019C1.33035 1.74219 0.851562 2.20971 0.851562 2.78667V15.1813C0.851562 15.7582 1.33035 16.2266 1.92019 16.2266H14.2641C14.8547 16.2266 15.3359 15.7582 15.3359 15.1813V2.78667C15.3359 2.20971 14.8547 1.74219 14.2641 1.74219Z"
                          fill="#9CA3AF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5443_2161">
                          <rect
                            width="16.0938"
                            height="16.0938"
                            fill="white"
                            transform="translate(0.046875 0.9375)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { services } from "@/api";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
export default {
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      loader: false,
      partnairs_list: [],
    };
  },
  async created() {
    this.loader = true;
    let configs = sessionStorage.getItem("configs");
    if (configs !== undefined && configs !== null) {
      configs = JSON.parse(configs);
    }
    await services.get_all_clients().then((response) => {
      if (response.status == 200) {
        this.partnairs_list = response.data;
        this.loader = false;
        this.partnairs_list = this.partnairs_list.map((element) => {
          return {
            ...element,
            photo: configs.image_url + "/" + element.photo,
          };
        });
      }
    });
  },
};
</script>

<style scoped>
.barner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/images/associes.jpeg");
  height: 600px !important;
  background-position: center !important;
}

.partenaire {
  height: 140px !important;
}
</style>
