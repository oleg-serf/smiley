<template>
  <article
    @click="handleCardClick(article)"
    class="news-article"
    :class="[forMobile ? 'for-mobile' : '']"
  >
    <div
      class="news-article__image"
      @mouseenter="showDescription = true"
      @mouseleave="showDescription = false"
    >
      <MediaImage
        :src="article.cover_image"
        :alt="article.title"
        :title="article.title"
        size="l"
        type="news"
        height="269px"
      />
    </div>

    <div class="news-article__content">
      <h3
        class="news-article__content-title"
        :style="[forMobile ? { height: 'auto' } : {}]"
      >
        <router-link :to="{ name: 'news' }">
          <span class="news-article__category">News</span>
        </router-link>:
        <router-link
          :to="{ name: 'news-item', params: { slug: article.slug } }"
        >{{ article.title }}</router-link>
      </h3>
      <div class="news-article__content-details">
        <div
          class="news-article__content-metadata"
          :style="[forMobile ? { 'margin-top': '30px' } : {}]"
        >
          <router-link
            v-if="article.author_link"
            :to="{ name: 'member', params: { slug: article.author_link } }"
          >{{ article.author }}</router-link>
          <template v-else>
            {{ article.author }}
          </template>
          |
          {{ dateAgo(article.published_at) }}
        </div>
        <div class="news-article-category__outer">
          <span class="news-article-category__name" v-if="manualGoal == null">
            {{ article.goal_category }}
          </span>
          <span class="news-article-category__name" v-else>
            {{manualGoal}}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import router from "@/router";
import MediaImage from "@/components/Image.vue";
import { VButton } from "@/components/app";

export default {
  name: "NewsCard",
  components: {
    MediaImage,
    VButton,
  },
  props: {
    article: {
      type: Object,
    },
    manualGoal: {
      default: null,
    },
  },
  data() {
    return {
      sharing: false,
      showDescription: false,
      forMobile: this.$vuetify.breakpoint.xs,
    };
  },
  methods: {
    handleCardClick(article) {
      this.$router.push({ name: "news-item", params: { slug: article.slug } });
    },
  },
  mounted() {
    // console.log(this.article);
  },
};
</script>

<style lang="scss" scoped>
.news-article {
  background-color: white;
  position: relative;
  cursor: pointer;
  color: #fff;

  &.for-mobile {
    box-shadow: none;
    text-align: left;
    .news-article__content {
      padding-left: 0;
      padding-right: 0;
    }
    .news-article__content-description {
      margin-top: 0 !important;
      min-height: 4rem !important;
    }
    .news-article__content-metadata {
      min-height: 1rem !important;
    }
  }
  .news-article__image {
    position: relative;
    width: 100%;

    img {
      opacity: 0.9;
      object-fit: cover;
      object-position: center;
    }

    .news-article-category {
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
      background: rgba(#888785, 0.8);
      font-size: 24px;
      font-family: "Gotham Bold";
      padding: 8px 16px;
      text-align: left;

      .news-article-category__name {
        color: white;
      }
      .news-article-category__description {
        display: block;
        line-height: 20px;
        font-family: "Gotham Medium";
        font-size: 20px;
      }
    }
  }

  .news-article__content {
    // min-height: 230px;
    text-align: left;
    padding: {
      top: 26px;
      bottom: 0px;
    }

    .news-article__content-title {
      min-height: 5rem;
      color: #000000;
      font-family: "Gotham Book", sans-serif;
      font-size: 30px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      span.news-article__category {
        font-family: "Gotham Medium", sans-serif;
      }

      a {
        color: black;

        &:hover {
          text-decoration: none;
          color: yellow;
        }
      }
    }

    .news-article__content-description {
      min-height: 5rem;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 18px;
      line-height: 28px;
      margin-top: 1rem;
    }

    .news-article__content-metadata {
      min-height: 1rem;
      color: #848484;
      font-family: "Gotham Medium";
      font-size: 15px;
      margin-top: 14px;
      padding-right: 5px;

      span {
        font-family: "Gotham Bold";
      }
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
  .news-article__content-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .news-article-category__outer {
      background: #9a9a9a;
      span {
        padding: 5px 5px;
        font-family: "Gotham Medium";
        min-width: max-content;
        white-space: pre;
      }
    }
  }

  .news-article__readmore {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 26px;
    button {
      font-size: 18px !important;
    }
  }
}
</style>
