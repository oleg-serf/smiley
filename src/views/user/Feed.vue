<template>
  <div>
    <div class="textual-banner textual-banner--contained">
      <div class="container">
        <div class="textual-banner__title">Newsfeed</div>
        <p>Your personalised portal to share information about yourself and hear about the latest news, events,
          organisations, projects and new members that share your interests.</p>
      </div>
    </div>
    <div class="feed-header">
      <div class="feed-grid container">
        <div class="feed-grid__item feed-grid__item--profile">
          <div class="profile">
            <div class="profile-item">
              <div class="profile-avatar">
                <img
                    v-if="user.avatar != null"
                    :src="$settings.images_path.users + 'm_'+ user.avatar"
                />
                <span v-else>{{ user.display_name | filterAvatar }}</span>
              </div>
            </div>
            <div class="profile-item">
              <div class="profile__name">{{ user.display_name }}</div>
              <div class="profile__job" v-if="(user.job_title != null)">{{ user.job_title }}</div>
            </div>
            <div class="profile-item profile-item--full-width">
              <div class="profile__location">
                <i class="fa fa-map-marker"></i> London, UK
              </div>
            </div>
            <div class="profile-item profile-item--matches">
              <div class="profile-title">
                Matches
                <i
                    class="popover-icon fa fa-info-circle"
                    v-popover:tooltip="'Members and organisations that match your interests, skills you are in need of or looking to offer.'"
                ></i>
              </div>
              <div class="profile__numbers">{{ feedPage.match_users_counter }}</div>
            </div>
            <div class="profile-item">
              <div class="profile-title">
                Community
                <i
                    class="popover-icon fa fa-info-circle"
                    v-popover:tooltip="'See updates from members and organisations you have connected with.'"
                ></i>
              </div>
              <div class="profile__numbers">0</div>
            </div>
            <div class="profile-item profile-item--full-width">
              <div class="profile-progress">
                <div class="profile-title">Profile completion</div>
                <div class="progress-bar">
                  <div class="progress-bar__bar">
                    <div
                        class="progress-bar__progress"
                        :style="{width: user.completed_profile + '%'}"
                    ></div>
                  </div>
                  <div class="progress-bar__percents">{{ user.completed_profile }}%</div>
                </div>
              </div>
            </div>
            <div class="profile-item profile-item--full-width">
              <div>
                <router-link :to="{name: 'profile'}" class="profile__view">My Profile</router-link>
                <!-- <router-link :to="{name: 'profile'}" class="profile__view">view profile</router-link> -->
              </div>
            </div>
          </div>
        </div>
        <div class="feed-grid__item feed-grid__item--community">
          <div class="community">
            <ul class="community-navigation">
              <li
                  class="community-navigation__item"
                  :class="{active: tab == 'community'}"
                  @click="tab = 'community'"
              >My community
              </li>
              <li
                  class="community-navigation__item"
                  :class="{active: tab == 'matches'}"
                  @click="tab = 'matches'"
              >Suggested matches
              </li>
            </ul>
            <div class="community-tabs">
              <div class="community-tabs__tab" v-show="tab == 'community'">
                <div v-if="friends != null">
                <div class="users-list">
                  <div
                      class="users-list__item"
                      v-for="(user, index) in fakeUsersFollowing"
                      :key="'user-'+index"
                  >
                    <img
                        :src="$settings.images_path.users + 's_' + user.avatar"
                        alt
                        title
                        class="user-list__user-avatar"
                        v-if="user.avatar !== null"
                    />
                    <span v-else>{{ user.initials }}</span>
                  </div>
                  <div class="user-list__user-info">
                    <div class="user-list__user-title">{{ user.name }}</div>
                    <div
                        class="user-list__user-description"
                    >{{ user.location }}
                    </div>
                    <div class="user-list__user-connect__actions-holder">
                      <button class="user-list__user-connect__actions">
                        <i class="fa fa-user"></i> View
                      </button>
                      <button class="user-list__user-connect__actions">
                        <i class="fa fa-envelope"></i> Message
                      </button>
                    </div>
                  </div>
                </div>
                <div class="users-list__item users-list__item--show-more">
                  <div>
                    <a href="#">Show more</a>
                  </div>
                </div>
                </div>
                <div v-else>
                <div class="users-list__item users-list__item--show-more">
                  <div>
                    Oh, you don't have any friend connections yet :( try to add some friends
                  </div>
                </div>
              </div>
            </div>
            <div class="community-tabs__tab" v-show="tab == 'matches'">
              <div class="users-list">
                <div v-if="feedPage.match_users != null && feedPage.match_users.length > 0">
                <div
                    class="users-list__item"
                    v-for="(user, index) in feedPage.match_users"
                    :key="'user-'+index"
                >
                  <div class="users-list__item-image-holder">
                    <img
                        :src="$settings.images_path.users + 's_' + user.avatar"
                        alt
                        title
                        class="user-list__user-avatar"
                        v-if="user.avatar !== null"
                    />
                    <span v-else>{{ user.initials }}</span>
                  </div>
                  <div class="user-list__user-info">
                    <div class="user-list__user-title">{{ user.name }}</div>
                    <div
                        class="user-list__user-description"
                    >{{ user.location }}
                    </div>
                    <button class="user-list__user-connect__connect">
                      <i class="fa fa-user-plus"></i> Connect
                    </button>
                  </div>
                </div>
                <div class="users-list__item users-list__item--show-more">
                  <div>
                    <a href="#">Show more</a>
                  </div>
                </div>
                </div>
                <div v-else>
                 <div class="users-list__item users-list__item--show-more">
                  <div>
                    Oh, you don't have any friend connections yet :( try to add some friends
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feed-grid__item feed-grid__item--projects">
        <div class="projects-block">
          <h2 class="projects-block__title">Projects</h2>
          <div class="projects-block__items" v-if="projects != null">
            <div
                class="projects-block__item"
                v-for="(project, index) in projects"
                :key="'projects-'+index"
            >
              <div class="projects-block__item-column" v-if="project.cover_image">
                <img :src="$settings.images_path.projects +'m_'+project.cover_image"

                     class="projects-block__item-image"/>
              </div>
              <div class="projects-block__item-column"
                   :class="{'projects-block__item-column--full-width' : !project.cover_image}">
                <div
                    class="projects-block__item-title"
                >{{ project.name.length > 20 ? project.name.substring(0, 15) + '...' : project.name }}
                </div>
                <div
                    class="projects-block__item-description"
                >{{ project.description.length > 255 ? description.substring(0, 255) + '...' : project.description }}
                </div>
              </div>
              <div class="projects-block__item-column projects-block__item-column--full-width">
                <router-link :to="{name: 'project', params: {slug: project.slug}}" class="projects-block__item-link">
                  offer
                  support
                </router-link>
              </div>
            </div>
            <div class="projects-block__item projects-block__item--show-more">
              <div>
                <a href="#">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feed-grid__item feed-grid__item--events">
        <div class="events-block">
          <h2 class="events-block__title">UPCOMING EVENTS</h2>
          <div class="events-block__items">
            <div
                class="event-block__item"
                v-for="(event, index) in eventsList"
                :key="'event-'+index"
            >
              <div class="event-block__item-column">
                <img :src="event.avatar" class="event-block__item-image"/>
              </div>
              <div class="event-block__item-column">
                <div
                    class="event-block__item-title"
                >{{ event.title.length > 20 ? event.title.substring(0, 15) + '...' : event.title }}
                </div>
              </div>
              <div class="event-block__item-column">
                <router-link
                    :to="event.link"
                    :title="event.title"
                    class="event-block__item-link"
                >details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="feed-sections">
    <div class="feed-sections-grid container">
      <div class="feed-section__item">
        <router-link :to="{name: 'projects'}" class="feed-section__link">
          <i class="fa fa-neuter"></i> Projects
        </router-link>
      </div>
      <div class="feed-section__item">
        <router-link :to="{name: 'users'}" class="feed-section__link">
          <i class="fa fa-users"></i> Members
        </router-link>
      </div>
      <!-- <div class="feed-section__item">
        <router-link to="/" class="feed-section__link">
          <i class="fa fa-qq"></i> Ecosystem
          <br />(comming soon)
        </router-link>
      </div>-->
      <div class="feed-section__item">
        <router-link :to="{name: 'talks'}" class="feed-section__link">
          <i class="fa fa-calendar-check-o"></i> Events
        </router-link>
      </div>
      <!-- <div class="feed-section__item">
        <router-link to="/" class="feed-section__link feed-section__link--hub">
          <i class="fa fa-plus"></i> Create a smiley hub
        </router-link>
      </div>-->
    </div>
  </div>
  <div class="feed-updates">
    <div class="updates-navigation">
      <div class="container">
        <div
            class="updates-navigation__item"
            :class="{active: updatesTab == 'news'}"
            @click="updatesTab = 'news'"
        >
          Smiley
          <small>®</small> News
        </div>
        <div
            class="updates-navigation__item"
            :class="{active: updatesTab == 'updates'}"
            @click="updatesTab = 'updates'"
        >Updates
        </div>
      </div>
    </div>
    <div class="updates-tabs container">
      <div class="updates-tabs__tab updates-tabs__tab--news-grid" v-show="updatesTab == 'news'">
        <news-card v-for="article in posts" :key="'latest-'+article.slug" :article="article"/>
      </div>
      <div class="updates-tabs__tab" v-show="updatesTab == 'updates'">no updates for now</div>
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import axiosBase from "axios";

import NewsCard from "@/components/cards/NewsCard.vue";
import Footer from "@/components/Footer";

export default {
  name: "UserFeed",
  components: {
    NewsCard,
    Footer
  },
  data() {
    return {
      user: {},
      posts: [],
      projects: [],
      //
      fakeUsersFollowing: [],
      fakeUsers: [],
      latest: [],
      tab: "community",
      updatesTab: "news",
      description:
          "A route-planning app that finds the safest route from A to B thanks to users' ratings of how safe they felt on each road. Users can rate roads for how safe they felt and at what time. Out of five for how safe they felt, box for written explanation, and notes for council – if they felt unsafe, why? Like google maps, the app will find a route for you but you can choose for it to be based on how safe people felt on it. People have to sign up through a facebook, insta or twitter account which is checked to be a real account.",
      eventsList: [
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Project 1",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Project With long title",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Zero Dawn",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Project 1",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Project With long title",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Zero Dawn",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Project 1",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Project With long title",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Zero Dawn",
          link: "/"
        },
        {
          avatar:
              "https://new-smiley.s3.eu-west-2.amazonaws.com/organisations/s_0o0clq4P1238223851.jpg",
          title: "Uncharted",
          link: "/"
        }
      ],
      //  testing
      feedPage: {}
    };
  },
  mounted() {
    axios
        .get("/users/feed")
        .then(res => {
          console.log("Feed loaded", res);
          this.user = res.data.user;
          this.posts = res.data.posts;
          this.projects = res.data.projects;

          this.feedPage = res.data;
        })
        .catch(error => console.error(error));
    axios
        .get("/news/latest")
        .then(res => {
          this.latest = res.data.latest_news;
        })
        .catch(error => console.error(error));
    axiosBase
        .get("https://randomuser.me/api/?results=20&nat=gb")
        .then(res => {
          // console.log(res);
          this.fakeUsers = res.data.results;
        })
        .catch(error => console.error(error));
    axiosBase
        .get("https://randomuser.me/api/?results=20&nat=gb")
        .then(res => {
          // console.log(res);
          this.fakeUsersFollowing = res.data.results;
        })
        .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.feed-header {
  background-image: url("/img/backgrounds/feed-hero.jpg");
  background-size: cover;
  background-position: center;
  min-height: 450px;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;

  .feed-grid__item {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    margin-left: -1px;
    margin-right: -1px;
    padding-bottom: 20px;

    &:first-child {
      border-left: 0px;
    }

    &:last-child {
      border-right: 0px;
    }

    &--community {
      padding-top: 20px;
    }

    &--projects {
      padding: 20px;
    }

    &--events {
      padding-top: 20px;
      padding-left: 20px;
    }
  }
}

.profile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 20px;
  padding-right: 20px;
  grid-gap: 20px;

  .profile-item {
    &--matches {
      border-right: 1px solid #fff;
    }

    &--full-width {
      grid-column: 1 / span 2;
    }
  }

  .profile-title {
    color: #fff;
    font-family: "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    @include font-size(1.1rem);
  }

  .profile-avatar {
    // margin-top: 35px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
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
    font-family: "Montserrat SemiBold", sans-serif;

    @include font-size(1.1rem);
    color: #fff;
  }

  .profile__job {
    @include font-size(0.9rem);
    color: #fff;
  }

  .profile__location {
    color: #fff;
    @include font-size(0.9rem);

    i {
      margin-right: 12px;
    }
  }

  .profile__numbers {
    color: #f4ed3b;
    font-family: "Montserrat SemiBold", sans-serif;
    @include font-size(1.2rem);
  }

  .progress-bar {
    display: flex;
    align-items: center;

    .progress-bar__bar {
      width: 100%;
      height: 8px;
      background-color: rgba(216, 216, 216, 0.7);
      position: relative;
    }

    .progress-bar__progress {
      display: block;
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #f4ed3b;
      height: 100%;
    }

    .progress-bar__percents {
      @include font-size(1rem);
      margin-left: 20px;
      color: #fff;
    }
  }

  .profile__view {
    width: 100%;
    color: #fff;
    border: 1px solid #fff;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 20px;
    font-family: "Montserrat SemiBold", sans-serif;
    width: 100%;
    display: block;
    text-align: center;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    &:hover {
      background-color: #f4ed3b;
      border-color: #f4ed3b;
      color: #393939;
    }
  }
}

//
.users-list {
  height: 360px;
  overflow-y: scroll;

  .users-list__item {
    display: grid;
    grid-template-columns: 50px auto;
    grid-gap: 20px;

    &-image-holder {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      overflow: hidden;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px auto 14px auto;
      background-color: #e5e9f0;
      text-decoration: none;
      color: #393939;
      font-family: "Montserrat Bold", sans-serif;
      @include font-size(1.2rem);
      letter-spacing: 2px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    padding-bottom: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    &--show-more {
      text-align: center;
      grid-template-columns: 1fr;

      a {
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        display: inline-block;
        transition: border-color 0.2s;
        @include font-size(0.8rem);

        &:hover {
          border-color: transparent;
        }
      }
    }
  }

  .user-list__user-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: contain;
  }

  .user-list__user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .user-list__user-title {
    @include font-size(1rem);
    font-family: "Montserrat Bold", sans-serif;
  }

  .user-list__user-description {
    @include font-size(0.75rem);
  }

  .user-list__user-connect__connect {
    display: inline-block;
    max-width: 130px;
    margin-top: 6px;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-family: "Montserrat SemiBold", sans-serif;
    display: block;
    padding: 2px 15px;
    text-transform: uppercase;
    height: auto;
    transition: background-color 0.2s, color 0.2s;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;

    i {
      margin-right: 12px;
    }

    &:hover {
      background-color: #ffec00;
      color: #393939;
    }
  }

  .user-list__user-connect__actions-holder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .user-list__user-connect__actions {
    display: inline-block;
    max-width: 130px;
    text-align: center;
    margin-top: 6px;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-family: "Montserrat SemiBold", sans-serif;
    display: block;
    padding: 2px 15px;
    text-transform: uppercase;
    height: auto;
    transition: background-color 0.2s, color 0.2s;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    i {
      margin-right: 12px;
    }

    &:hover {
      background-color: #ffec00;
      color: #393939;
    }
  }
}

//
.community {
  .community-navigation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__item {
      text-align: center;
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
      transition: border-color 0.2s;
      cursor: pointer;
      padding-bottom: 10px;
      @include font-size(0.8rem);
      text-transform: uppercase;
      font-family: "Montserrat Regular", sans-serif;
      color: #fff;
      padding: 0px 5px 10px 5px;

      &:hover {
        border-bottom-color: rgba(255, 255, 255, 0.7);
      }

      &.active {
        border-bottom-color: rgba(255, 255, 255, 1);
        font-family: "Montserrat Bold", sans-serif;
      }
    }
  }

  .community-tabs {
    padding: 0px 20px;
    color: #fff;

    &__tab {
    }
  }
}

//
.projects-block {
  .projects-block__title {
    color: #fff;
    font-family: "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    @include font-size(1.1rem);
  }

  .projects-block__items {
    height: 360px;
    overflow-y: scroll;
  }

  .projects-block__item {
    display: grid;
    grid-template-columns: 50px auto;
    grid-gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    padding-bottom: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    &--show-more {
      text-align: center;
      grid-template-columns: 1fr;

      a {
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        display: inline-block;
        transition: border-color 0.2s;
        @include font-size(0.8rem);

        &:hover {
          border-color: transparent;
        }
      }
    }
  }

  .projects-block__item-column {
    &--full-width {
      grid-column: 1 / span 2;
    }
  }

  .projects-block__item-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: contain;
  }

  .projects-block__item-title {
    color: #fff;
    font-family: "Montserrat SemiBold", sans-serif;
  }

  .projects-block__item-description {
    color: #fff;
    font-family: "Montserrat Regular", sans-serif;
    @include font-size(0.8rem);
  }

  .projects-block__item-link {
    // color: #fff;
    // border: 1px solid #fff;
    text-decoration: none;
    @include font-size(0.8rem);
    font-family: "Montserrat SemiBold", sans-serif;
    display: block;
    padding: 5px 15px;
    text-transform: uppercase;
    height: auto;
    text-align: center;
    transition: background-color 0.2s, color 0.2s;
    background-color: #ffec00;
    color: #393939;

    // &:hover {
    //   background-color: #;
    // }
  }
}

//
.events-block {
  .events-block__title {
    color: #fff;
    font-family: "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    @include font-size(1.1rem);
  }

  .events-block__items {
    height: 360px;
    overflow-y: scroll;
  }

  .event-block__item {
    display: grid;
    grid-template-columns: 50px auto 90px;
    grid-gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .event-block__item-column {
    display: flex;
    align-items: center;
  }

  .event-block__item-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: contain;
  }

  .event-block__item-title {
    color: #fff;
    font-family: "Montserrat SemiBold", sans-serif;
  }

  .event-block__item-link {
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    @include font-size(0.8rem);
    font-family: "Montserrat SemiBold", sans-serif;
    display: block;
    padding: 2px 15px;
    text-transform: uppercase;
    height: auto;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #ffec00;
      color: #393939;
    }
  }
}

// Website sections

.feed-sections {
  background-color: #f4f6f9;
  padding: 30px 0;

  .feed-sections-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
}

.feed-section__item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.feed-section__link {
  @include font-size(1rem);
  color: #393939;
  text-decoration: none !important;
  font-family: "Montserrat Bold", sans-serif;

  i {
    @include font-size(0.8rem);
    margin-right: 8px;
  }

  &--hub {
    width: 100%;
    color: #393939 !important;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 20px;
    font-family: "Montserrat SemiBold", sans-serif;
    width: 100%;
    display: block;
    text-align: center;
    background-color: #f4ed3b;

    i {
      transition: transform 0.2s;
      transform-origin: center center;
    }

    &:hover {
      i {
        transform: rotate(90deg);
      }
    }
  }
}

// Main tabs
.feed-updates {
  .updates-navigation {
    background-color: #dee4ed;

    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .updates-navigation__item {
    display: block;
    text-align: center;
    font-family: "Montserrat Regular", sans-serif;
    @include font-size(1.5rem);
    @include padding-top(1.5rem);
    @include padding-bottom(1.5rem);
    transition: background-color 0.2s;
    cursor: pointer;
    position: relative;

    &.active {
      font-family: "Montserrat Bold", sans-serif;
      background-color: #f4ed3b;

      &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -7px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 15px 0 15px;
        border-color: #f4ee3b transparent transparent transparent;
      }
    }
  }

  .updates-tabs {
    padding-top: 24px;
  }

  .updates-tabs__tab {
    &--news-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
    }
  }
}
</style>