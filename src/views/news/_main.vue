<template>
  <div class="news">
    <section
      class="news-category-section container"
      v-for="item in news"
      :key="'news-item-' + item.slug"
    >
      <div class="news-category">
        <h2 class="news-category__title">{{ item.prefix }} {{ item.name }}</h2>
        <VSearch
          @submit.prevent="find"
          placeholder="Search topic..."
          v-model="search"
        />
      </div>
      <div class="news-gallery">
        <NewsCard
          class="news-gallery__card"
          v-for="article in item.latest_news"
          :key="article.slug"
          :article="article"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import { VSearch } from "@/components/app";
import Banner from "@/components/homepage/Banner.vue";
import NewsCard from "@/components/cards/NewsCard.vue";

export default {
  name: "News",
  components: {
    Banner,
    NewsCard,
    VSearch,
  },
  data() {
    return {
      latest: [],
      news: [],
      search: "",
    };
  },
  created() {
    console.log("news triggered");
    axios
      .get("/news/latest")
      .then((res) => {
        console.log("news", res);

        this.latest = res.data.latest_news;
        this.news = res.data.featured_goals;
      })
      .catch((error) => console.error(error));
  },
  methods: {
    goToCategory(event) {
      router.push({
        name: "news-category-item",
        params: { slug: event.target.value },
      });
    },
    find() {
      router.push({
        name: "news-search",
        params: { keyword: this.search },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  margin-top: 60px;
}

.news-category-section {
  margin-bottom: 100px;
}

.news-category {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ffe300;
  margin-bottom: 16px;
  padding-bottom: 24px;

  .news-category__title {
    color: black;
    font-family: "Gotham Bold";
    font-size: 30px;
    line-height: 40px;
  }
}

.news-gallery {
  display: flex;

  .news-gallery__card {
    margin-left: 25px;
    margin-right: 25px;

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
