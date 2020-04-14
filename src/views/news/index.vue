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
        <form
          class="news-category__search-form"
          @submit.prevent="$swal({text: 'News search test'})"
        >
          <input type="text" minlength="3" required />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <select class="news-category__dropdown" @change.prevent="goToCategory">
          <option disabled selected>Select goal</option>
          <option v-for="item in news" :key="item.slug + item.id" :value="item.slug">{{item.name}}</option>
        </select>
      </div>
    </div>
    <section class="news-grid news-grid--featured container" v-if="latest.length > 0">
      <news-card v-for="article in latest" :key="article.slug" :article="article" />
    </section>
    <section
      class="news-category-section container"
      v-for="item in news"
      :key="'news-item-'+item.slug"
    >
      <div class="news-category">
        <h2 class="news-category__title">{{item.prefix}} {{ item.name }}</h2>
        <router-link :to="'/news/category/' + item.slug" class="news-category__link">
          <span></span>Read more
        </router-link>
      </div>
      <div class="news-grid">
        <news-card v-for="article in item.latest_news" :key="article.slug" :article="article" />
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
import NewsCard from "@/components/cards/NewsCard.vue";

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
  margin-top: 30px;
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
    @include font-size(1rem);
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
    height: 46px;
    background-color: #fff;
    font-family: "Montserrat Regular", sans-serif;
  }
}

.news-grid--featured {
  grid-gap: 5px;
  .project-article:first-child {
    grid-row: 1 / span 2 !important;
  }
}

.news-category__search-form {
  max-width: 382px;
  width: 100%;
  display: flex;

  input {
    border: 1px solid #e0e6eb !important;
    flex: 1;
    font-size: 1rem;
    height: 46px;
    border-radius: 0px !important;
    padding: 5px 25px;
  }

  button[type="submit"] {
    border: 1px solid #e0e6eb !important;
    margin-left: -1px;
    color: #393939;
    background-color: #fff;
    padding: 5px 25px;
    cursor: pointer;
  }
}
</style>