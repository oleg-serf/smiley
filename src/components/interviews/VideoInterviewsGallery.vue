<template>
  <div style="position: relative" :class="[forMobile ? 'for-mobile' : '']">
    <template v-if="withSlider">
      <ButtonArrow
        v-if="!forMobile"
        :id="'interview-gallery-button-prev-' + id"
        :style="{ left: prevButtonLeft }"
        class="interview-gallery-button interview-gallery-button-prev"
      />
      <Swiper class="interview-gallery" :key="key" :options="options">
        <SwiperSlide v-for="article in interviews" :key="article.slug">
          <TempInterviewsCard
            :for-mobile="forMobile"
            class="interview-gallery__card"
            :type="imageType"
            :button-text="buttonText"
            :interview="article"
          />
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
        v-if="!forMobile"
        :id="'interview-gallery-button-next-' + id"
        :style="{ right: nextButtonRight }"
        class="interview-gallery-button interview-gallery-button-next"
      />
    </template>
    <section
      class="section"
      v-else
      id="section-interview"
      :class="[forMobile ? 'for-mobile' : '']"
    >
      <div class="grid grid--interview">
        <TempInterviewsCard
          :for-mobile="forMobile"
          class="interview-gallery__card"
          v-for="interview in interviews"
          :key="'interview-' + interview.slug"
          :type="imageType"
          :button-text="buttonText"
          :interview="interview"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { ButtonArrow } from "@/components/buttons";
import NewsCard from "@/components/cards/NewsCard.vue";
import TempInterviewsCard from "@/components/cards/TempInterviewsCard";

export default {
  name: "VideoInterviewsGallery",
  props: {
    forMobile: {
      type: Boolean,
      default: false,
    },
    withSlider: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "Read More",
    },
    imageType: {
      type: String,
      default: "interview",
    },
    interviews: {
      type: Array,
      required: true,
    },
    prevButtonLeft: {
      type: Number,
      default: 0,
    },
    nextButtonRight: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TempInterviewsCard,
    NewsCard,
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
      nextEl: `#interview-gallery-button-next-${this.id}`,
      prevEl: `#interview-gallery-button-prev-${this.id}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  &.for-mobile {
    margin-top: 0;
    margin-bottom: 0;
    .interview-gallery {
      padding: 0;
    }
  }
}
.grid {
  &--interview {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.5rem;
    }
  }
}
.for-mobile {
  .interview-gallery {
    padding: 0;
  }
}
.interview-gallery {
  padding: 10px;
}

.interview-gallery-button {
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 50%;
  transform: translate(0, -49%);
}

.interview-gallery-button-prev {
  @include custom-max-width(1600px) {
    left: 0;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -49%);
  left: -80px;
}

.interview-gallery-button-next {
  @include custom-max-width(1600px) {
    right: 0;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -53%) rotate(180deg);
  right: -80px;
  // transform: rotate(180deg);
}
</style>
