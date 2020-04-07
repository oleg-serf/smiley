<template>
  <div>
    <breadcrumbs />

    <section class="latest-news-section">
      <div class="container">
        <banner color="#F36E24" background="/img/homepage/banner-news.jpg">
          <template v-slot:name>news</template>
          <!-- <template v-slot:title>Everyday heroes making the world a happier place</template>
          <template
            v-slot:content
          >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</template>-->
          <template v-slot:title>POSITIVE JOURNALISM</template>
          <template
            v-slot:content
          >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</template>
        </banner>
      </div>
    </section>
    <div class="container">
      <div class="news-category">
        <h2 class="news-category__title">Latest news</h2>
        <select class="news-category__dropdown" @change.prevent="goToCategory">
          <option disabled selected>Select goal</option>
          <option v-for="item in news" :key="item.slug + item.id" :value="item.slug">{{item.name}}</option>
        </select>
      </div>
    </div>
    <section class="news-grid news-grid--featured container" v-if="latest.length > 0">
      <article-project
        v-for="article in latest"
        :key="article.slug"
        :title="article.title"
        :description="article.description"
        :goal="article.goals[0].name"
        :date="article.published_at"
        :background="article.cover_image"
        :link="'/news/' + article.slug"
      />
      <article-project
        v-for="article in latest"
        :key="article.slug"
        :title="article.title"
        :description="article.description"
        :goal="article.goals[0].name"
        :date="article.published_at"
        :background="article.cover_image"
        :link="'/news/' + article.slug"
      />
    </section>
    <section
      class="news-category-section container"
      v-for="item in news"
      :key="item.slug + item.id"
    >
      <div class="news-category">
        <h2 class="news-category__title">{{ item.name }}</h2>
        <router-link :to="'/news/category/' + item.slug" class="news-category__link">
          <span></span>Read more
        </router-link>
      </div>
      <div class="news-grid">
        <article-project
          v-for="article in item.blog_posts_latest"
          :key="article.slug"
          :title="article.title"
          :description="article.description"
          :goal="item.name"
          :date="article.published_at"
          :background="article.cover_image"
          :link="'/news/' + article.slug"
        />
      </div>
      <div class="more-link-wrap"></div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";

import router from "@/router";

import Breadcrumbs from "@/components/Breadcrumbs";
import Banner from "@/components/homepage/Banner.vue";
import ArticleProject from "@/components/articles/ArticleAsProject.vue";

import Footer from "@/components/Footer";
import axios from "@/axios-auth";

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
    ArticleProject,
    Footer
  }
};
</script>


<style lang="scss" scoped>
// TODO: Make responsive
// TODO: Move styles
@import "@/scss/blocks/_homepage-news-grid";

.news-category-section {
  margin-bottom: 0px;
}

/* News Section Title with Read More button */
.news-category {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 16px;
  padding-bottom: 16px;

  .news-category__title {
    color: #393939;
    font-family: "Montserrat Bold", sans-serif;
    @include font-size(2rem);
    text-transform: uppercase;
    line-height: 1;
    margin: 0px;
  }

  .news-category__link {
    color: #1a1a1a;
    font-family: "Montserrat Bold", sans-serif;
    font-size: 1rem;
    line-height: 1;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    padding-right: 45px;
    height: 100%;

    &:hover {
      span {
        right: 0;
      }
    }

    span {
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      right: 7px;
      width: 20px;
      height: 2px;
      background-color: #000;
      transition: 0.25s ease-in-out;

      &:before,
      &:after {
        position: absolute;
        content: "";
        height: 2px;
        width: 8px;
        right: 0;
        background-color: #000;
      }
      &:before {
        transform: rotate(50deg);
        top: -4px;
      }
      &:after {
        transform: rotate(-50deg);
        top: 4px;
      }
    }
  }

  .news-category__dropdown {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 50px;
    background-color: #fff;
    font-family: "Montserrat Bold", sans-serif;
  }
}

.news-grid--featured {
  grid-gap: 5px;
  .project-article:first-child {
    grid-row: 1 / span 2 !important;
  }
  .project-article:last-child {
    display: none;
    // TODO: Remove this upon api fix;
  }
}
</style>