<template>
  <div class="news">
    <section
      class="news-category-section container"
      v-for="(item, key) in news"
      :key="'news-item-' + item.slug"
    >
      <div class="news-category">
        <h2 class="news-category__title">{{ item.prefix }} {{ item.name }}</h2>
        <VSearch
          @submit.native.prevent="find"
          placeholder="Search topic..."
          v-model="search"
        />
      </div>
      <ButtonArrow
        :id="'news-gallery-button-prev-' + key"
        class="news-gallery-button news-gallery-button-prev"
      />
      <Swiper
        class="news-gallery"
        :key="swiperKey"
        :options="{
          ...options,
          navigation: {
            nextEl: `#news-gallery-button-next-${key}`,
            prevEl: `#news-gallery-button-prev-${key}`,
          },
        }"
      >
        <SwiperSlide v-for="article in item.latest_news" :key="article.slug">
          <NewsCard class="news-gallery__card" :article="article" />
        </SwiperSlide>
      </Swiper>
      <ButtonArrow
        :id="'news-gallery-button-next-' + key"
        class="news-gallery-button news-gallery-button-next"
      />
    </section>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import { VSearch } from "@/components/app";
import Banner from "@/components/homepage/Banner.vue";
import NewsCard from "@/components/cards/NewsCard.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { ButtonArrow } from "@/components/buttons";

export default {
  name: "News",
  components: {
    Banner,
    NewsCard,
    VSearch,
    ButtonArrow,
  },
  data() {
    return {
      latest: [],
      news: [],
      search: "",
      swiperKey: 0,
      options: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: null,
          prevEl: null,
        },
      },
    };
  },
  created() {
    console.log("news triggered");
    axios
      .get("/news/latest")
      .then((res) => {
        console.log("news", res);

        this.latest = res.data.latest_news;
        this.news = res.data.featured_goals;
      })
      .catch((error) => console.error(error));
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    goToCategory(event) {
      router.push({
        name: "news-category-item",
        params: { slug: event.target.value },
      });
    },
    find() {
      router.push({
        name: "news-search",
        params: { keyword: this.search },
      });
    },
    resizeHandler(e) {
      if (window.innerWidth < 1500 && window.innerWidth >= 1050) {
        if (this.options.slidesPerView === 2) return;

        this.options.slidesPerView = 2;
        this.options.slidesPerGroup = 2;
      } else if (window.innerWidth < 1050) {
        if (this.options.slidesPerView === 1) return;

        this.options.slidesPerView = 1;
        this.options.slidesPerGroup = 1;
      } else {
        if (this.options.slidesPerView === 3) return;

        this.options.slidesPerView = 3;
        this.options.slidesPerGroup = 3;
      }

      this.genKey();
    },
    genKey() {
      this.swiperKey = Math.random();
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  margin-top: 60px;
}

.news-category-section {
  margin-bottom: 100px;
  position: relative;
}

.news-category {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ffe300;
  margin-bottom: 16px;
  padding-bottom: 24px;

  .news-category__title {
    color: black;
    font-family: "Gotham Bold";
    font-size: 30px;
    line-height: 40px;
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
