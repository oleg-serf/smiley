<template>
  <div class="projects-gallery__container">
    <template v-if="withSlider">
      <ButtonArrow
          :id="'news-gallery-button-prev-' + id"
          class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="project in projects" :key="project.slug">
          <ProjectCardNew class="news-gallery__card" :project="project"/>
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
          :id="'news-gallery-button-next-' + id"
          class="news-gallery-button news-gallery-button-next"
      />
    </template>
    <section v-else class="section" id="section-news">
      <div class="grid grid--news">
        <ProjectCardNew
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
        spaceBetween: 25,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
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
  top: 38%;
}

.news-gallery-button-prev {
  @include custom-max-width(1600px) {
    left: -100px;
    top: 38%;
    opacity: 0.8;
  }

  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: -100px;
    top: 38%;
    opacity: 0.8;
  }

  right: -80px;
  transform: rotate(180deg);
}
</style>
