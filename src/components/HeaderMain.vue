<template>
  <header>
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
                  <router-link class="sub-menu__link" :to="{name: 'story'}">our partners</router-link>
                </li>
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'story'}">members</router-link>
                </li>
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'story'}">organisations</router-link>
                </li>
                <li class="sub-menu__item">
                  <router-link class="sub-menu__link" :to="{name: 'story'}">projects</router-link>
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
        <button @click.prevent="searchActivator" class="button-search">
          <i class="fa fa-search"></i>
        </button>
        <router-link to="/" class="button-notification">
          <i class="fa fa-bell-o"></i>
        </router-link>
        <div class="user-profile">
          <div class="user-profile__circle"></div>
          <i class="fa fa-angle-down"></i>
          <ul class="user-menu">
            <li class="user-menu__item">
              <router-link to="/" class="user-menu__link">
                <i class="fa fa-user"></i> My Profile
              </router-link>
            </li>
            <li class="user-menu__item">
              <router-link to="/" class="user-menu__link">
                <i class="fa fa-cogs"></i> Account Settings
              </router-link>
            </li>
            <li class="user-menu__item">
              <router-link to="/" class="user-menu__link">
                <i class="fa fa-cloud"></i> My News Feed
              </router-link>
            </li>
            <li class="user-menu__item">
              <router-link to="/" class="user-menu__link">
                <i class="fa fa-users"></i> My Organisation
              </router-link>
            </li>
            <li class="user-menu__item">
              <router-link to="/" class="user-menu__link">
                <i class="fa fa-power-off"></i> Sign Out
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
  grid-template-columns: 1fr 4fr 1fr 1fr;
  position: relative;

  .grid-item {
    &--logo {
      display: flex;
      align-items: center;
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
  }
}

// Main menu
.main-menu {
  display: flex;
  justify-content: center;
  margin: 0px;

  .main-menu__item {
    position: relative;
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
    transition: border-color 0.4s;

    &.router-link-active {
      border-bottom: 2px solid #393939;
    }

    i {
      margin-left: 12px;
      transition: transform 0.4s;
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
    transition: opacity 0.4s;
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
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .sub-menu__item {
    transition: transform 0.4s;

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

.button-search {
  line-height: 1;
  width: 36px;
  height: 36px;
  background-color: none;
  border: none;
  cursor: pointer;
  transition: transform 0.4s;
  margin-right: 12px;

  &:hover {
    transform: scale(1.1);
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
  }

  .fa.fa-angle-down {
    transition: transform 0.4s;
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
  transition: opacity 0.4s;
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

.user-menu__link {
  font-family: "Montserrat Regular", sans-serif;
  text-decoration: none;
  color: #393939;
  padding: 15px 25px;
  display: block;
  font-size: 1rem;
  line-height: 1;
  text-decoration: none !important;
  transition: background-color 0.4s;

  i {
    margin-right: 12px;
  }

  &:hover {
    background-color: #eef3ff;
  }
}

.button-notification {
  animation: ring 4s 0.7s ease-in-out infinite;
  transform-origin: 50% 4px;
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