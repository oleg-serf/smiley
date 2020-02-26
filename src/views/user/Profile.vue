<template>
  <!-- TODO: GLOBAL -> use svg sprties -->
  <div class="user-profile container">
    <div class="top-bar">
      <div class="user__avatar">
        <img v-if="avatar !== 'null'" :src="$settings.images_path.users + 's_'+ user.avatar" />
        <span v-else>{{ user.full_name | filterAvatar}}</span>
      </div>
      <div class="user__name">{{user.full_name}}</div>
      <div class="user__info">
        <app-icon name="location" />
        {{location}}
      </div>
      <ul class="user__social">
        <li v-for="social in socials" :key="'user-social-'+social.title">
          <a :href="social.content">
            <app-icon :name="social.title" />
          </a>
        </li>
      </ul>
    </div>
    <div class="bottom-bar">
      <div class="columns">
        <div class="column">
          <h2>About me</h2>
          <p v-html="user.bio || 'Oh, we have no information for this block yet :('"></p>
        </div>
        <div class="column">
          <h2>Goals</h2>
          <ul class="goals-list">
            <!-- <li v-for="goal in goals" :key="goal.id">
              <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
            </li>-->
          </ul>
        </div>
        <div class="column">
          <h2>Support i can offer</h2>
        </div>
        <div class="column">
          <h2>support i need</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";

import AppIcon from "@/components/AppIcon";

export default {
  data() {
    return {
      user: {},
      avatar: "url",
      name: "John Doe",
      location: "London, GB",
      socials: [
        {
          title: "facebook",
          content: "https://www.facebook.com"
        },
        {
          title: "linkedin",
          content: "https://www.facebook.com"
        },
        {
          title: "google-plus",
          content: "https://www.facebook.com"
        },
        {
          title: "twitter",
          content: "https://www.facebook.com"
        },
        {
          title: "instagram",
          content: "https://www.facebook.com"
        }
      ],
      goals: []
    };
  },
  filters: {
    filterAvatar: text => {
      let username = text.split(" ").map(item => {
        return item.charAt(0);
      });

      username = username.join("");
      return username;
    }
  },
  components: {
    AppIcon
  },
  mounted() {
    axios
      .get("/goals")
      .then(res => {
        // console.log(res.data.goal_categories[0].goals);
        // Random goals
        let resultGoals = res.data.goal_categories[0].goals;
        let goalsCount = Math.floor(Math.random() * Math.floor(16));

        for (let index = 0; index <= goalsCount; index++) {
          let goalIndex = Math.floor(Math.random() * Math.floor(16));
          this.goals.push(resultGoals[goalIndex]);
        }
      })
      .catch(error => console.error(error));

    axios
      .get("/users/settings")
      .then(response => {
        console.log(response.data.user);
        this.user = response.data.user;
      })
      .catch(error => console.error(error.request));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_user-profile";
</style>