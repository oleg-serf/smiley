<template>
  <div class="event" :class="[forMobile ? 'for-mobile' : '']">
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
      <div class="event-category">
        <span class="event-category__name" v-if="manualGoal == null">
          {{ event.goal_category }}
        </span>
        <span class="event-category__name" v-else>{{ manualGoal }}</span>
        <transition>
          <span v-if="showDescription" class="event-category__description"
            >UN Goal {{
              event.goals != null && event.goals.length > 0
                  ? event.goals[0].prefix.length > 1 ? event.goals[0].prefix : "0"+event.goals[0].prefix
                  : ""
            }} | <br>            
            {{
              event.goals != null && event.goals.length > 0
                ? event.goals[0].name
                : ""
            }}
          </span>
        </transition>
      </div>
    </div>

    <div class="event__content">
      <h3 class="event__content-title" :style="[forMobile ? {'height': 'auto'} : {}]">
        <router-link
          :to="{ name: 'event', params: { slug: event.slug } }"
        >{{ event.title }}</router-link>
      </h3>
      <div class="event__content-description" :style="[forMobile ? {'height': 'auto'} : {}]" v-html="cutText(event.short_description, forMobile?50:100*3/slidesPerView, 'description')">0
      </div>
      <div class="event__content-metadata">
        <span>{{ event.location }}</span> |
        {{ dateAgo(event.date) }}
      </div>
    </div>

    <div class="event__readmore">
      <VButton
        class="event__button"
        size="height_45"
        @click.native.prevent="openPage"
        shape="round"
      >
        <router-link
          class="event__button-link"
          :to="{ name: 'event', params: { slug: event.slug } }"
        >{{ buttonName }}</router-link>
      </VButton>
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
    forMobile: {
      type: Boolean,
      default: false
    },
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
    }
  },
  data() {
    return {
      showDescription: false,
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
    dateAgo(date) {
      const currentStamp = Date.now();
      const realDate = this.$dayjs(date);
      const postStamp = this.$dayjs(date).unix() * 1000;
      const dateDiff = currentStamp - postStamp;
      const days = dateDiff / (1000 * 3600 * 24);

      const result = Math.floor(days);

      const append = result == 1 ? "day" : "days";

      let time = "";

      if (postStamp > currentStamp || result > 28){
        const d = new Date(date.replace(/-/g, "/"));
        time = d.toLocaleDateString("en-US", {day: 'numeric', month: 'long', year: 'numeric'});
      } else if (result == 0) {
        time = "Today"; 
      } else {
        time = result + " " + append + " ago";
      }

      return time;
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
          if (text[limit].trim() !== '' && limit !== text.length) {
            limit++
          } else {
            break;
          }
        }

        let moreLink = `...<a href="/smiley-talks/${this.event.slug}" style="color: black;"><b>More</b>></a>`;
        return text.slice(0, limit).trim() + (stringName === 'description' ? moreLink : "...");
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
  box-shadow: 0 3px 6px rgba(#000, 0.16);
  &.for-mobile {
    box-shadow: none;
    text-align: left;
    .event__content {
      padding-left: 0;
      padding-right: 0;
    }
    .event__content-description {
      margin-top: 0 !important;
      height: 4rem !important;
    }
    .event__content-metadata {
      height: 2rem !important;
    }
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
    min-height: 230px;
    text-align: left;
    padding: {
      top: 26px;
      left: 16px;
      right: 16px;
      bottom: 20px;
    }

    .event__content-title {
      min-height: 3.5rem;
      height: auto;
      color: black;
      font-family: "Gotham Bold", sans-serif;
      font-size: 20px;
      line-height: 30px;
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
      height: 6rem;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 16px;
      line-height: 28px;
      margin-top: 0;
    }

    .event__content-metadata {
      height: 3rem;
      color: black;
      font-family: "Gotham Medium";
      font-size: 16px;
      margin-top: 14px;

      span {
        font-family: "Gotham Bold";
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
      color: black;
      width: 100%;
      height: 100%;
      line-height: 45px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
