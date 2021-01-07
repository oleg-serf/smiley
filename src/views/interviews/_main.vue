<template>
  <div class="interviews">
    <!-- <section
      class="interviews-section container"
    >
      <BottomBorderedTitleWithSearch
          :title="'<b> Past </b>' + ' | Interviews'"
          :with-search="false"          
          hover-color="#FFE300"
      ></BottomBorderedTitleWithSearch>
      <VideoInterviewsGallery :interviews="pastInterviews"></VideoInterviewsGallery>
    </section> -->

    <section
      class="interviews-section container"
      v-for="goal in featured_goals"
      :key="'interviews-item-' + goal.slug"
      :item="goal"
    >
      <BottomBorderedTitleWithSearch
          :title="'<b>' + goal.prefix + ' ' + goal.name + '</b>' + ' | Interviews'"
          :with-search="true"
          :hover-effect="true"
          hover-color="#FFE300"
      ></BottomBorderedTitleWithSearch>
      <VideoInterviewsGallery :interviews="goal.interviews"></VideoInterviewsGallery>
    </section>
    <Subscribe />
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";
import InterviewsGallery from "@/components/interviews/InterviewsGallery.vue";
import VideoInterviewsGallery from "@/components/interviews/VideoInterviewsGallery.vue";
import { VSearch } from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import Subscribe from "@/components/forms/Subscribe";

export default {
  name: "Interviews",
  components: {
    Subscribe,
    BottomBorderedTitleWithSearch,
    InterviewsGallery,
    VideoInterviewsGallery,
    VSearch,
  },
  data() {
    return {
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
    console.log("interviews triggered");
    axios
      .get("/interviews/latest")
      .then((res) => {
        console.log("interviews", res);

        // this.latest = res.data.latest_interviews;
        this.featured_goals = res.data.featured_goals;

        const temp_interviews = [
          {
            prefix: "1",
            name: "Claire Linacre",
            video: "https://player.vimeo.com/video/481275029?title=0&amp;byline=0&amp;portrait=0&sidedock=0",
            title: "Donor & Data Manager | Akt | LGBT Event | November 2020",
            description: "You'd think homophobia in this country isn't at such a point that there are so many young people who don't have a safe home",
            slug: "Beyond Pride"
          },
          {
            name: "Josh Littlejohn",
            video: "https://player.vimeo.com/video/484519685?title=0&amp;byline=0&amp;portrait=0&sidedock=0",
            title: "Co-Founder of Social Bite | Event : Ending Homelessness | December 2020",
            description: "Surely we can do better than this",
            slug: "Ending Homelessness & Building resilient Communities"
          },
          {
            name: "Georgia Dodsworth",
            video: "https://player.vimeo.com/video/370887819?title=0&amp;byline=0&amp;portrait=0&sidedock=0",
            title: "Founder of World of Self Care | Event: Let’s Talk About Mental Health",
            description: "We are not alone",
            slug: "LTAMH"
          },
        ];
        this.featured_goals[0].interviews = temp_interviews;

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
