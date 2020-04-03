<template>
  <!-- TODO: GLOBAL -> use svg sprties -->
  <div>
    <div class="profile-layout">
      <div class="profile-grid container">
        <div class="profile-grid__item profile-grid__item--avatar">
          <div class="profile__avatar">
            <div class="profile__avatar-badge"></div>
            <img v-if="user.avatar !== null" :src="$settings.images_path.users + 'm_'+ user.avatar" />
            <span v-else>{{ user.display_name | filterAvatar}}</span>
          </div>
          <div class="profile__name">{{user.display_name}}</div>
          <div class="profile__job" v-if="(user.job_title != null)">{{user.job_title}}</div>
          <div class="profile__location" v-if="(user.location != null)">{{user.location}}</div>
        </div>
        <div class="profile-grid__item profile-grid__item--buttons">
          <router-link to="account-settings" class="follow-btn">Edit</router-link>
          <!-- <button class="follow-btn">Follow</button> -->
        </div>
        <div class="profile-grid__item profile-grid__item--about">
          <div class="profile__about">
            <div class="profile__about-title">About me:</div>
            <div
              class="profile__about-content"
              v-html="user.bio || 'Oh, we have no information for this block yet :('"
            ></div>
          </div>
        </div>
        <div class="profile-grid__item profile-grid__item--sidebar">
          <div class="profile__sidebar">
            <div class="profile__sidebar-title">Connections:</div>
            <div class="profile__sidebar-content">50+ connections</div>
          </div>
          <div class="profile__sidebar">
            <div class="profile__sidebar-title">Community:</div>
            <div class="profile__sidebar-content">0</div>
          </div>
          <!-- TODO - hide block if none media is filled && add v-if -->
          <div class="profile__sidebar">
            <div class="profile__sidebar-title">My social media:</div>
            <div class="profile__sidebar-content">
              <ul class="profile__social">
                <li v-for="(social, index) in socials" :key="'user-social-'+index">
                  <a :href="user[social]" v-if="user[social] != null">
                    <app-icon :name="social" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="profile-grid__item profile-grid__item--support"
          v-if="supportNeed.length > 0 || supportOffer.length > 0"
        >
          <div class="profile__section" v-if="supportOffer.length > 0">
            <div class="profile__section-title">
              <img src="/img/give.svg" />
              Support I can offer:
            </div>
            <ul class="profile__section-support support-list">
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
          </div>
          <div class="profile__section">
            <div class="profile__section-title" v-if="supportNeed.length > 0">
              <img src="/img/need.svg" />
              Support I Need:
            </div>
            <ul class="profile__section-support">
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
          </div>
        </div>
        <div class="profile-grid__item profile-grid__item--goals">
          <div class="profile__section">
            <div class="profile__section-title">My interests (UN Goals):</div>
            <ul class="profile__section-goals">
              <li v-for="goal in goals" :key="goal.id">
                <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="feed container">
      <ul class="feed-nav">
        <li :class="{active: tabDisplayed == 'news'}">
          <button @click.prevent="displayTab('news')">News</button>
        </li>
        <li :class="{active: tabDisplayed == 'events'}">
          <button @click.prevent="displayTab('events')">Events</button>
        </li>
        <li :class="{active: tabDisplayed == 'projects'}">
          <button @click.prevent="displayTab('projects')">Projects</button>
        </li>
        <li :class="{active: tabDisplayed == 'organisations'}">
          <button @click.prevent="displayTab('organisations')">Organisations</button>
        </li>
        <li :class="{active: tabDisplayed == 'test'}">
          <button @click.prevent="displayTab('test')">Test</button>
        </li>
      </ul>
      <div class="feed-tabs">
        <div class="tab-item" v-show="tabDisplayed == 'news'">
          <template v-if="feed.news.length > 0">
            <div class="news-grid">
              <article-item
                v-for="article in feed.news"
                :key="'feed-articles-'+article.id"
                :information="article"
              />
            </div>
          </template>
          <template v-else>
            <div class="following-message">
              <div
                class="following-message__content"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <router-link to="/news" class="follow-btn">Follow Projects</router-link>
            </div>
          </template>
        </div>
        <div class="tab-item" v-show="tabDisplayed == 'events'">
          <template v-if="feed.events.length > 0">
            <div class="events-grid">
              <event-card
                :event="event"
                class="talk-card"
                v-for="event in feed.events"
                :key="'feed-events-'+event.id"
              />
            </div>
          </template>
          <template v-else>
            <div class="following-message">
              <div
                class="following-message__content"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <router-link to="/projects" class="follow-btn">Follow Projects</router-link>
            </div>
          </template>
        </div>
        <div class="tab-item" v-show="tabDisplayed == 'projects'">
          <template v-if="feed.projects.length > 0">
            <section class="projects-grid">
              <!-- TODO: Make component from Project -->
              <div class="project-article" v-for="index in 9" :key="index">
                <div class="project-article__image">
                  <img src="/img/homepage/banner-news.jpg" alt />
                </div>
                <div class="project-article__content">
                  <div class="project-article__category">
                    <div class="project-article__category-name">Human Rights</div>
                    <div class="project-article__category-circle">
                      <span>+15</span>
                    </div>
                  </div>
                  <div class="project-article__spacer"></div>
                  <h3
                    class="project-article__title"
                  >People vs Oil - Brand new idea to save the planet will go here in this title</h3>
                  <div class="project-article__description">Lorem ipsum dolor sit amet, consectet</div>
                  <div class="project-article__button">
                    <a href="/projects/test">view project</a>
                  </div>
                </div>
              </div>
            </section>
          </template>
          <template v-else>
            <div class="following-message">
              <div
                class="following-message__content"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <div class="follow-btn">Follow Projects</div>
            </div>
          </template>
        </div>
        <div class="tab-item" v-show="tabDisplayed == 'organisations'">
          <template v-if="feed.organisations.length > 0">
            <div class="organisation-grid">
              <div
                class="organisation-grid__item"
                v-for="post in feed.organisations"
                :key="'feed-organisation-'+post.id"
              >
                <!-- TODO: Make component -->
                <div class="organisation-post">
                  <router-link
                    class="organisation-post__header"
                    :to="'/organisation/' + post.organisation.slug"
                  >
                    <img
                      v-if="post.organisation.logo != null"
                      :src="$settings.images_path.organisations + 'm_' + post.organisation.logo"
                      :alt="post.organisation.name"
                      class="organisation-post__logo"
                    />
                    <img v-else src="/img/group.svg" class="organisation-post__logo" />
                    <div>
                      <span class="organisation-post__name">{{post.organisation.name}}</span>
                      <div class="organisation-post__date">{{post.created_at | articleDateFormat}}</div>
                    </div>
                  </router-link>
                  <div class="organisation-post__content" v-html="post.content"></div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="following-message">
              <div
                class="following-message__content"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <router-link to="/organisations" class="follow-btn">Follow Projects</router-link>
            </div>
          </template>
        </div>
        <div class="tab-item" v-show="tabDisplayed == 'test'">
          <div class="following-message">
            <div
              class="following-message__content"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <router-link to="/news" class="follow-btn">Follow Projects</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="events-grid container" v-if="events.length > 0" style="display: none;"></div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import InformationHero from "@/components/InformationHero.vue";
import AppIcon from "@/components/AppIcon";
import ArticleItem from "@/components/news/Article.vue";
import EventCard from "@/components/events/Event-Card";

import Footer from "@/components/Footer";

export default {
  data() {
    return {
      user: {
        avatar: null
      },
      socials: ["facebook", "linkedin", "google", "instagram", "twitter"],
      goals: [],
      supportOffer: [],
      supportNeed: [],
      // feed: [],
      events: [],

      tabDisplayed: "news",

      feed: {
        news: [],
        events: [],
        organisations: [],
        projects: ["item"]
      }
    };
  },
  filters: {
    articleDateFormat(time) {
      const dateObj = new Date(time);
      const day =
        dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate();
      const month =
        dateObj.getMonth() < 10 ? "0" + dateObj.getMonth() : dateObj.getMonth();
      const year = dateObj.getFullYear();

      return day + "-" + month + "-" + year;
    }
  },
  methods: {
    displayTab(tab) {
      this.tabDisplayed = tab;
    }
  },
  components: {
    InformationHero,
    AppIcon,
    ArticleItem,
    EventCard,
    Footer
  },
  mounted() {
    axios
      .get("/users/settings")
      .then(response => {
        this.user = response.data.user;

        this.supportOffer = response.data.user.supports_offer;
        this.supportNeed = response.data.user.supports_need;
        this.goals = response.data.all_goals.filter(item =>
          response.data.goals.includes(item.id)
        );
        document.title = res.data.user.display_name + " | Smiley Movement";
      })
      .catch(error => console.error(error.request));

    axios
      .get("/users/feed")
      .then(res => {
        this.feed.news = res.data.posts;
      })
      .catch(error => console.error(error));

    axios
      .get("/events")
      .then(response => {
        this.feed.events = response.data.events;
      })
      .catch(error => console.error(error));

    axios
      .get("users/organisations-posts")
      .then(res => {
        this.feed.organisations = res.data.organisation_posts;
      })
      .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_user-profile";
@import "@/scss/components/_article-item";
@import "@/scss/blocks/_homepage-news-grid";

.profile-layout {
  background-image: url("/img/components/information-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #000;
    opacity: 0.7;
  }
}

.profile__avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  font-family: "Montserrat Bold", sans-serif;
  text-transform: uppercase;
  @include font-size(2rem);
  letter-spacing: 4px;
  color: #393939;
  background-color: #eeb400;
  text-align: center;

  img {
    width: 100%;
    height: 100;
    object-fit: cover;
    object-position: center;
  }
}

.profile__name {
  font-family: "Montserrat Bold", sans-serif;
  text-transform: uppercase;
  @include font-size(2rem);
  color: #fff;
  @include margin-left(1.5rem);
}

.profile__about {
  .profile__about-title {
    @include font-size(2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    color: #fff;
  }

  .profile__about-content {
    font-family: "Montserrat Regular";
    color: #fff;
    @include font-size(1.2rem);
  }
}

.profile__sidebar {
  &:not(:last-child) {
    @include margin-bottom(1.5rem);
  }
  .profile__sidebar-title {
    text-transform: uppercase;
    font-family: "Montserrat Regular";
    letter-spacing: 4px;
    color: #fff;
    @include margin-bottom(0.7rem);
  }
  .profile__sidebar-content {
    font-family: "Montserrat Regular";
    color: #fff;
  }
}

.profile__social {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;

  a {
    max-width: auto;
    display: inline-block;
  }
}

.profile__section {
  &:not(:last-child) {
    @include margin-bottom(1.5rem);
  }
  .profile__section-title {
    @include font-size(2rem);
    @include margin-bottom(1rem);
    font-family: "Montserrat SemiBold", sans-serif;
    color: #fff;
    display: flex;
    align-items: center;

    img {
      max-width: 36px;
      max-height: 36px;
      margin-right: 16px;
    }
  }

  .profile__section-goals {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(5, 1fr);

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .profile__section-support {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: #fff;

    .support-list__category {
      font-family: "Montserrat SemiBold", sans-serif;
      @include font-size(1.2rem);
    }
    .support-list__subcategory {
      font-family: "Montserrat Regular", sans-serif;
      @include font-size(1rem);
    }
  }
}

// ----------
.block-title {
  font-family: "Montserrat Bold", sans-serif;
  @include font-size(2rem);
  @include margin-top(2rem);
  @include margin-bottom(2.5rem);
}
.news-grid {
  padding-top: 0px;
}

.events-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  .talk-card {
    width: 100% !important;
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
  color: #393939;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.profile-grid {
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  z-index: 2;

  .profile-grid__item.profile-grid__item--avatar {
    grid-column: 1 / span 3;
    display: flex;
    align-items: center;
  }
  .profile-grid__item.profile-grid__item--buttons {
    // grid-column: 3 / span 1;
  }
  .profile-grid__item.profile-grid__item--about {
    grid-column: 1 / span 3;
  }
  .profile-grid__item.profile-grid__item--goals {
    grid-column: 3 / span 2;
  }
  .profile-grid__item.profile-grid__item--support {
    grid-column: 1 / span 2;
  }
  .profile-grid__item.profile-grid__item--news {
    grid-column: 1 / span 4;
  }
}

.feed {
  @include margin-top(2rem);
  @include margin-bottom(2rem);

  .feed-nav {
    display: flex;
    @include font-size(2rem);
    font-family: "Monsterrat SemiBold", sans-serif;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);

    li {
      margin-bottom: -3px;
      border-bottom: 3px solid transparent;

      &:not(:last-child) {
        margin-right: 24px;
      }

      &.active {
        border-color: #eeb400;
      }
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .feed-tabs {
    @include margin-top(2rem);
  }
}

.organisation-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
}

.organisation-post {
  .organisation-post__header {
    display: flex;
    align-items: center;
    text-decoration: none;
    @include margin-bottom(1.5rem);

    &:hover {
      .organisation-post__name {
        border-color: #393939;
      }
    }
  }

  .organisation-post__logo {
    width: 54px;
    height: 54px;
    margin-right: 24px;
  }

  .organisation-post__name {
    text-decoration: none;
    @include font-size(1.2rem);
    font-family: "Monsterrat Bold", sans-serif;
    color: #393939;
    border-bottom: 1px solid transparent;
    transition: border-color 0.4s;
  }
  .organisation-post__date {
    font-family: "Monsterrat SemiBold", sans-serif;
    @include font-size(1.2rem);
  }
  .organisation-post__content {
    font-family: "Monsterrat Regular", sans-serif;
    @include font-size(1.2rem);
  }
}

.following-message {
  max-width: 1024px;

  .following-message__content {
    font-family: "Monsterrat Regular", sans-serif;
    @include font-size(1.2rem);
  }

  .follow-btn {
    max-width: 320px;
  }
}

.projects-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);

  @include lgMax {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mdMax {
    grid-template-columns: repeat(1, 1fr);
  }
}

// TODO: Move styles to separate file
.project-article {
  background-color: #000;
  position: relative;
  padding: 30px;
  min-height: 300px;
  color: #fff;
  display: flex;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #000;
    opacity: 0.5;
    z-index: 2;
  }

  &:hover {
    .project-article__image {
      img {
        transform: scale(1.1);
      }
    }
  }

  .project-article__image {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s;
    }
  }

  .project-article__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }

  .project-article__category {
    display: flex;
    align-items: center;
  }

  .project-article__category-name {
    background-color: rgba(125, 132, 148, 0.6);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold";
    transition: background-color 0.4s;

    @include font-size(0.6rem);
  }

  .project-article__category-circle {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 0px;
    position: relative;
    padding: 16px;
    margin-left: 16px;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -49%);
      @include font-size(0.8rem);
      font-family: "Inter Regular";
    }
  }

  .project-article__spacer {
    flex: 1;
    min-height: 50px;
  }

  .project-article__title {
    @include font-size(1.1rem);
    line-height: 1.45;
    color: #fff;
    font-family: "Montserrat SemiBold";
  }

  .project-article__description {
    font-family: "Inter Regular";
    margin-bottom: 24px;
  }

  .project-article__button a {
    text-decoration: none;
    background-color: rgba(125, 132, 148, 1);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold";
    transition: background-color 0.4s;

    @include font-size(0.8rem);

    &:hover {
      background-color: rgba(125, 132, 148, 0.8);
    }
  }
}
</style>