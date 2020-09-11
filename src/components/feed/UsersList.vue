<template>
  <div class="users-list">
    <div>
      <div
          class="users-list__item"
          v-for="(user, index) in users"
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
              v-if="user.location != null"
          >{{ user.location }}
          </div>
          <div
              class="user-list__user-description"
              v-if="user.job_title != null"
          >{{ user.job_title }}
          </div>
          <template v-if="is_friends_list">
            <button class="user-list__user-connect__actions">
              <i class="fa fa-user"></i> View
            </button>
            <button class="user-list__user-connect__actions">
              <i class="fa fa-envelope"></i> Message
            </button>
          </template>
          <template v-else>
            <button class="user-list__user-connect__connect">
              <i class="fa fa-user-plus"></i> Connect
            </button>
            <div class="user-list__user-score">
              <span>Match {{user.match_score | scoreFilter}}%</span>
              <i class="fa fa-globe" v-if="user.location_reason" v-popover:tooltip="'Same location'"></i>
              <i class="fa fa-lightbulb-o" v-if="user.goal_reason" v-popover:tooltip="'Similar goals'"></i>
              <i class="fa fa-handshake-o" v-if="user.support_reason" v-popover:tooltip="'Similar support'"></i>
              <i class="fa fa-hands" v-if="user.need_reason" v-popover:tooltip="'Similar needs'"></i>
            </div>
          </template>
        </div>
      </div>
      <div class="users-list__item users-list__item--show-more" v-if="multiple_pages">
        <div>
          <a href="#">Show more</a>
        </div>
      </div>
    </div>
    <div v-if="users.length === 0">
      <div class="users-list__item users-list__item--no_users">
        <div>
          <slot name="no_users">
            Oh, you don't have any friend connections yet :( try to add some friends or fill your profile more.
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";

export default {
  name: "UsersList",
  data() {
    return {
      text: null
    };
  },
  props: {
    multiple_pages: {
      type: Boolean,
      default: false
    },
    is_friends_list: {
      type: Boolean,
      default: false
    },
    users: {
      type: Array,
      default: () => []
    },
  },
  filters: {
    scoreFilter(value) {
      const currentValue = parseFloat(value);
      let score = 100;

      if (currentValue < 10) {
        score = (100 * currentValue) / 10;
        score = parseInt(score);
      }
      return score;
    }
  },
  methods: {
    uploadMore() {
    //  Loads more friends? (Suggested matches/communities)
    },
    addFriend() {
      axios
          .get("/users/feed")
          .then(res => {
            console.log("Feed loaded", res);
            this.user = res.data.user;
            this.userNews = res.data.news;
            this.events = res.data.events;
            this.matches = res.data.match_users;

            this.feedPage = res.data;
          })
          .catch(error => console.error(error));
    }
  }
}
</script>

<style lang="scss" scoped>
.users-list {
  //height: 400px;
  //overflow-y: scroll;
  //overflow-x: hidden;

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

    &--no_users {
      color: #fff;
      text-align: center;
      grid-template-columns: 1fr;
    }
  }

  .user-list__user-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .user-list__user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .user-list__user-title {
    @include font-size(1rem);
    font-family: "Montserrat Bold", sans-serif;
    color: #fff;
  }

  .user-list__user-description {
    @include font-size(0.75rem);
    color: #fff;
    margin-bottom: .5rem;
  }

  .user-list__user-connect__connect {
    max-width: 200px;
    width: 100%;
    margin-top: 6px;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-family: "Montserrat SemiBold", sans-serif;
    padding: 2px 15px;
    text-transform: uppercase;
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

  .user-list__user-score {
    color: #fff;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-family: "Montserrat SemiBold", sans-serif;

    span {
      font-size: .8rem;
      margin-right: 1rem;
    }

    span, i {
      margin: 0 .5rem;
    }
  }

  .user-list__user-connect__actions-holder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .user-list__user-connect__actions {
    max-width: 200px;
    text-align: center;
    margin-top: 6px;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-family: "Montserrat SemiBold", sans-serif;
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
</style>