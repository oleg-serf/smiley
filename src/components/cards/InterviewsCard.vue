<template>
  <article
    @click="handleCardClick(interview)"
    class="interviews-article"
    :class="[forMobile ? 'for-mobile' : '']"
  >
    <div
        class="interviews-article__image"
        @mouseenter="showDescription = true"
        @mouseleave="showDescription = false"
    >
      <MediaImage
        :src="interview.cover_image"
        :alt="interview.title"
        :title="interview.title"
        size="l"
        type="news"
        height="269px"
      />
    </div>

    <div class="interviews-article__content">
      <h3
        class="interviews-article__content-title"
        :style="[forMobile ? {'height': 'auto'} : {}]"
      >
        <router-link :to="{ name: 'interviews' }">
          <span class="interviews-article__category">Interviews</span>
        </router-link>:
        <router-link
          :to="{ name: 'interview-item', params: { slug: interview.slug } }"
        >{{ interview.title }}</router-link>
      </h3>
      <div class="interviews-article__content-details">
        <div
          class="interviews-article__content-metadata"
          :style="[forMobile ? { 'margin-top': '30px' } : {}]"
        >
          <router-link
            v-if="interview.author_link"
            :to="{ name: 'member', params: { slug: interview.author_link } }"
          >{{ interview.author }}</router-link>
          <template v-else>
            {{ interview.author }}
          </template>
          |
          {{ dateAgo(interview.published_at) }}
        </div>
        <div class="interviews-article-category__outer">
          <span class="interviews-article-category__name" v-if="manualGoal == null">
            {{ interview.goal_category }}
          </span>
          <span class="interviews-article-category__name" v-else>
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
  name: "InterviewsCard",
  components: {
    MediaImage,
    VButton,
  },
  props: {
    type: {
      type: String,
      default: 'interviews'
    },
    interview: {
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
      forMobile: this.$vuetify.breakpoint.xs
    };
  },
  methods: {
    handleCardClick(interview) {
      this.$router.push({ name: "interviews-item", params: { slug: this.interview.slug } });
    },
  },
};
</script>

<style lang="scss" scoped>
.interviews-article {
  background-color: white;
  position: relative;
  cursor: pointer;
  color: #fff;

  &.for-mobile {
    box-shadow: none;
    text-align: left;
    .interviews-article__content {
      padding-left: 0;
      padding-right: 0;
    }
    .interviews-article__content-description {
      margin-top: 0 !important;
      min-height: 4rem !important;
    }
    .interviews-article__content-metadata {
      min-height: 1rem !important;
    }
  }
  .interviews-article__image {
    position: relative;
    width: 100%;

    img {
      opacity: 0.9;
      object-fit: cover;
      object-position: center;
    }

    .interviews-article-category {
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
      background: rgba(#888785, 0.8);
      font-size: 24px;
      font-family: "Gotham Bold";
      padding: 8px 16px;
      text-align: left;

      .interviews-article-category__name {
        color: white;
      }
      .interviews-article-category__description {
        display: block;
        line-height: 20px;
        font-family: "Gotham Medium";
        font-size: 20px;
      }
    }
  }

  .interviews-article__content {
    // min-height: 230px;
    text-align: left;
    padding: {
      top: 26px;
      bottom: 0px;
    }

    .interviews-article__content-title {
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

      span.interviews-article__category {
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

    .interviews-article__content-description {
      min-height: 5rem;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 18px;
      line-height: 28px;
      margin-top: 1rem;
    }

    .interviews-article__content-metadata {
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

  .interviews-article__content-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    .interviews-article-category__outer {
      background: #9a9a9a;
      span {
        padding: 5px 5px;
        font-family: "Gotham Medium";
        min-width: max-content;
        white-space: pre;
      }
    }
  }
}
</style>
