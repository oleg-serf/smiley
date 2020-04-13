<template>
  <div class="project-article">
    <div class="project-article__image">
      <media-image
        :src="event.cover_image"
        :alt="event.title"
        :title="event.title"
        size="m"
        type="events"
      />
    </div>
    <div class="project-article__content">
      <div class="project-article__category">
        <div class="project-article__header">
          <div class="project-article__category-badge">
            <div>{{ format(event.date, 'MMM')}}</div>
            <div>{{ format(event.date, 'D') }}</div>
          </div>
          <div
            class="project-article__category-name"
            v-if="event.goals.length > 0"
          >{{event.goals[0].name}}</div>
          <!-- <div class="project-article__category-circle">
            <span>+15</span>
          </div>-->
        </div>
      </div>
      <div class="project-article__spacer"></div>
      <div class="project-article__inner">
        <div
          class="project-article__hours"
        >{{ event.time_start | formatTime }} - {{ event.time_end | formatTime}}</div>
        <h3 class="project-article__title">{{event.title}}</h3>
        <!-- <div class="project-article__description">{{ description | trimDescription }}</div> -->
        <div class="project-article__location">{{ event.location }}</div>
        <div class="project-article__button">
          <router-link :to="{name: 'event', params: {slug: event.slug}}">talk details</router-link>
          <button class="register" v-if="active">register</button>
        </div>
      </div>
    </div>
    <div class="project-article__actions">
      <button>
        <span>0</span>
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        Like
      </button>
      <button>
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        Comment
      </button>
      <button>
        <i class="fa fa-share-alt" aria-hidden="true"></i>
        Share
      </button>
    </div>
  </div>
</template>

<script>
import MediaImage from "@/components/Image.vue";

export default {
  name: "EventCard",
  components: {
    MediaImage
  },
  filters: {
    trimDescription(description) {
      return description.length > 120
        ? description.substring(0, 120) + "..."
        : description;
    }
  },
  methods: {
    format(date, format) {
      const result = this.$dayjs(date).format(format);
      return result;
    },
    eventRegister() {
      axios
        .post("/events/" + this.event.slug + "/attend", item)
        .then(res => {
          let result = res.data.attending;
          commit("user/SET_USER_ATTENDING_EVENTS", result, {
            root: true
          });
        })
        .catch(error => console.error(error));
    }
  },
  props: {
    event: {
      type: Object
    },
    active: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
// TODO: Move styles to separate file
.project-article {
  background-color: #000;
  position: relative;
  padding: 30px;
  min-height: 350px;
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
    justify-content: flex-end;
  }

  .project-article__category-badge {
    position: absolute;
    background-image: url("/img/date-badge-bg.png");
    height: 70px;
    width: 60px;
    background-repeat: no-repeat;
    background-position: center 1px;
    top: -31px;
    left: 3px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      font-family: "Montserrat SemiBold", sans-serif;
      color: #393939;
      text-align: center;
    }
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

  .project-article__hours {
    @include font-size(1.1rem);
    line-height: 1.45;
    color: #fff;
    font-family: "Montserrat Bold", sans-serif;
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
  }

  .project-article__location {
    @include font-size(1rem);
    font-family: "Inter Regular";
    margin-bottom: 24px;
    padding-left: 24px;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      background-image: url("/img/icons/location-icon-white.png");
      background-position: top left;
      background-size: 14px;
      background-repeat: no-repeat;
      position: absolute;
      left: 0px;
      top: 5px;
    }
  }

  .project-article__button {
    display: flex;
    justify-content: space-between;
  }

  .project-article__button {
    a,
    button {
      text-decoration: none;
      background-color: rgba(125, 132, 148, 1);
      color: #fff;
      padding: 6px 14px;
      text-transform: uppercase;
      display: inline-block;
      font-family: "Montserrat SemiBold", sans-serif;
      transition: background-color 0.4s;
      min-width: 130px;
      text-align: center;

      @include font-size(0.8rem);

      &:hover {
        background-color: rgba(125, 132, 148, 0.8);
      }
    }
  }
  .project-article__button .register {
    background-color: #f4ed3b;
    color: #393939;
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

      i {
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