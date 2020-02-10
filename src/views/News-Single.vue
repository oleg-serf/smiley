<template>
  <div>
    <breadcrumbs />

    <section class="news-article container">
      <div class="article-header">
        <div class="smiley-img-wrap">
          <div class="smiley-img single-item-image">
            <img
              :src="$settings.images_path.news  +'l_'+post.cover_image"
              :alt="post.title"
              :title="post.title"
            />
          </div>
        </div>
        <div class="article-descr">
          <h2 class="article-descr-title">{{post.title}}</h2>
          <!--<div class="speaker-item">-->
          <!--<div class="speaker-avatar-wrap">-->
          <!--<div class="speaker-avatar">-->
          <!--<div class="avatar-icon"></div>-->
          <!--<span>st</span>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="speaker-name-caption">-->
          <!--<div class="speaker-name">Smiley Team</div>-->
          <!--<div class="speaker-caption">3 days ago</div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="article-content">
        <div class="article-text">
          <div v-html="post.content" class="article-content-holder"></div>
          <div class="like-and-share-wrap">
            <a href="#" class="like-article">
              Like article (3)
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
                  d="M8.272 4.95258C7.174 4.95258 6.077 5.34958 5.241 6.14458C4.441 6.90658 4 7.91758 4 8.99158C4 10.0646 4.441 11.0756 5.241 11.8376L12 18.2696L18.759 11.8376C19.559 11.0756 20 10.0646 20 8.99158C20 7.91858 19.559 6.90658 18.759 6.14458C17.088 4.55458 14.368 4.55458 12.697 6.14458L12 6.80858L11.303 6.14458C10.467 5.34958 9.37 4.95258 8.272 4.95258ZM12 20.9996L3.847 13.2406C2.656 12.1076 2 10.5986 2 8.99158C2 7.38458 2.656 5.87558 3.847 4.74158C6.067 2.62858 9.552 2.43858 12 4.16858C14.448 2.43858 17.933 2.62858 20.153 4.74158C21.344 5.87558 22 7.38458 22 8.99158C22 10.5986 21.344 12.1076 20.153 13.2406L12 20.9996Z"
                  fill="#1A1A1A"
                />
              </svg>
            </a>
            <a href="#" class="share-article">
              Share article
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
                  d="M18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C16.8302 10 15.7777 9.49784 15.0462 8.69732L10 11.5803V12.4197L15.0462 15.3027C15.7777 14.5022 16.8302 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 17.6802 14.0375 17.3692 14.1084 17.0712L9.26914 14.3055C8.54488 15.3306 7.35061 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.35061 8 8.54488 8.66938 9.26914 9.69449L14.1084 6.92883C14.0375 6.63076 14 6.31976 14 6C14 3.79086 15.7909 2 18 2ZM18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16ZM6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4Z"
                  fill="#1A1A1A"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="related-articles" style>
          <h2>related articles</h2>
          <div class="related-articles-wrap">
            <router-link
              :to="'/news/' + article.slug"
              class="article-item"
              v-for="article in related_posts"
              :key="article.id+article.title"
            >
              <div class="smiley-img-wrap">
                <div class="smiley-img">
                  <img
                    :src="$settings.images_path.news  +'m_'+article.cover_image"
                    :alt="article.title"
                    :title="article.title"
                  />
                </div>
              </div>
              <div class="article-descr">
                <div class="article-date-location">
                  <div class="article-date">{{article.date}}</div>
                  <div class="article-location"></div>
                </div>
                <div class="article-title">{{article.title}}</div>
                <div class="article-subtitle">{{article.description}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="comments-block" style="display: none">
        <h4>Start of Thread</h4>
        <div class="comment-item">
          <div class="commentator-avatar">S</div>
          <div class="comment">
            <div class="comment-header">
              <div class="commentator-name">Spinu Gabriel</div>
              <div class="comment-time">1 second ago</div>
              <div class="comment-functionality">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="comment-content">Amazing!</div>
            <div class="comment-footer">
              <div class="like-counter">
                0
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 10L6 16L6 4L14 10Z"
                    fill="#656565"
                  />
                </svg>
                Like
              </div>
              <div class="comment-report">Report</div>
              <div class="comment-reply">Reply</div>
            </div>
          </div>
        </div>
        <div class="comment-input">
          <button class="add-file">+</button>
          <label for="message-input"></label>
          <input type="text" name="message-input" id="message-input" placeholder="Add a message" />

          <button class="add-smile">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="512px"
              height="512px"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xml:space="preserve"
            >
              <path
                d="M256,64c105.875,0,192,86.125,192,192s-86.125,192-192,192S64,361.875,64,256S150.125,64,256,64 M256,32
            C132.281,32,32,132.281,32,256s100.281,224,224,224s224-100.281,224-224S379.719,32,256,32L256,32z M192,144
            c-17.688,0-32,21.5-32,48c0,26.531,14.313,48,32,48s32-21.469,32-48C224,165.5,209.688,144,192,144z M320,144
            c-17.688,0-32,21.5-32,48c0,26.531,14.313,48,32,48s32-21.469,32-48C352,165.5,337.688,144,320,144z M399.375,292.469
            c2.469-8.469-2.406-17.344-10.906-19.844c-8.469-2.531-17.344,2.438-19.844,10.875C354.125,333.25,307.813,368,256,368
            s-98.125-34.75-112.641-84.5c-2.469-8.438-11.25-13.406-19.844-10.875c-8.484,2.5-13.344,11.375-10.875,19.844
            C131.109,355.781,190.063,400,256,400S380.875,355.781,399.375,292.469z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

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
      post: {
        title: "",
        content: ""
      },
      related_posts: []
    };
  },
  mounted() {
    axios
      .get("/news/" + this.$route.params.slug)
      .then(res => {
        console.log(res);

        this.post = res.data.post;
        this.related_posts = res.data.related;
      })
      .catch(error => console.log(error));
  },
  components: {
    Breadcrumbs,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/scss/pages/_single-post.scss";
</style>