<template>
  <div>
    <breadcrumbs />

    <section class="latest-news-section latest-news-section--category latest-articles">
      <div class="latest-news-wrap">
        <div class="title-colored-block">
          <div class="smiley-news-main-title">
            <img src="/img/homepage/smiley-main-title.svg" alt="smiley talks" />
            <P>News</P>
          </div>
          <h2 class="news-block-title">AFFORDABLE AND CLEAN ENERGY</h2>
        </div>
      </div>
    </section>

    <section class="news-category-section latest-articles container">
      <div class="news-category-container">
        <router-link
          :to="'/news/' + post.slug"
          class="article-item"
          v-for="post in posts"
          :key="post.id+post.title"
        >
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img
                :src="$settings.images_path.news  +'m_'+post.cover_image"
                :alt="post.title"
                :title="post.title"
              />
            </div>
          </div>
          <div class="article-descr">
            <div class="article-date-location">
              <div class="article-date">{{post.created_at}}</div>
              <div class="article-location">{{post.location}}</div>
            </div>
            <div class="article-title">{{post.title}}</div>
            <div class="article-subtitle">{{post.description}}</div>
          </div>
        </router-link>
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

import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1
      }
    };
  },
  mounted() {
    let slug = this.$route.params.slug;
    let url = slug == "all" ? "/news" : "/news/category/" + slug;
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.posts = res.data.posts;
        this.pagination.totalPages = res.data.pages_count;
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
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/_article-item";

@import "@/scss/sections/_latest-news";

@import "@/scss/sections/_news-category-section";

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
</style>