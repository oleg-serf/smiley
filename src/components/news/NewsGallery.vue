<template>
  <div style="position: relative" :class="[forMobile ? 'for-mobile' : '']">
    <template v-if="withSlider">
      <ButtonArrow
        v-if="!forMobile"
        :id="'news-gallery-button-prev-' + id"
        :style="{ left: prevButtonLeft }"
        class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="article in news" :key="article.slug">
          <NewsCard
            class="news-gallery__card"
            :article="article"
            :for-mobile="forMobile"
          />
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
        v-if="!forMobile"
        :id="'news-gallery-button-next-' + id"
        :style="{ right: nextButtonRight }"
        class="news-gallery-button news-gallery-button-next"
      />
    </template>
    <section
      class="section"
      :class="[forMobile ? 'for-mobile' : '']"
      v-else
      id="section-news"
    >
      <!-- <div class="grid grid--news"> -->
      <v-row class="news-gallery__row">
        <v-col
          sm="12"
          md="4"
          class="news-gallery__col py-0"
          v-for="article in news"
          :key="'article-' + article.slug"
        >
          <NewsCard
            :for-mobile="forMobile"
            class="news-gallery__card"
            :article="article"
          />
        </v-col>
      </v-row>
      <!-- </div> -->
    </section>
  </div>
</template>

<script>
import { ButtonArrow } from "@/components/buttons";
import NewsCard from "@/components/cards/NewsCard.vue";

export default {
  name: "NewsGallery",
  props: {
    news: {
      type: Array,
      required: true,
    },
    withSlider: {
      type: Boolean,
      default: false,
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
    NewsCard,
    ButtonArrow,
  },
  data() {
    return {
      id: 0,
      key: 0,
      forMobile: this.$vuetify.breakpoint.xs,
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
.news-gallery__row {
  .news-gallery__col:nth-child(2) {
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
  }
}
.grid {
  &--news {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &--news {
    // article:nth-child(2) {
    //   padding: 0 20px;
    // }
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
    left: 0;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -49%);
  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: 0;
    top: 50%;
    opacity: 0.8;
  }
  transform: translate(0, -53%) rotate(180deg);
  right: -80px;
  //transform: rotate(180deg);
}
</style>
