<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__grid-top">
          <div class="header__column header__column--actions">
            <div class="actions">
              <button @click="openNav"
                      style="font-size: 100%; font-family: inherit; border: 0; padding: 0; background-color: #ffffff;">
                <img src="/images/main/icon-bars.svg" class="header__bars"/>
              </button>
              <!--     HEADER BAR MENU       -->
              <div id="mySidenav" class="sidenav">
                <button @click="closeNav"
                        style="font-size: 100%; font-family: inherit; border: 0; padding: 0; background-color: #ffffff;">
                  <span class="closebtn">&times;</span>
                </button>
                <router-link class="sideNavLink" :to="{name: 'news'}">News</router-link>
                <router-link class="sideNavLink" :to="{name: 'talks'}">Events</router-link>
                <router-link class="sideNavLink" :to="{name: 'interviews'}">Interviews</router-link>
                <router-link class="sideNavLink" :to="{name: 'chat'}">Chatrooms</router-link>
                <!--YELLOW LINE-->
                <router-link class="sideNavLink after-yellow-bottom" :to="{name: 'network'}">Network</router-link>
                <router-link class="sideNavLink" :to="{name: 'goals'}">About us</router-link>
                <router-link class="sideNavLink" :to="{name: 'goals'}">UN Goals</router-link>
                <router-link class="sideNavLink" :to="{name: 'contact'}">Contact us</router-link>
              </div>
              <template v-if="loggedIn">
                <router-link :to="{name: 'feed'}" class="home-link">
                  <template v-if="user.avatar">
                    <img :src="$settings.images_path.users + 's_' + user.avatar" class="user__avatar"/>
                  </template>
                  <template v-else>
                    <img src="/images/main/icon-profile.svg" class="user__avatar"/>
                  </template>
                </router-link>
              </template>
              <template v-else>
                <router-link :to="{name: 'login'}" class="home-link">
                  <img src="/images/main/icon-profile.svg" class="user__avatar"/>
                </router-link>
              </template>
              <template v-if="loggedIn">
                <router-link :to="{name: 'feed'}" class="text-link">{{ user.initials }}</router-link>
              </template>
              <template v-else>
                <router-link :to="{name: 'register'}" class="text-link">Join us</router-link>
              </template>
            </div>
          </div>
          <div class="header__column header__column--logo">
            <router-link
                v-if="$route.path === '/smiley-network'"
                :to="{name: 'network'}"
                class="home-link"
            >
              <img src="/images/main/smiley-network-logo392@2x.png" alt="Smiley Movement"/>
            </router-link>
            <router-link
                v-else
                :to="{name: 'home'}"
                class="home-link"
            >
              <img src="/images/main/smiley-news-logo.svg" alt="Smiley Movement"/>
            </router-link>
          </div>
          <nav class="header__column header__column--socials">
            <ul class="social">
              <li class="social__item">
                <a :href="social.instagram" class="social__icon">
                  <img
                      src="/images/main/social-instagram.svg"
                      class="social__image"
                      alt="SmileyMovement on Instagram"
                      title="SmileyMovement on Instagram"/>
                </a>
              </li>
              <li class="social__item">
                <a :href="social.youtube" class="social__icon">
                  <img
                      src="/images/main/social-youtube.svg"
                      class="social__image"
                      alt="SmileyMovement on YouTube"
                      title="SmileyMovement on YouTube"/>
                </a>
              </li>
              <li class="social__item">
                <a :href="social.facebook" class="social__icon">
                  <img
                      src="/images/main/social-facebook.svg"
                      class="social__image"
                      alt="SmileyMovement on Facebook"
                      title="SmileyMovement on Facebook"/>
                </a>
              </li>
              <li class="social__item">
                <a :href="social.twitter" class="social__icon">
                  <img
                      src="/images/main/social-twitter.svg"
                      class="social__image"
                      alt="SmileyMovement on Twitter"
                      title="SmileyMovement on Twitter"/>
                </a>
              </li>
              <li class="social__item">
                <img src="/images/main/icon-search.svg"/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="container">
        <ul class="main-menu">
          <li class="main-menu__item">
            <router-link
                class="main-menu__link"
                :to="{name: 'news-category-item', params: {slug: 'sustainable-cities-and-communities'}}">Sustainability
            </router-link>
            <!--     SUB MENU       -->
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'clean-water-and-sanitation'}}">
                  Clean Water & Sanitation
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'affordable-and-clean-energy'}}">
                  Clean Energy
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'sustainable-cities-and-communities'}}">
                  Sustainable Cities & Communities
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'responsible-consumption-and-production'}}">
                  Responsible Consumption
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'partnerships-for-the-goals'}}">
                  Partnership for the Goals
                </router-link>
              </li>
            </ul>
          </li>
          <li class="main-menu__item">
            <router-link
                class="main-menu__link"
                :to="{name: 'news-category-item', params: {slug: 'peace-justice-and-strong-institutions'}}">Social
              Justice
            </router-link>
            <!--     SUB MENU       -->
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'no-poverty'}}">
                  No Poverty
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'zero-hunger'}}">
                  No Hunger
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'gender-equality'}}">
                  Gender Equality
                </router-link>
              </li>
            </ul>
          </li>
          <li class="main-menu__item">
            <router-link
                class="main-menu__link"
                :to="{name: 'news-category-item', params: {slug: 'quality-education'}}">Education
            </router-link>
            <!--     SUB MENU       -->
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'quality-education'}}">
                  Quality Education
                </router-link>
              </li>
            </ul>
          </li>
          <li class="main-menu__item">
            <router-link
                class="main-menu__link"
                :to="{name: 'news-category-item', params: {slug: 'good-health-and-well-being'}}">Health
            </router-link>
            <!--     SUB MENU       -->
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'good-health-and-well-being'}}">
                  Good Health
                </router-link>
              </li>
            </ul>
          </li>
          <li class="main-menu__item">
            <router-link
                class="main-menu__link"
                :to="{name: 'news-category-item', params: {slug: 'climate-action'}}">Climate
            </router-link>
            <!--     SUB MENU       -->
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'climate-action'}}">
                  Protect the Planet
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'life-below-water'}}">
                  Life Below Water
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'life-on-land'}}">
                  Life on Land
                </router-link>
              </li>
            </ul>
          </li>
          <li class="main-menu__item">
            <router-link
                class="main-menu__link"
                :to="{name: 'news-category-item', params: {slug: 'decent-work-and-economic-growth'}}">Economic Growth
            </router-link>
            <!--     SUB MENU       -->
            <ul class="sub-menu">
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'decent-work-and-economic-growth'}}">
                  Good Jobs & Economic Growth
                </router-link>
              </li>
              <li class="sub-menu__item">
                <router-link
                    class="sub-menu__link"
                    :to="{name: 'news-category-item', params: {slug: 'industry-innovation-and-infrastructure'}}">
                  Innovation & Infrastructure
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Header",
  data() {
    return {
      social: {
        facebook: process.env.VUE_APP_SOCIAL_FACEBOOK,
        linkedin: process.env.VUE_APP_SOCIAL_LINKEDIN,
        twitter: process.env.VUE_APP_SOCIAL_TWITTER,
        instagram: process.env.VUE_APP_SOCIAL_INSTAGRAM,
        youtube: process.env.VUE_APP_SOCIAL_YOUTUBE,
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters["user/isAuthenticated"];
    },
    user() {
      return this.$store.getters["user/user"];
    },
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "19rem";
      let sideNavLinks = document.getElementsByClassName("sideNavLink");
      setTimeout(() => {
        for (let i = 0; i < sideNavLinks.length; i++) {
          sideNavLinks[i].style["display"] = 'block';
        }
      }, 300)
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      let sideNavLinks = document.getElementsByClassName("sideNavLink");
      for (let i = 0; i < sideNavLinks.length; i++) {
        sideNavLinks[i].style["display"] = 'none';
      }
    },
    find() {
      router.push({
        name: "search",
        params: {keyword: this.search}
      });
      this.searchActive = false;
    },
  },
  watch: {
    '$route.path': {
      handler() {
        this.closeNav()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 1.5rem;
  padding-bottom: 1.8rem;
  position: relative;
  z-index: 10;
  background: #fff;

  .sidenav {
    font-family: "Gotham Bold", sans-serif;
    min-height: 26rem;
    width: 0;
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.96);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 2.5rem;
  }

  .sidenav a {
    &::before {
      display: inline-block;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.3s, left 0.4s ease-in-out;
      content: '';
      position: absolute;
      top: 20%;
      left: 0;
      width: 17px;
      height: 17px;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: yellow;
    }

    padding: 2px 8px;
    margin: 0 3rem;
    text-decoration: none;
    font-size: 22px;
    color: #000000;
    display: block;
    transition: 0.3s;
    position: relative;

    &.yellow-bottom {
      border-bottom: 3px solid yellow;
      padding-bottom: 8px;
    }

    &.after-yellow-bottom {
      padding-top: 8px;
    }
  }

  .sidenav a:hover {
    &::before {
      visibility: visible;
      opacity: 1;
      content: '';
      position: absolute;
      top: 22%;
      left: -8%;
      width: 17px;
      height: 17px;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: yellow;
    }

    &.yellow-bottom {
      &::before {
        top: 20%;
      }
    }

    &.after-yellow-bottom {
      &::before {
        top: 34%;
      }
    }
  }

  .sidenav .closebtn {
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: 25px;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 50px;
    color: yellow;

    &:hover {
      color: yellow
    }
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
}

.header {
  &__grid-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  &__column {
    display: flex;
    align-items: flex-end;

    &--actions {
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    &--socials {
      justify-content: flex-end;

      ul {
        margin-bottom: 0px;
      }
    }

    &--logo {
      justify-content: center;
    }
  }

  &__bars {
    height: 24px;
    width: 24px;
    object-fit: contain;
    margin-right: 1rem;
    cursor: pointer;
  }
}


.user {
  &__avatar {
    height: 36px;
    width: 36px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }
}

.home-link {
  img {
    max-width: 320px;
    height: auto;
  }
}

.text-link {
  font-size: 1.4rem;
  color: #000;
  border-bottom: 1px solid transparent;
  transition: border-color .2s;

  &:hover {
    text-decoration: none;
    border-color: #000;
  }
}

.main-menu {
  margin: 2.5rem 0px 0px 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;

    &:not(:last-child) {
      border-right: 3px solid yellow;
    }

    &:hover {
      .sub-menu {
        display: block;
        animation: fade_in_show 0.3s;
        pointer-events: all;
      }
    }
  }

  &__link {
    color: #000;
    font-size: 1.2rem;
    border-bottom: 1px solid transparent;
    transition: .2s;

    &:hover {
      color: #000;
      text-decoration: none;
      border-color: yellow
    }

    &.router-link-exact-active {
      color: #000;
      border-color: yellow
    }
  }

  .sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 15px 0 0 5px;
    z-index: 5;
    min-width: 200%;
    pointer-events: none;
    display: none;

    &__item {
      line-height: 1.8rem;
      padding-left: 4px;
    }

    &__link {
      color: #000;
      font-size: 1rem;
      font-family: "Gotham Book", sans-serif;

      &:hover {
        color: #000;
        text-decoration: none;
        font-weight: bold;
        font-family: "Gotham Bold", sans-serif;
      }

      &.router-link-exact-active {
        color: #000;
        font-weight: bold;
        font-family: "Gotham Bold", sans-serif;
      }
    }
  }

  @keyframes fade_in_show {
    0% {
      opacity: 0;
      transform: scale(0)
    }

    100% {
      opacity: 1;
      transform: scale(1)
    }
  }
}
</style>
