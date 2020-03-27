<template>
  <!-- TODO: GLOBAL -> use svg sprties -->
  <div>
    <div class="bg">
      <section class="user-profile container">
        <div class="sidebar sidebar--user">
          <div class="sidebar-block">
            <div class="user-profile__avatar">
              <img
                v-if="user.avatar != null"
                :src="$settings.images_path.users + 'm_'+ user.avatar"
              />
              <span v-else>{{ user.display_name | filterAvatar}}</span>
            </div>
          </div>

          <div class="user-profile__additional">
            <div class="user-profile__name">{{user.display_name}}</div>
            <ul class="user-profile__social">
              <li v-for="(social, index) in socials" :key="'user-social-'+index">
                <a :href="user[social]" v-if="user[social] != null">
                  <app-icon :name="social" />
                </a>
              </li>
            </ul>
          </div>
          <div class="user-info-connections">50+ connections</div>
          <div class="user-info-connections">
            <img src="/img/apprentice.png" /> Smiley apprentice
          </div>
        </div>
        <div class="content-container">
          <div class="profile-grid">
            <div class="profile-grid__item profile-grid__item">
              <div class="profile-grid__title">News</div>
              <div class="news-grid">
                <router-link
                  :to="'/news/' + post.slug"
                  class="article-item"
                  v-for="post in feed"
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
            </div>
            <div class="profile-grid__item profile-grid__item">
              <div class="profile-grid__title">Organisations</div>
              <div v-if="posts.length > 0">
                <div v-for="post in posts" :key="post.id" class="post">
                  <div class="post-date">{{post.created_at}} | {{post.organisation.name}}</div>
                  <div class="post-content" v-html="post.content"></div>
                  <hr />
                </div>
              </div>
              <div v-else>
                <router-link class="follow-btn" to="/organisations">Check organisations</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import AppIcon from "@/components/AppIcon";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      user: {},
      avatar: "url",
      name: "John Doe",
      location: "",
      socials: ["facebook", "linkedin", "google", "instagram", "twitter"],
      goals: [],
      supportOffer: [],
      supportNeed: [],
      feed: [],
      news: [],
      posts: []
    };
  },
  methods: {},
  components: {
    AppIcon,
    Footer
  },
  mounted() {
    axios
      .get("/users/settings")
      .then(response => {
        console.log("user", response.data);
        this.user = response.data.user;

        this.supportOffer = response.data.user.supports_offer;
        this.supportNeed = response.data.user.supports_need;
        this.goals = response.data.all_goals.filter(item =>
          response.data.goals.includes(item.id)
        );
        document.title = res.data.user.display_name + " | Smiley Movement";
        console.log(this.goals);
      })
      .catch(error => console.error(error.request));

    axios
      .get("/users/feed")
      .then(res => {
        this.feed = res.data.posts.splice(0, 4);
      })
      .catch(error => console.error(error));

    // axios
    //   .get("/users/feed")
    //   .then(res => {
    //     console.log("Feed", res);
    //     this.feed = res.data.posts;
    //     // this.pages = res.data.pages_count;
    //   })
    //   .catch(error => console.error(error));
    axios
      .get("users/organisations-posts")
      .then(res => {
        console.log("Organisation posts", res);
        this.posts = res.data.organisation_posts;
        // this.tweetPages = res.data.pages_count;
      })
      .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_user-profile";
@import "@/scss/components/_article-item";
@import "@/scss/blocks/_homepage-news-grid";

.bg {
  background-image: url("/img/register-bg.jpg");
  background-size: cover;
  padding-top: 48px;
  padding-bottom: 96px;
}

.news-grid {
  padding-top: 0px;
}

.user-info-connections {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12;

  img {
    margin-right: 12px;
    width: 24px;
    height: 24px;
  }
}

.goals-list {
  grid-template-columns: repeat(3, 1fr);
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  .profile-grid__item {
    padding: 15px;
    background: #fff;

    &.profile-grid__item--news {
      grid-column: 1 / span 3;
    }

    hr {
      border: none;
      height: 2px;
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      background-color: #ffec00;
    }
  }

  .profile-grid__title {
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 2px solid #ffec00;
    font-family: "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    @include font-size(1rem);
  }

  .profile-grid__subtitle {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    img {
      margin-right: 12px;
      width: 15px;
      height: auto;
    }
  }
}

.news-grid {
  grid-template-columns: repeat(1, 1fr);
}

.support-list {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}

//
.follow-btn {
  margin-top: 24px;
  display: block;
  height: 48px;
  width: 100%;
  margin-bottom: 15px;
  text-transform: uppercase;
  font: 600 16px/24px "Montserrat SemiBold", sans-serif;
  border-radius: 4px;
  cursor: pointer;
  background-color: $default-orange-btns;
  color: #fff;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.post {
  font-size: 16px;
  .post-date {
    font: 700 14px/32px "Montserrat Bold", sans-serif;
  }
  .post-content {
    font: 400 16px/1.35 "Muli", sans-serif;
  }
}
</style>