<div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="@/assets/16-assessment-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                  52.378
                </p>
              </dt>
              <dd class="mt-2 text-base text-sp">
                Entreprises créées <br> au Bénin en 2021
              </dd>
            </div>
            <div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="@/assets/work-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                  114 ANS
                </p>
              </dt>
              <dd class="mt-2 text-base text-sp">
                D’activités de la CCI Bénin <br> au service du secteur privé
              </dd>
            </div>
            <div>
              <dt>
                <div
                  class="flex items-center justify-center bg-white h-12 w-12 rounded-md text-white"
                >
                  <img
                    class="h-8 w-auto sm:h-10 hover:animate-ping"
                    src="@/assets/199-attribution-solid.svg"
                    alt=""
                  />
                </div>
                <p class="mt-5 text-2xl leading-6 font-bold text-gray-900">
                  60
                </p>
              </dt>
              <dd class="mt-2 text-base text-sp">
                Elus consulaires
              </dd>
            </div>




pour footer
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
          </ul>
        </div>

                      <router-link class="text-base text-white hover:text-white" :to="component.link">
                {{ component.text }}
              </router-link>