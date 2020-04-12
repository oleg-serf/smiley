<template>
  <header>
    <div class="container grid">
      <div class="grid-item grid-item--logo"></div>
      <div class="grid-item grid-item--menu">
        <nav>
          <ul class="main-menu">
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'talks'}">smiley talks</router-link>
            </li>
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'news'}">smiley news</router-link>
            </li>
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'network'}">network</router-link>
            </li>
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'story'}">our story</router-link>
            </li>
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'goals'}">un goals</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="grid-item grid-item--social">
        <ul class="header-socials">
          <li class="header-socials__item" v-for="social in socials" :key="'social-'+social.name">
            <a :href="social.link" target="_blank" class="header-socials__link">
              <i class="fa" :class="'fa-'+social.name"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="grid-item grid-item--user"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      socials: [
        { name: "facebook", link: process.env.VUE_APP_SOCIAL_FACEBOOK },
        { name: "linkedin", link: process.env.VUE_APP_SOCIAL_LINKEDIN },
        { name: "twitter", link: process.env.VUE_APP_SOCIAL_TWITTER },
        { name: "instagram", link: process.env.VUE_APP_SOCIAL_INSTAGRAM }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;

  .grid-item {
    &--social {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  nav {
    width: 100%;
  }
}

// Main menu
.main-menu {
  display: flex;
  justify-content: center;
  margin: 0px;

  .main-menu__link {
    font-family: "Montserrat SemiBold", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #393939;
    padding: 24px 10px;
    display: block;
    border-bottom: 2px solid transparent;
    transition: border-color 0.4s;

    &:hover {
      border-bottom: 2px solid #393939;
    }

    &.router-link-active {
      border-bottom: 2px solid #393939;
    }
  }
}

// Social icons
.header-socials {
  display: flex;
  margin: 0px;

  .header-socials__item {
    border: 1px solid #393939;
    line-height: 1;
    width: 24px;
    height: 24px;
    transition: background-color 0.4s;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      background-color: #393939;

      .header-socials__link {
        color: #fff;
      }
    }
  }

  .header-socials__link {
    color: #393939;
    transition: color 0.4s;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
}
</style>