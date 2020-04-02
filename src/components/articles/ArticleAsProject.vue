<template>
  <!-- TODO: Refactor !!! -->
  <div class="project-article">
    <div class="project-article__image">
      <media-image :src="background" :alt="title" :title="title" size="m" type="news" />
    </div>
    <div class="project-article__content">
      <div class="project-article__category">
        <div class="project-article__header">
          <div class="project-article__category-name">{{goal}}</div>
          <!-- <div class="project-article__category-circle">
            <span>+15</span>
          </div>-->
        </div>
        <div class="project-article__timestamp">{{date | dateAgo}}</div>
      </div>
      <div class="project-article__spacer"></div>
      <div class="project-article__inner">
        <h3 class="project-article__title">{{title}}</h3>
        <div class="project-article__description">
          {{ description | trimDescription }}
          <a :href="link">Continue Reading</a>
        </div>
        <!-- <div class="project-article__button">
          <a :href="buttonLink">view project</a>
        </div>-->
      </div>
    </div>
    <div class="project-article__actions">
      <button>
        <span>0</span>
        <img src="/img/up-like-arrow-white.png" />
        Like
      </button>
      <button>
        <img src="/img/comment-icon-white.png" />
        Comment
      </button>
      <button>
        <img src="/img/share-icon-white.png" />
        Share
      </button>
    </div>
  </div>
</template>

<script>
import MediaImage from "@/components/Image.vue";
export default {
  name: "ArticleAsProject",
  components: {
    MediaImage
  },
  filters: {
    trimDescription(description) {
      return description.length > 120
        ? description.substring(0, 120) + "..."
        : description;
    },
    dateAgo(date) {
      const currentStamp = Date.now();
      const postStamp = new Date(date).getTime();
      const dateDiff = currentStamp - postStamp;
      const days = dateDiff / (1000 * 3600 * 24);

      const result = Math.floor(days);

      const append = result == 1 ? "day" : "days";

      return `${result} ${append} ago`;
    }
  },
  props: {
    background: {
      type: String
    },
    date: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    link: {
      type: String
    },
    goal: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
// TODO: Move to file
.project-article {
  background-color: #000;
  position: relative;
  padding: 30px;
  min-height: 300px;
  transition: padding-bottom 0.4s;
  color: #fff;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #000;
    opacity: 0.5;
    z-index: 2;
  }

  &:hover {
    .project-article__image {
      img {
        transform: scale(1.1);
      }
    }
    .project-article__inner {
      transform: translateY(-60px);
    }
    .project-article__actions {
      opacity: 1;
      pointer-events: all;
    }
  }

  .project-article__image {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s;
    }
  }

  .project-article__inner {
    transition: transform 0.4s;
  }

  .project-article__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1;
    flex-direction: column;
    transition: transform 0.4s;
  }

  .project-article__header {
    display: flex;
    align-items: center;
  }

  .project-article__category {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project-article__category-name {
    background-color: rgba(125, 132, 148, 0.6);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold";
    transition: background-color 0.4s;

    @include font-size(0.6rem);
  }

  .project-article__category-circle {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 0px;
    position: relative;
    padding: 16px;
    margin-left: 16px;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -49%);
      @include font-size(0.8rem);
      font-family: "Inter Regular";
    }
  }

  .project-article__timestamp {
    color: #fff;
    font-family: "Montserrat Regular", sans-serif;
    opacity: 0.7;
  }

  .project-article__spacer {
    flex: 1;
    min-height: 50px;
  }

  .project-article__title {
    @include font-size(1.1rem);
    line-height: 1.45;
    color: #fff;
    font-family: "Montserrat SemiBold", sans-serif;
  }

  .project-article__description {
    font-family: "Inter Regular";
    margin-bottom: 24px;

    a {
      color: #f4ed3b;
      text-decoration: none;
      border-bottom: 1px solid #f4ed3b;
      transition: border-color 0.4s;

      &:hover {
        border-color: transparent;
      }
    }
  }

  .project-article__button a {
    text-decoration: none;
    background-color: rgba(125, 132, 148, 1);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold", sans-serif;
    transition: background-color 0.4s;

    @include font-size(0.8rem);

    &:hover {
      background-color: rgba(125, 132, 148, 0.8);
    }
  }

  .project-article__actions {
    position: absolute;
    margin: 0px 30px 30px 30px;
    bottom: 0px;
    left: 0px;
    z-index: 3;
    color: #fff;
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.7);
    width: calc(100% - 60px);
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s;

    button {
      width: 100%;
      padding: 10px 15px;
      font-size: 12px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: #fff;
      font-family: "Montserrat Regular", sans-serif;
      cursor: pointer;
      transition: background-color 0.4s, color 0.4s;
      border: none;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.7);
      }

      span {
        margin-right: 12px;
      }

      img {
        height: auto;
        width: 11px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        background-size: cover;
      }
    }
  }
}
</style>