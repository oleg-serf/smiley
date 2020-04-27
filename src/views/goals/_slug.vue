<template>
  <div>
    <div class="container">
      <banner :color="goal.colour" background="/img/goals-banner.jpg">
        <template v-slot:logo>
          <img src="/img/un-goals-white.png" style="width: 200px" />
        </template>

        <template
          v-slot:title
        >News, Events and Projects linked to Goal {{goal.prefix}} {{goal.name}}</template>
      </banner>
    </div>

    <section class="content-block container">
      <div class="news-category">
        <h2 class="news-category__title">Latest News</h2>
        <select class="news-category__dropdown" @change.prevent="goToCategory">
          <option disabled selected>Select goal</option>
          <option v-for="item in goals" :key="item.slug + item.id" :value="item.slug">{{item.name}}</option>
        </select>
      </div>
      <div class="news-category-section latest-articles">
        <div class="news-grid">
          <news-card v-for="article in posts" :key="article.slug" :article="article" />
        </div>
      </div>
    </section>

    <!-- <div class="smiley-pagination">
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
    </div>-->
    <section class="content-block container">
      <div class="section-title">
        <h2 class="section-title__title">Talks:</h2>
      </div>
      <div class="news-grid" v-if="events.length > 0">
        <event-card v-for="event in events" :key="'event-'+event.id" :event="event" />
      </div>
    </section>

    <section class="content-block container">
      <div class="section-title">
        <h2 class="section-title__title">Projects:</h2>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

import Breadcrumbs from "@/components/Breadcrumbs";
import Banner from "@/components/homepage/Banner.vue";

import NewsCard from "@/components/cards/NewsCard.vue";

import EventCard from "@/components/cards/EventCard.vue";

import Footer from "@/components/Footer";

export default {
  data() {
    return {
      goal: {},

      goals: [],

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

    axios.get("/goals").then(res => {
      this.goals = res.data.goal_categories[0].goals;
    });
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
    },
    goToCategory(event) {
      router.push({
        name: "news-category-item",
        params: { slug: event.target.value }
      });
    }
  },
  components: {
    Breadcrumbs,
    Banner,
    NewsCard,
    Footer,
    EventCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_homepage-news-grid";
@import "@/scss/sections/_talks-card";

.content-block {
  padding-bottom: 10px;
  position: relative;

  &:not(:last-of-type) {
    &::after {
      width: calc(100% - 15px);
      left: 15px;
      bottom: 0px;
      height: 1px;
      display: block;
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

.section-title {
  margin-top: 20px;
  margin-bottom: 30px;

  .section-title__title {
    @include font-size(2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    margin-bottom: 0px;
  }
  .section-title__subtitle {
    margin-top: 0px;
    font-family: "Montserrat Regular", sans-serif;
    @include font-size(1.2rem);
  }
}

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

/* News Section Title with Read More button */
.news-category {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 16px;
  padding-bottom: 16px;

  .news-category__title {
    @include font-size(2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    color: #393939;
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
    height: 46px;
    background-color: #fff;
    border: 1px solid #e0e6eb !important;

    font-family: "Montserrat Regular", sans-serif;

    @include lgMax {
      width: 100%;
    }
  }

  @include lgMax {
    flex-direction: column;
  }
}
</style>