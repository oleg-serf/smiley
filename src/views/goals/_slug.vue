<template>
  <div>
    <breadcrumbs ref="breadcrumbs" />

    <div class="container">
      <banner color="#4C9F38" background="/img/homepage/banner-goals.jpg">
        <template v-slot:title>Stronger together</template>
        <template v-slot:logo>
          <img src="/img/homepage/global-goals.png" style="width: 200px" />
        </template>

        <template v-slot:title>{{goal.name}}</template>
        <template v-slot:content>{{goal.description}}</template>
      </banner>
    </div>

    <section class="news-category-section latest-articles container">
      <div class="news-grid">
        <article-item v-for="article in posts" :key="article.slug" :information="article" />
      </div>
    </section>

    <div class="smiley-pagination">
      <paginate
        :page-count="pagination.totalPages"
        :click-handler="goToPage"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :prev-class="'smiley-pagination-back'"
        :next-class="'smiley-pagination-next'"
        :container-class="'app-pagination'"
      >
        <span slot="breakViewContent">...</span>
      </paginate>
    </div>

    <br />
    <br />

    <hr />
    <br />
    <br />

    <section class="container news-grid" v-if="events.length > 0">
      <event-card :event="event" lass="talk-card" v-for="event in events" :key="event.id" />
    </section>
    <hr />
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Breadcrumbs from "@/components/Breadcrumbs";
import Banner from "@/components/homepage/Banner.vue";
import ArticleItem from "@/components/news/Article.vue";

import EventCard from "@/components/events/Event-Card";

import Footer from "@/components/Footer";

export default {
  data() {
    return {
      goal: {},

      title: "",
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1
      },
      events: []
    };
  },
  mounted() {
    let slug = this.$route.params.slug;

    axios
      .get("/goals/" + slug)
      .then(res => {
        this.posts = res.data.posts;

        this.events = res.data.events;

        console.log("Goal page", res);

        console.log("loaded", this.events);

        this.goal = res.data.goal;
      })
      .catch(error => console.log(error));
  },
  methods: {
    goToPage(pageNumb) {
      let slug = this.$route.params.slug;

      let url = slug == "all" ? "/news" : "/news/category/" + slug;

      axios
        .get(url + "?page=" + pageNumb)
        .then(res => {
          this.posts = res.data.posts;
          this.pagination.totalPages = res.data.pages_count;
        })
        .catch(error => console.log(error));
    }
  },
  components: {
    Breadcrumbs,
    Banner,
    ArticleItem,
    Footer,
    EventCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_homepage-news-grid";
@import "@/scss/sections/_talks-card";

.latest-news-section--category {
  width: 100%;
  max-width: 100%;
  margin-bottom: 30px;

  .latest-news-wrap {
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;

    .title-colored-block {
      height: auto;
      width: 100%;
      text-align: center;

      .smiley-news-main-title {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        transform: none !important;
        padding-left: 30px;
        position: static !important;
      }
    }
  }
}

.smiley-img-wrap {
  height: 255px;
}
</style>