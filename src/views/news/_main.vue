<template>
  <div class="news">
    <section
      class="news-section container"
      v-for="item in news"
      :key="'news-item-' + item.slug"
      :item="item"
    >
      <BottomBorderedTitleWithSearch
          :title="'<b>' + item.prefix + ' ' + item.name + '</b>' + ' | News'"
          :with-search="true"
          :search-expandable="true"
      ></BottomBorderedTitleWithSearch>
      <NewsGallery :news="item.latest_news"></NewsGallery>
    </section>
    <Subscribe />
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
      latest: [],
      news: [],
      search: "",
    };
  },
  methods: {
    find() {
      router.push({
        name: "news-search",
        params: { keyword: this.search },
      });
    },
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
};
</script>

<style lang="scss" scoped>
.news {
  margin-top: 30px;
}

.news-section {
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
</style>
