<template>
  <div>
    <div class="project-information">
      <img src="/img/homepage/banner-news.jpg" class="project-information__banner" alt />

      <div class="project-information__top container">
        <div class="project-information__user">
          <img src="/img/homepage/banner-news.jpg" class="project-information__user-avatar" />
          <div class="project-information__user-content">
            <div class="project-information__user-hosted">Project hosted by</div>
            <div class="project-information__user-name">Lillian Rodriquez</div>
          </div>
        </div>
      </div>
      <div class="project-information__bottom container">
        <div class="project-information__column-info">
          <h1 class="project-information__title">Save the Dolphins from waste in the oceans</h1>
          <div class="project-information__description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum, dolor ut rutrum tempus, arcu nunc maximus orci, in tempor neque odio quis diam. Duis feugiat eleifend dui at pellentesque.</p>
          </div>
          <div class="project-information__location">Kent, England</div>
          <div class="project-information__buttons">
            <a href="#" class="primary">offer support</a>
            <a href="#">make a donation</a>
          </div>
        </div>
        <div class="project-information__column-additional">
          <div class="project-information__additional-block">
            <div class="project-information__additional-block-title">Supporters</div>
            <p>No supporters yet</p>
          </div>
          <div class="project-information__additional-block">
            <div class="project-information__additional-block-title">share project</div>
            <ul class="project-information__additional-share">
              <li>
                <a href="#">
                  <app-icon name="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <app-icon name="linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <app-icon name="google" />
                </a>
              </li>
              <li>
                <a href="#">
                  <app-icon name="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <app-icon name="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div class="project-information__additional-block">
            <div class="project-information__additional-block-title">UN Goal</div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <section class="project-heading section container">
      <h2 class="project-heading__title">Make a donation</h2>
      <p class="project-heading__subtitle">Why we need this?</p>
      <div class="project-heading__content">
        <p>If you find any joy and value in what we do, please consider becoming a Sustaining Patron with a recurring monthly donation of your choosing, between a cup of tea and a good lunch. Your support really matters.</p>
      </div>
      <div class="project-heading__button">
        <a href="#">Make a donation</a>
      </div>
    </section>
    <hr />
    <section class="project-heading section container">
      <h2 class="project-heading__title">How we're creating POSITIVE change</h2>
      <div class="project-heading__content">
        <p>7 Steps for change</p>
      </div>
    </section>
    <section class="project-stepts-grid section container">
      <div class="project-step" v-for="index in 7" :key="index">
        <div class="project-step__top">
          <div class="project-step__counter">
            <div class="project-step__counter-number">
              <span>{{index}}</span>
            </div>
          </div>
          <div class="project-step__content">
            <div class="project-step__number">step {{index}}</div>
            <div class="project-step__title">Connect with like minded people to help flesh-out idea</div>
          </div>
        </div>
        <div class="project-step__bottom">
          <img src="/img/homepage/banner-news.jpg" alt />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    AppIcon,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.project-information {
  position: relative;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 1;
  }

  .project-information__banner {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .project-information__top {
    position: relative;
    z-index: 2;
    padding-top: 2rem;
    @include margin-bottom(4rem);
  }

  .project-information__bottom {
    position: relative;
    z-index: 2;
    padding-bottom: 2rem;
    display: flex;

    @include lgMax {
      flex-direction: column;
    }
  }

  .project-information__user {
    display: flex;
  }
  .project-information__user-avatar {
    width: 45px;
    height: 45px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
  .project-information__user-content {
    text-align: center;
  }
  .project-information__user-hosted {
    font-family: "Montserrat Regular";
  }
  .project-information__user-name {
    font-family: "Montserrat SemiBold";
  }

  .project-information__column-info {
    width: 60%;
    padding-right: 30px;
    box-sizing: border-box;

    @include xlMax {
      width: 70%;
    }

    @include lgMax {
      width: 100%;
      padding-right: 0px;
    }
  }
  .project-information__title {
    font-family: "Montserrat Bold";
    @include font-size(2.5rem);
  }
  .project-information__description {
    font-family: "Montserrat Regular";
    @include font-size(1.5rem);
  }
  .project-information__location {
    font-family: "Montserrat Regular";
    @include font-size(1.2rem);
  }
  .project-information__buttons {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    padding-top: 30px;
    flex-wrap: wrap;

    a {
      text-decoration: none;
      background-color: rgba(125, 132, 148, 1);
      color: #fff;
      padding: 6px 14px;
      margin-left: 15px;
      margin-right: 15px;
      margin-bottom: 15px;
      text-transform: uppercase;
      display: inline-block;
      font-family: "Montserrat SemiBold";
      transition: background-color 0.4s;

      @include font-size(1rem);

      &.primary {
        background-color: rgba(229, 213, 9, 0.8);

        &:hover {
          background-color: rgba(229, 213, 9, 1);
        }
      }

      &:hover {
        background-color: rgba(125, 132, 148, 0.8);
      }
    }
  }
  .project-information__column-additional {
    width: 250px;
    margin-left: auto;
    padding-left: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @include lgMax {
      width: 100%;
      padding-left: 0px;
      margin-top: 30px;
    }
  }
  .project-information__additional-block {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  .project-information__additional-block p {
    font-family: "Montserrat Regular";
  }

  .project-information__additional-block-title {
    text-transform: uppercase;
    font-family: "Montserrat Regular";
    letter-spacing: 4px;
  }

  .project-information__additional-share {
    padding-top: 15px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    max-width: 320px;
  }
}
.section {
  @include margin-top(2.5rem);
  @include margin-bottom(2.5rem);
}
.project-heading {
  .project-heading__title {
    font-family: "Montserrat Bold";
    @include font-size(2rem);
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0.5rem;
  }

  .project-heading__subtitle {
    font-family: "Montserrat SemiBold";
    @include font-size(1.3rem);
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .project-heading__content {
    font-family: "Montserrat Regular";
    opacity: 0.8;
    @include font-size(1rem);
    @include xl {
      max-width: 50%;
    }
  }

  .project-heading__button a {
    text-decoration: none;
    background-color: rgba(125, 132, 148, 1);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold";
    transition: background-color 0.4s;

    @include font-size(0.8rem);

    &:hover {
      background-color: rgba(125, 132, 148, 0.8);
    }
  }
}
.project-stepts-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);

  @include lgMax {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mdMax {
    grid-template-columns: repeat(1, 1fr);
  }
}
.project-step {
  display: flex;
  flex-direction: column;
  .project-step__top {
    @include margin-bottom(1.5rem);
    display: flex;
  }
  .project-step__counter {
    width: 70px;
    margin-right: 32px;
    display: flex;
    justify-content: center;
    padding-left: 5px;
    padding-top: 32px;
    box-sizing: border-box;

    .project-step__counter-number {
      border-radius: 50%;
      background-color: #7d8494;
      width: 50px;
      height: 50px;
      position: relative;
      padding: 8px;
      box-sizing: border-box;

      &::before {
        content: "";
        display: block;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        border-radius: 50%;
        position: absolute;
        border: 1px dotted #7d8494;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      span {
        font-family: "Montserrat Bold";
        @include font-size(1.5rem);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
  }

  .project-step__number {
    font-family: "Montserrat Regular";
    line-height: 1;
    color: #121212;
    text-transform: uppercase;
    @include font-size(1rem);
    @include margin-bottom(1rem);
  }
  .project-step__title {
    font-family: "Montserrat SemiBold";
    @include font-size(1.1rem);
    display: flex;
    align-items: center;
  }
  .project-step__bottom {
    height: 0px;
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
    margin-top: auto;

    img {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: contain;
    }
  }
}
</style>