<template>
  <div class="news">
    <section
      class="news-section container"
      v-for="item in news"
      :key="'news-item-' + item.slug"
      :item="item"
    >
      <BottomBorderedTitleWithSearch
        :border-top="isMobile"
        :title="'<b>' + item.prefix + ' ' + item.name + '</b>' + ' | News'"
        :with-search="!isMobile"
        :search-expandable="true"
        @search="find(item, $event)"
      ></BottomBorderedTitleWithSearch>
      <NewsGallery 
        :news="item.latest_news"
        :for-mobile="isMobile"
        :with-slider="isMobile"
      ></NewsGallery>
    </section>
    <Subscribe :for-mobile="isMobile"/>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import { VSearch } from "@/components/app";
import NewsGallery from "@/components/news/NewsGallery.vue";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import Subscribe from "@/components/forms/Subscribe";

export default {
  name: "News",
  components: {
    Subscribe,
    BottomBorderedTitleWithSearch,
    NewsGallery,
    VSearch,
  },
  data() {
    return {
      isMobile: false,
      latest: [],
      news: [],
      search: "",
    };
  },
  methods: {
    find(item, keyword) {
      /*router.push({
        name: "news",
        params: { keyword: keyword },
      });*/
      axios
        .get(`/news?keyword=${keyword}&goal=${item.slug}`)
        .then((res) => {
          console.log("searched for news");
          console.log(res);
        })
        .catch((error) => console.error(error));
    },
    handleResize() {
      this.isMobile = window.outerWidth >= 450 ? false : true;
    },
  },

  created() {
    console.log("news triggered");
    axios
      .get("/news/latest")
      .then((res) => {
        console.log("news", res);

        // this.latest = res.data.latest_news;
        this.news = res.data.featured_goals;
      })
      .catch((error) => console.error(error));

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.news {
  margin-top: 30px;
}

.news-section {
  margin-bottom: 100px;
  position: relative;
  @include smMax {
    margin-bottom: 0;
  }
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
</style>
