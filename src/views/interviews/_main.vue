<template>
  <div class="interviews container">
    <section
      class="interviews-section container"
      v-for="item in interviews"
      :key="'interviews-item-' + item.slug"
      :item="item"
    >
<!--      <div class="interviews-category">
        <h2 class="interviews-category__title">{{ item.prefix }} {{ item.name }}</h2>
        <VSearch
          @submit.native.prevent="find"
          placeholder="Search topic..."
          v-model="search"
        />
      </div>-->
      <BottomBorderedTitleWithSearch
          :title="'<b>' + item.prefix + ' ' + item.name + '</b>' + ' | Interviews'"
          :is-search="true"
      ></BottomBorderedTitleWithSearch>
      <InterviewsGallery :interviews="item.latest_news"></InterviewsGallery>
    </section>
    <Subscribe />
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import InterviewsGallery from "@/components/interviews/InterviewsGallery.vue";
import { VSearch } from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import Subscribe from "@/components/forms/Subscribe";

export default {
  name: "Interviews",
  components: {
    Subscribe,
    BottomBorderedTitleWithSearch,
    InterviewsGallery,
    VSearch,
  },
  data() {
    return {
      latest: [],
      interviews: [],
      search: "",
    };
  },
  methods: {
    find() {
      router.push({
        name: "interviews-search",
        params: { keyword: this.search },
      });
    },
  },
  created() {
    console.log("interviews triggered");
    axios
      .get("/news/latest")
      .then((res) => {
        console.log("interviews", res);

        this.latest = res.data.latest_news;
        this.interviews = res.data.featured_goals;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style lang="scss" scoped>
.interviews {
  margin-top: 30px;
}

.interviews-section {
  margin-bottom: 100px;
  position: relative;
}

.interviews-category {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ffe300;
  margin-bottom: 16px;
  padding-bottom: 24px;

  .interviews-category__title {
    color: black;
    font-family: "Gotham Bold";
    font-size: 30px;
    line-height: 40px;
  }
}
</style>
