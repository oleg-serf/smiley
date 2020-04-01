<template>
  <div>
    <breadcrumbs />

    <section class="latest-news-section">
      <div class="container">
        <banner color="#F36E24" background="/img/homepage/banner-news.jpg">
          <template v-slot:name>news</template>
          <template v-slot:title>Everyday heroes making the world a happier place</template>
          <template
            v-slot:content
          >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</template>
        </banner>
      </div>
    </section>
    <section class="news-grid container" v-if="latest.length > 0">
      <article-item v-for="article in latest" :key="article.slug" :information="article" />
    </section>
    <section
      class="news-category-section container"
      v-for="item in news"
      :key="item.name + item.id"
    >
      <div class="news-category-container">
        <h2 class="news-category-title">{{ item.name }}</h2>

        <div class="news-grid">
          <article-item
            v-for="(article, index) in item.blog_posts_latest"
            :key="article.slug+'-'+index"
            :information="article"
          />
        </div>
        <div class="more-link-wrap">
          <router-link :to="'/news/category/' + item.slug" class="read-more-link">
            <span></span>Read more
          </router-link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";

import router from "@/router";

import Breadcrumbs from "@/components/Breadcrumbs";
import Banner from "@/components/homepage/Banner.vue";

import Footer from "@/components/Footer";
import axios from "@/axios-auth";

import ArticleItem from "@/components/news/Article.vue";

export default {
  name: "News",
  data() {
    return {
      latest: [],
      news: []
    };
  },
  mounted() {
    axios
      .get("/news/latest")
      .then(res => {
        console.log("news", res);

        this.latest = res.data.latest_news;
        this.news = res.data.featured_goals;
      })
      .catch(error => console.error(error));
  },
  methods: {
    goToCategory(event) {
      router.push({ path: `/news/category/${event.target.value}` });
    }
  },
  components: {
    Breadcrumbs,
    Banner,
    ArticleItem,
    Footer
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/components/_article-item";

@import "@/scss/sections/_latest-news";

@import "@/scss/sections/_news-category-section";

@import "@/scss/blocks/_homepage-news-grid";

.news-category-section {
  margin-bottom: 0px;
}
</style>