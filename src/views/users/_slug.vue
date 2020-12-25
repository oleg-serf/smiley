<template>
  <section>
    <div class="profile">
      <div class="profile__background">
        <img src="/images/remove-profile_background.jpg">
      </div>
      <div class="profile__info container">
        <div class="profile__avatar">
          <img src="/images/remove-profile_image.jpg">
          <!--          <span class="profile__avatar-initials">-->
          <!--            TJ-->
          <!--          </span>-->
        </div>
        <div class="profile__description">
          <h1 class="profile__name">Anica Nilise</h1>
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
              <div class="icon-block about">
                <i class="fa fa-info-circle icon-block__icon"></i>
                <div class="about__text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum dolor quis arcu gravida,
                    sed placerat sem euismod. Quisque at pretium odio. Donec vestibulum, nisi in malesuada convallis,
                    eros
                    nulla egestas lectus, sed maximus sem elit ullamcorper elit. Donec aliquam tortor sit amet.</p>
                </div>
                <div class="about__text--more">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum dolor quis arcu gravida,
                    sed placerat sem euismod. Quisque at pretium odio. Donec vestibulum, nisi in malesuada convallis,
                    eros
                    nulla egestas lectus, sed maximus sem elit ullamcorper elit. Donec aliquam tortor sit amet.</p>
                </div>
              </div>
              <div class="icon-block link">
                <i class="fa fa-link icon-block__icon"></i>
                <a href="https://smileymovement.com" target="_blank" style="word-break: break-all">https://smileymovement.com</a>
              </div>
              <div class="icon-block goals">
                <i class="fa fa-connectdevelop icon-block__icon"></i>
                Interests | UN Goals:
              </div>
              <div class="icon-block share">
                <i class="fa fa-share-alt icon-block__icon"></i>
                Social Media:
                <ul class="social-share">
                  <li class="social-share__item">
                    <a href="" class="social-share__link social-share__link--facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="social-share__item">
                    <a href="" class="social-share__link social-share__link--instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="social-share__item">
                    <a href="" class="social-share__link social-share__link--twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="social-share__item">
                    <a href="" class="social-share__link social-share__link--youtube">
                      <i class="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="icon-block support">
                <i class="fa fa-hand-o-right icon-block__icon"></i>
                Support offered:<br>
                <ul>
                  <li>Engineering</li>
                  <li>Entrepreneurship</li>
                  <li>Finance</li>
                  <li>Fundraising</li>
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
          4
        </div>
        <button class="tabs__content-button"
                @click="tab = 'photos'"
                :class="activeTab('photos')"
        >Photos
        </button>
        <div class="tabs__content-item"
             v-show="tab === 'photos'">
          5
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserProfile",
  components: {},
  data() {
    return {
      user: {},
      tab: 'about',
    };
  },
  methods: {
    activeTab(tab) {
      return tab === this.tab ? 'tabs__navigation-item--active' : '';
    }
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
    transition: background-color .2s, box-shadow .2s;

    &:hover {
      box-shadow: 0px 0px 6px rgba(0,0,0,.5);
    }

    &--facebook {
      background-color: #134BCE;

      &:hover {
        background-color: lighten(#134BCE, 15%);
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
    margin-left: -.5rem;
    margin-top: .5rem;
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
