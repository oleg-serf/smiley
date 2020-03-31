<template>
  <div class="project-information">
    <img :src="background" class="project-information__banner" alt />

    <!-- <div class="project-information__top container">
      <div class="project-information__user">
        <img src="/img/homepage/banner-news.jpg" class="project-information__user-avatar" />
        <div class="project-information__user-content">
          <div class="project-information__user-hosted">Project hosted by</div>
          <div class="project-information__user-name">Lillian Rodriquez</div>
        </div>
      </div>
    </div>-->
    <div class="project-information__bottom container">
      <div class="project-information__column-info">
        <h1 class="project-information__title" v-if="isNotEmptySlot('title')">
          <slot name="title"></slot>
        </h1>
        <div class="project-information__description" v-if="isNotEmptySlot('content')">
          <slot name="content"></slot>
        </div>
        <!-- <div class="project-information__location">Kent, England</div> -->
        <div class="project-information__buttons" v-if="isNotEmptySlot('buttons')">
          <slot name="buttons"></slot>
        </div>
      </div>
      <!-- <div class="project-information__column-additional">
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
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isNotEmptySlot(slotName) {
      return !!this.$slots[slotName];
    }
  },
  props: {
    background: {
      type: String,
      default: "/img/components/information-hero.jpg"
    }
  }
};
</script>

<style lang="scss" scoped>
.project-information {
  position: relative;
  color: #fff;
  min-height: 600px;
  display: flex;

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
    margin-top: auto;
    flex: 1;

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
</style>