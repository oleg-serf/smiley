<template>
  <div>
    <breadcrumbs />

    <section class="latest-news-section">
      <div class="latest-news-wrap">
        <div class="title-colored-block">
          <div class="smiley-news-main-title">
            <img src="img/homepage/smiley-main-title.svg" alt="smiley talks" />
            <P>News</P>
          </div>
          <h2 class="news-block-title">Everyday heroes making the world a happier place</h2>
          <p
            class="news-block-descr"
          >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</p>
        </div>

        <div class="smiley-news-center main-title">
          <h2>
            Latest news
            <router-link :to="'/news/category/all'" class="read-more-link">
              <span></span>Read more
            </router-link>
          </h2>
          <router-link :to="'/news/' + topNews.slug" class="article-item" v-if="topNews">
            <div class="smiley-img-wrap">
              <div class="smiley-img">
                <img
                  :src="$settings.images_path.news  +'m_'+topNews.cover_image"
                  :alt="topNews.title"
                  :title="topNews.title"
                />
              </div>
            </div>
            <div class="article-descr">
              <div class="article-date-location">
                <div class="article-date">{{topNews.published_at}}</div>
                <div class="article-location"></div>
              </div>
              <div class="article-title">{{topNews.title}}</div>
              <div class="article-subtitle">{{topNews.description}}</div>
            </div>
          </router-link>
        </div>

        <div class="smiley-news-right" v-if="latestNews">
          <div class="wrap-for-category-select">
            <select
              class="category-filter"
              name="category"
              v-if="categories.length > 0"
              @change="goToCategory($event)"
            >
              <option selected disabled>Choose a category</option>
              <option
                v-for="category in categories"
                :key="'news-c-'+category.id"
                :value="category.slug"
              >{{ category.name }}</option>
            </select>
            <div class="select-arrows">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0002 8.00025C21.0002 8.25625 20.9023 8.51225 20.7073 8.70725L12.7072 16.7072C12.3162 17.0982 11.6842 17.0982 11.2933 16.7072L3.29325 8.70725C2.90225 8.31625 2.90225 7.68425 3.29325 7.29325C3.68425 6.90225 4.31625 6.90225 4.70725 7.29325L12.0002 14.5862L19.2932 7.29325C19.6842 6.90225 20.3162 6.90225 20.7073 7.29325C20.9023 7.48825 21.0002 7.74425 21.0002 8.00025Z"
                />
              </svg>
            </div>
          </div>

          <div class="right-articles-wrap">
            <router-link
              :to="'/news/' + news.slug"
              class="article-item"
              v-for="(news, index) in  latestNews"
              :key="index"
            >
              <div class="smiley-img-wrap">
                <div class="smiley-img">
                  <img
                    :src="$settings.images_path.news  +'m_'+news.cover_image"
                    :alt="news.title"
                    :title="news.title"
                  />
                </div>
              </div>
              <div class="article-descr">
                <div class="article-date-location">
                  <div class="article-date">{{news.published_at}}</div>
                  <div class="article-location"></div>
                </div>
                <div class="article-title">{{news.title}}</div>
                <div class="article-subtitle">{{news.description}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section
      class="news-category-section container"
      v-for="featured_item in categories_featured"
      :key="featured_item.name + featured_item.id"
      v-if="featured_item.blog_posts_latest.length > 0"
    >
      <div class="news-category-container">
        <h2 class="news-category-title">{{ featured_item.name }}</h2>

        <router-link
          :to="'/news/' + article.slug"
          class="article-item"
          v-for="article in featured_item.blog_posts_latest"
          :key="article.id+article.title"
        >
          <news-item :article="article" />
        </router-link>

        <div class="more-link-wrap">
          <router-link :to="'/news/category/' + featured_item.slug" class="read-more-link">
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

import NewsItem from "@/components/news/News-Item";

import Footer from "@/components/Footer";
import axios from "../axios-auth";

export default {
  name: "News",
  components: {
    Footer
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("news", {
      latestNews: state => state.news.filter((item, index) => index > 0),
      topNews: state => state.news[0],
      categories: state => state.categories,
      categories_featured: state => state.categories_featured
    })
  },
  mounted() {
    this.$store.dispatch("news/get_news_latest");
    this.$store.dispatch("news/get_categories");
  },
  methods: {
    goToCategory(event) {
      router.push({ path: `/news/category/${event.target.value}` });
    }
  },
  components: {
    Breadcrumbs,
    NewsItem,
    Footer
  }
};
</script>


<style lang="scss">
.main-title.smiley-news-center h2 {
  display: flex !important;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

@import "@/scss/components/_article-item";

@import "@/scss/sections/_latest-news";

@import "@/scss/sections/_news-category-section";
</style>