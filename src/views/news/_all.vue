<template>
  <div>
    <!-- <breadcrumbs /> -->

    <section class="news-category-section container">
      <div class="news-category">
        <h2 class="section__title">Latest news</h2>
      </div>
      <div class="news-grid">
        <news-card v-for="article in latest_news" :key="article.slug" :article="article" />
      </div>
      <div class="more-link-wrap"></div>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

import Breadcrumbs from "@/components/Breadcrumbs";

import NewsCard from "@/components/cards/NewsCard.vue";

import Footer from "@/components/Footer";

export default {
  name: "AllNews",
  components: {
    Breadcrumbs,
    NewsCard,
    Footer
  },
  data() {
    return {
      latest_news: []
    };
  },
  mounted() {
    axios
      .get("/news")
      .then(res => {
        console.log(res);
        this.latest_news = res.data.news;
        this.pages = res.data.pages_count;

        this.title = res.data.goal.name;

        document.title = this.title + " | Smiley Movement";
        // this.$refs.breadcrumbs.breadcrumbs[
        //   this.$refs.breadcrumbs.breadcrumbs.length - 1
        // ].meta.title = this.title;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_homepage-news-grid";

.news-category-section {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.news-grid {
  @include lgMax {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mdMax {
    grid-template-columns: repeat(1, 1fr);
  }
}

.section {
  &__title {
    font-family: "Montserrat SemiBold";
    @include font-size(2rem);
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
}
</style>