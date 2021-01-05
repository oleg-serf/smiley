<template>
  <div class="projects-gallery__container" :class="[forMobile ? 'for-mobile' : '']">
    <template v-if="withSlider">
      <ButtonArrow
          v-if="!forMobile"
          :id="'news-gallery-button-prev-' + id"
          :style="[prevButtonLeft ? {left: prevButtonLeft} : '']"
          class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="project in projects" :key="project.slug">
          <ProjectCardNew
              :for-mobile="forMobile"
              class="news-gallery__card"
              :button-text="buttonText"
              :project="project"/>
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
          v-if="!forMobile"
          :id="'news-gallery-button-next-' + id"
          :style="[nextButtonRight !== 0 ? {right: nextButtonRight} : '']"
          class="news-gallery-button news-gallery-button-next"
      />
    </template>
    <section v-else class="section" id="section-news" :class="[forMobile ? 'for-mobile' : '']">
      <div class="grid grid--news">
        <ProjectCardNew
            :for-mobile="forMobile"
            class="news-gallery__card"
            v-for="project in projects"
            :key="'project-'+project.slug"
            :button-text="buttonText"
            :project="project"/>
      </div>
    </section>
  </div>
</template>

<script>
import {ButtonArrow} from "@/components/buttons";
import ProjectCardNew from "@/components/cards/ProjectCardNew";

export default {
  name: "ProjectsGallery",
  props: {
    forMobile: {
      type: Boolean,
      default: false,
    },
    projects: {
      type: Array,
      required: true,
    },
    withSlider: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'View Project'
    },
    prevButtonLeft: {
      type: Number,
      default: 0
    },
    nextButtonRight: {
      type: Number,
      default: 0
    }
  },
  components: {
    ProjectCardNew,
    ButtonArrow,
  },
  data() {
    return {
      id: 0,
      key: 0,
      options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
          },
        },
      },
    };
  },
  created() {
    this.id = this._uid;
    this.options.navigation = {
      nextEl: `#news-gallery-button-next-${this.id}`,
      prevEl: `#news-gallery-button-prev-${this.id}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  &.for-mobile {
    margin-top: 0;
    margin-bottom: 0;
    .news-gallery {
      padding: 0;
    }
  }
}
.projects-gallery__container {
  position: relative;
}
.grid {
  &--news {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    @include xlMax {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.for-mobile {
  .news-gallery {
    padding: 0;
  }
}
.news-gallery {
  padding: 10px;
  .swiper-slide {
    height: unset;
  }
}

.news-gallery-button {
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 50%;
  transform: translate(0, -49%);
}

.news-gallery-button-prev {
  @include custom-max-width(1600px) {
    left: -100px;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -49%);
  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: -100px;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -53%) rotate(180deg);
  right: -80px;
}
</style>
