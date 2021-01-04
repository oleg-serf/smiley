<template>
  <div class="projects-gallery__container" :class="[forMobile ? 'for-mobile' : '']">
    <template v-if="withSlider || isMobile">
      <ButtonArrow
          v-if="!forMobile"
          :id="'news-gallery-button-prev-' + id"
          class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="project in discussions" :key="project.slug">
          <DiscussionCard class="news-gallery__card" :project="project" :for-mobile="forMobile" :button-text="buttonText"/>
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
          v-if="!forMobile"
          :id="'news-gallery-button-next-' + id"
          class="news-gallery-button news-gallery-button-next"
      />
    </template>
    <section v-else class="section" id="section-news" :class="[forMobile ? 'for-mobile' : '']">
      <div class="grid grid--news">
        <DiscussionCard
            :for-mobile="forMobile"
            class="news-gallery__card"
            v-for="project in discussions"
            :key="'project-'+project.slug"
            :button-text="buttonText"
            :project="project"/>
      </div>
    </section>
  </div>
</template>

<script>
import {ButtonArrow} from "@/components/buttons";
import DiscussionCard from "@/components/cards/DiscussionCard";

export default {
  name: "DiscussionsGallery",
  props: {
    forMobile: {
      type: Boolean,
      default: false,
    },
    discussions: {
      type: Array,
      required: true,
    },
    withSlider: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Join'
    }
  },
  components: {
    DiscussionCard,
    ButtonArrow,
  },
  data() {
    return {
      isMobile: true,
      id: 0,
      key: 0,
      options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        // loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 25,
          },
        },
      },
    };
  },
  /*
  * METHODS */
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth >= 900 ? false : true;
    },
  },

  created() {
    this.id = this._uid;
    this.options.navigation = {
      nextEl: `#news-gallery-button-next-${this.id}`,
      prevEl: `#news-gallery-button-prev-${this.id}`,
    };
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
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
    transform: translate(0, -49%);
    opacity: 0.8;
  }

  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: -100px;
    top: 50%;
    opacity: 0.8;
  }

  right: -80px;
  //transform: rotate(180deg);
  transform: translate(0, -53%) rotate(180deg);
}
</style>
