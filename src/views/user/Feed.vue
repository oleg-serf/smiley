<template>
  <div>
    <div class="feed-header">
      <div class="feed-grid container">
        <div class="feed-grid__item feed-grid__item--user">1</div>
        <div class="feed-grid__item feed-grid__item--community">
          <div class="community">
            <ul class="community-navigation">
              <li
                class="community-navigation__item"
                :class="{active: tab == 'community'}"
                @click="tab = 'community'"
              >My community</li>
              <li
                class="community-navigation__item"
                :class="{active: tab == 'matches'}"
                @click="tab = 'matches'"
              >Suggested matches</li>
            </ul>
            <div class="community-tabs">
              <div class="community-tabs__tab" v-show="tab == 'community'">No connections yet</div>
              <div class="community-tabs__tab" v-show="tab == 'matches'">
                <div class="users-list">
                  <div
                    class="users-list__item"
                    v-for="(event, index) in eventsList"
                    :key="'user-'+index"
                  >
                    <img :src="event.avatar" class="user-list__user-avatar" />
                    <div class="user-list__user-info">
                      <div
                        class="user-list__user-title"
                      >{{ event.title.length > 20 ? event.title.substring(0, 15) + '...' : event.title }}</div>
                      <div
                        class="user-list__user-description"
                      >{{ description.length > 25 ? description.substring(0, 25) + '...' : description }}</div>
                    </div>
                  </div>
                  <div class="users-list__item users-list__item--show-more">
                    <div>
                      <a href="#">Show more</a>
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
            <div class="projects-block__items">
              <div
                class="projects-block__item"
                v-for="(event, index) in eventsList"
                :key="'projects-'+index"
              >
                <div class="projects-block__item-column">
                  <img :src="event.avatar" class="projects-block__item-image" />
                </div>
                <div class="projects-block__item-column">
                  <div
                    class="projects-block__item-title"
                  >{{ event.title.length > 20 ? event.title.substring(0, 15) + '...' : event.title }}</div>
                  <div
                    class="projects-block__item-description"
                  >{{ description.length > 255 ? description.substring(0, 255) + '...' : description }}</div>
                </div>
                <div class="projects-block__item-column projects-block__item-column--full-width">
                  <router-link
                    :to="event.link"
                    :title="event.title"
                    class="projects-block__item-link"
                  >offer support</router-link>
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
                  <img :src="event.avatar" class="event-block__item-image" />
                </div>
                <div class="event-block__item-column">
                  <div
                    class="event-block__item-title"
                  >{{ event.title.length > 20 ? event.title.substring(0, 15) + '...' : event.title }}</div>
                </div>
                <div class="event-block__item-column">
                  <router-link
                    :to="event.link"
                    :title="event.title"
                    class="event-block__item-link"
                  >details</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";

export default {
  name: "UserFeed",
  data() {
    return {
      tab: "community",
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
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.feed-header {
  background-image: url("/img/backgrounds/feed-hero.jpg");
  background-size: cover;
  background-position: center;
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

.users-list {
  height: 375px;
  overflow-y: scroll;

  .users-list__item {
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
  .user-list__user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
    height: 375px;
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
    height: 375px;
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
</style>