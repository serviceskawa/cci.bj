<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <div class="pb-20">
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
      </div>
      <div class="p-6 md:p-10 lg:p-12  xl:p-20 ">
        <div class="grid flex flex-wrap grid grid-cols-1 lg:grid-cols-4 gap-16">
          <div class="">
            <div class="
                text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray
                mb-4
                cursor-pointer mb-8
              " :class="current_tab === 'who_we_are' ? 'active-tab' : ''" @click="current_tab = 'who_we_are'">
              Qui sommes-nous ?
            </div>
            <div class="
                text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray
                mb-4
                cursor-pointer mb-8
              " :class="current_tab === 'historic' ? 'active-tab' : ''" @click="current_tab = 'historic'">
              Historique
            </div>
            <div class="
                text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray
                mb-4
                cursor-pointer mb-8
              " :class="current_tab === 'mission' ? 'active-tab' : ''" @click="current_tab = 'mission'">
              Mission
            </div>
            <div class="
                text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray
                mb-4
                cursor-pointer mb-8
              " :class="current_tab === 'organisation' ? 'active-tab' : ''" @click="current_tab = 'organisation'">
              Organisation
            </div>

            <div class="
                text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray
                mb-4
                cursor-pointer mb-8
              " :class="current_tab === 'president' ? 'active-tab' : ''" @click="current_tab = 'president'">
              Président
            </div>
          </div>
          <div class="col-span-3">
            <div>
              <div v-if="current_tab == 'who_we_are'">
                <h3 class="leading-tight text-4xl font-extrabold mb-3">
                  La CCI-Bénin
                </h3>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray">
                  La Chambre de Commerce et d’Industrie du Bénin (CCI Bénin) a été créée le 12 avril 1908. Au cours de son
                  évolution, elle a subi plusieurs mutations institutionnelles qui lui ont permis d’affiner ses
                  missions.
                  Au départ, les volets Commerce, Industrie et Agriculture étaient constitués en un seul bloc. C’est à
                  la
                  faveur de l’indépendance du pays et précisément le 03 avril 1962, qu’un acte a été pris pour
                  l’éclatement de la Chambre de Commerce, d’Agriculture et d’Industrie à travers la prise d’un décret
                  portant statuts de la Chambre de Commerce et d’Industrie.
                  La Chambre de Commerce et d’Industrie du Bénin (CCI Bénin) par son organisation actuelle, est un
                  Etablissement Public qui jouit de la Personnalité civile et de l’autonomie financière. Elle est placée
                  sous la tutelle du Ministère chargé du Commerce et sa compétence couvre l’ensemble du territoire
                  national.
                  Les statuts actuellement en vigueur sont consacrés par le décret 2011-502 du 25 juillet 2011.
                  Les prestations offertes par la CCI-Bénin couvrent plusieurs domaines d’intérêt. Elles sont fournies à
                  travers les activités menées quotidiennement par les services et départements opérationnels rattachés
                  au
                  Secrétariat Général et au Président de la CCI Bénin.
                </p>
              </div>
              <div v-if="current_tab == 'historic'">
                <h3 class="pb-10 leading-tight text-4xl font-extrabold">
                  Au service du commerce et de l’industrie
                </h3>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray">
                  La Chambre de Commerce et d’Industrie du Bénin (CCI Bénin) a été créée le 12 avril 1908. La CCI Bénin est un
                  établissement public jouissant de la Personnalité juridique et de l’autonomie financière. Elle est
                  placée sous la tutelle du Ministre en charge du commerce et sa compétence couvre l’ensemble du
                  territoire national béninois. Son président actuel est Arnauld AKAKPO, élu pour le compte de la
                  mandature 2020-2025.



                </p>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray">
                  Dans son fonctionnement, la CCI Bénin regroupe tous les opérateurs économiques de la République du Bénin et
                  autres personnes ou entités exerçant dans les secteurs du commerce, de l’industrie, des prestations de
                  services et inscrits au Registre du Commerce et du Crédit Mobilier.
                  Les organes statutaires de la CCI Bénin sont composés de :
                <ul class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray">
                  <li>
                    L’assemblée Consulaire, l’organe d’administration de la CCI Bénin

                  </li>
                  <li>
                    Le Bureau Consulaire, organe exécutif de l’assemblée consulaire
                  </li>
                  <li>
                    Les Commissions Techniques Permanentes (commerce, industrie, service, finance et formation)

                  </li>
                </ul>
                </p>
              </div>
              <div v-if="current_tab == 'mission'">
                <h3 class="pb-10 leading-tight text-4xl font-extrabold">
                  Au service du commerce et de l’industrie
                </h3>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray mb-8">
                  Conformément aux dispositions de l'article 2 de la loi N°92-022 du 06 Août 1992 portant institution
                  d'une Chambre de Commerce et d'Industrie en République du Bénin, la Compagnie consulaire dénommée la
                  Chambre de Commerce et d'Industrie du Bénin est un Etablissement Public. Elle est dotée de la
                  Personnalité morale et jouit de l'autonomie financière.
                </p>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray mb-8">

                  La Chambre de Commerce et d’Industrie du Bénin (CCI-Bénin) assure la représentation, la protection, et
                  la promotion des intérêts communs des Opérateurs Economiques de la République du Bénin dans les
                  domaines
                  du Commerce, l’Industrie et des Prestations de services.
                </p>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray mb-8">

                  La CCI-Bénin fournit aux opérateurs économiques et autres investisseurs, l’assistance documentaire,
                  toutes informations sur le droit applicable en République du Bénin et les renseignements sur les zones
                  économiques et les zones franches.
                </p>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray mb-8">
                  La Chambre de Commerce et d’Industrie du Bénin met en œuvre toutes actions destinées à contribuer au
                  développement des activités des opérateurs économiques dans les secteurs du commerce, de l’industrie
                  et
                  des prestations des services, et encourage notamment la création des organismes, groupements ou
                  associations professionnels en vue de promouvoir lesdites activités.
                </p>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray mb-8">
                  La CCI-Bénin peut recevoir délégation des autorités compétentes pour gérer tous organismes ou ouvrages
                  publics, délivrer ou authentifier les certificats d’origine ou autres documents accompagnant des
                  marchandises à l’exportation.
                </p>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray">
                  La Chambre de Commerce et d’Industrie du Bénin est consultée sur les politiques et programmes de
                  l’Etat
                  dans les secteurs du commerce, de l’industrie et des prestations des services.
                </p>
              </div>
              <div v-if="current_tab == 'organisation'">
                <h3 class="pb-10 leading-tight text-4xl font-extrabold">
                  Organisation de la CCI-Bénin
                </h3>
                <p class="text-md
                md:text-lg
                leading-7
                text-subtitlegray mb-8">
                  L’organisation et le fonctionnement de la CCI Bénin sont régis par les statuts et le règlement
                  intérieur
                  La CCI Bénin est gérée par des Elus Consulaires et une Administration à travers les organes
                  statutaires
                  ci-après :


                  Assemblée Consulaire (69 élus), Prend toutes décisions nécessaires ou concourant au bon fonctionnement
                  et à l’accomplissement de la mission de la CCI Bénin ;
                  Bureau Consulaire (5 élus), Facilite le développement d’actions et de partenariats visant la promotion
                  du secteur privé ;
                  Commissions Techniques (05) sont les Organes d’études et de propositions à la disposition du Bureau
                  Consulaire
                  Représentations régionales (06) six antennes de la CCI Bénin à Abomey-Calavi, Porto-Novo, Lokossa,
                  Abomey, Parakou et Natitingou.
                  Secrétariat général : Responsable de la gestion fiduciaire ; Assure la Gestion opérationnelle des
                  activités ; Mémoire de La CCI Bénin.

                  Sous la supervision du Bureau consulaire, le Secrétaire général est responsable de l’exécution du
                  budget
                  et du Plan de Travail de la CCI Bénin. Il assiste en particulier le Bureau consulaire dans la
                  préparation et l’exécution des délibérations du bureau et de l’Assemblée consulaire. Il est garant du
                  respect des règles de gestion fiduciaire applicables aux opérations effectuées par le Bureau
                  consulaire
                  et l’administration de la Chambre. Il conserve la mémoire des activités de l’Institution.

                </p>
              </div>
              <div v-if="current_tab == 'president'">
                <h3 class="leading-tight text-4xl font-extrabold">
                  Mot du président
                </h3>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  Mesdames et messieurs les chefs d’entreprise,
                </p>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  Nous sommes dans un monde où plus rien n’est véritablement statique, et où plus rien n’est comme
                  autrefois. Ni nos prévisions d’actions, ni même les réalités et les attentes de nos mandats. Ce pour
                  quoi la Chambre de Commerce et d’Industrie du Bénin (CCI-Bénin) se mobilise aujourd’hui, c’est
                  d’accélérer la transformation des entreprises béninoises, leur permettre de tirer parti des nombreuses
                  opportunités qu’offre la redynamisation de nos économies africaines, leur offrir le cadre adéquat pour
                  qu’elles travaillent davantage ensemble et remportent des succès commerciaux.
                </p>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  La CCI-Bénin a élaboré un plan stratégique vision 2020-2025 pour accompagner les entreprises à gagner
                  le
                  pari de la compétitivité, celui de la résilience. Au cours des dernières années et avec les réformes
                  structurelles mises en place, la CCI Bénin a réussi à renforcer son modèle de gouvernance, à déployer
                  une approche de services à la clientèle, à accélérer les efforts de lobbying et de communication et à
                  revitaliser les événements et programmes.
                </p>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  La réorganisation de la CCI-Bénin et l’élection des nouveaux élus et membres du Bureau Consulaire ont
                  eu
                  pour principe directeur, la focalisation des efforts sur la prestation de services, un soutien
                  diversifié et de grande valeur en direction des principaux mandants de la CCI-Bénin que sont les
                  entreprises du Bénin.
                </p>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  La CCI-Bénin aujourd’hui, est devenue une organisation hautement professionnelle, avec une orientation
                  claire sur la transformation des entreprises et la satisfaction des besoins de ses membres. Ce qu’il
                  faut désormais prendre en compte, c’est que le contexte socioéconomique en Afrique et au Bénin évolue
                  grandement, du fait de la conjonction de plusieurs grands facteurs qui ont œuvré à transformer le
                  visage
                  de l’économie béninoise et accélérer la mue du secteur privé tout entier.
                  L’avènement depuis 2016, d’un nouveau gouvernement a accéléré la rapidité et la profondeur de cette
                  transformation.
                  La crise, née de la pandémie du Coronavirus, a déstructuré les modèles d’affaires préétablis et
                  désorganisé l’ensemble des positionnements et trajectoires des entreprises.
                </p>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  De nombreuses autres influences économiques, politiques et sociétales continuent encore d’avoir un
                  impact sur le secteur privé, obligeant par la même occasion, la CCI-Bénin à s’adapter pour mieux
                  servir.
                  Les années à venir poseront des défis nouveaux et uniques aux entreprises du pays et à notre
                  Institution. Au fur et à mesure que nous progresserons, nous devrons nous appesantir sur nos succès
                  passés et réajuster nos initiatives futures pour assurer la pertinence continue de la CCI Bénin dans
                  un
                  contexte et un paysage économique toujours plus exigeants.
                </p>
                <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-8">
                  Notre nouveau Plan Stratégique-Vision 2025 décrit une série d’objectifs, d’approches tactiques et de
                  Projets qui garantiront que la CCI Bénin continue de créer de la valeur pour ses mandants et les
                  parties
                  prenantes au développement économique du Bénin. Avec notre Vision 2025, la CCI Bénin peut envisager un
                  avenir ou un positionnement fort, combiné à une stratégie efficace qui garantira la durabilité
                  organisationnelle. Pour cela, nous avons élaboré dix (10) programmes efficaces qui apporteront une
                  contribution mesurable pour assurer la prospérité économique des entreprises du Bénin.
                </p>
                <div class="president h- w-full">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-10 text-center">
          <h4 class="leading-tight text-4xl font-extrabold">Les bases sur lesquelles <br />
            nous travaillons </h4>
          <div class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray">
            Ces valeurs définissent qui nous sommes, <br />
            ce que nous faisons et comment nous le faisons</div>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray px-6 pb-8">
              <div class="-mt-6">
                <div class="flex justify-center">
                  <span class="text-center rounded-md bg-primary p-3 shadow-lg">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <h3 class="mt-8 text-center text-lg font-medium tracking-tight text-gray-900">
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-center text-gray-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="py-20 bg-gray flex justify-center px-3">
      <div class="text-center">
        <h1 class="leading-tight text-4xl font-extrabold mb-6">
          Boostez votre productivité <br />
          avec la CCI-Bénin
        </h1>
        <p class="text-md
                md:text-lg
                tracking-tight
                leading-7
                text-subtitlegray mb-6">

        </p>
        <div class="sm:block md:flex justify-center flex-wrap mr-0 md:mr-4">
          <div>
            <button type="button" class="btn btn-primary bg-primary text-white hover:text-primary hover:bg-white mr-0 md:mr-4 mb-4 ">
            Télécharger maintenant
          </button>
          </div>
          <div>
            <button type="button" class="btn btn-light text-primary hover:text-white hover:bg-primary mb-4">
            Voir tous les documents
          </button>
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
      current_tab: "who_we_are",
      features: [
        {
          name: "Le travail d’équipe",
          description: "Une équipe motivée et engagée à vous apporter toutes les ressources nécessaires pour prospérer dans votre business."
        },
        {
          name: "La proximité",
          description: "Toujours plus proche de vous pour un soutien fort en matière de stratégie, de structuration  et d’organisation."
        },
        {
          name: "La confiance",
          description:
            "Nous facilitons la collaboration et les regroupements entre entreprises.",
        },
        {
          name: "La passion",
          description:
            "Parce que nous croyons au dynamisme de la jeunesse béninoise, nous soutenons l’entrepreneuriat et l’innovation.",
        },
        {
          name: "L’excellence au rendez-vous",
          description:
            "Dotés de compétences fiables, nous créons de la valeur et de la richesse dans les communautés.",
        },
        {
          name: "Le suivi des entrepreneurs",
          description:
            "Attentifs à la progression de votre business, nous défendons continuellement les intérêts de votre entreprise.",
        }
      ]
    }
  },
};
</script>
    
<style lang="scss" scoped>
.barner {
  background: url("../assets/images/cci.jpeg") !important;
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

.president {
  background: url("../assets/images/president.jpeg");
  background-size: cover !important;
  background-position: top !important;
}
</style>
  
  