<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <main class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
    <Notifications :notif="notif" v-if="notif.type !== ''" @close="notif.type = ''" />
    <div class="">
      <div class="pt-12 pb-8 text-center">
        <h2 class="text-3xl tracking-tight font-bold text-primary sm:text-4xl">
          Demande d'assistance
        </h2>
        <div class="flex justify-center py-12" v-if="loader == true">
         
        </div>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200" v-else>
          <div v-if="faqs.length == 0">
            <h1 class="">Nous suivons votre problème jusqu’à résolution</h1>
          </div>
          <Disclosure as="div" v-for="faq in faqs" :key="faq.id" class="pt-6" v-slot="{ open }" v-else>
            <dt class="text-lg">
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                <span class="font-medium text-gray-900">{{
                faq.title
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <ChevronDownIcon :class="[
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform',
                  ]" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-md md:text-lg tracking-tight leading-7 text-subtitlegray">
                <span v-html="faq.content"></span>
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
        
        
      </div>
    
      <div class="pt-12 pb-8 text-center">
        <div id="sb-tickets"></div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import store from "@/store";
import { ref, onMounted, computed } from 'vue'
import { services } from "@/api"
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Notifications from "@/components/Notifications.vue"
export default {
  components: {
    Notifications,
    Disclosure,
    DisclosurePanel,
    DisclosureButton,
    DisclosureButton,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
  },
  data() {
    return {
      SB_TICKETS:true,
      loader: false,
      faqs: [],
      open: false,
      on_loading_request: false,
      form: {
        title: '',
        name: '',
        email: ''
      },
      notif: {
        type: '',
        title: '',
        description: ''
      }
    }
  },
  async created() {
    this.loader = true
    await services.get_faq().then((res) => {
      if (res.status == 200 && res.data) {
        this.faqs = res.data
      }
      this.loader = false
    })
  },
  mounted() {
    // Ajouter la variable SB_TICKETS
    const scriptInline = document.createElement("script");
    scriptInline.textContent = "window.SB_TICKETS = true;";
    document.head.appendChild(scriptInline);

    // Ajouter le script jQuery
    const scriptJQuery = document.createElement("script");
    scriptJQuery.src = "https://cci.bj/support/js/min/jquery.min.js";
    scriptJQuery.async = true;
    document.head.appendChild(scriptJQuery);

    // Ajouter le script sbinit après jQuery
    scriptJQuery.onload = () => {
      const scriptSbInit = document.createElement("script");
      scriptSbInit.id = "sbinit";
      scriptSbInit.src = "https://cci.bj/support/js/main.js";
      scriptSbInit.async = true;
      document.head.appendChild(scriptSbInit);
    };
  },
  methods: {
    async sendFaqRequest() {
      this.on_loading_request = true
      await services.send_faq_request(this.form).then((response) => {
        this.on_loading_request = false
        this.form = {
          title: '',
          name: '',
          email: ''
        }
        if (response.status == 200 && response.data.success !== '') {
          this.notif.type = 'success'
          this.notif.title = "Effectuée"
          this.notif.description = "Votre requête a été transmise avec succès."
        } else {
          this.notif.type = 'error'
          this.notif.title = "Erreur"
          this.notif.description = "Une erreur s'est produite. Veuillez réessayer."
        }
        setTimeout(() => {
          this.notif.type = ''
        }, 6000)
      })
    }
  }
}


</script>
<style lang="scss" scoped>
.box {
  max-width: 860px !important;
  min-width: 280px;

  input {
    height: 62px;
  }
}

.separator {
  border: 1px solid #e5e7eb !important;
}

::v-deep .divide-y> :not([hidden])~ :not([hidden]) {
  border-top: 1px solid #E5E7EB !important;
  border-bottom: none !important;
}

.active {
  border: 1px solid #DD7A4B;
  background: #FAEBE0 !important;
  color: #DD7A4B !important;
}

::placeholder {
  font-weight: 400;
  font-size: 16px !important;
  color: #6B7280 !important;
}
</style>