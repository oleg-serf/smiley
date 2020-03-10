<template>
  <!-- TODO: GLOBAL -> use svg sprties -->
  <div>
    <section class="user-profile container">
      <div class="sidebar sidebar--user">
        <div class="sidebar-block">
          <div class="user-profile__avatar">
            <img v-if="avatar !== 'null'" :src="$settings.images_path.users + 'm_'+ user.avatar" />
            <span v-else>{{ user.full_name | filterAvatar}}</span>
          </div>
        </div>
        <div class="user-profile__additional">
          <div class="user-profile__name">{{user.full_name}}</div>
          <ul class="user-profile__social">
            <li v-for="(social, index) in socials" :key="'user-social-'+index">
              <a :href="user[social]" v-if="user[social] != null">
                <app-icon :name="social" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-container">
        <div class="content-section">
          <h3 class="content-section__title">
            <button>About me:</button>
          </h3>
          <div
            class="content-section__content"
            v-html="user.bio || 'Oh, we have no information for this block yet :( Add banner'"
          ></div>
        </div>
        <div class="content-section">
          <h3 class="content-section__title">
            <button>My interests (UN Goals):</button>
          </h3>
          <div class="content-section__content">
            <ul class="goals-list">
              <li v-for="goal in goals" :key="goal.id">
                <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
              </li>
            </ul>
          </div>
        </div>
        <div class="content-section" v-if="supportOffer.length > 0">
          <h3 class="content-section__title">
            <button>
              Support I can
              <span>offer</span>
            </button>:
          </h3>
          <div class="content-section__content">
            <ul class="support-list">
                <li
                  class="support-list__item"
                  v-for="(item, index) in supportOffer"
                  :key="'i-need-'+index"
                >
                  <img src="/img/give.svg" />
                  <div class="support-list__category-container">
                    <div class="support-list__category">{{item.support_category.title}}</div>
                    <div class="support-list__subcategory">{{item.title}}</div>
                  </div>
                </li>
            </ul>
          </div>
        </div>
        <div class="content-section" v-if="supportNeed.length > 0">
          <h3 class="content-section__title">
            <button>
              Support I
              <span>need</span>
            </button>:
          </h3>
          <div class="content-section__content">
            <ul class="support-list">
              <li
                class="support-list__item"
                v-for="(item, index) in supportNeed"
                :key="'i-need-'+index"
              >
                <img src="/img/give.svg" />
                <div class="support-list__category-container">
                  <div class="support-list__category">{{item.support_category.title}}</div>
                  <div class="support-list__subcategory">{{item.title}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-section">
          <h3 class="content-section__title">
            <button>Latest news</button>:
          </h3>
          <div class="content-section__content">
            <section class="news-grid">
              <div class="news-grid__news">
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
            </section>
          </div>
        </div>
      </div>
    </section>
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
      feed: []
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
        console.log(response.data);
        this.user = response.data.user;

        this.supportOffer = response.data.offer_support;
        this.supportNeed = response.data.need_support;
        this.goals = response.data.all_goals.filter(item =>
          response.data.goals.includes(item.id)
        );
        document.title = res.data.user.full_name + " | Smiley Movement";
        console.log(this.goals);
      })
      .catch(error => console.error(error.request));

    axios
      .get("/users/feed")
      .then(res => {
        this.feed = res.data.posts.splice(0, 4);
      })
      .catch(error => console.error(error));

    let userTabs = document.querySelectorAll(".content-section__title");

    console.log(userTabs);

    function showTab(tab) {
      console.log("Tab must be shown", tab);
    }

    // for (let i = 0; i < userTabs.length; i++) {
    //   userTabs[i].addEventListener("click", showTab(userTabs[i]));
    // }

    userTabs.forEach(element => {
      element.addEventListener("click", showTab(element));
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_user-profile";
@import "@/scss/components/_article-item";
@import "@/scss/blocks/_homepage-news-grid";

.news-grid {
  padding-top: 0px;
}
</style>