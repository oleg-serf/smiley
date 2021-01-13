<template>
  <article class="projects-article" :class="[forMobile ? 'for-mobile' : '']">
    <div
        class="projects-article__image"
        @mouseenter="showDescription = true"
        @mouseleave="showDescription = false"
    >
      <!-- <MediaImage
          :src="project.cover_image"
          :alt="project.name"
          :title="project.name"
          size="m"
          type="projects"
      /> -->
        <img
          :src="$settings.images_path.projects +'l_'+project.cover_image"
          v-if="project.cover_image != null"
          alt
        />
        <template v-else>
          <img :src="staticImageBySlug(project.slug)">
        </template>
      <div class="projects-article-category">
        <span class="projects-article-category__name" v-if="manualGoal == null">
          {{ project.goal_category }}
        </span>
        <span class="projects-article-category__name" v-else>{{ manualGoal }}</span>
        <transition>
          <span v-if="showDescription" class="projects-article-category__description">
            UN Goal {{
              project.goals != null && project.goals.length > 0
                  ? project.goals[0].prefix.length > 1 ? project.goals[0].prefix : "0"+project.goals[0].prefix
                  : ""
            }} | <br>            
            {{
              project.goals != null && project.goals.length > 0
                  ? project.goals[0].name
                  : ""
            }}
          </span>
        </transition>
      </div>
    </div>

    <div class="projects-article__content">
      <h3 class="projects-article__content-title" :style="[forMobile ? {'height': 'auto !important'} : {}]">
        <router-link
          :to="{ name: 'project', params: { slug: project.slug } }"
        > {{ project.name ? project.name : project.title }} </router-link>        
      </h3>
      <div
          class="projects-article__content-description"
          :style="[forMobile ? {'height': 'auto !important'} : {}]"
          v-html="cutText(project.description, 60, 'description')"
      ></div>
      <div
        class="projects-article__content-metadata"
        :style="[forMobile ? {'margin-top': '30px', 'height': 'auto !important'} : {}]"
      >
        <router-link
          :to="{ name: 'network'}"
        ><span>Networks</span></router-link> | 
        <router-link
          v-if="project.owner"
          :to="{ name: 'member', params: { slug: project.owner.slug } }"
        >{{ project.owner.name }}</router-link>
        <template v-else>
          No Name
        </template> | 
        {{ dateAgo(project.created_at) }}
      </div>
    </div>

    <div class="projects-article__readmore">
      <VButton
          class="projects-article__button"
          size="height_45"
          @click.native.prevent="openPage"
          shape="round"
      >
        {{ buttonText }}
      </VButton>
    </div>
  </article>
</template>

<script>
import router from "@/router";
import MediaImage from "@/components/Image.vue";
import { VButton } from "@/components/app";

export default {
  name: "ProjectCardNew",
  components: {
    MediaImage,
    VButton,
  },
  props: {
    forMobile: {
      type: Boolean,
      default: false
    },
    project: {
      type: Object,
    },
    manualGoal: {
      default: null,
    },
    buttonText: {
      type: String,
      default: 'View Project'
    }
  },
  data() {
    return {
      sharing: false,
      showDescription: false
    };
  },
  filters: {
    trimDescription(description) {
      return description.length > 120
          ? description.substring(0, 120) + "..."
          : description;
    },
  },
  methods: {
    openPage() {
      router.push({ name: "project", params: { slug: this.project.slug } });
    },
    staticImageBySlug(slug) {
      let result = null;

      switch (slug) {
        case 'extraordinary-links': {
          result = '/images/remove-smiling-clubs.jpg';
          break;
        }
        case 'pair-your-devices-tshirt-undyed-natural-fiber-designer-fundraiser-4bees': {
          result = '/images/remove-mobile-laughter-booth.jpg';
          break;
        }
        case 'routerater': {
          result = '/images/remove-accelerating-community-driven-leaders.jpg';
          break;
        }
        case 'foodcycle-south-west': {
          result = '/images/remove-affordable-and-social-housing.jpeg';
          break;
        }
        case 'journey-of-hope': {
          result = '/images/remove-journey-of-hope.jpg';
          break;
        }
        case 'aimeverhigh-bereavement-support-for-young-people': {
          result = '/images/remove-aimeverhigh-bereavement-support-for-young-people.jpg';
          break;
        }
      }

      return result;
    },
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
        let moreLink = `...<a href="/projects/${this.project.slug}" style="color: black;"><b>More</b>></a>`;
        return text.slice(0, limit).trim() + (stringName === 'description' ? moreLink : "...");
      }

      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.projects-article {
  background-color: white;
  position: relative;
  min-height: 540px;
  height: 100%;
  color: #fff;
  box-shadow: 0 3px 6px rgba(#000, 0.16);
  &.for-mobile {
    box-shadow: none;
    text-align: left;
    .projects-article__content {
      padding-left: 0;
      padding-right: 0;
    }
    .projects-article__content-description {
      margin-top: 0 !important;
      height: 4rem !important;
    }
    .projects-article__content-metadata {
      height: 2rem !important;
    }
  }

  .projects-article__image {
    position: relative;
    height: 300px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      object-fit: cover;
      object-position: center;
    }

    .projects-article-category {
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
      background: rgba(#888785, 0.6);
      font-size: 24px;
      font-family: "Gotham Bold";
      padding: 8px 16px;
      text-align: left;

      .projects-article-category__name {
        color: white;
      }
      .projects-article-category__description {
        display: block;
        line-height: 20px;
        font-family: "Gotham Medium";
        font-size: 20px;
      }
    }
  }

  .projects-article__content {
    min-height: 230px;
    text-align: left;
    padding: {
      top: 26px;
      left: 16px;
      right: 16px;
      bottom: 20px;
    }

    .projects-article__content-title {
      min-height: 5rem;
      color: black;
      font-family: "Gotham Bold", sans-serif;
      font-size: 20px;
      line-height: 30px;

      a {
        color: black;
        &:hover {
          text-decoration: none;
          color: yellow;
        }
      }
    }

    .projects-article__content-description {
      height: 5rem;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 18px;
      line-height: 28px;
      margin-top: 1rem;
    }

    .projects-article__content-metadata {
      height: 3rem;
      color: black;
      font-family: "Gotham Medium";
      font-size: 16px;
      margin-top: 14px;

      a {
        color: black;
        text-decoration: none;
      }

      span {
        font-family: "Gotham Bold";
      }
    }
  }

  .projects-article__readmore {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 26px;
    button {
      font-size: 18px !important;
    }
  }
}
</style>
