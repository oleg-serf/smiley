<template>
  <div
    @click="handleRoute(event.slug)"
    class="event"
    :class="[forMobile ? 'for-mobile' : '']"
  >
    <div
      class="event__image"
      @mouseenter="showDescription = true"
      @mouseleave="showDescription = false"
    >
      <MediaImage
        :src="event.cover_image"
        :alt="event.title"
        :title="event.title"
        size="l"
        type="events"
      />
    </div>

    <div class="event__content">
      <h3
        class="event__content-title"
        :style="[forMobile ? { height: 'auto' } : {}]"
      >
        <router-link :to="{ name: 'event', params: { slug: event.slug } }"
          ><span class="__title">Event: </span>{{ event.title }}</router-link
        >
      </h3>
      <VButton
        class="event__button"
        size="height_0"
        @click.native.prevent="openPage"
        shape="round"
      >
        <router-link
          class="event__button-link"
          :to="{ name: 'event', params: { slug: event.slug } }"
          >{{ buttonName }}</router-link
        >
      </VButton>
      <div
        class="event__content-description mt-4"
        :style="[forMobile ? { height: 'auto' } : {}]"
      >
        {{ event.short_description.slice(0, 200) }}...
      </div>
      <div class="event__content-metadata">
        {{ event.location }} |
        {{ dateAgo(event.date) }}
        <div class="event__category">
          <span>Poverty</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

import MediaImage from "@/components/Image.vue";
import { VButton } from "@/components/app";

export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
    },
    active: {
      type: Boolean,
      default: true,
    },
    buttonName: {
      type: String,
      default: "Register",
    },
    manualGoal: {
      default: null,
    },
    slidesPerView: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      showDescription: false,
      forMobile: this.$vuetify.breakpoint.xs,
    };
  },
  components: {
    MediaImage,
    VButton,
  },
  filters: {
    trimDescription(description) {
      return description.length > 120
        ? description.substring(0, 120) + "..."
        : description;
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
  methods: {
    handleRoute(slug) {
      this.$router.push({ name: "event", params: { slug: slug } });
    },
    attend() {
      axios
        .post("/events/" + this.event.slug + "/attend")
        .then((res) => {
          this.$swal("You are now attending this event");
          this.$emit("reload_events");
        })
        .catch((error) => console.error(error));
    },
    unattend() {
      axios
        .post("/events/" + this.event.slug + "/attend/cancel")
        .then((res) => {
          this.$swal("You are now not attending this event");
          this.$emit("reload_events");
        })
        .catch((error) => console.error(error));
    },
    attendNotAuthed() {
      let swal = {
        title: "Register or Login",
        text:
          "To register for an event you will need to login or create an account",
        showCancelButton: true,
        confirmButtonText: "Create Account",
        cancelButtonText: "Login",
      };
      this.$swal(swal).then((result) => {
        if (result.value) {
          router.push({ name: "register" });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === "cancel"
        ) {
          router.push({ name: "login" });
        }
      });
    },
    cutText(text, limit, stringName) {
      if (text.length > limit) {
        // CHECK IF CHARACTER IS <SPACE> OR END OF STRING
        for (let i = 0; i < text.length - limit; i++) {
          if (text[limit].trim() !== "" && limit !== text.length) {
            limit++;
          } else {
            break;
          }
        }

        let moreLink = `...<a href="/smiley-talks/${this.event.slug}" style="color: black;"><b>More</b>></a>`;
        return (
          text.slice(0, limit).trim() +
          (stringName === "description" ? moreLink : "...")
        );
      }

      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  background-color: white;
  position: relative;
  min-height: 540px;
  color: #fff;
  cursor: pointer;
  &.for-mobile {
    box-shadow: none;
    text-align: left;
    .event__content {
      padding-left: 0;
      padding-right: 0;
    }
    .event__content-description {
      margin-top: 0 !important;
    }
    .event__content-metadata {
      height: 2rem !important;
    }
  }

  .__title {
    font-family: "Gotham Bold", sans-serif;
  }

  .event__image {
    position: relative;
    height: 400px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      object-fit: cover;
      object-position: center;
    }

    .event-category {
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
      background: rgba(#888785, 0.6);
      font-size: 24px;
      font-family: "Gotham Bold";
      padding: 8px 16px;
      text-align: left;

      .event-category__name {
        color: white;
      }

      .event-category__description {
        display: block;
        line-height: 20px;
        font-family: "Gotham Medium";
        font-size: 20px;
      }
    }
  }

  .event__content {
    text-align: left;
    padding: {
      top: 10px;
    }

    .event__content-title {
      min-height: 5.5rem;
      height: auto;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 0;

      a {
        color: black;

        &:hover {
          text-decoration: none;
          color: yellow;
        }
      }
    }

    .event__content-description {
      max-width: 87%;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 20px;
      line-height: 28px;
      margin-top: 0;
    }

    .event__content-metadata {
      color: #848484;
      font-family: "Gotham Medium";
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      margin-top: 14px;
      .event__category {
        background: #9a9a9a;
        span {
          padding: 5px 5px;
          font-family: "Gotham Medium";
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }

  .event__readmore {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 26px;
    button {
      font-size: 18px !important;
    }
  }

  .event__button {
    .event__button-link {
      display: block;
      color: #fff;
      width: 100%;
      height: 100%;
      line-height: 20px;
      padding: 6px 13px 2px 8px;
      font-size: 16px;
      text-transform: capitalize;

      &:hover {
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
