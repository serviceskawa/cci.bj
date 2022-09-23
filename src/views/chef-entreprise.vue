<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="pb-20">
    <div class="
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
      <div class="flex items-center w-full">
        <div>
          <h1 class="
              text-blue text-4xl
              lg:text-6xl
              leading-none
              font-extrabold
              tracking-tight
            ">
            Des solutions <br />
            pour booster votre <br />
            entreprise
          </h1>
          <p class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mt-6
            ">
            Consolidez votre projet entrepreneurial et amenez votre <br />
            société vers de nouveaux sommets. La CCI-Bénin vous <br />
            offre les clefs pour accélerer votre croissance.
          </p>
        </div>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-20">
      <div class="grid flex flex-wrap grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div class="">
          <div class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-4
              cursor-pointer
            " :class="current_tab === 'renew' ? 'active-tab' : ''" @click="current_tab = 'renew'">
            Renouvelez votre carte Professionnelle
          </div>
          <div class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-4
              cursor-pointer
            " :class="current_tab === 'barem' ? 'active-tab' : ''" @click="current_tab = 'barem'">
            Barème des cotisations
          </div>
          <div class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-4
              cursor-pointer
            " :class="current_tab === 'contact' ? 'active-tab' : ''" @click="current_tab = 'contact'">
            Contact de partenaires
          </div>
          <div class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-4
              cursor-pointer
            " :class="current_tab === 'etude' ? 'active-tab' : ''" @click="current_tab = 'etude'">
            Etude de marché sectoriel
          </div>

          <div class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-4
              cursor-pointer
            " :class="current_tab === 'rencontre' ? 'active-tab' : ''" @click="current_tab = 'rencontre'">
            Rencontres thématiques
          </div>
          <div class="
              text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray
              mb-4
              cursor-pointer
            " :class="current_tab === 'facilitation' ? 'active-tab' : ''" @click="current_tab = 'facilitation'">
            Facilitation de l’accès au financement
          </div>
        </div>
        <div class="col-span-3">
          <div>
            <div v-if="current_tab == 'renew'">
              <h3 class="leading-tight text-4xl font-extrabold mb-3">
                Renouvelez votre carte Professionnelle
              </h3>
              <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                Pour renouveler votre carte d’importateur vous devez produire les
                pièces ci-après : <br> quittance de paiement de la Patente
                d’importation de l’année en cours, <br> La quittance de paiement de
                l’impôt sur le BIC de l’année en cours, <br />La quittance de paiement
                de la TPS (ceci prend en compte BIC et Patente), <br />La quittance de
                la cotisation de la CCI Bénin, La quittance de cotisation de la
                CNSS ou attestation d’immatriculation, <br />Une copie de l’agrément
                pour les activités faisant l’objet d’une réglementation
                spécifique,<br /> Un timbre fiscal de 1000 F CFA Deux (02) photos
                d’identité du Gérant de la société,<br /> Le récépissé de paiement des
                droits d’établissement de la carte d’importateur (5.000 F CFA), <br />La
                photocopie du Registre de Commerce et du Crédit Mobilier (RCCM) Le
                numéro d’Immatriculation Fiscal Unique (IFU) <br />L’ancienne Carte
                d’Importateur. Nous rappelons que munis, de toutes ces pièces,
                vous devez vous rendre au ministère de l’Industrie et du Commerce
                pour renouveler votre carte d’Importateur ou à travers.
              </p>
            </div>
            <div v-if="current_tab == 'barem'">
              <h3 class="pb-10 leading-tight text-4xl font-extrabold text-subtitlegray">
                Barème des cotisations applicable aux entreprises membre de la CCIB
              </h3>
              <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                A partir de janvier 2020, les montants annuels établis en fonction des chiffres d’affaires sont fixés
                comme suit : <a href="#" class="text-green hover:font-bold">Télécharger le barème</a>
              </p>
            </div>
            <div v-if="current_tab == 'contact'">
              <h3 class="pb-10 leading-tight text-4xl font-extrabold text-subtitlegray">
                Besoin d’assistance juridique ? Faites-vous accompagner en un clic
              </h3>
              <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                Le Centre d’Arbitrage, de Médiation et de Conciliation de la Chambre de Commerce et d’Industrie du Bénin
                (CAMeC-CCIB) est un organe de la Chambre de Commerce et d’Industrie du Bénin mis à la disposition des
                femmes et hommes d’affaires pour faciliter le règlement des litiges nés de leurs relations d’affaires.
                Les
                modes alternatifs de règlement des litiges mis en œuvre par le CAMeC-CCIB sont : <br />
              <ul class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                <li>
                  l’arbitrage

                </li>
                <li>
                  la conciliation
                </li>
                <li>
                  la médiation

                </li>
              </ul>
              <span class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">Contactez : <br />
                Adresse électronique : <br />
                contact@camec.bj; camec@ccib.bj<br />
                Tel: +229 68 63 70 70 /69 33 70 70<br />
                Site web: www.camec.bj</span>
              </p>
              <h3 class="py-10 leading-tight text-4xl font-extrabold text-subtitlegray">
                Prenez contact avec les partenaires opérant dans divers domaines

              </h3>
              <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                Obtenez plus d’informations auprès de nos partenaires. <a href="#"
                  class="text-green hover:font-bold">Télécharger la liste</a>
              </p>
            </div>
            <div v-if="current_tab == 'etude'">
              <h3 class="pb-10 leading-tight text-4xl font-extrabold text-xb-extrabold text-green">
                Etude de marché sectoriel
              </h3>
              <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                L'étude de marché est un passage obligé pour tout projet d'entreprise. Elle vous apporte les réponses
                adaptées et vous aide à mieux connaitre le secteur d'activité, la zone de chalandise et l'environnement
                de
                votre future entreprise.
                La CCI Bénin vous accompagne pour l'implantation de vos commerces de votre industrie et de vos services.
                <br />
                • Connaissez-vous les grandes tendances du marché, ses acteurs ? <br />
                • Qui sont les consommateurs, les acheteurs et les concurrents ?<br />
                • Quelles sont les contraintes et les opportunités de votre secteur d'activité ?<br />
                Bénéficiez de nos données locales, notre exclusivité
                La CCI Bénin accompagne les entreprises du Bénin. Grâce à cette expérience et à notre excellent réseau
                national, nous disposons des chiffres actuels, exclusifs concernant votre marché, les profils des
                consommateurs et concurrents. Autrement dit, nous vous donnons accès à des données d'enquêtes précieuses
                sur le comportement d'achat local.
                Vous obtenez rapidement une étude de marché complète, objective.
                Quelques semaines après votre commande, vous recevez déjà votre étude de marché, basée sur notre forte
                connaissance en amont des projets dans votre zone de chalandise commerciale. Ce document constitue une
                1ère étape de réflexion pour organiser votre projet d'entreprise. Nous concluons cette étude marketing
                par
                des préconisations objectives et qualifiées avec des partenaires.
                Vous recevez ainsi des éléments concrets pour préparer votre business plan
                Outre les chiffres clés de votre secteur d'activité, l'étude de marché établie par la CCI-Bénin vous
                permet de calculer votre chiffre d'affaires potentiel, en préparation de votre business plan.

              </p>
            </div>
            <div v-if="current_tab == 'rencontre'">
              <h3 class="leading-tight text-4xl font-extrabold">
                Nos rencontres thématiques
              </h3>
              <p class="text-md
              md:text-lg
              tracking-tight
              leading-7
              text-subtitlegray">
                Pour renouveler votre carte d’importateur vous devez produire les
                pièces ci-après : <br> quittance de paiement de la Patente
                d’importation de l’année en cours, <br> La quittance de paiement de
                l’impôt sur le BIC de l’année en cours, <br />La quittance de paiement
                de la TPS (ceci prend en compte BIC et Patente), <br />La quittance de
                la cotisation de la CCI Bénin, La quittance de cotisation de la
                CNSS ou attestation d’immatriculation, <br />Une copie de l’agrément
                pour les activités faisant l’objet d’une réglementation
                spécifique,<br /> Un timbre fiscal de 1000 F CFA Deux (02) photos
                d’identité du Gérant de la société,<br /> Le récépissé de paiement des
                droits d’établissement de la carte d’importateur (5.000 F CFA), <br />La
                photocopie du Registre de Commerce et du Crédit Mobilier (RCCM) Le
                numéro d’Immatriculation Fiscal Unique (IFU) <br />L’ancienne Carte
                d’Importateur. Nous rappelons que munis, de toutes ces pièces,
                vous devez vous rendre au ministère de l’Industrie et du Commerce
                pour renouveler votre carte d’Importateur ou à travers.
              </p>
            </div>
            <div v-if="current_tab == 'facilitation'">
              <h3 class="leading-tight text-4xl font-extrabold mb-3">
                Facilitation de l’accès au financement

              </h3>
              <div class="mt-12 overflow-x-auto no-scrollbar pb-8	-mr-20 flex">
                <div v-for="i in 7" :key="i"
                  class="min-w-max h-full rounded-lg shadow mr-8 ">
                  <div class="flex-shrink-0">
                    <img class="h-48 w-full object-cover" src="@/assets/images/agenda.jpeg" alt="" />
                  </div>
                  <div class="flex-1 bg-white pt-6 px-6 flex flex-col justify-between">
                    <div class="flex-1 flex-wrap">
                      <span class="inline-flex items-center px-6 py-1 rounded-full text-sm bg-primaryInfo text-primary mr-3">
                        Présentiel
                      </span>
                      <span class="inline-flex items-center px-6 py-1 rounded-full text-sm bg-green text-green">
                        5 places
                      </span>
                      <a href="" class="block mt-2 spaxe-y-2">
                        <h3 class="leading-tight text-3xl mb-3 font-semibold text-gray-900">Le réseautage d'affaires <br/> intelligent et rentable</h3>
                        <p class="text-base font-medium text-indigo-600">
                          Cotonou, Bénin
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                          18h 00 min - 20h 00
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="tracking-tight bg-white px-6 py-9 text-left text-dark">
                    <span class="block sm:inline-block">
                      <a href="" class="text-primary">
                        Participer <span aria-hidden="true">&rarr;</span></a>
                    </span>
                  </div>
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
export default {
  data() {
    return {
      current_tab: "renew",
    };
  },
};
</script>
  
<style lang="scss" scoped>
.barner {
  background: linear-gradient(180deg,
      rgba(72, 127, 80, 0.1) 0%,
      rgba(72, 127, 80, 0) 100%),
    url("../assets/images/chef-entreprise.jpeg") !important;
  height: 520px !important;
  background-position: top !important;
  background-attachment: local !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.asset-session {
  background: url("../assets/images/ass.jpeg");
  background-size: cover !important;
  height: 400px;
  width: 100%;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}

.active-tab {
  padding: 10px 6px !important;
  padding-left: 12px !important;
  background: #f8f8f8;
  box-shadow: inset 5px 0px 0px #dd7a4b;
  color: #dd7a4b !important;
}

ul {
  list-style: inside !important;
}
.bg-green {
  background: rgba(72, 127, 80, 0.1) !important;
}
</style>

