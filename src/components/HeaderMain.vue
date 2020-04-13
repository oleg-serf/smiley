<template>
  <header>
    <div class="search-block" :class="{active: searchActive}">
      <form class="search-form container" :class="{active: searchActive}" @submit.prevent="search">
        <button class="search-form__close" type="button" @click="searchActive = false">
          <i class="fa fa-close"></i>
        </button>
        <input
          class="search-form__field"
          placeholder="What are we looking for?"
          type="search"
          aria-label="Search through site content"
          v-model="search"
          required
        />
        <button class="search-form__submit" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
    <div class="container grid">
      <div class="grid-item grid-item--logo">
        <router-link class="tm-logo" to="/">
          <img src="/img/homepage/logo.png" alt="Smiley Movement" />
        </router-link>
      </div>
      <div class="grid-item grid-item--menu">
        <nav>
          <ul class="main-menu">
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'talks'}">smiley talks</router-link>
            </li>
            <li class="main-menu__item">
              <router-link class="main-menu__link" :to="{name: 'news'}">smiley news</router-link>
            </li>
            <li class="main-menu__item main-menu__item-has-children">
              <span>
                <router-link class="main-menu__link" :to="{name: 'network'}">
                  network
                  <i class="fa fa-angle-down"></i>
                </router-link>
              </span>

              <div class="sub-menu">
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'partners'}">our partners</router-link>
                </li>
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'users'}">members</router-link>
                </li>
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'organisations'}">organisations</router-link>
                </li>
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'projects'}">projects</router-link>
                </li>
              </div>
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
      <div class="grid-item grid-item--user">
        <button @click.prevent="searchActive = true" class="button-search">
          <i class="fa fa-search"></i>
        </button>
        <router-link to="/" class="button-notification" v-if="loggedIn">
          <div class="button-notification__icon">
            <i class="fa fa-bell-o"></i>
          </div>
        </router-link>
        <div class="user-profile" v-if="loggedIn">
          <div class="user-profile__circle">
            <template v-if="userAvatar != null">
              <img :src="$settings.images_path.users + 's_' + userAvatar" />
            </template>
            <template v-else>
              <span>{{userName}}</span>
            </template>
          </div>
          <i class="fa fa-angle-down"></i>
          <ul class="user-menu">
            <li class="user-menu__item">
              <router-link :to="{name: 'profile'}" class="user-menu__link">
                <i class="fa fa-user"></i> My Profile
              </router-link>
            </li>
            <li class="user-menu__item">
              <router-link :to="{name: 'account-settings'}" class="user-menu__link">
                <i class="fa fa-cogs"></i> Account Settings
              </router-link>
            </li>
            <li class="user-menu__item">
              <router-link :to="{name: 'feed'}" class="user-menu__link">
                <i class="fa fa-cloud"></i> My News Feed
              </router-link>
            </li>
            <li class="user-menu__item">
              <template v-if="organisation.admin != null">
                <router-link
                  :to="{name: 'organisation', params: {slug: organisation.slug}}"
                  class="user-menu__link"
                >
                  <i class="fa fa-users"></i> My Organisation
                </router-link>
              </template>
              <template v-else>
                <router-link :to="{name: 'create-organisation'}" class="user-menu__link">
                  <i class="fa fa-user-plus"></i> Create Organisation
                </router-link>
              </template>
            </li>
            <li class="user-menu__item">
              <a class="user-menu__link" href="#" @click.prevent="logout">
                <i class="fa fa-power-off"></i> Sign Out
              </a>
            </li>
          </ul>
        </div>
        <div class="user-profile" v-else>
          <div class="user-profile__circle">
            <span class="user-profile__circle-loggedout">
              <i class="fa fa-user-circle-o"></i>
            </span>
          </div>
          <i class="fa fa-angle-down"></i>
          <ul class="user-menu">
            <li class="user-menu__item">
              <router-link :to="{name: 'login'}" class="user-menu__link">
                <i class="fa fa-sign-in"></i> Login
              </router-link>
            </li>
            <li class="user-menu__item user-menu__item--textual">
              <span>New to Smiley Movement?</span>
            </li>
            <li class="user-menu__item">
              <router-link
                :to="{name: 'register'}"
                class="user-menu__link user-menu__link--register"
              >
                <i class="fa fa-user-plus"></i> Register
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      search: null,
      searchActive: false,
      socials: [
        { name: "facebook", link: process.env.VUE_APP_SOCIAL_FACEBOOK },
        { name: "linkedin", link: process.env.VUE_APP_SOCIAL_LINKEDIN },
        { name: "twitter", link: process.env.VUE_APP_SOCIAL_TWITTER },
        { name: "instagram", link: process.env.VUE_APP_SOCIAL_INSTAGRAM }
      ]
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters["user/isAuthenticated"];
    },
    userAvatar() {
      return this.$store.getters["user/avatar"];
    },
    userName() {
      return this.$store.getters["user/full_name"];
    },
    organisation() {
      console.log(this.$store.getters["user/organisation"]);
      return this.$store.getters["user/organisation"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
}

.search-block {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #393939;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.2s, opacity 0.2s;
  opacity: 0;
  pointer-events: none;
  width: 0;

  &.active {
    opacity: 1;
    width: 100%;
    pointer-events: all;
  }

  .search-form {
    width: 100%;
    display: grid;
    grid-template-columns: 48px auto 48px;
    opacity: 0;
    transition: opacity 0.2s;
    transition-delay: 0.2s;

    &.active {
      opacity: 1;
    }
  }

  .search-form__close {
    border: none;
    background-color: #393939;
    color: #fff;
    cursor: pointer;
  }
  .search-form__field {
    padding: 5px 20px;
    border: 1px solid #393939;
    border-top-color: #fff;
    border-bottom-color: #fff;

    &::valid,
    &::invalid {
      border: 1px solid #393939;
      border-top-color: #fff;
      border-bottom-color: #fff;
    }
  }
  .search-form__submit {
    border: none;
    color: #393939;
    background: #ffec02;
    cursor: pointer;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  position: relative;

  .grid-item {
    &--logo {
      display: flex;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      img {
        max-width: 240px;
        width: 100%;
        height: auto;
      }
    }
    &--social {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &--search {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  nav {
    width: 100%;
    height: 100%;
  }
}

// Main menu
.main-menu {
  display: flex;
  justify-content: center;
  margin: 0px;
  height: 100%;

  .main-menu__item {
    position: relative;
    display: flex;
    align-items: center;

    & > span {
      height: 100%;
      display: block;
    }

    &:hover {
      .main-menu__link {
        border-bottom: 2px solid #393939;

        i {
          transform: rotate(180deg);
        }
      }

      .sub-menu {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  .main-menu__link {
    font-family: "Montserrat SemiBold", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #393939;
    padding: 24px 10px 22px 10px;
    display: block;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s;
    height: 100%;
    display: flex;
    align-items: center;

    &.router-link-active {
      border-bottom: 2px solid #393939;
    }

    i {
      margin-left: 12px;
      transition: transform 0.2s;
    }
  }

  .sub-menu {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 15px 25px;
    z-index: 5;
    min-width: 200px;
    // border: 2px solid #393939;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);

    &::before {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid black;
      display: block;
      content: "";
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .sub-menu__item {
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .sub-menu__link {
    font-family: "Montserrat SemiBold", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #393939;
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
    transition: background-color 0.2s;

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
    transition: color 0.2s;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
}

.button-search {
  line-height: 1;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  // transition: transform 0.2s;
  margin-right: 12px;
  position: relative;
  overflow: hidden;
  padding: 0px 2px 2px 3px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: #393939;
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: 1;
    transition: top 0.2s;
  }

  i {
    position: relative;
    z-index: 2;
    color: #393939;
  }

  &:hover {
    &::before {
      top: 0px;
    }

    i {
      color: #fff;
    }
  }
}

.user-profile {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 2px;

  .user-profile__circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    margin-left: 24px;
    margin-right: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      border: 1px solid #d8d8d8;
    }

    &-loggedout {
      @include font-size(2rem);
    }
  }

  .fa.fa-angle-down {
    transition: transform 0.2s;
  }

  &:hover {
    .fa.fa-angle-down {
      transform: rotate(180deg);
    }

    .user-menu {
      opacity: 1;
      pointer-events: all;
    }
  }
}

.user-menu {
  position: absolute;
  right: 0px;
  top: calc(100% + 2px);
  background-color: #fff;
  z-index: 5;
  min-width: 250px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);

  &::before {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    display: block;
    content: "";
    position: absolute;
    top: -5px;
    right: 40px;
  }
}

.user-menu__item {
  &--textual {
    // text-align: center;
    padding: 15px 25px;
    font-family: "Montserrat SemiBold", sans-serif;
    @include font-size(0.9rem);
  }
}

.user-menu__link {
  font-family: "Montserrat Regular", sans-serif;
  text-decoration: none;
  color: #393939;
  padding: 15px 25px;
  display: block;
  font-size: 1rem;
  line-height: 1;
  text-decoration: none !important;
  transition: background-color 0.2s;

  &--register {
    background-color: #ffec00 !important;
  }

  i {
    margin-right: 12px;
  }

  &:hover {
    background-color: #eef3ff;
  }
}

.button-notification {
  color: #af241c;
  transition: color 0.2s;
  display: flex;
  position: relative;

  .button-notification__icon {
    transform-origin: 50% 4px;
    animation: ring 2s 0.7s ease-in-out infinite;
  }
}

@keyframes ring {
  0% {
    transform: rotate(0);
  }
  1% {
    transform: rotate(30deg);
  }
  3% {
    transform: rotate(-28deg);
  }
  5% {
    transform: rotate(34deg);
  }
  7% {
    transform: rotate(-32deg);
  }
  9% {
    transform: rotate(30deg);
  }
  11% {
    transform: rotate(-28deg);
  }
  13% {
    transform: rotate(26deg);
  }
  15% {
    transform: rotate(-24deg);
  }
  17% {
    transform: rotate(22deg);
  }
  19% {
    transform: rotate(-20deg);
  }
  21% {
    transform: rotate(18deg);
  }
  23% {
    transform: rotate(-16deg);
  }
  25% {
    transform: rotate(14deg);
  }
  27% {
    transform: rotate(-12deg);
  }
  29% {
    transform: rotate(10deg);
  }
  31% {
    transform: rotate(-8deg);
  }
  33% {
    transform: rotate(6deg);
  }
  35% {
    transform: rotate(-4deg);
  }
  37% {
    transform: rotate(2deg);
  }
  39% {
    transform: rotate(-1deg);
  }
  41% {
    transform: rotate(1deg);
  }

  43% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}
</style>