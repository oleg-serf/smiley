<template>
  <article class="news-article" :class="[forMobile ? 'for-mobile' : '']">
    <div
        class="news-article__image"
        @mouseenter="showDescription = true"
        @mouseleave="showDescription = false"
    >
      <template>
        <iframe
            :src="`https://www.youtube-nocookie.com/embed/${interview.video}`"
            frameborder="0"
            style="width: 100%; height: 300px; position: absolute; left: 0px; top: 0px; object-fit: cover;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
      </template>
      <!-- <div class="video">
        <a class="video__link" href="https://youtu.be/neHA4MJwpnY">
          <picture>
            <source srcset="https://i.ytimg.com/vi_webp/neHA4MJwpnY/maxresdefault.webp" type="image/webp">
            <img class="video__media" src="https://i.ytimg.com/vi/neHA4MJwpnY/maxresdefault.jpg" alt="1. Пилот, разборы, ответы и лайвы">
          </picture>
        </a>
        <button class="video__button" aria-label="Запустить видео">
          <svg width="68" height="48" viewBox="0 0 68 48"><path class="video__button-shape" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path class="video__button-icon" d="M 45,24 27,14 27,34"></path></svg>
        </button>
      </div> -->

      <div class="news-article-category">
        <span class="news-article-category__name" v-if="manualGoal == null">          
          {{ interview.goal_category }}          
        </span>
        <span class="news-article-category__name" v-else>{{ manualGoal }}</span>
        <transition>
          <span v-if="showDescription" class="news-article-category__description"
          >UN Goal {{ interview.prefix }} | <br>
            {{ interview.name }}
          </span
          >
        </transition>
      </div>
    </div>

    <div class="news-article__content">
      <h3 class="news-article__content-title" :style="[forMobile ? {'height': 'auto'} : {}]">
        <router-link
          :to="{ name: 'interviews-item', params: { slug: this.interview.slug } }"
        > {{ interview.title }} </router-link>
      </h3>
      <div
          class="news-article__content-description"
          :style="[forMobile ? {'height': 'auto'} : {}]"
          v-html="cutText(interview.description ? interview.description : (interview.short_description ? interview.short_description : ''), 60, 'description')"
      ></div>
      <div class="news-article__content-metadata">
        <router-link
          :to="{ name: 'interviews'}"
        ><span>Interview</span></router-link> | 
        {{ dateAgo(interview.published_at) }}
      </div>
    </div>

    <div class="news-article__readmore">
      <VButton
          class="news-article__button"
          size="height_45"
          @click.native.prevent="openPage"
          shape="round"
      >
        {{ buttonText }}
      </VButton>
    </div>
  </article>
</template>

<script>
import router from "@/router";
import MediaImage from "@/components/Image.vue";
import { VButton } from "@/components/app";

export default {
  name: "TempInterviewsCard",
  components: {
    MediaImage,
    VButton,
  },
  props: {
    forMobile: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'news'
    },
    interview: {
      type: Object,
    },
    manualGoal: {
      default: null,
    },
    buttonText: {
      type: String,
      default: 'Read More'
    }
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
      // router.push({ name: "interviews-item", params: { slug: this.interview.slug } });
      window.open(`https://www.youtube.com/watch?v=/${this.interview.video}`, "_blank");
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
        let moreLink = `...<a href="https://vimeo.com/${this.interview.video}" target="_blank" style="color: black;"><b>More</b>></a>`;
        return text.slice(0, limit).trim() + (stringName === 'description' ? moreLink : "...");
      }

      return (stringName === 'description' ? `"${text}"` : text);
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
      height: 4rem !important;
    }
    .news-article__content-metadata {
      height: 2rem !important;
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
      background: rgba(#888785, 0.6);
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
      height: 5rem;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 18px;
      line-height: 28px;
      margin-top: 1rem;
    }

    .news-article__content-metadata {
      height: 3rem;
      color: black;
      font-family: "Gotham Medium";
      font-size: 16px;
      margin-top: 14px;

      a {
        color: black;
        text-decoration: none;
      }

      span {
        font-family: "Gotham Bold";
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
