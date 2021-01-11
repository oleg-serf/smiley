<template>
  <div class="home">
    <hero video="https://player.vimeo.com/video/493954791?background=1&byline=0&title=0"
          :link="'/our-story'" type="iframe">
      <template v-slot:title>
        <span style="color: #FFE300">Inspiring</span> Positive Change
      </template>
      <template v-slot:subtitle>
        Join our movement to create a happier,
        <br/>more equal and sustainable world
      </template>
    </hero>

    <div class="cards-sections-wrapper">
      <!--  FEATURED SECTION   -->
      <section class="news-section" v-if="featuredList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Editors Picks</b>'"
          :with-search="false"
          border-top
        ></bottom-bordered-title-with-search>
        <featured-gallery :features="featuredList" for-mobile with-slider></featured-gallery>
      </section>

      <!-- EVENTS SECTION -->
      <section class="news-section" v-if="eventList && eventList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Upcoming events</b>'"
          :with-search="false"
          border-top
        ></bottom-bordered-title-with-search>
        <events-gallery :events="eventList" for-mobile with-slider></events-gallery>
      </section>

      <!--  INTERVIEWS SECTION  -->
      <!-- <section class="news-section" v-if="interviewList && interviewList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Featured Interviews</b>'"
          :with-search="false"
          border-top
        ></bottom-bordered-title-with-search>
        <interviews-gallery
          :interviews="interviewList"
          button-text="More"
          for-mobile 
          with-slider
        ></interviews-gallery>
      </section> -->

      <!--  TEMPORARY INTERVIEWS SECTION  -->
      <section class="news-section" v-if="interviewList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Featured Interviews</b>'"
          :with-search="false"
          border-top
        ></bottom-bordered-title-with-search>
        <video-interviews-gallery
            :interviews="interviewList"
            button-text="More"
            for-mobile 
            with-slider
        ></video-interviews-gallery>
      </section>

      <!--  NETWORK SECTION  -->
      <section class="news-section" v-if="projects && projects.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Latest Projects & Campaigns</b>'"
          :with-search="false"
          border-top
        ></bottom-bordered-title-with-search>
        <projects-gallery
          :projects="projects"
          button-text="More"
          for-mobile 
          with-slider
        ></projects-gallery>
      </section>

      <!-- DISCUSSION SECTION -->
      <!-- <section class="news-section" v-if="discussionList && discussionList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Discussions |</b> Smiley Forum'"
          :with-search="false"
          border-top
        ></bottom-bordered-title-with-search>
        <discussions-gallery
          :discussions="discussionList"
          button-text="Join"
          for-mobile 
          with-slider
        ></discussions-gallery>
      </section> -->
    </div>

    <subscribe-form for-mobile />
    <Footer />
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
// Global components
import { VButton } from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import SubscribeForm from "@/components/forms/Subscribe.vue";
import Footer from "@/components/Footer.vue";
// Page components
import FeaturedGallery from "@/components/cardGalleries/FeaturedGallery";
import DiscussionsGallery from '@/components/cardGalleries/DiscussionsGallery.vue';
import ProjectsGallery from "@/components/cardGalleries/ProjectsGallery";
import InterviewsGallery from "@/components/interviews/InterviewsGallery";
import VideoInterviewsGallery from "@/components/interviews/VideoInterviewsGallery";
import EventsGallery from "@/components/events/EventsGallery";
import NewsGallery from "@/components/news/NewsGallery";
import Hero from "@/components/homepage/Hero.vue";

export default {
  name: "HomeMobile",
  components: {
    FeaturedGallery,
    DiscussionsGallery,
    ProjectsGallery,
    InterviewsGallery,
    VideoInterviewsGallery,
    EventsGallery,
    NewsGallery,
    VButton,
    BottomBorderedTitleWithSearch,
    Hero,
    SubscribeForm,
    Footer,
  },
  data() {
    return {
      vimeoVideoHeight: 700,
      news: [],
      eventList: [],
      featuredList: [],
      discussionList: [],
      newsList: [],
      interviewList: [],
      projects: [],

      goals: [],

      homepagevideo: null,

      // New reworked items
      videos: [],
      hero: {
        url_source: null,
      },
      banners: {
        news: {},
        network: {
          button_text: "Learn More",
          description:
            "Connect with changemakers and get inspired to take positive action",
          title: "MATCHMAKER FOR GOOD ™",
        },
        talks: [],
        goals: {},
      },
      sections: [
        {
          title: "Organisations",
          link: "/organisations",
          disabled: false,
          description:
            "Connect with groups working towards solving societal issues and find ways to get involved.",
          image: "/img/homepage/homepage-organisations.jpg",
        },
        {
          title: "Projects",
          link: "/projects",
          disabled: false,
          description:
            "Explore initiatives about causes you care about and kickstart your own purpose-driven projects",
          image: "/img/homepage/homepage-chatroom.jpg",
        },
        {
          title: "Chatroom",
          link: "/chatroom",
          disabled: true,
          description:
            "Take part in community discussions and share ideas with other members",
          image: "/img/homepage/homepage-projects.jpg",
        },
      ],
      quote: {
        text: null,
        sub_text: null,
      },
    };
  },
  computed: {
    mainVideoHeight() {
      return this.vimeoVideoHeight;
    },
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 1400) {
        this.vimeoVideoHeight = 900;
      } else if (window.innerWidth > 1200) {
        this.vimeoVideoHeight = 780;
      } else if (window.innerWidth > 900) {
        this.vimeoVideoHeight = 640;
      } else if (window.innerWidth < 900) {
        this.vimeoVideoHeight = 500;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    axios
      .get("/pages/1")
      .then(res => {
        this.news = res.data.latest_news;
        this.featuredList = res.data.featured;
        this.eventList = res.data.latest_events;
        // this.interviewList = res.data.latest_interviews;
        this.projects = res.data.latest_network;

        // for temporary start
        this.interviewList = [
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
        ];
        // for temporary end

        this.banners.news = res.data.page_sections.smiley_news[0];
        // this.banners.network = res.data.page_sections.smiley_network[0];
        this.banners.talks = res.data.page_sections.smiley_talks;
        this.banners.goals = res.data.page_sections.un_goals[0];

        this.videos = res.data.page_sections.bottom_videos;
        this.hero = res.data.page_sections.top_video[0];
        this.hero.url_source =
            this.$settings.images_path.pages + "l_" + this.hero.url_source;

        this.quote = res.data.page_sections.bottom_quote[0];

        const metaPayload = {
          meta: res.data?.meta || {},
          title: 'Smiley Talks',
        }

        metaPayload.meta.description = 'A global community of change-makers. We provide daily positive news and free live-events guided by the Sustainable Development Goals';
        this.$store.dispatch('meta/setMeta', metaPayload);
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
.cards-sections-wrapper {
  padding: 0 1rem;
  text-align: center;

  .news-section {
    margin-top: 1rem;
    section {
      margin-top: 0;
    }
    .more__button {
      margin: 2rem auto;
    }
  }
}

.section {
  &__title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: lighter;
    }
  }

  &__search {
    border-radius: 1.2rem;
    padding: 0.5rem 1rem;
  }

  &__border {
    border-bottom: 2px solid #ffe300;
    width: 100%;
    margin-top: 1.5rem;
  }
}

.news-grid {
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 2rem;
  margin-bottom: 5rem;
}

.events-grid {
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // grid-gap: 2rem;
  margin-bottom: 5rem;
}
</style>
