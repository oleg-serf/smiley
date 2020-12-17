<template>
  <!--  <fragment>
      <ButtonArrow
        :id="'news-gallery-button-prev-' + id"
        class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper class="news-gallery" :key="key" :options="options">
        <SwiperSlide v-for="article in interviews" :key="article.slug">
          <InterviewsCard class="news-gallery__card" :interview="article" />
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
        :id="'news-gallery-button-next-' + id"
        class="news-gallery-button news-gallery-button-next"
      />
    </fragment>-->
  <section class="section" v-if="interviews.length > 0" id="section-news">
    <div class="grid grid--news">
      <InterviewsCard
          class="news-gallery__card"
          v-for="interview in interviews"
          :key="'interview-'+interview.slug"
          :interview="interview"/>
    </div>
  </section>

</template>

<script>
import {ButtonArrow} from "@/components/buttons";
import NewsCard from "@/components/cards/NewsCard.vue";
import InterviewsCard from "@/components/cards/InterviewsCard";

export default {
  name: "InterviewsGallery",
  props: {
    interviews: {
      type: Array,
      required: true,
    },
  },
  components: {
    InterviewsCard,
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
        spaceBetween: 25,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        breakpoints: {
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
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
}
.news-gallery {
  padding: 10px;
}

.news-gallery-button {
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 400px;
}

.news-gallery-button-prev {
  @include custom-max-width(1600px) {
    left: 0;
    top: 300px;
    opacity: 0.8;
  }

  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: 0;
    top: 300px;
    opacity: 0.8;
  }

  right: -80px;
  transform: rotate(180deg);
}
</style>
