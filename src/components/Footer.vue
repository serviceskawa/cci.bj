<template>
  <footer class="bg-green" aria-labelledby="footer-heading">
    <div class="max-w-7xl mx-auto py-12 px-6 lg:px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-base font-medium text-white uppercase">
            LA CCI BÉNIN
          </h3>
          <ul role="list" class="mt-4 space-y-4">
            <div v-for="(link, index) in links" :key="index">
              <router-link class="text-base text-white hover:text-white" :to="link.name">
                {{ link.title }}
              </router-link>
            </div>
          </ul>
        </div>
        <div>
          <h3 class="text-base font-medium text-white uppercase">
            partenaires
          </h3>
          <ul role="list" class="mt-4 space-y-4">
            <li>
              <a
                href="https://apiex.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
                >APIEx
              </a>
            </li>
            <li>
              <a
                href="https://financements-ue.bj/secteur-prive-projet-dappui-au-renforcement-des-acteurs-du-secteur-prive-parasep/"
                target="_blank"
                class="text-base text-white hover:text-white"
                >PARASEP
              </a>
            </li>
            <li>
              <a
                href="https://cpccaf.org/"
                target="_blank"
                class="text-base text-white hover:text-white"
                >CPCCAF
              </a>
            </li>
            <li>
              <a
                href="https://www.impots.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
                >DGI Bénin
              </a>
            </li>
            <li>
              <a
                href="https://sbin.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
                >SBIN SA
              </a>
            </li>
          </ul>
        </div>
        <div class="">
          <h3 class="text-base font-medium text-white uppercase">
            LIENS UTILES
          </h3>
          <ul role="list" class="mt-4 space-y-4">
            <li>
              <a
                href="https://monentreprise.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
              >
                monentreprise.bj
              </a>
            </li>
            <li>
              <a
                href="https://www.formationccib.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
              >
                formationccib.bj
              </a>
            </li>
            <li>
              <a
                href="https://ahilido.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
              >
                ahilido.bj
              </a>
            </li>
            <li>
              <a
                href="https://apiex.bj/"
                target="_blank"
                class="text-base text-white hover:text-white"
              >
                apiex.bj
              </a>
            </li>
            <!--<li>
              <router-link
                :to="{ name: 'legal-mentions' }"
                class="text-base text-white hover:text-white"
              >
                Mentions légales
              </router-link>
            </li>-->
            <li>
              <router-link
                :to="{ name: 'faq' }"
                class="text-base text-white hover:text-white"
              >
                FAQ
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'SME Business Training and Coaching Loop' }"
                class="text-base text-white hover:text-white"
              >
                SME Loop
              </router-link>
            </li>
          </ul>
        </div>
        <div class="">
          <div class="mb-6">
            <h3 class="text-base font-medium text-white uppercase">
              google map
            </h3>
            <a
              href="https://goo.gl/maps/EAxZJ4uErKkxuM9y6"
              target="_blank"
              class="mt-4 space-y-4"
            >
              <!-- <img src="@/assets/carte.svg" class="w-full" alt=""> -->

              <iframe
                class="w-full border-none mt-4"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.648963993172!2d2.438089!3d6.352021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4577eef64b135c7!2sChambre%20de%20Commerce%20et%20de%20l&#39;Industrie%20du%20B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1664354789753!5m2!1sfr!2sbj"
                width="180"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
          <div>
            <h3 class="text-base font-medium text-white uppercase">CONTACTS</h3>
            <div class="mt-2 text-white">
              <a href="https://api.whatsapp.com/send?phone=22991434343&text=Contactez-nous">+229 91 43 43 43</a> /
              <a href="tel:+22921311238"> +229 21 31 20 81</a>
            </div>
            <div class="mt-2 text-white">
              <a href="mailto:info@ccib.bj">info@ccib.bj</a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-6 border-t border-white flex justify-between pt-8 flex-wrap"
      >
        <div class="mt-2 text-base text-white uppercase">
          copyright &copy; 2022 CCIBENIN - TOUS DROITS RéSERVéS.
        </div>
        <div class="flex space-x-3 mt-2">
          <a
            href="https://www.youtube.com/c/CCIBENIN"
            target="_blank"
            class="cursor-pointer"
          >
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75625 9.47344L13.2188 12.0094L8.75625 14.5453V9.47344ZM21 3.75V20.25C21 21.4922 19.9922 22.5 18.75 22.5H2.25C1.00781 22.5 0 21.4922 0 20.25V3.75C0 2.50781 1.00781 1.5 2.25 1.5H18.75C19.9922 1.5 21 2.50781 21 3.75ZM19.0312 12.0141C19.0312 12.0141 19.0312 9.22031 18.675 7.87969C18.4781 7.13906 17.9016 6.55781 17.1656 6.36094C15.8391 6 10.5 6 10.5 6C10.5 6 5.16094 6 3.83438 6.36094C3.09844 6.55781 2.52187 7.13906 2.325 7.87969C1.96875 9.21563 1.96875 12.0141 1.96875 12.0141C1.96875 12.0141 1.96875 14.8078 2.325 16.1484C2.52187 16.8891 3.09844 17.4469 3.83438 17.6437C5.16094 18 10.5 18 10.5 18C10.5 18 15.8391 18 17.1656 17.6391C17.9016 17.4422 18.4781 16.8844 18.675 16.1437C19.0312 14.8078 19.0312 12.0141 19.0312 12.0141Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ccibenin"
            target="_blank"
            class="cursor-pointer"
          >
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8379 1.5C20.1569 1.5 20.4303 1.61393 20.6582 1.8418C20.8861 2.06966 21 2.3431 21 2.66211V21.3379C21 21.6569 20.8861 21.9303 20.6582 22.1582C20.4303 22.3861 20.1569 22.5 19.8379 22.5H14.4922V14.3652H17.2129L17.623 11.1934H14.4922V9.16992C14.4922 8.65951 14.5993 8.27669 14.8135 8.02148C15.0277 7.76628 15.4447 7.63867 16.0645 7.63867L17.7324 7.625V4.79492C17.1582 4.71289 16.347 4.67188 15.2988 4.67188C14.0592 4.67188 13.068 5.03646 12.3252 5.76562C11.5824 6.49479 11.2109 7.52474 11.2109 8.85547V11.1934H8.47656V14.3652H11.2109V22.5H1.16211C0.843099 22.5 0.569661 22.3861 0.341797 22.1582C0.113932 21.9303 0 21.6569 0 21.3379V2.66211C0 2.3431 0.113932 2.06966 0.341797 1.8418C0.569661 1.61393 0.843099 1.5 1.16211 1.5H19.8379Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            class="cursor-pointer"
            href="https://www.linkedin.com/company/ccibenin"
            target="_blank"
          >
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 1.5H1.49531C0.670312 1.5 0 2.17969 0 3.01406V20.9859C0 21.8203 0.670312 22.5 1.49531 22.5H19.5C20.325 22.5 21 21.8203 21 20.9859V3.01406C21 2.17969 20.325 1.5 19.5 1.5ZM6.34687 19.5H3.23438V9.47812H6.35156V19.5H6.34687ZM4.79062 8.10938C3.79219 8.10938 2.98594 7.29844 2.98594 6.30469C2.98594 5.31094 3.79219 4.5 4.79062 4.5C5.78437 4.5 6.59531 5.31094 6.59531 6.30469C6.59531 7.30312 5.78906 8.10938 4.79062 8.10938ZM18.0141 19.5H14.9016V14.625C14.9016 13.4625 14.8781 11.9672 13.2844 11.9672C11.6625 11.9672 11.4141 13.2328 11.4141 14.5406V19.5H8.30156V9.47812H11.2875V10.8469H11.3297C11.7469 10.0594 12.7641 9.22969 14.2781 9.22969C17.4281 9.22969 18.0141 11.3062 18.0141 14.0062V19.5Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            class="cursor-pointer"
            href="https://www.twitter.com/ccibenin"
            target="_blank"
          >
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 1.5H2.25C1.00781 1.5 0 2.50781 0 3.75V20.25C0 21.4922 1.00781 22.5 2.25 22.5H18.75C19.9922 22.5 21 21.4922 21 20.25V3.75C21 2.50781 19.9922 1.5 18.75 1.5ZM16.4578 8.94375C16.4672 9.075 16.4672 9.21094 16.4672 9.34219C16.4672 13.4062 13.3734 18.0891 7.72031 18.0891C5.97656 18.0891 4.35938 17.5828 3 16.7109C3.24844 16.7391 3.4875 16.7484 3.74063 16.7484C5.17969 16.7484 6.50156 16.2609 7.55625 15.4359C6.20625 15.4078 5.07188 14.5219 4.68281 13.3031C5.15625 13.3734 5.58281 13.3734 6.07031 13.2469C4.66406 12.9609 3.60938 11.7234 3.60938 10.2281V10.1906C4.01719 10.4203 4.49531 10.5609 4.99687 10.5797C4.5752 10.2992 4.22952 9.91869 3.99069 9.4721C3.75186 9.02552 3.6273 8.52675 3.62813 8.02031C3.62812 7.44844 3.77813 6.92344 4.04531 6.46875C5.55938 8.33437 7.83281 9.55313 10.3828 9.68438C9.94687 7.59844 11.5078 5.90625 13.3828 5.90625C14.2688 5.90625 15.0656 6.27656 15.6281 6.87656C16.3219 6.74531 16.9875 6.4875 17.5781 6.13594C17.3484 6.84844 16.8656 7.44844 16.2281 7.82812C16.8469 7.7625 17.4469 7.58906 18 7.35C17.5828 7.96406 17.0578 8.50781 16.4578 8.94375Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Journée pays/produit/service",
          name: "journees-pays",
        },
        {
          title: "Rendez-vous des Experts",
          name: "rdv-experts",
        },
        {
          title: "Documents et rapports",
          name: "documents-rapports",
        },
        {
          title: "Appels d’offres/projets",
          name: "appels-offres",
        },
        {
          title: "Arbitrage et médiation",
          name: "arbitrage-mediation",
        },
        {
          title: "Étude de marché",
          name: "etude-marche",
        },
        {
          title: "Impulse",
          name: "impulse",
        },
        {
          title: "OCIS",
          name: "observatoire-commerce",
        },
      ],
    };
  },
};
</script>