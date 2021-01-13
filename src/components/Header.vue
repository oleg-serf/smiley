<template>
  <div>
    <header class="header">
      <!--     HEADER BAR MENU       -->
      <div id="sidebarWrapper">
        <div id="mySidenav" class="sidenav">
          <span class="closebtn" @click="closeNav"><i class="fa fa-angle-left"></i></span>
          <div class="social-share-and-search">
            <button
                class="search-trigger"
            >
              <i class="fa fa-search"></i>
            </button>
            <ul class="social-share">
              <li class="social-share__item" v-if="social.facebook">
                <a
                    :href="social.facebook"
                    class="social-share__link social-share__link--facebook"
                    target="_blank"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.instagram">
                <a
                    :href="social.instagram"
                    class="social-share__link social-share__link--instagram"
                    target="_blank"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.linkedin">
                <a
                    :href="social.linkedin"
                    class="social-share__link social-share__link--linkedin"
                    target="_blank"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.twitter">
                <a
                    :href="social.twitter"
                    class="social-share__link social-share__link--twitter"
                    target="_blank"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.youtube">
                <a
                    :href="social.youtube"
                    class="social-share__link social-share__link--youtube"
                    target="_blank"
                >
                  <i class="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
          <template v-if="loggedIn">
            <router-link
                class="sideNavLink"
                :to="{ name: 'profile' }"
                style="margin-top: 1rem"
            >Profile</router-link
            >
            <a href="#" class="sideNavLink yellow-bottom" @click.prevent="logout()">
              Log Out
            </a>
          </template>
          <template v-else>
            <router-link
                class="sideNavLink"
                :to="{ name: 'register' }"
                style="margin-top: 1rem"
            >Register</router-link
            >
            <router-link
                class="sideNavLink"
                :to="{ name: 'login' }"
            >Log In</router-link
            >
          </template>
          <router-link
              class="sideNavLink"
              :to="{ name: 'news' }"
              style="margin-top: 1rem"
          >News</router-link
          >
          <router-link class="sideNavLink" :to="{ name: 'talks' }"
          >Events</router-link
          >
          <router-link class="sideNavLink yellow-bottom" :to="{ name: 'interviews' }"
          >Interviews</router-link
          >
          <!-- <router-link
            class="sideNavLink yellow-bottom"
            :to="{ name: 'chat' }"
            >Chatrooms</router-link
          > -->
          <!--YELLOW LINE-->
          <router-link
              class="sideNavLink after-yellow-bottom"
              :to="{
                      name: 'news-category-item',
                      params: { slug: 'sustainable-cities-and-communities' },
                    }"
          >Sustainability
          </router-link>
          <router-link
              class="sideNavLink"
              :to="{
                      name: 'news-category-item',
                      params: { slug: 'peace-justice-and-strong-institutions' },
                    }"
          >Social Justice
          </router-link>
          <router-link
              class="sideNavLink"
              :to="{
                      name: 'news-category-item',
                      params: { slug: 'quality-education' },
                    }"
          >Education
          </router-link>
          <router-link
              class="sideNavLink"
              :to="{
                      name: 'news-category-item',
                      params: { slug: 'good-health-and-well-being' },
                    }"
          >Mental Health
          </router-link>
          <router-link
              class="sideNavLink"
              :to="{
                      name: 'news-category-item',
                      params: { slug: 'climate-action' },
                    }"
          >Climate
          </router-link>
          <router-link
              class="sideNavLink yellow-bottom"
              :to="{
                      name: 'news-category-item',
                      params: { slug: 'decent-work-and-economic-growth' },
                    }"
          >Economic Growth
          </router-link>
          <router-link
              class="sideNavLink after-yellow-bottom"
              :to="{ name: 'network' }"
          >Network</router-link
          >
          <router-link
              class="sideNavLink"
              :to="{ name: 'organisations' }"
          >Organisations</router-link
          >
          <router-link class="sideNavLink" :to="{ name: 'members' }"
          >People</router-link
          >
          <router-link class="sideNavLink" :to="{ name: 'story' }"
          >About us</router-link
          >
          <router-link class="sideNavLink" :to="{ name: 'goals' }"
          >UN Goals</router-link
          >
          <router-link class="sideNavLink" :to="{ name: 'contact' }"
          >Contact us</router-link
          >
        </div>
      </div>
      <div class="container">
        <div class="header__grid-top">
          <div class="header__column header__column--actions">
            <div class="actions">
              <div class="actions__item actions__item-open-nav">
                <button  @click="openNav">
                  <i class="fa fa-bars"></i>
                </button>
              </div>
              <div class="actions__item">
                <template v-if="loggedIn">
                  <router-link :to="{name: 'profile'}" class="user__avatar-holder">
                    <template v-if="user.avatar">
                      <img :src="$settings.images_path.users + 's_' + user.avatar" class="user__avatar"/>
                    </template>
                    <template v-else>
                      <img src="/images/main/icon-profile.svg" class="user__avatar"/>
                    </template>
                  </router-link>
                </template>
                <template v-else>
                  <router-link :to="{name: 'login'}" class="user__avatar-holder">
                    <img src="/images/main/icon-profile.svg" class="user__avatar"/>
                  </router-link>
                </template>
              </div>
              <div class="actions__item">
                <template v-if="loggedIn">
                  <router-link :to="{name: 'profile'}" class="user__initials">{{ user.initials }}</router-link>
                </template>
                <template v-else>
                  <button @click="authentification" class="user__initials">Register / Login</button>
                </template>
              </div>
            </div>
          </div>
          <div class="header__column header__column--logo">
            <router-link
                v-if="$route.path === '/smiley-network'"
                :to="{name: 'home'}"
                class="home-link"
            >
              <img src="/images/main/network-desktop-logo.svg" alt="Smiley Movement"/>
            </router-link>
            <router-link
                v-else-if="$route.path.search('/smiley-talks/') > -1"
                :to="{name: $route.path == '/smiley-talks/' ? 'home':'talks'}"
                class="home-link"
            >
              <img src="/images/main/talks-desktop-logo.svg" alt="Smiley Movement"/>
            </router-link>
            <router-link
                v-else
                :to="{name: 'home'}"
                class="home-link"
            >
              <img src="/images/main/news-desktop-logo.svg" alt="Smiley Movement"/>
            </router-link>
          </div>
          <div class="header__column header__column--socials">
            <ul class="social-share">
              <li class="social-share__item" v-if="social.facebook">
                <a :href="social.facebook"
                   class="social-share__link social-share__link--facebook"
                   target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.instagram">
                <a :href="social.instagram"
                   class="social-share__link social-share__link--instagram" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.linkedin">
                <a :href="social.linkedin"
                   class="social-share__link social-share__link--linkedin" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.twitter">
                <a :href="social.twitter"
                   class="social-share__link social-share__link--twitter" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="social-share__item" v-if="social.youtube">
                <a :href="social.youtube"
                   class="social-share__link social-share__link--youtube" target="_blank">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
            <button class="search-trigger" @click="search.trigger = true">
              <i class="fa fa-search"></i>
            </button>
          </div>
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
                    :to="{name: 'news-category-item', params: {slug: 'reduced-inequalities'}}">
                  Reduced Inequalities
                </router-link>
              </li>
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
      <div class="search-form" :class="{'active' : search.trigger}" v-click-outside="hideSearchForm">
        <div class="search-form__title">What do you want to find?</div>
        <form class="container" @submit.prevent="find">
          <button type="reset" class="search-form__reset" @click="search.trigger = false;">
            <i class="fa fa-close"></i>
          </button>
          <input
              type="search"
              class="search-form__input"
              placeholder="Your search request..."
              aria-label="Search through site content"
              required
              minlength="2"
              v-model="search.value">
          <button class="search-form__submit" type="submit">
            Search <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </header>
  </div>
</template>

<script>
import router from "@/router";
import axios from "@/axios-auth";
import ClickOutside from 'vue-click-outside';

export default {
  name: "Header",
  data() {
    return {
      sidebar: false,
      search: {
        trigger: false,
        value: '',
      },
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
          sideNavLinks[i].style["display"] = "block";
        }
      }, 300);
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      let sideNavLinks = document.getElementsByClassName("sideNavLink");
      for (let i = 0; i < sideNavLinks.length; i++) {
        sideNavLinks[i].style["display"] = "none";
      }
    },
    authentification() {
      this.$swal({
        title: 'Register or Login',
        text: "Register for an event or 'Create Account' to connect with people and good causes",
        showDenyButton: true,
        showCancelButton: true,
        denyButtonText: 'Login',
        confirmButtonText: 'Register',
        cancelButtonText: 'Quick Registration',
        customClass: {
          popup: 'auth-modal',
          denyButton: 'auth-modal__login swal2-cancel',
          confirmButton: 'auth-modal__register',
          cancelButton: 'auth-modal__quick',
        }
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          router.push({name: "register"});
        } else if (result.isDenied) {
          router.push({name: "login"});
        } else if (result.isDismissed && result.dismiss === 'cancel') {
          this.quickRegistration();
        }
      });
    },
    async quickRegistration() {
      const {value: formValues} = await this.$swal.fire({
        title: 'Quick Registration',
        html:
            '<input id="qr-name" class="swal2-input" placeholder="Your Name">' +
            '<input id="qr-email" class="swal2-input" placeholder="Email Address">' +
            '<input id="qr-password" class="swal2-input" placeholder="Password">',
        focusConfirm: false,
        confirmButtonText: "Submit",
        showCancelButton: true,
        preConfirm: () => {
          return {
            full_name: document.getElementById('qr-name').value,
            email: document.getElementById('qr-email').value,
            password: document.getElementById('qr-password').value,
          }
        }
      });

      if (formValues?.full_name && formValues?.email && formValues?.password) {
        axios
            .post("auth/register/quick", formValues)
            .then(res => {
              console.log('register success', res);
              if (res?.data?.success) {
                this.$store
                    .dispatch("user/loginAsGuest", res);
              }
            })
            .catch(error => console.log(error));
      }
    },
    find() {
      router.push({
        name: "search",
        params: {keyword: this.search.value}
      });
      this.search.trigger = false;
    },
    logout() {
      this.$store
          .dispatch("user/logout");
      this.sidebar = false;
    },
    hideSearchForm() {
      this.search.trigger = false;
    },
  },
  watch: {
    '$route.path': {
      handler() {
        this.sidebar = false;
      }
    }
  },
  mounted() {
    this.popupItem = this.$el
  },
  directives: {
    ClickOutside
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

  .sidebar {
    position: fixed;
    overflow-x: hidden;
    padding: 1.5rem 2rem;
    width: 100%;
    max-width: 260px;
    height: 100%;
    background-color: #fff;
    z-index: 20;
    left: -100%;
    top: 0px;
    transition: left .2s;
    box-shadow: 3px 0px 6px rgba(0, 0, 0, .5);

    &.active {
      left: 0px;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      &--close {
        button {
          border: none;
          background: transparent;
          font-size: .8rem;
          padding: 0px;

          i {
            margin-right: 1rem;
          }
        }
      }

      &--logged-in {
        display: flex;
        align-items: center;
      }

      &--actions {
        .user-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, .3);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .user-initials {
          @include font-size(1.25rem);
          color: #000;
          text-decoration: none !important;
        }
      }

      &--share {
        h3 {
          margin-bottom: 1rem;
        }

        .social-share {
          margin-bottom: 0px;
          display: flex;
          margin-left: -.3rem;
          margin-right: -.3rem;

          li {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: .3rem;
            margin-right: .3rem;
            cursor: pointer;
            transition: background-color .2s, transform .2s, color .2s;

            &:hover,
            &:active {
              background-color: #fff;
            }

            &:active {
              transform: translate(1px, 1px);
            }
          }

          a {
            color: #fff;
            @include font-size(1.2rem);
            transition: color .2s;

            &:hover,
            &:active {
              color: #000;
            }
          }
        }
      }
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

    &--socials {
      justify-content: flex-end;

      ul {
        margin-bottom: 0px;
        display: flex;

        @include lgMax {
          display: none;
        }
      }

      li {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .3rem;
        margin-right: .3rem;
        cursor: pointer;
        transition: background-color .2s, transform .2s, color .2s;

        &:hover,
        &:active {
          background-color: #fff;
        }

        &:active {
          transform: translate(1px, 1px);
        }
      }

      a {
        color: #fff;
        @include font-size(1.2rem);
        transition: color .2s;

        &:hover,
        &:active {
          color: #000;
        }
      }
    }

    &--logo {
      justify-content: center;

      img {
        max-width: 100%;
        width: 100%;
        height: auto;
      }
    }

    .search-trigger {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      @include font-size(1.2rem);
      border-radius: 50%;
      border: none;
      background: transparent;
      color: #000;
      cursor: pointer;
      transition: background-color .2s, transform .2s, color .2s;
      margin-left: .2rem;

      &:hover,
      &:active {
        background-color: #000;
        color: #fff;
      }

      &:active {
        transform: translate(1px, 1px);
      }
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


//.home-link {
//  margin-right: 1.5rem;
//
//  img {
//    max-width: 320px;
//    height: auto;
//    margin: 0px;
//  }
//}

.main-menu {
  margin: 2.5rem 0px 0px 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @include lgMax {
    display: none;
  }

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
        color: yellow;
        text-decoration: none;
        font-weight: bold;
        font-family: "Gotham Bold", sans-serif;
      }

      &.router-link-exact-active {
        color:yellow;
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

.search-form {
  background-color: #000;
  width: 100%;
  height: 100%;
  border: 3px solid #000;
  transition: opacity .2s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  left: 0px;
  bottom: 0px;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  .container {
    display: flex;
    width: 100%;
    //align-items: center;
  }

  &__title {
    color: #fff;
    @include font-size(1.2rem);
    text-align: center;
    margin-bottom: .5rem;
  }

  &__input {
    flex: 1;
    width: auto;
    padding: .5rem 1rem;
    font-size: 16px;
    border: none;
  }

  &__reset {
    width: 2rem;
    height: 2.625rem;
    border: none;
    background-color: #000;
    color: #fff;
    transition: color .2s, background-color .2s;
    cursor: pointer;

    &:hover,
    &:active {
      background: #fff;
      color: #000;
    }
  }

  &__submit {
    background-color: #ffe300;
    color: #000;
    height: 2.625rem;
    border: none;
    padding: 0px 1rem;

    @include smMax {
      font-size: 0px;
    }

    i {
      margin-left: .5rem;

      @include smMax {
        font-size: 16px;
        margin-left: 0px;
      }
    }
  }
}


.actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__item {
    margin-right: .3rem;
    margin-left: .3rem;

    &:first-child {
      margin-left: 0px;
    }

    &-open-nav {
      button {
        padding: 0px;
        margin: 0px;
        border: none;
        background: none;
        font-size: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}

.user {
  &__avatar-holder {
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #FFEE01;
  }

  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0px;
    top: 0px;
  }

  &__initials {
    font-size: 1.2rem;
    color: #000;
    transition: border-color .2s;
    margin: 0px;
    border: none;
    border-bottom: 1px solid transparent;
    background: transparent;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      border-color: #000;
    }
  }
}

// New styles
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
  padding-top: 1rem;
  .social-share-and-search {
    display: flex;
    margin-top: 1.5rem;
    margin-left: 1.5rem;

    .search-trigger {
      width: 1.6rem;
      height: 1.6rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: #000;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.2s, color 0.2s;
      margin-left: 0.2rem;
      margin-right: 1.5rem;
    }

    .social-share {
      margin-bottom: 0px;
      display: flex;
      margin-left: -0.3rem;
      margin-right: -0.3rem;

      li {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s, color 0.2s;

        &:hover,
        &:active {
          background-color: #fff;
        }

        &:active {
          transform: translate(1px, 1px);
        }
      }

      a {
        color: #fff;
        @include font-size(1.1rem);
        transition: color 0.2s;
        margin-top: 0.2rem;

        &:hover,
        &:active {
          color: #000;
        }
      }
    }
  }
  a {
    // &::before {
    //   display: inline-block;
    //   visibility: hidden;
    //   opacity: 0;
    //   transition: visibility 0s, opacity 0.3s, left 0.4s ease-in-out;
    //   content: "";
    //   position: absolute;
    //   top: 20%;
    //   left: 0;
    //   width: 17px;
    //   height: 17px;
    //   -moz-border-radius: 7.5px;
    //   -webkit-border-radius: 7.5px;
    //   border-radius: 7.5px;
    //   background-color: yellow;
    // }

    padding: 2px 0;
    margin: 0 2rem;
    &.sideNavLink {
      &:first-child {
        margin-top: 1rem !important;
      }

      background-color: transparent;
      border: none;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    text-decoration: none;
    font-size: 1.2rem;
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
  .closebtn {
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: 25px;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 50px;
    color: yellow;

    &:hover {
      color: yellow;
    }
  }
}
</style>
