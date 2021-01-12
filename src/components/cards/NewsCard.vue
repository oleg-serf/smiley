<template>
  <article class="news-article" :class="[forMobile ? 'for-mobile' : '']">
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
      />
      <div class="news-article-category">
        <span class="news-article-category__name" v-if="manualGoal == null">          
          {{ article.goal_category }}
        </span>
        <span class="news-article-category__name" v-else>{{ manualGoal }}</span>
        <transition>
          <span v-if="showDescription" class="news-article-category__description">
            UN Goal {{
              article.goals != null && article.goals.length > 0
                  ? article.goals[0].prefix.length > 1 ? article.goals[0].prefix : "0"+article.goals[0].prefix
                  : ""
            }} | <br>
            <template v-if="article.goal != null && article.goal.name">
              {{
                article.goal != null && article.goal.name
                    ? article.goal.name
                    : ""
              }}
            </template>
            <template v-else>
              {{
                article.goals != null && article.goals.length > 0
                    ? article.goals[0].name
                    : ""
              }}
            </template>
          </span>
        </transition>
      </div>
    </div>

    <div class="news-article__content">
      <h3 class="news-article__content-title" :style="[forMobile ? {'height': 'auto'} : {}]">
        <router-link
          :to="{ name: 'news-item', params: { slug: article.slug } }"
        >{{ article.title }}</router-link>
      </h3>
      <div
        class="news-article__content-description"
        :style="[forMobile ? {'height': 'auto'} : {}]"
        v-html="cutText(article.description, 60, 'description')"
      ></div>
      <div
        class="news-article__content-metadata"
        :style="[forMobile ? {'margin-top': '30px'} : {}]"
      >
        <router-link
          :to="{ name: 'news'}"
        ><span>News</span></router-link> | 
        <router-link
          v-if="article.author_link"
          :to="{ name: 'member', params: { slug: article.author_link } }"
        >{{ article.author }}</router-link>
        <template v-else>
          {{ article.author }}
        </template> | 
        {{ dateAgo(article.published_at) }}
      </div>
    </div>

    <div class="news-article__readmore">
      <VButton
        class="news-article__button"
        size="height_45"
        @click.native.prevent="openPage"
        shape="round"
      >
        Read More
      </VButton>
    </div>
  </article>
</template>

<script>
import Vue from 'vue'
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
    forMobile: {
      type: Boolean,
      default: false
    },
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
      showDescription: false
    };
  },
  filters: {
    trimDescription(description) {
      return description.length > 120
        ? description.substring(0, 120) + "..."
        : description;
    },
  },
  methods: {
    openPage() {
      router.push({ name: "news-item", params: { slug: this.article.slug } });
    },
    dateAgo(date) {
      const currentStamp = Date.now();
      const realDate = this.$dayjs(date);
      const postStamp = this.$dayjs(date).unix() * 1000;
      const dateDiff = currentStamp - postStamp;
      const days = dateDiff / (1000 * 3600 * 24);

      const result = Math.floor(days);

      const append = result == 1 ? "day" : "days";

      let time = "";

      if (postStamp > currentStamp || result > 28){
        const d = new Date(date.replace(/-/g, "/"));
        time = d.toLocaleDateString("en-US", {day: 'numeric', month: 'long', year: 'numeric'});
      } else if (result == 0) {
        time = "Today"; 
      } else {
        time = result + " " + append + " ago";
      }

      return time;
    },
    cutText(text, limit, stringName) {
      if (text.length > limit) {
        // CHECK IF CHARACTER IS <SPACE> OR END OF STRING
        for (let i = 0; i < text.length - limit; i++) {
          if (text[limit].trim() !== '' && limit !== text.length) {
            limit++
          } else {
            break;
          }
        }
        let moreLink = `<a href="/smiley-news/${this.article.slug}" style="color: black;"><b>More</b>></a>`;
        return text.slice(0, limit).trim() + "..." + (stringName === 'description' ? moreLink : "");
      }

      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.news-article {
  background-color: white;
  position: relative;
  min-height: 540px;
  color: #fff;
  box-shadow: 0 3px 6px rgba(#000, 0.16);
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
      min-height: 2rem !important;
    }
  }
  .news-article__image {
    position: relative;
    height: 300px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
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
    min-height: 230px;
    text-align: left;
    padding: {
      top: 26px;
      left: 16px;
      right: 16px;
      bottom: 20px;
    }

    .news-article__content-title {
      min-height: 5rem;
      color: black;
      font-family: "Gotham Bold", sans-serif;
      font-size: 20px;
      line-height: 30px;

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
      min-height: 3rem;
      color: black;
      font-family: "Gotham Medium";
      font-size: 16px;
      margin-top: 14px;

      span {
        font-family: "Gotham Bold";
      }
      a {
        color: black;
        text-decoration: none;
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
