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
    <div class="smiley-pagination">
      <paginate
        :page-count="totalPages"
        :click-handler="loadPageNumb"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :prev-class="'smiley-pagination-back'"
        :next-class="'smiley-pagination-next'"
        :container-class="'app-pagination'"
      ></paginate>
    </div>
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
      news: {},
      pages: 0
    };
  },
  computed: {
    totalPages() {
      return this.pages || 0;
    }
  },
  methods: {
    loadPageNumb(pageNumb) {
      axios
        .get("/users/feed?page=" + pageNumb)
        .then(res => {
          this.news = res.data.posts;
          this.pages = res.data.pages_count;

          window.scrollTo(0, 0);
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    axios
      .get("/users/feed")
      .then(res => {
        this.news = res.data.posts;
        this.pages = res.data.pages_count;
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