<template>
  <article class="projects-project">
    <div
        class="projects-article__image"
        @mouseenter="showDescription = true"
        @mouseleave="showDescription = false"
    >
      <MediaImage
          :src="project.cover_image"
          :alt="project.name"
          :title="project.name"
          size="m"
          type="projects"
      />
      <div class="projects-project-category">
        <span class="projects-project-category__name" v-if="manualGoal == null">
          {{
            project.goals != null && project.goals.length > 0
                ? project.goals[0].name
                : ""
          }}
        </span>
        <span class="projects-project-category__name" v-else>{{ manualGoal }}</span>
        <transition name="fade">
          <span v-if="showDescription" class="projects-project-category__description"
          >UN Goal 0{{
              project.goals != null && project.goals.length > 0
                  ? project.goals[0].prefix
                  : ""
            }} | <br>
            Quality Education
          </span
          >
        </transition>
      </div>
    </div>

    <div class="projects-article__content">
      <h3 class="projects-article__content-title">
        {{ cutText(project.name ? project.name : project.title, 40) }}
      </h3>
      <div
          class="projects-article__content-description"
          v-html="cutText(project.description, 50, 'description')"
      ></div>
      <div class="projects-article__content-metadata">
        <span>Lorem</span> | ipsum | {{ dateAgo('2020-12-14 13:30:00') }}
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
      router.push({ name: "projects-item", params: { slug: this.project.slug } });
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

      if (result == 0) {
        time = "Today";
      } else if (result < 28) {
        time = result + " " + append + " ago";
      } else {
        const month = realDate.date();
        const day = realDate.month() + 1;
        const year = realDate.year();
        time = day + "-" + month + "-" + year;
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
        return text.slice(0, limit).trim() + (stringName === 'description' ? "...<b>More</b>>" : "...");
      }

      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.projects-project {
  background-color: white;
  position: relative;
  min-height: 540px;
  height: 100%;
  color: #fff;
  box-shadow: 0 3px 6px rgba(#000, 0.16);

  .projects-article__image {
    position: relative;
    height: 230px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      object-fit: cover;
      object-position: center;
    }

    .projects-project-category {
      position: absolute;
      bottom: 0;
      right: 0;
      color: white;
      background: rgba(#888785, 0.6);
      font-size: 24px;
      font-family: "Gotham Bold";
      padding: 8px 16px;

      .projects-project-category__name {
        color: white;
      }
      .projects-project-category__description {
        display: block;
        line-height: 20px;
        font-family: "Gotham Medium";
      }
    }
  }

  .projects-article__content {
    min-height: 230px;
    padding: {
      top: 26px;
      left: 16px;
      right: 16px;
      bottom: 20px;
    }

    .projects-article__content-title {
      height: 4rem;
      color: black;
      font-family: "Gotham Bold", sans-serif;
      font-size: 20px;
      line-height: 30px;
    }

    .projects-article__content-description {
      height: 6rem;
      color: black;
      font-family: "Gotham Book", sans-serif;
      font-size: 18px;
      line-height: 28px;
      margin-top: 30px;
    }

    .projects-article__content-metadata {
      height: 3.5rem;
      color: black;
      font-family: "Gotham Medium";
      font-size: 16px;
      margin-top: 14px;

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
