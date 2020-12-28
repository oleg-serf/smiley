<template>
  <section>
    <div class="profile">
      <div class="profile__background">
        <img src="/images/remove-profile_background.jpg">
      </div>
      <div class="profile__info container">
        <div class="profile__avatar">
          <img v-if="user.avatar != null" :src="$settings.images_path.users + 'm_'+ user.avatar"/>
          <span v-else class="profile__avatar-initials">{{ user.display_name }}</span>
        </div>
        <div class="profile__description">
          <h1 class="profile__name">{{ user.display_name }}</h1>
          <div class="profile__job-title">Oxfam - Regional Manager</div>
          <div class="profile__location">London, United Kingdom</div>
          <div class="profile__matches">58 Matches</div>
          <div class="profile__slogan">"Looking for opportunities to do good!"</div>
        </div>
        <div class="profile__holder-actions">
          <div class="profile__actions">
            <div class="profile__actions-item">
              <button class="button">
                <i class="fa fa-plus fa-i-prepend"></i>
                Follow
              </button>
            </div>
            <div class="profile__actions-item">
              <button class="button">
                <i class="fa fa-envelope-o fa-i-prepend"></i>
                Message
              </button>
            </div>
            <div class="profile__actions-item">
              <span class="tag">Matches: <strong class="append">50+</strong></span>
            </div>
            <div class="profile__actions-item">
              <span class="tag">Communities: <strong class="append">5</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs container">
      <div class="tabs__navigation">
        <button class="tabs__navigation-item"
                @click="tab = 'about'"
                :class="activeTab('about')"
        >About
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'projects'"
                :class="activeTab('projects')"
        >Projects
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'events'"
                :class="activeTab('events')"
        >Events
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'videos'"
                :class="activeTab('videos')"
        >Videos
        </button>
        <button class="tabs__navigation-item"
                @click="tab = 'photos'"
                :class="activeTab('photos')"
        >Photos
        </button>
      </div>
      <div class="tabs__content">
        <button class="tabs__content-button"
                @click="tab = 'about'"
                :class="activeTab('about')"
        >About
        </button>
        <div class="tabs__content-item"
             v-show="tab === 'about'">
          <div class="about__column">
            <div>
              <img src="/images/remove-profile_background.jpg" class="about__column-image">
            </div>
            <div>
              <h2>About</h2>
              <div class="icon-block about" v-if="user.bio">
                <i class="fa fa-info-circle icon-block__icon"></i>
                <div class="about__text" v-html="user.bio"></div>
              </div>
              <div class="icon-block link">
                <i class="fa fa-link icon-block__icon"></i>
                <a href="https://smileymovement.com" target="_blank" style="word-break: break-all">https://smileymovement.com</a>
              </div>
              <div class="icon-block goals">
                <i class="fa fa-connectdevelop icon-block__icon"></i>
                Interests | UN Goals:
              </div>
              <div v-if="user.facebook || user.instagram || user.linkedin || user.twitter || user.youtube"
                   class="icon-block share">
                <i class="fa fa-share-alt icon-block__icon"></i>
                Social Media:
                <ul class="social-share">
                  <li class="social-share__item" v-if="user.facebook">
                    <a :href="user.facebook"
                       class="social-share__link social-share__link--facebook"
                       target="_blank">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="social-share__item" v-if="user.instagram">
                    <a :href="user.instagram"
                       class="social-share__link social-share__link--instagram" target="_blank">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="social-share__item" v-if="user.linkedin">
                    <a :href="user.linkedin"
                       class="social-share__link social-share__link--linkedin" target="_blank">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="social-share__item" v-if="user.twitter">
                    <a :href="user.twitter"
                       class="social-share__link social-share__link--twitter" target="_blank">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="social-share__item" v-if="user.youtube">
                    <a :href="user.youtube"
                       class="social-share__link social-share__link--youtube" target="_blank">
                      <i class="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="icon-block support" v-if="user.supports_offer && user.supports_offer.length > 0">
                <i class="fa fa-hand-o-right icon-block__icon"></i>
                Support offered:<br>
                <ul>
                  <li v-for="item in user.supports_offer">{{ item }}</li>
                </ul>
              </div>
              <div class="icon-block support">
                <i class="fa fa-hand-o-right icon-block__icon"></i>
                Support offered:<br>
                <ul>
                  <li><strong>Support cat name</strong>
                    <ul>
                      <li>support item</li>
                      <li>support item</li>
                      <li>support item</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="icon-block support" v-if="user.supports_need && user.supports_need.length > 0">
                <i class="fa fa-hand-o-right icon-block__icon"></i>
                Support needed:<br>
                <ul>
                  <li v-for="item in user.supports_need">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="about__column"></div>
        </div>
        <button class="tabs__content-button"
                @click="tab = 'projects'"
                :class="activeTab('projects')"
        >Projects
        </button>
        <div class="tabs__content-item"
             v-show="tab === 'projects'">
          2
        </div>
        <button class="tabs__content-button"
                @click="tab = 'events'"
                :class="activeTab('events')"
        >Events
        </button>
        <div class="tabs__content-item"
             v-show="tab === 'events'">
          3
        </div>
        <button class="tabs__content-button"
                @click="tab = 'videos'"
                :class="activeTab('videos')"
        >Videos
        </button>
        <div class="tabs__content-item"
             v-show="tab === 'videos'">
          <div class="video">
            <div class="video__grid">
              <div class="video__item">
                <iframe class="video__element"
                        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
              <div class="video__item">
                <iframe class="video__element"
                        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
              <div class="video__item">
                <iframe class="video__element"
                        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <button class="tabs__content-button"
                @click="tab = 'photos'"
                :class="activeTab('photos')"
        >Photos
        </button>
        <div class="tabs__content-item"
             v-show="tab === 'photos'">
          <div class="gallery">
            <LightGallery
                :images="temp.gallery"
                :index="temp.galleryIndex"
                :disable-scroll="true"
                @close="temp.galleryIndex = null"
            />
            <h4 class="gallery__title">Gallery 1</h4>
            <ul class="gallery__grid">
              <li
                  v-for="(thumb, thumbIndex) in temp.gallery"
                  :key="thumbIndex"
                  @click="temp.galleryIndex = thumbIndex"
                  class="gallery__item"
              >
                <img :src="thumb.url" class="gallery__image">
              </li>
            </ul>
          </div>
          <div class="gallery">
            <LightGallery
                :images="temp.gallery"
                :index="temp.galleryIndex"
                :disable-scroll="true"
                @close="temp.galleryIndex = null"
            />
            <h4 class="gallery__title">Gallery 1</h4>
            <ul class="gallery__grid">
              <li
                  v-for="(thumb, thumbIndex) in temp.gallery"
                  :key="thumbIndex"
                  @click="temp.galleryIndex = thumbIndex"
                  class="gallery__item"
              >
                <img :src="thumb.url" class="gallery__image">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <activity-card type="video"></activity-card>
      <activity-card type="image" source="/images/remove-profile-news.jpg"></activity-card>
      <activity-card type="image" source="/images/remove-profile_background.jpg"></activity-card>
    </div>
  </section>
</template>

<script>
import axios from "@/axios-auth";
import ActivityCard from "@/components/cards/ActivityCard";

import {LightGallery} from 'vue-light-gallery';

export default {
  name: "UserProfile",
  components: {
    ActivityCard,
    LightGallery,
  },
  data() {
    return {
      user: {},
      tab: 'about',
      temp: {
        gallery: [
          {url: 'https://images.pexels.com/photos/6102477/pexels-photo-6102477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
          {url: 'https://images.pexels.com/photos/5913949/pexels-photo-5913949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
          {url: 'https://images.pexels.com/photos/4969882/pexels-photo-4969882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
          {url: 'https://images.pexels.com/photos/3394293/pexels-photo-3394293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
          {url: 'https://images.pexels.com/photos/6070129/pexels-photo-6070129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
          {url: 'https://images.pexels.com/photos/6030096/pexels-photo-6030096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        ],
        galleryIndex: null,
      },
    };
  },
  methods: {
    activeTab(tab) {
      return tab === this.tab ? 'tabs__navigation-item--active' : '';
    }
  },
  mounted() {
    //  Move api calls to vuex
    axios
        .get("/users/" + this.$route.params.slug)
        .then(response => {
          // TODO: remove consol logs on production
          console.log("User profile", response.data);
          this.user = response.data.user;
        })
        .catch(error => console.error(error));
  }
}
</script>

<style lang="scss" scoped>
// TODO: Move to global styles
.container {
  width: 1140px;
  padding: 0px 15px;
  margin: 0 auto;

  @media screen and (max-width: 1199px) {
    width: 960px;
  }
  @media screen and (max-width: 991px) {
    width: 720px;
  }
  @media screen and (max-width: 767px) {
    width: 540px;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
}

// TODO: Move to global styles
.button {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
  padding: .5rem 1rem;
  line-height: 1;
  font-size: 1rem;
  border-radius: 1rem;
  border: 1px solid #000;
  background-color: #fff;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color .2s, transform .2s, box-shadow .2s;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }

  .fa-i-prepend {
    margin-right: .8rem;
    @include font-size(.8rem);
  }

  .fa-i-append {
    margin-left: 1rem;
    @include font-size(.8rem);
  }
}

// TODO: Move to global styles
.tag {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
  padding: .5rem 1rem;
  line-height: 1;
  font-size: 1rem;
  border-radius: 1rem;
  background-color: #FFE300;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    &.append {
      margin-left: .5rem;
    }

    &.prepend {
      margin-right: .5rem;
    }
  }
}

.profile {
  margin-bottom: 3.5rem;

  &__background {
    position: relative;
    height: 360px;
    width: 100%;

    img {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include smMax {
      display: none;
    }
  }

  &__info {
    background: #fff;
    display: grid;
    grid-template-columns: .5fr 1fr 1fr;
    grid-gap: 1rem;
    position: relative;

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include smMax {
      display: block;
      text-align: center;
    }
  }

  &__avatar {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 1rem solid #fff;
    margin-top: -50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, .15);
    background-color: #FFE300;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-initials {
      @include font-size(5rem);
      font-weight: bold;

      @include mdMax {
        @include font-size(7rem);
      }
    }

    @include lgMax {
      margin-top: -36%;
    }
    @include smMax {
      margin-top: 0px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__name {
    margin-top: 1rem;
    @include font-size(2rem);
  }

  &__slogan {
    color: #717171;
    font-weight: lighter;
  }

  &__holder-actions {
    @include lgMax {
      grid-column: 1 / span 2;
    }
  }

  &__actions {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.45rem;

    @include lgMax {
      grid-template-columns: repeat(4, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include smMax {
      grid-template-columns: 1fr;

      &-item {
        display: flex;
        justify-content: center;
      }
    }
  }
}

.tabs {
  margin-bottom: 1.5rem;

  &__navigation {
    display: flex;
    justify-content: space-between;

    @include smMax {
      display: none;
    }

    &-item {
      padding: .8rem 1rem;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      border-left: 1px solid;
      border-right: 1px solid;
      border-top: 1px solid;
      border-bottom: none;
      border-color: transparent;
      line-height: 1;
      margin-bottom: -1px;
      @include font-size(1.25rem);
      font-weight: bold;
      position: relative;
      transition: border-color .2s;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        border-color: rgba(112, 112, 112, .15);
      }

      &--active {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
        border-bottom: 1px solid #fff;
        border-color: rgba(112, 112, 112, .3);

        &::after {
          content: '';
          position: absolute;
          height: 10px;
          width: 100%;
          background-color: #fff;
          left: 0px;
          bottom: -5px;
          z-index: 3;
        }
      }
    }
  }

  &__content {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, .15);
    border: 1px solid rgba(112, 112, 112, .3);
    position: relative;
    z-index: 2;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    padding: 1rem;
    background-color: #fff;

    @include smMax {
      border-radius: .5rem;
      padding: 0px;
      overflow: hidden;
    }

    &-item {
      @include smMax {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
      }
    }

    &-button {
      width: 100%;
      padding: 1rem;
      @include font-size(1.2rem);
      font-weight: bold;
      background-color: #fff;
      border-radius: .5rem;
      border: none;
      border-top: 1px solid rgba(112, 112, 112, 0.3);

      &:first-child {
        border: none;
      }

      &.tabs__navigation-item--active {
        background-color: #FFE300;
        margin-bottom: 1.5rem;
      }

      @include sm {
        display: none;
      }
    }
  }
}

.video {
  &__grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    @include smMax {
      grid-gap: .5rem;
    }
  }

  &__item {
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
  }

  &__element {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
}

.gallery {
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }

  &__title {
    @include font-size(1.5rem);
    font-weight: bolder;
    margin-bottom: 1.5rem;

    @include smMax {
      margin-bottom: .8rem;
      @include font-size(1.2rem);
    }
  }

  &__grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    @include smMax {
      grid-gap: .5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    width: 100%;
    height: 0px;
    padding-top: 56.25%;
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
    transition: box-shadow .2s;

    &:hover {
      box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
    }
  }

  &__image {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
}

// TODO: Move to global
.social-share {
  display: inline-flex;

  &__item {
    margin: 0px .3rem;
  }

  &__link {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff !important;
    text-decoration: none !important;
    transition: background-color .2s, box-shadow .2s, transform .2s;

    &:active {
      transform: translate(1px, 1px);
    }

    &:hover {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, .5);
    }

    &--facebook {
      background-color: #134BCE;

      &:hover {
        background-color: lighten(#134BCE, 15%);
      }
    }

    &--linkedin {
      background-color: #0A66C2;

      &:hover {
        background-color: lighten(#0A66C2, 15%);
      }
    }

    &--instagram {
      background-color: #E1306C;

      &:hover {
        background-color: darken(#E1306C, 15%);
      }
    }

    &--twitter {
      background-color: #15BCDE;

      &:hover {
        background-color: darken(#15BCDE, 15%);
      }
    }

    &--youtube {
      background-color: #E70F0F;

      &:hover {
        background-color: lighten(#E70F0F, 15%);
      }
    }
  }
}

.icon-block {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 1.5rem;

  i.icon-block__icon {
    position: absolute;
    left: 0px;
    top: .25rem;
  }
}

.share {
  i.icon-block__icon {
    top: 1rem;
  }

  .social-share {
    margin-top: .5rem;
    margin-left: .5rem;
  }
}

.about__column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  .about__column-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .5rem;
  }

  @include lgMax {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
}

.support {
  ul {
    margin-top: .5rem;
    padding-left: 1rem;
    list-style: disc;
  }
}
</style>
