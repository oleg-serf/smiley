<template>
  <!-- TODO: GLOBAL -> use svg sprties -->
  <div>
    <section class="user-profile container bg">
      <div class="sidebar sidebar--user">
        <div class="sidebar-block">
          <div class="user-profile__avatar">
            <img v-if="avatar !== 'null'" :src="$settings.images_path.users + 'm_'+ user.avatar" />
            <span v-else>{{ user.full_name | filterAvatar}}</span>
          </div>
        </div>
        <router-link :to="{name: 'account-settings'}" class="follow-btn">Edit Profile</router-link>

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
        <div class="user-info-connections">50+ connections</div>
        <div class="user-info-connections">
          <img src="/img/apprentice.png" /> Smiley apprentice
        </div>
        <button class="follow-btn">Follow</button>
      </div>
      <div class="content-container">
        <div class="profile-grid">
          <div class="profile-grid__item">
            <div class="profile-grid__title">About me:</div>
            <div
              class="content-section__content"
              v-html="user.bio || 'Oh, we have no information for this block yet :( Add banner'"
            ></div>
          </div>
          <div class="profile-grid__item">
            <div class="profile-grid__title">My interests (UN Goals):</div>
            <ul class="goals-list">
              <li v-for="goal in goals" :key="goal.id">
                <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
              </li>
            </ul>
          </div>
          <div class="profile-grid__item">
            <div class="profile-grid__title">Support</div>
            <template v-if="supportNeed.length > 0">
              <div class="profile-grid__subtitle">
                <img src="/img/give.svg" />
                I can offer:
              </div>
              <ul class="support-list">
                <li
                  class="support-list__item"
                  v-for="(item, index) in supportNeed"
                  :key="'i-need-'+index"
                >
                  <div class="support-list__category-container">
                    <div class="support-list__category">{{item.support_category.title}}</div>
                    <div class="support-list__subcategory">{{item.title}}</div>
                  </div>
                </li>
              </ul>
            </template>
            <template v-if="supportOffer.length > 0">
              <hr />
              <div class="profile-grid__subtitle">
                <img src="/img/give.svg" />
                I need:
              </div>
              <ul class="support-list">
                <li
                  class="support-list__item"
                  v-for="(item, index) in supportOffer"
                  :key="'i-need-'+index"
                >
                  <div class="support-list__category-container">
                    <div class="support-list__category">{{item.support_category.title}}</div>
                    <div class="support-list__subcategory">{{item.title}}</div>
                  </div>
                </li>
              </ul>
            </template>
          </div>
          <div class="profile-grid__item profile-grid__item--news">
            <div class="profile-grid__title">Latest news from Smiley Movement</div>
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
        this.feed = res.data.posts.splice(0, 6);
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
  grid-template-columns: repeat(3, 1fr);
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
</style>