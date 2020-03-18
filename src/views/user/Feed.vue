<template>
  <div class="container">
    <Breadcrumbs />
    <div class="tabs-items">
      <ul class="tabs-nav">
        <li>
          <a
            href="#tab-1"
            @click.prevent="activeTab = 'news'"
            :class="{active: activeTab == 'news'}"
          >News</a>
        </li>
        <li>
          <a
            href="#tab-2"
            @click.prevent="activeTab = 'organisations'"
            :class="{active: activeTab == 'organisations'}"
          >Organisations</a>
        </li>
      </ul>
      <div class="tab-item item-1" id="tab-1" :class="{active: activeTab == 'news'}">
        <!-- <button class="accordion">News</button> -->
        <div class="content-tab-1 panel">
          <section class="news-category-section">
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
            >
              <span slot="breakViewContent">...</span>
            </paginate>
          </div>
        </div>
      </div>
      <div class="tab-item item-2" id="tab-2" :class="{active: activeTab == 'organisations'}">
        <!-- <button class="accordion">Organisations</button> -->
        <div class="content-tab-1 panel">
          <section class="organisation-tweets" v-if="tweets.length > 0">
            <div class="organisation-tweets-grid">
              <div v-for="tweet in tweets" :key="tweet.id+'-tweet'" class="tweet">
                <div class="tweet-header">
                  <router-link
                    :to="'/organisation/' + tweet.organisation.slug"
                    class="tweet-header__logo"
                  >
                    <img
                      v-if="tweet.organisation.logo != null"
                      :src="$settings.images_path.organisations + 'm_'+ tweet.organisation.logo"
                    />
                    <span v-else>{{ tweet.name | filterAvatar}}</span>
                  </router-link>
                  <div>
                    <router-link
                      :to="'/organisation/' + tweet.organisation.slug"
                      class="tweet-header__organisation"
                    >{{tweet.organisation.name}}</router-link>
                    <div class="tweet-header__date">{{tweet.created_at}}</div>
                  </div>
                </div>
                <div class="tweet__content" v-html="tweet.content"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
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
      tweets: [],
      pages: 0,
      tweetPages: 0,
      activeTab: "news"
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
        console.log("Feed", res);
        this.news = res.data.posts;
        this.pages = res.data.pages_count;
      })
      .catch(error => console.error(error));
    axios
      .get("users/organisations-posts")
      .then(res => {
        console.log("Organisation posts", res);
        this.tweets = res.data.organisation_posts;
        this.tweetPages = res.data.pages_count;
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

.organisation-tweets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @include smMax {
    grid-template-columns: repeat(1, 1fr);
  }
  @include lgMax {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tweet {
  .tweet-header {
    display: flex;

    .tweet-header__logo {
      width: 48px;
      height: 48px;
      display: block;
      margin-right: 24px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .tweet-header__organisation {
      font: 700 20px/32px "Montserrat Bold", sans-serif;
      color: #1a1a1a;
      text-decoration: none;
    }
    .tweet-header__date {
      font: 400 14px/24px "Muli", sans-serif;
    }
  }

  .tweet__content {
    font: 400 16px/1.5 "Muli", sans-serif;
    font-size: 18px;
  }
}

.organisation-tweets {
  // display: none;
}
</style>

<style lang="scss" scoped>
.tab-item {
  display: none;
}
.tab-item.active {
  display: block;
}
.tabs-nav {
  display: flex;
  // padding-left: 20px;
  // padding-right: 20px;
  margin-bottom: 36px;

  a {
    font: 700 20px/32px "Montserrat Bold", sans-serif;
    position: relative;
    color: #1a1a1a;
    display: block;
    text-decoration: none;
    text-align: center;
    position: relative;
    text-transform: uppercase;
    padding: 0px 20px 20px 20px;

    @include smMax {
      font-size: 16px;
    }

    &::after {
      content: "";
      border-bottom: 1px solid #000;
      width: 100%;
      display: block;
      opacity: 0.3;
      box-sizing: border-box;
      margin-top: 14px;
      position: absolute;
      bottom: 2px;
      left: 0px;
    }

    &.active {
      &::after {
        border-bottom: 5px solid #ffec00;
        height: 5px;
        background-color: #ed1a34;
        opacity: 1;
        bottom: 0;
      }
    }
  }
}
</style>
