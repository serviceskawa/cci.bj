<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main>
    <Notifications
      :notif="notif"
      v-if="notif.type !== ''"
      @close="notif.type = ''"
    />
    <div class="barner flex items-center p-4 md:px-10 lg:px-20">
      <div>
        <h6
          class="
            text-primary text-base
            leading-6
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Le blog
        </h6>
        <h1
          class="
            text-primary text-4xl
            leading-none
            font-extrabold
            tracking-tight
          "
        >
          <span class="text-white">une CCI au service de votre </span> <br />
          stratégie à l'international
        </h1>
      </div>
    </div>
    <div class="p-6 md:p-10 lg:p-12 xl:p-20">
      <div class="mx-auto pb-10 flex justify-center flex-wrap items-center">
        <div class="relative mr-2 sm:mr-5 mb-3">
          <input
            type="text"
            class="
              w-full
              py-2
              px-8
              text-base
              focus:border-white
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-gray-800
              text-gray-900
              placeholder-gray-500
              focus:placeholder-gray-400 focus:outline-none
            "
            placeholder="Rechercher un mot clé"
            v-model="search.value"
          />
          <svg
            class="absolute left-2 top-2.5"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>
        <button
          class="btn bg-white text-primary mb-3"
          @click="searchSomething()"
          :disabled="search.button_loader"
        >
          Filtrer
        </button>
      </div>
      <div v-if="search.mode == false">
        <div
          class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          v-if="loader == true"
        >
          <ArticleCard
            class="mb-8"
            v-for="(article, index) in 20"
            :key="index"
            :on_loading="loader"
          />
        </div>
        <div v-else-if="loader == false">
          <div>
            <div
              class="mb-16"
              v-for="(n, index) in $store.state.categories"
              :key="index + 'n'"
            >
              <h1
                class="
                  text-blue text-3xl
                  leading-10
                  font-extrabold
                  tracking-tight
                  mb-3
                "
              >
                {{ n.name }}
              </h1>
              <div v-if="n.articles_datas !== undefined">
                <div
                  class="flex justify-center items-center py-12"
                  v-if="n.articles_datas.data.length == 0"
                >
                  <h1 class="">
                    Aucun article disponible pour cette catégorie
                  </h1>
                </div>
                <div v-else>
                  <div
                    class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    <ArticleCard
                      class="mb-8"
                      v-for="(article, index) in n.articles_datas.data"
                      :key="'article_' + index + n.id + 'ar'"
                      :branch="article"
                    />
                  </div>
                  <div class="flex justify-end">
                    <div
                      class="flex"
                      v-if="
                        n.articles_datas.total > n.articles_datas.data.length
                      "
                    >
                      <a
                        @click="
                          getCategoryArticles(
                            n.id,
                            index,
                            n.articles_datas.current_page - 1
                          )
                        "
                        v-if="n.articles_datas.current_page > 1"
                        class="mr-4"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="23.5901"
                            y="24"
                            width="23.41"
                            height="24"
                            rx="11.705"
                            transform="rotate(-180 23.5901 24)"
                            fill="#E9E9E9"
                          />
                          <path
                            d="M14.1801 18L15.5901 16.59L11.0101 12L15.5901 7.41L14.1801 6L8.18009 12L14.1801 18Z"
                            fill="#F7F9F9"
                          />
                        </svg>
                      </a>
                      <a
                        @click="
                          getCategoryArticles(
                            n.id,
                            index,
                            n.articles_datas.current_page + 1
                          )
                        "
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.590088"
                            width="23.41"
                            height="24"
                            rx="11.705"
                            fill="#FAE8E0"
                          />
                          <path
                            d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z"
                            fill="#DD7A4B"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="(search.mode = true)">
        <div
          class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          v-if="search.state_loader == true"
        >
          <ArticleCard
            class="mb-8"
            v-for="(article, index) in 20"
            :key="index"
            :on_loading="search.state_loader"
          />
        </div>
        <div v-else-if="search.state_loader == false">
          <h1
            class="
              text-blue text-3xl
              leading-10
              font-extrabold
              tracking-tight
              mb-3
            "
          >
            Résultats pour la recherche "{{ search.value }}"
          </h1>
          <div v-if="search.datas.data.length > 0">
            <ArticleCard
              class="mb-8"
              v-for="(article, index) in search.datas.data"
              :key="'search' + index"
              :branch="article"
            />
            <div class="flex justify-end">
              <div
                class="flex"
                v-if="search.datas.total > search.datas.data.length"
              >
                <a
                  @click="
                    load_search_datas(
                      search.value,
                      search.datas.current_page - 1
                    )
                  "
                  v-if="search.datas.current_page > 1"
                  class="mr-4"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="23.5901"
                      y="24"
                      width="23.41"
                      height="24"
                      rx="11.705"
                      transform="rotate(-180 23.5901 24)"
                      fill="#E9E9E9"
                    />
                    <path
                      d="M14.1801 18L15.5901 16.59L11.0101 12L15.5901 7.41L14.1801 6L8.18009 12L14.1801 18Z"
                      fill="#F7F9F9"
                    />
                  </svg>
                </a>
                <a
                  @click="
                    load_search_datas(
                      search.value,
                      search.datas.current_page + 1
                    )
                  "
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.590088"
                      width="23.41"
                      height="24"
                      rx="11.705"
                      fill="#FAE8E0"
                    />
                    <path
                      d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z"
                      fill="#DD7A4B"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="flex justify-center items-center py-12"
            v-else-if="search.datas.length == 0"
          >
            <h1 class="">Aucun résultat pour cette recherche</h1>
          </div>
        </div>
      </div>
    </div>
    <NewsLettersBox
      @sucess="update_notif('success')"
      @error="update_notif('error')"
    />
  </main>
</template>
<script>
import NewsLettersBox from "@/components/NewsLettersBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import Notifications from "@/components/Notifications.vue";
import { services } from "@/api";
export default {
  components: {
    NewsLettersBox,
    ArticleCard,
    NewsLettersBox,
    Notifications,
  },
  data: () => ({
    notif: {
      type: "",
      title: "",
      description: "",
    },
    loader: true,
    search: {
      value: "",
      mode: false,
      button_loader: false,
      state_loader: false,
      datas: [],
    },
    news: [],
    configs: "",
  }),
  async created() {
    this.configs = sessionStorage.getItem("configs");
    if (this.configs !== undefined && this.configs !== null) {
      this.configs = JSON.parse(this.configs);
    }
    this.load_categories();
    this.load_articles();
  },
  methods: {
    async searchSomething() {
      if (this.search.value.trim() == "") {
        (this.search.value = ""),
          (this.search.mode = false),
          (this.search.button_loader = false),
          (this.search.state_loader = false),
          (this.search.datas = []);
        this.load_categories(), this.load_articles();
      } else {
        this.search.button_loader = true;
        this.search.state_loader = true;
        this.search.mode = true;
        this.load_search_datas(this.search.value, 1);
      }
    },
    async load_search_datas(value, current_page) {
      try {
        await services
          .search_an_article(value, current_page)
          .then((response) => {
            this.search.datas = response.data;
            this.search.button_loader = false;
            this.search.state_loader = false;
          });
      } catch (error) {}
    },
    async load_categories() {
      this.loader = true;
      try {
        await services.get_categories().then((response) => {
          if (response.status === 200) {
            this.$store.state.categories = response.data.data;
            for (let index = 0; index < response.data.data.length; index++) {
              this.getCategoryArticles(response.data.data[index].id, index);
            }
          }
        });
      } catch (error) {
        this.loader = false;
      }
    },
    async getCategoryArticles(category_id, category_index, current_page) {
      try {
        await services
          .getCategory_articles(category_id, current_page)
          .then((response) => {
            if (response.status == 200) {
              this.$store.state.categories[category_index].articles_datas =
                response.data;
              this.$store.state.categories[category_index].articles_datas.data =
                this.$store.state.categories[
                  category_index
                ].articles_datas.data.map((element) => {
                  return {
                    ...element,
                    news_publication_date:
                      element.news_publication_date == null ||
                      element.news_publication_date.trim() == ""
                        ? element.created_at
                        : element.news_publication_date,
                    photo: this.configs.image_url + "/" + element.photo,
                  };
                });
            }
          });
        this.loader = false;
      } catch (error) {
        this.loader = false;
      }
    },
    async load_articles() {
      try {
        await services.get_articles_by_categories().then((response) => {
          this.news = response.data;
          for (let i = 0; i < this.news.length; i++) {
            for (let j = 0; j < this.news[i].news.length; j++) {
              this.news[i].news[j].photo =
                this.configs.image_url + "/" + this.news[i].news[j].photo;
            }
          }
        });
      } catch (error) {
        this.loader = false;
      }
    },
    update_notif(type) {
      if (type == "success") {
        this.notif.type = "success";
        this.notif.title = "Effectuée";
        this.notif.description = this.$store.state.current_notif_message;
      } else {
        this.notif.type = "error";
        this.notif.title = "Erreur";
        this.notif.description =
          "Une erreur s'est produite. Veuillez réessayer.";
      }
      setTimeout(() => {
        this.notif.type = "";
      }, 6000);
    },
  },
};
</script>

<style scoped>
.barner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/actu_one.jpeg");
  height: 600px !important;
  background-position: center !important;
}

.partenaire {
  height: 140px !important;
}

input {
  min-width: 280px !important;
  max-width: 420px !important;
}

input,
button {
  height: 40px !important;
}
</style>
