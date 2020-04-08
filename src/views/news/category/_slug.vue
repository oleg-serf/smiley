<template>
  <div>
    <breadcrumbs />

    <section class="latest-news-section">
      <div class="container">
        <banner color="#F36E24" background="/img/homepage/banner-news.jpg">
          <template v-slot:name>news</template>
          <template v-slot:title>{{goal.name}}</template>
          <template v-slot:content v-if="goal.description != null">{{goal.description}}</template>
        </banner>
      </div>
    </section>

    <section class="news-grid container" v-if="posts.length > 0">
      <article-project
        v-for="article in posts"
        :key="article.slug"
        :article="article"
        :manualGoal="goal.name"
      />
    </section>

    <!-- TODO: Add pagination -->

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
      goal: {},
      posts: [],
      pages: 0
    };
  },
  mounted() {
    let slug = this.$route.params.slug;
    let url = slug == "all" ? "/news" : "/news/category/" + slug;
    axios
      .get(url)
      .then(res => {
        console.log("Goal (news)", res);
        this.goal = res.data.goal;
        this.posts = res.data.posts;
        this.pages = res.data.pages_count;

        this.title = res.data.goal.name;

        document.title = this.title + " | Smiley Movement";
        // this.$refs.breadcrumbs.breadcrumbs[
        //   this.$refs.breadcrumbs.breadcrumbs.length - 1
        // ].meta.title = this.title;
      })
      .catch(error => console.log(error));
  },
  methods: {},
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
</style>