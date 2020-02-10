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
              <div class="article-title">{{topNews.slug}}</div>
              <div class="article-subtitle">{{topNews.title}}</div>
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
                <div class="article-title">{{news.slug}}</div>
                <div class="article-subtitle">{{news.title}}</div>
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
//---------- ARTICLE ITEM

.article-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  .smiley-img-wrap {
    position: relative;
    .icon-wrap {
      background-color: #fff;
      height: 105px;
      width: 105px;
      position: absolute;
      box-sizing: border-box;
      bottom: 0;
      right: 0;
      padding-top: 2px;
      padding-left: 5px;
      overflow: hidden;
      img {
        width: 105px;
      }
    }
  }
  img {
    width: 100%;
  }
  @include md {
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @include xxl {
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 43px;
    .smiley-img-wrap {
      width: 100%;
    }
    img {
      margin-bottom: 0;
    }
  }
  .article-descr {
    margin-top: 14px;
    padding: 0 0 17px 0;
    @include xxl {
      margin-top: 0;
    }
  }
  .article-date-location {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    @include xxl {
      margin-top: 10px;
    }
    .article-date {
      color: #a1a1a1;
      font: 600 16px/24px "Montserrat SemiBold", sans-serif;
    }
    .article-location {
      color: #d21217;
      font: 600 16px/24px "Montserrat SemiBold", sans-serif;
      text-transform: uppercase;
      margin-left: 10px;
    }
  }
  .article-title {
    color: $default-text;
    font: 700 20px/32px "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .article-subtitle {
    color: $default-text;
    font: 400 16px/20px "Muli", sans-serif;
    padding-right: 15px;
  }
}

.breadcrumbs {
  margin: 13px auto;
  padding: 0 15px;
  max-width: 1560px;
  li {
    display: inline-block;
  }
  .breadcrumbs-item {
    text-decoration: none;
    color: $default-text;
    font: 400 16px/21px "Muli", sans-serif;
  }
  svg {
    margin-right: 5px;
  }
  @include lg {
    margin: 37px auto;
  }
}

.latest-news-section {
  @include xxl {
    margin-bottom: 7px;
  }
  .latest-news-wrap {
    max-width: 1600px;
    margin: 0 auto;
    @include lg {
      display: flex;
      flex-wrap: wrap;
    }
    @include xxl {
      justify-content: space-between;
      flex-wrap: nowrap;
      .title-colored-block {
        text-align: left;
        width: 380px;
        box-sizing: border-box;
      }
    }
    .title-colored-block {
      background-color: $default-orange-btns;
      position: relative;
      text-align: center;
      z-index: 0;
      padding: 0 15px;
      @include lg {
        width: 100%;
        margin-bottom: 20px;
      }
      @include xxl {
        text-align: left;
        padding: 0 60px 0 20px;
        width: 380px;
        height: 526px;
        margin-bottom: 0;
        &:after {
          content: "";
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          left: -30vw;
          background-color: $default-orange-btns;
          z-index: -1;
        }
      }
      .smiley-news-main-title {
        padding-top: 25px;
        img {
          width: 100%;
          max-width: 170px;
        }
        p {
          color: #fff;
          font: 400 14px/17px "Montserrat Regular", sans-serif;
          text-transform: uppercase;
          letter-spacing: 17px;
          position: absolute;
          display: inline-block;
          top: 67px;
          right: 51%;
          margin: 0;
          transform: translateX(50%);
        }
        @include custom-width(1300px) {
          img {
            max-width: 255px;
          }
          p {
            top: 85px;
            letter-spacing: 30px;
          }
        }
        @include xxl {
          padding-top: 55px;
          p {
            top: 118px;
            right: 223px;
          }
        }
      }
      .news-block-title {
        color: #fff;
        font: 700 32px/39px "Montserrat Bold", sans-serif;
        margin: 3px 0 0;
        @include md {
          margin-top: 15px;
          margin-bottom: 16px;
        }
        @include xxl {
          margin: 10px 10px 28px 0;
        }
      }
      .news-block-descr {
        color: #fff;
        font: 400 16px/24px "Muli", sans-serif;
        padding-bottom: 18px;
        margin-top: 12px;
        margin-bottom: 0;
        @include md {
          margin-top: inherit;
        }
      }
    }
    .wrap-for-category-select {
      border-radius: 4px;
      box-sizing: border-box;
      height: 48px;
      position: relative;
      width: 100%;
      @include xxl {
        max-width: 359px;
        margin-right: 15px;
      }
      select {
        padding: 0 48px 0 16px;
        width: 100%;
        border: 1px solid #c7c7c7;
        background-color: transparent;
        border-radius: 4px;
        height: 100%;
        color: #656565;
        font: 400 16px/24px "Muli", sans-serif;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        z-index: 2;
        &::-ms-expand {
          display: none; /* remove arrow IE     */
        }
        &:focus {
          outline: none;
        }
        option {
          color: $default-text;
          &[disabled] {
            color: #656565;
          }
        }
        &:hover + .select-arrows svg {
          fill: #1a1a1a;
        }
      }
      .select-arrows {
        display: flex;
        position: absolute;
        right: 18px;
        top: 14px;
        z-index: -1;
        svg {
          fill: #656565;
        }
      }
    }
    .smiley-news-center {
      max-width: 762px;
      margin: 16px auto 0;
      padding: 0 15px;

      h2 {
        color: $default-text;
        font: 700 32px/48px "Montserrat Bold", sans-serif;
        text-transform: uppercase;
        display: none;
        margin-top: 0;
        margin-bottom: 17px;
        @include lg {
          display: block;
        }
      }
      @include md {
        .smiley-img-wrap {
          height: 35.484vw;
        }
      }
      @include lg {
        width: 60%;
        box-sizing: border-box;
        margin-top: 0;
      }
      @include xxl {
        max-width: 762px;
        width: 100%;
        padding: 0;
        .smiley-img-wrap {
          height: 475px;
        }
      }
      .article-descr {
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      .article-date-location {
        display: none;
      }
      .article-subtitle {
        color: #a1a1a1;
        font: 600 16px/24px "Montserrat SemiBold", sans-serif;
        text-transform: uppercase;
        margin-top: 1px;
        margin-bottom: 9px;
        order: 1;
        @include xxl {
          margin-top: 18px;
        }
      }
      .article-title {
        color: $default-text;
        font: 700 32px/43px "Montserrat Bold", sans-serif;
        text-transform: uppercase;
        order: 2;
        @include md {
          font: 700 32px/48px "Montserrat Bold", sans-serif;
        }
        @include xxl {
          padding-right: 10px;
        }
      }
    }
    .smiley-news-right {
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include md {
        .smiley-img-wrap {
          height: 27.734vw;
        }
      }

      @include lg {
        width: 40%;
        box-sizing: border-box;
        .smiley-img-wrap {
          height: 21.734vw;
        }
      }
      @include xxl {
        width: auto;
        padding: 0;
        .smiley-img-wrap {
          height: 224px;
        }
      }
      .article-item {
        margin-bottom: 5px;
        margin-top: 13px;
        text-decoration: none;
        width: 100%;
        .article-descr {
          display: flex;
          flex-direction: column;
          margin-top: 0;
          padding: 0;
        }
        @include lg {
          margin-top: 0;
          margin-right: 0;
        }
      }
      .article-date-location {
        display: none;
      }
      .article-title {
        color: $default-text;
        font: 700 20px/32px "Montserrat Bold", sans-serif;
        text-transform: uppercase;
        margin-bottom: 4px;
        order: 2;
      }
      .article-subtitle {
        color: #a1a1a1;
        font: 600 14px/24px "Montserrat SemiBold", sans-serif;
        text-transform: uppercase;
        margin-bottom: 8px;
        margin-top: 11px;
        order: 1;
      }
      .right-articles-wrap {
        @include md {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: normal;

          .news-small-item {
            margin-right: 10px;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
        @include lg {
          flex-direction: column;
          box-sizing: border-box;
          margin-top: 17px;
          .article-item {
            margin: 0 0 25px;
          }
        }
        @include xxl {
          flex-direction: column;
          max-width: 359px;
          padding: 0;
          margin-right: 15px;
          .article-item {
            width: 100%;
            img {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

// ---------- SMILEY NEWS CATEGORY

.news-category-title {
  color: $default-text;
  font: 700 18px/48px "Montserrat Bold", sans-serif;
  text-transform: uppercase;
  align-self: flex-start;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  @include md {
    font: 700 32px/48px "Montserrat Bold", sans-serif;
    padding-bottom: 9px;
    margin: 26px 0 28px;
  }
}

.news-category-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  &:last-of-type {
    margin-bottom: 50px;
    @include xl {
      margin-bottom: 97px;
    }
  }
  .news-category-container {
    .article-item {
      .article-descr {
        padding-bottom: 19px;
      }
      .article-location {
        display: none;
      }
      .article-title {
        text-transform: none;
        margin-bottom: 7px;
      }
      .article-subtitle {
        padding-right: 0;
      }
    }
    @include md {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      .article-item {
        width: 48%;
        margin: 0;
        .smiley-img-wrap {
          height: 27.734vw;
        }
      }
    }
    @include lg {
      justify-content: space-between;
      position: relative;
      .article-item {
        max-width: 492px;
        width: 32%;
        margin: 0;
        box-sizing: border-box;
        .smiley-img-wrap {
          height: 20.443vw;
        }
      }
    }
    @include xxl {
      .article-item {
        flex-direction: column;
        width: 100%;
        .smiley-img-wrap {
          height: 311px;
        }
        .article-descr {
          padding-left: 0;
        }
        .article-date-location {
          margin-bottom: 9px;
        }
      }
    }
  }
  .more-link-wrap {
    width: 100%;
    margin-top: 2px;
    .read-more-link {
      align-self: flex-start;
    }
    @include lg {
      position: absolute;
      right: 0;
      top: 41px;
      width: auto;
    }
  }
  @include xl {
    margin-bottom: 77px;
  }
}
</style>