<template>
  <div class="interviews">
    <section
      class="interviews-section container"
      v-for="goal in featured_goals"
      :key="'interviews-item-' + goal.slug"
      :item="goal"
    >
      <BottomBorderedTitleWithSearch
        :border-top="isMobile"
        :title="'<b>' + goal.prefix + ' ' + goal.name + '</b>' + ' | Interviews'"
        :with-search="!isMobile"
        :search-expandable="true"
        @search="find(goal, $event)"
        :slides="true"
      ></BottomBorderedTitleWithSearch>
      <VideoInterviewsGallery
        :interviews="[...goal.latest_news, ...goal.latest_news, ...goal.latest_news]"
        :for-mobile="isMobile"
        :with-slider="isMobile"
      ></VideoInterviewsGallery>
    </section>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import InterviewsGallery from "@/components/interviews/InterviewsGallery.vue";
import VideoInterviewsGallery from "@/components/interviews/VideoInterviewsGallery.vue";
import { VSearch } from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";

export default {
  name: "Interviews",
  components: {
    BottomBorderedTitleWithSearch,
    InterviewsGallery,
    VideoInterviewsGallery,
    VSearch,
  },
  data() {
    return {
      isMobile: false,
      latest: [],
      featured_goals: [],
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
    axios
      .get("/interviews/latest")
      .then((res) => {
        console.log("interviews", res);

        // this.latest = res.data.latest_interviews;
        this.featured_goals = res.data.featured_goals;
      })
      .catch((error) => console.error(error));
    
    this.isMobile = this.$vuetify.breakpoint.xs;
  },
};
</script>

<style lang="scss" scoped>
.interviews {
  margin-top: 30px;
}

.interviews-section {
  position: relative;
  @include smMax {
    margin-bottom: 0;
  }
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
