<template>
  <div class="news-section">
    <article class="article container">
      <div class="article-content">
        <div class="article-header">
          <div class="article-header__title">
            <h1>{{ post.title }}</h1>
          </div>
          <div
            class="news-article__image"
            @mouseenter="showDescription = true"
            @mouseleave="showDescription = false"
          >
            <iframe
              v-if="post.type === 'video'"
              style = "width: 100%; height: 75vh"
              frameborder="0" allow="autoplay; fullscreen" allowfullscreen
              :src="'https://player.vimeo.com/video/'+post.video_id+'?title=0&amp;byline=0&amp;portrait=0&sidedock=0'"
            ></iframe>
            <img
              v-else-if="post.cover_image != null"
              :src="$settings.images_path.news + 'l_' + post.cover_image"
              :alt="post.title"
              :title="post.title"
              class="article-header__image"
            />

            <div class="news-article-category">
              <span class="news-article-category__name">          
                {{ post.goal_category }}
              </span>
              <transition>
                <span v-if="showDescription" class="news-article-category__description">
                  UN Goal {{
                    post.goals != null && post.goals.length > 0
                        ? post.goals[0].prefix.length > 1 ? post.goals[0].prefix : "0"+post.goals[0].prefix
                        : ""
                  }} | <br>
                  <template v-if="post.goal != null && post.goal.name">
                    {{
                      post.goal != null && post.goal.name
                          ? post.goal.name
                          : ""
                    }}
                  </template>
                  <template v-else>
                    {{
                      post.goals != null && post.goals.length > 0
                          ? post.goals[0].name
                          : ""
                    }}
                  </template>
                </span>
              </transition>
            </div>
          </div>

          <div class="article-header__metadata">
            News |
            {{post.published_at | formatDate('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}) | stripComas}}
          </div>
          <div class="article-header__sharing">
            <div class="article-header__sharing-goals">
              <ul class="article-header__sharing-goals-badges">
                <li><img src="/img/goals/goals-1.svg" alt="goal"/></li>
                <li><img src="/img/goals/goals-2.svg" alt="goal"/></li>
              </ul>
              <span>| UN Goals</span>
            </div>
            
            <SocialNetworkShare :title="post.slug"></SocialNetworkShare>

            <div class="article-header__link-actions">
              <VButton
                v-if="post.donate_link"
                class="article-header__register-button mr-2"
                shape="round"
                size="small"
              >
                <a
                  class="event__button-link"
                  :href="post.donate_link"
                > Donate </a>
              </VButton>
              <VButton
                class="article-header__register-button mr-2"
                shape="round"
                size="small"
              >
                <a
                  class="event__button-link"
                  :to="post.fundraise_link"
                > Fundraise </a>
              </VButton>
              <VButton
                class="article-header__register-button mr-2"
                shape="round"
                size="small"
              >
                <a
                  class="event__button-link"
                  :to="post.volunteer_link"
                > Volunteer </a>
              </VButton>
            </div>
          </div>
        </div>

        <div v-html="post.content" class="article-text"></div>

        <div class="article-author">
          <img
              class="article-author__pic"
              src="/images/profile_placeholder.jpg"
              alt="author"
          />
          <span class="article-author__name">| {{ post.author }}</span>
        </div>
      </div>

      <!--   COMMENTS SECTION   -->
      <!-- <div class="comments-section">
        <CommentsSection></CommentsSection>
      </div> -->

      <div class="articles-related">
        <section class="news-section container">
          <div class="news-category">
            <h2 class="news-category__title"><b>Related</b> | News</h2>
            <VSearch
                @submit.native.prevent="find"
                placeholder="Search topic..."
                v-model="search"
            />
          </div>
          <NewsGallery :news="related_posts"></NewsGallery>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import NewsGallery from "@/components/news/NewsGallery.vue";
import {VSearch, VButton} from "@/components/app";
import SocialNetworkShare from "@/components/SocialNetworkShare";
import CommentsSection from "@/components/CommentsSection";
// import CommentCard from "@/components/cards/CommentCard";
// import CommentForm from "@/components/forms/CommentForm";

export default {
  components: {
    CommentsSection,
    NewsGallery,
    SocialNetworkShare,
    VSearch,
    VButton,
    // CommentCard,
    // CommentForm,
  },
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
      search: "",
      related_posts: [],
      goals: [],
      comments: [],
      showDescription: false,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
  methods: {
    find() {
      router.push({
        name: "news-search",
        params: {keyword: this.search},
      });
    },
    goToCategory(event) {
      router.push({
        name: "news-category-item",
        params: {slug: event.target.value},
      });
    },
    comment() {
    },
    shareLink(type) {
      let result = "";
      const title = encodeURI(this.post.title);
      const url = process.env.VUE_APP_DOMAIN + encodeURI(this.$route.path);

      switch (type) {
        case "facebook":
          result = `https://www.facebook.com/sharer.php?u=${url}&t=${title}`;
          break;
        case "twitter":
          result = `http://twitter.com/share?text=${title}&url=${url}`;
          break;
        case "linkedin":
          result = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
          break;
      }

      return result;
    },
  },
  mounted() {
    axios
        .get("/news/" + this.$route.params.slug)
        .then((res) => {
          console.log("News item loaded", res);

          this.post = res.data.post;
          
          if(this.$route.params.slug === "the-need-for-good-news"){
            this.post.type = "video";
            this.post.video_id = "493570803";
          }
          else {
            this.post.type = "image";
          }

          this.related_posts = res.data.related;

          const metaPayload = {
            meta: res.data.meta,
            title: res.data.post.title,
          };
          this.$store.dispatch("meta/setMeta", metaPayload);
          this.$router.currentRoute.meta.title = this.post.title;
        })
        .catch((error) => console.log(error));
    axios
        .get("/news/" + this.$route.params.slug + "/comments")
        .then((res) => {
          console.log("Comments loaded", res);
          this.comments = res.data.comments;
        })
        .catch((error) => console.log(error));

    axios
        .get("/goals")
        .then((result) => {
          console.log("Goals loaded", result);
          this.goals = result.data.goal_categories[0].goals;
        })
        .catch((error) => console.error("Error", error));
  },
};
</script>

<style lang="scss" scoped>
.comments-section {
  margin-bottom: 8rem;
}
.article {
  margin-top: 24px;
}

.article-header {
  .article-header__title {
    font: {
      family: "Gotham Bold";
      size: 20px;
    }
    line-height: 44px;
    border-bottom: 2px solid #ffe300;
    padding-bottom: 14px;
  }

  .article-header__image {
    width: 100%;
    margin-top: 26px;
  }

  .article-header__metadata {
    color: #e70f0f;
    margin-top: 50px;
    font: {
      family: "Gotham Medium";
      size: 25px;
    }
    line-height: 27px;
  }

  .article-header__sharing {
    display: flex;
    margin-top: 50px;

    @include smMax {
      flex-direction: column;
    }

    .article-header__sharing-goals {
      display: flex;
      align-items: center;
      margin-right: 10px;

      font: {
        family: "Gotham Medium";
        size: 25px;
      }
      line-height: 27px;

      .article-header__sharing-goals-badges {
        display: flex;

        ul {
          margin: 0;
        }

        li {
          margin-right: 10px;
        }
      }
    }
  }
  
  .article-header__link-actions {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    font-family: Gotham Light,sans-serif;
    font-size: 24px;

    .article-header__register-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      margin-left: 20px;
  
      a {
        color: black;
      }
    }
  }
}

.news-article__image{
  position: relative;

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

.article-text {
  font: {
    family: "Gotham Book";
    size: 25px;
  }
  line-height: 27px;
  margin-top: 30px;
}

.article-author {
  &__pic {
    border-radius: 50%;
    height: 70px;
    width: 70px;
  }

  &__name {
    margin-left: 15px;
    font: {
      family: "Gotham Medium";
      size: 25px;
    }
  }
}

.news-section {
  margin-top: 70px;
  position: relative;
}

.news-category {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ffe300;
  margin-bottom: 16px;
  padding-bottom: 24px;

  .news-category__title {
    color: black;
    font-family: "Gotham Light", sans-serif;
    font-size: 30px;
    line-height: 40px;

    b {
      font-family: "Gotham Bold", sans-serif;
    }
  }
}
</style>
