<template>
  <div>
    <header>
      <div class="search-block" :class="{active: searchActive}">
        <form
          action="#"
          method="get"
          class="search-form container"
          :class="{active: searchActive}"
          @submit.prevent="find"
        >
          <button class="search-form__close" type="button" @click="searchActive = false">
            <i class="fa fa-close"></i>
          </button>
          <div class="search-form__field-holder">
            <input
              type="search"
              id="search"
              class="search-form__field"
              placeholder="What are we looking for?"
              aria-label="Search through site content"
              v-model="search"
              required
            />
          </div>
          <button class="search-form__submit" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <!-- <form>
          <fieldset>
            <button class="search-form__close" type="button" @click="searchActive = false">
              <i class="fa fa-close"></i>
            </button>
          </fieldset>

          <fieldset>
            <input
              class="search-form__field"
              placeholder="What are we looking for?"
              type="search"
              id="search"
              aria-label="Search through site content"
              v-model="search"
              required
            />
          </fieldset>

          <fieldset>
            <button class="search-form__submit" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </fieldset>
        </form>-->
      </div>
      <div class="container grid">
        <div class="grid-item grid-item--menu-toggle">
          <button @click.prevent="mobileMenu">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="grid-item grid-item--logo">
          <router-link class="tm-logo" to="/">
            <img src="/img/smiley-logo-white-header.png" alt="Smiley Movement" />
            <span>Matchmaker for good<sup>TM</sup></span>
          </router-link>
        </div>
        <div class="grid-item grid-item--menu">
          <nav>
            <ul class="main-menu">
              <li class="main-menu__item" v-for="item in menu" :key="'menu-item-'+item.name">
                <template v-if="item.items == null">
                  <router-link class="main-menu__link" :to="{name: item.link}">{{item.name}}</router-link>
                </template>
                <template v-else>
                  <span>
                    <router-link
                      class="main-menu__link main-menu__item-has-children"
                      :to="{name: item.link}"
                    >
                      {{item.name}}
                      <i class="fa fa-angle-down"></i>
                    </router-link>
                  </span>
                  <ul class="sub-menu">
                    <li
                      class="sub-menu__item"
                      v-for="subitem in item.items"
                      :key="'menu-subitem-'+subitem.name"
                    >
                      <router-link
                        class="sub-menu__link"
                        :to="{name: subitem.link}"
                      >{{subitem.name}}</router-link>
                    </li>
                  </ul>
                </template>
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
            <div
              class="user-profile__circle"
              :class="{active: userMenu}"
              @click="userMenu = !userMenu"
            >
              <template v-if="userAvatar !== null">
                <img :src="$settings.images_path.users + 's_' + userAvatar" />
              </template>
              <template v-else>
                <span>{{userName}}</span>
              </template>
            </div>
            <i class="fa fa-angle-down"></i>
            <ul class="user-menu">
              <!-- <li class="user-menu__item">
                <router-link :to="{name: 'profile'}" class="user-menu__link">
                  <i class="fa fa-user"></i> My Profile
                </router-link>
              </li>-->
              <li class="user-menu__item">
                <router-link :to="{name: 'account-settings'}" class="user-menu__link">
                  <i class="fa fa-cogs"></i> Account Settings
                </router-link>
              </li>
              <li class="user-menu__item">
                <router-link :to="{name: 'feed'}" class="user-menu__link">
                  <i class="fa fa-user"></i> My Profile
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
            <div
              class="user-profile__circle"
              :class="{active: userMenu}"
              @click="userMenu = !userMenu"
            >
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
    <div class="mobile-menu-holder">
      <button class="close-menu" @click.prevent="mobileMenu">
        <i class="fa fa-angle-left"></i>
        <span>Back to website</span>
      </button>
      <div class="mobile-menu-inner">
        <ul class="mobile-menu">
          <li class="mobile-menu__item" v-for="item in menu" :key="'menu-item-'+item.name">
            <router-link class="mobile-menu__link" :to="{name: item.link}">{{item.name}}</router-link>
            <ul class="sub-menu" v-if="item.items != null">
              <li
                class="sub-menu__item"
                v-for="subitem in item.items"
                :key="'menu-subitem-'+subitem.name"
              >
                <router-link class="sub-menu__link" :to="{name: subitem.link}">{{subitem.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="header-socials">
          <li class="header-socials__item" v-for="social in socials" :key="'social-'+social.name">
            <a :href="social.link" target="_blank" class="header-socials__link">
              <i class="fa" :class="'fa-'+social.name"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "MainHeader",
  data() {
    return {
      menu: [
        {
          name: "smiley talks",
          link: "talks"
        },
        {
          name: "smiley news",
          link: "news"
        },
        {
          name: "network",
          link: "network",
          items: [
            { name: "organisations", link: "organisations" },
            { name: "members", link: "members" },
            { name: "projects", link: "projects" },
            { name: "partners", link: "partners" },
            // { name: "chat", link: "chat" }
          ]
        },
        {
          name: "our story",
          link: "story"
        },
        {
          name: "un goals",
          link: "goals"
        }
      ],
      search: null,
      searchActive: false,
      socials: [
        { name: "facebook", link: process.env.VUE_APP_SOCIAL_FACEBOOK },
        { name: "linkedin", link: process.env.VUE_APP_SOCIAL_LINKEDIN },
        { name: "twitter", link: process.env.VUE_APP_SOCIAL_TWITTER },
        { name: "instagram", link: process.env.VUE_APP_SOCIAL_INSTAGRAM }
      ],
      userMenu: false
      // mobileMenu: false
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
      return this.$store.getters["user/get_initials"];
    },
    organisation() {
      console.log('organisation', this.$store.getters["user/organisation"]);
      return this.$store.getters["user/organisation"];
    }
  },
  methods: {
    find() {
      router.push({
        name: "search",
        params: { keyword: this.search }
      });
      this.searchActive = false;
    },
    logout() {
      this.$store.dispatch("user/logout");
    },
    mobileMenu() {
      document.body.classList.toggle("mobile-menu--opened");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 10;
  background-color: #3d465a;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
}

.search-block {
  position: absolute;
  left: 0%;
  // transform: translateX(-50%);
  top: 0px;
  width: 0;
  height: 100%;
  background-color: #3d465a;
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

    @include smMax {
      grid-template-columns: 30px auto 30px;
    }
  }

  .search-form__field-holder {
    width: auto;
    background-color: #fff;
    border-right: 1px solid #393939;
  }

  .search-form__field {
    padding: 5px 20px;
    border-radius: 0px !important;
    -webkit-appearance: searchfield;
    appearance: searchfield;
    -webkit-border-radius: 0;
    box-shadow: none;
    width: 100%;
    background-image: linear-gradient(transparent, transparent) !important;
    @include smMax {
      padding: 5px 10px;
    }

    &:valid,
    &:invalid {
      border: 1px solid #fff !important;
    }
  }

  .search-form__close {
    border: none;
    background-color: #393939;
    color: #fff;
    cursor: pointer;
    -webkit-appearance: none !important;
    border-radius: 0px;
    padding: 0px;
  }

  .search-form__submit {
    border: none;
    color: #393939;
    background: #ffec02;
    cursor: pointer;
    -webkit-appearance: none !important;
    border-radius: 0px;
    padding: 0px;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  position: relative;

  @include xlMax {
    grid-template-columns: 1fr 3fr 1fr;
  }

  @include lgMax {
    grid-template-columns: 40px 2fr 1fr 1fr;
  }
  @include mdMax {
    grid-template-columns: 40px 2fr 1fr;
  }

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
      @include lgMax {
        padding-left: 20px;
      }
      @include smMax {
        padding-right: 10px;
        padding-left: 20px;
        img {
          max-width: 80%;
        }
      }
    }
    &--social {
      display: flex;
      align-items: center;
      justify-content: center;
      @include mdMax {
        display: none;
      }
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

    &--menu-toggle {
      display: none;

      @include lgMax {
        display: block;
      }

      button {
        height: 100%;
        width: 100%;
        text-align: center;
        padding: 0px !important;
        margin: 0px !important;
        @include font-size(2rem);
        background-color: #fff;
        border: none;
        cursor: pointer;
        -webkit-appearance: none !important;
        -webkit-border-radius: 0 !important;
      }
    }

    &--menu {
      @include xlMax {
        grid-column: 1 / span 3;
        order: 5;
      }

      @include lgMax {
        display: none;
      }
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
        border-bottom: 2px solid #fff;

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
    color: #fff;
    padding: 24px 10px 22px 10px;
    display: block;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s;
    height: 100%;
    display: flex;
    align-items: center;

    &.router-link-active {
      border-bottom: 2px solid #fff;
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
      border-bottom: 5px solid #fff;
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
  padding-left: 10px;
  padding-right: 10px;

  .header-socials__item {
    border: 1px solid #fff;
    line-height: 1;
    width: 24px;
    height: 24px;
    transition: background-color 0.2s;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      background-color: #fff;

      .header-socials__link {
        color: #393939;
      }
    }
  }

  .header-socials__link {
    color: #fff;
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
    background-color: #fff;
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: 1;
    transition: top 0.2s;
  }

  i {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  &:hover {
    &::before {
      top: 0px;
    }

    i {
      color: #393939;
    }
  }
}

.user-profile {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 2px;

  & > i {
    color: #fff;
  }

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

    @include mdMax {
      &.active + .fa.fa-angle-down {
        transform: rotate(180deg);
      }

      &.active ~ .user-menu {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  .fa.fa-angle-down {
    transition: transform 0.2s;
  }

  @include md {
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
    border-bottom: 5px solid #fff;
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
  color: #fff;
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

body.mobile-menu--opened {
  .mobile-menu-holder {
    opacity: 1;
    pointer-events: all;
    left: 0px;
  }
}

.mobile-menu-holder {
  position: fixed;
  left: -100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
  background-color: #3d465a;
  top: 0px;
  // left: 0px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, left 0.2s;
  display: flex;
  flex-direction: column;

  .close-menu {
    color: #393939;
    border: none !important;
    margin-bottom: 36px;
    text-transform: uppercase;
    @include font-size(1rem);
    width: 100%;
    background-color: #fff;
    width: 100%;
    padding: 20px 20px;
    i {
      margin-right: 24px;
    }
  }

  .mobile-menu-inner {
    overflow: scroll;
    height: 100%;
    flex: 1;
    width: 100%;
    padding: 0px 20px 20px 20px;
  }

  .mobile-menu {
    .mobile-menu__item {
      margin-bottom: 12px;
    }
    .mobile-menu__link {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none !important;
    }

    .sub-menu {
      padding-top: 12px;
      margin-bottom: 12px;
      position: relative;

      // &::before {
      //   content: "";
      //   height: calc(100% - 12px);
      //   width: 0.%;
      //   background-color: #fff;
      //   position: absolute;
      //   left: 0px;
      //   top: 0px;
      // }
    }

    .sub-menu__item {
      padding-left: 24px;
      margin-bottom: 12px;
      position: relative;

      &::before {
        content: "";
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 1px;
        background-color: #fff;
        display: block;
        position: absolute;
      }
    }

    .sub-menu__link {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none !important;
    }
  }

  .header-socials {
    padding-left: 0px;
    padding-right: 0px;

    .header-socials__item {
      margin-right: 16px;
      width: 36px;
      height: 36px;
    }
  }
}

.tm-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: .5rem
  }

  span {
    color: #fff;
    @include font-size(.8rem);

    @include smMax {
      @include font-size(.45rem);
    }
  }
}
</style>
