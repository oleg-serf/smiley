<template>
  <div style="position: relative" :class="[forMobile ? 'for-mobile' : '']">
    <div class="d-flex ml-4 slide__btns" v-if="withSlider">
      <span>
        <v-icon :id="'news-gallery-button-prev-' + id" medium color="black">
          fa fa-chevron-circle-left
        </v-icon>
      </span>
      <span class="ml-3">
        <v-icon :id="'news-gallery-button-next-' + id" medium color="black">
          fa fa-chevron-circle-right
        </v-icon>
      </span>
    </div>
    <template v-if="withSlider">
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="article in news" :key="article.slug">
          <NewsCard
            class="news-gallery__card"
            :article="article"
            :for-mobile="forMobile"
          />
        </SwiperSlide>
      </Swiper>
    </template>
    <section
      class="section"
      :class="[forMobile ? 'for-mobile' : '']"
      v-else
      id="section-news"
    >
      <v-row class="news-gallery__row">
        <Swiper class="news-gallery" :key="key" :options="options">
          <SwiperSlide v-for="article in news" :key="article.slug">
            <v-col sm="12" md="12" class="py-0 news-gallery__col">
              <NewsCard
                class="news-gallery__card"
                :article="article"
                :for-mobile="forMobile"
              />
            </v-col>
          </SwiperSlide>
        </Swiper>
      </v-row>
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
    forMobile: {
      type: Boolean,
      default: false,
    }
  },
  components: {
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
          nextEl: "#nextone",
          prevEl: "#prevone",
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
            spaceBetween: 20,
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
  display: flex;
  justify-content: space-between;
  .swiper-slide {
    margin-right: 0px;
    @media (min-width: 900px) {
      margin-right: 1px !important;
      width: 448.333px !important;
    }
  }
  .swiper-slide:nth-child(2) {
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
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
.slide__btns {
  position: absolute;
  right: 0;
  top: -58px;
  span {
    i {
      cursor: pointer;
    }
  }
}
</style>
