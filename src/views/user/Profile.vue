<template>
  <!-- TODO: GLOBAL -> use svg sprties -->
  <div class="user-profile container">
    <div class="top-bar">
      <div class="user__avatar">
        <img v-if="avatar !== 'null'" :src="$settings.images_path.users + 'm_'+ user.avatar" />
        <span v-else>{{ user.full_name | filterAvatar}}</span>
      </div>
      <div class="user__name">{{user.full_name}}</div>
      <div class="user__info">
        <app-icon name="location" />
        {{location}}
      </div>
      <ul class="user__social">
        <li v-for="(social, index) in socials" :key="'user-social-'+index">
          <a :href="user[social]" v-if="user[social] != null">
            <app-icon :name="social" />
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
            <li v-for="goal in goals" :key="goal.id">
              <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
            </li>
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
      socials: ["facebook", "linkedin", "google", "instagram", "twitter"],
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
      .get("/users/settings")
      .then(response => {
        console.log(response.data);
        this.user = response.data.user;
        this.goals = response.data.all_goals.filter(item =>
          response.data.goals.includes(item.id)
        );
        console.log(this.goals);
      })
      .catch(error => console.error(error.request));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_user-profile";
</style>