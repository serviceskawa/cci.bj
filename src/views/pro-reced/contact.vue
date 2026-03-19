<template>
  <div>
    <!-- ProReCED sub-navigation -->
    <ProRecedNav />

    <!-- Banner -->
    <div class="relative bg-primary text-white">
      <div class="px-6 lg:px-10 max-w-7xl mx-auto py-16 space-y-4">
        <h1 class="md:text-4xl text-2xl font-extrabold">Nous contacter</h1>
        <p class="text-lg text-white/80 lg:w-7/12">Vous avez une question sur le ProReCED ? Notre équipe est à votre écoute.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="px-6 lg:px-10 max-w-7xl mx-auto py-16">
      <div class="grid gap-10 grid-cols-1 lg:grid-cols-2">

        <!-- Contact info -->
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">Informations de contact</h2>
            <p class="text-gray-600 mb-6">Notre équipe est prête à vous recevoir du lundi au vendredi de 08h à 12h pour répondre à vos questions et vous accompagner.</p>
          </div>

          <ContactList v-if="contactsList.length > 0" :contacts="contactsList" />

          <div v-else class="space-y-4 text-gray-600">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+229 21 31 12 38</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>info@ccib.bj</span>
            </div>
          </div>

          <!-- Map -->
          <div>
            <h3 class="font-bold text-gray-900 mb-3">Nous trouver</h3>
            <iframe
              class="w-full h-64 rounded-lg border-none"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.648963993172!2d2.438089!3d6.352021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4577eef64b135c7!2sChambre%20de%20Commerce%20et%20de%20l&#39;Industrie%20du%20B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1664354789753!5m2!1sfr!2sbj"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Contact form -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <form @submit.prevent="sendMessage" class="space-y-6">
            <input type="text" placeholder="Votre nom complet" required v-model="form.name"
              class="w-full border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-900 focus:outline-none rounded-md" />
            <input type="email" placeholder="Votre adresse email" required v-model="form.email"
              class="w-full border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-900 focus:outline-none rounded-md" />
            <textarea rows="5" placeholder="Votre message" required v-model="form.message"
              class="w-full border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-900 focus:outline-none rounded-md" />
            <button type="submit"
              class="bg-primary px-8 py-3 text-white rounded-md font-medium cursor-pointer hover:bg-primary/90 transition"
              :disabled="loading">
              <span v-if="loading">Envoi en cours...</span>
              <span v-else>Envoyer</span>
            </button>
          </form>

          <!-- Success dialog -->
          <TransitionRoot as="template" :show="showSuccess">
            <Dialog as="div" class="relative z-50" @close="showSuccess = false">
              <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
              </TransitionChild>
              <div class="fixed inset-0 z-50 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-6 py-8 text-center shadow-xl sm:max-w-sm sm:w-full">
                      <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 class="mt-4 text-lg font-medium text-gray-900">Message envoyé avec succès</h3>
                      <p class="mt-2 text-sm text-gray-500">Nous vous répondrons par mail très bientôt.</p>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ContactList from '@/components/pro-reced/ContactList.vue'
import ProRecedNav from '@/components/pro-reced/ProRecedNav.vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { contacts as staticContacts } from '@/data/pro-reced'

export default {
  components: { ContactList, ProRecedNav, Dialog, DialogPanel, TransitionChild, TransitionRoot },
  data() {
    return {
      contactsList: staticContacts,
      form: { name: '', email: '', message: '' },
      loading: false,
      showSuccess: false
    }
  },
  methods: {
    sendMessage() {
      this.loading = true
      // Static mode - simulate success
      setTimeout(() => {
        this.loading = false
        this.showSuccess = true
        this.form = { name: '', email: '', message: '' }
      }, 800)
    }
  }
}
</script>
