<template>
  <div>
    <Breadcrumbs />
    <section class="news-category-section container">
      <div class="news-category-container">
        <router-link
          :to="'/news/' + article.slug"
          class="article-item"
          v-for="article in news"
          :key="article.id+article.title"
        >
          <news-item :article="article" />
        </router-link>
      </div>
    </section>
    <br />
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsItem from "@/components/news/News-Item";

export default {
  data() {
    return {
      news: null
    };
  },
  mounted() {
    axios
      .get("/news/latest")
      .then(res => {
        this.news = res.data.latest_news;
      })
      .catch(error => console.error(error));
  },
  components: {
    Footer,
    Breadcrumbs,
    NewsItem
  }
};
</script>

<style lang="scss">
@import "@/scss/components/_article-item";
@import "@/scss/sections/_news-category-section";
</style>