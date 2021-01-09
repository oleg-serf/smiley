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
            name: "Claire Linacre",
            video: "481275029",
            title: "Donor & Data Manager | Akt | LGBT Event | November 2020",
            description: "You'd think homophobia in this country isn't at such a point that there are so many young people who don't have a safe home",
            slug: "Beyond Pride",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-11-19"
          },
          {
            name: "Josh Littlejohn",
            video: "484519685",
            title: "Co-Founder of Social Bite | Event : Ending Homelessness | December 2020",
            description: "Surely we can do better than this",
            slug: "Ending Homelessness & Building resilient Communities",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-11-27"            
          },
          {
            name: "Georgia Dodsworth",
            video: "370887819",
            title: "Founder of World of Self Care | Event: Let’s Talk About Mental Health",
            description: "We are not alone",
            slug: "LTAMH",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2019-11-4"            
          },
          {
            name: "Graydin",
            video: "489952360",
            title: "McKenzie Cerri",
            description: "",
            slug: "McKenzie Cerri",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-11-11"
          },
          {
            name: "Big Education",
            video: "488988423",
            title: "Liz Robinson",
            description: "",
            slug: "Liz Robinson",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-12-9"
          },
          {
            name: "Social Bite",
            video: "484519685",
            title: "Josh Littlejohn",
            description: "",
            slug: "Josh Littlejohn",
            prefix: "1",
            goal_category: "No Poverty",
            published_at:"2020-11-27"
          },
          {
            name: "Crowmarsh Gifford Primary",
            video: "477227584",
            title: "Flora Barton",
            description: "",
            slug: "Flora Barton",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-11-9"
          }
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
