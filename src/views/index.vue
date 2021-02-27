<template>
  <div class="home">
    <hero 
      video="https://player.vimeo.com/video/493954791?background=1&byline=0&title=0"
      :link="'/our-story'" type="iframe"
    >
      <template v-slot:title>
        <span style="color: #FFE300">Inspiring</span> Positive Change
      </template>
      <template v-slot:subtitle>
        Join our movement to create a happier,
        <br/>more equal and sustainable world
      </template>
    </hero>

    <div class="cards-sections-wrapper">
      <!--  FEATURED SECTION  -->
      <section class="news-section" v-if="featuredList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Editors Picks</b>'"
          :with-search="true"
          :search-expandable="true"
          hover-effect
          hover-color="#FFE300"
          search-text="Search News..."
          withDropdown
          :dropdownOptions="goals"
          @goalChange="onSelectGoal"
          @search="onSearchPicks"
        ></bottom-bordered-title-with-search>
        <featured-gallery
          :features="featuredList"
          with-slider
          :prev-button-left="-80"
          :next-button-right="-80"
        ></featured-gallery>
        <div class="more__button">
          <router-link :to="{ name: 'news' }">
            More News
          </router-link>
        </div>
      </section>

      <!--  EVENTS SECTION  -->
      <section class="events-section" v-if="eventList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Upcoming Events</b>'"
          :with-search="false"
          :search-expandable="true"
          hover-effect
          hover-color="#FFE300"
          search-text="Search events..."
          @search="onSearchEvents"
        ></bottom-bordered-title-with-search>
        <events-gallery
          :events="eventList"
          with-slider
          :prev-button-left="-80"
          :next-button-right="-80"
          :slides-per-view="2"
        ></events-gallery>
        <div class="more__button">
          <router-link :to="{ name: 'talks' }">
            More Events
          </router-link>
        </div>
      </section>

      <!--  INTERVIEWS SECTION  -->
      <!-- <section class="news-section" v-if="interviewList.length > 0">
        <bottom-bordered-title-with-search
            :title="'<b>Featured Interviews</b>'"
            :with-search="true"
            :search-expandable="true"
            hover-effect
            hover-color="#FFE300"
            search-text="Search interviews..."
        ></bottom-bordered-title-with-search>
        <interviews-gallery
            :interviews="interviewList"
            with-slider
            :prev-button-left="-80"
            :next-button-right="-80"
            button-text="More"
        ></interviews-gallery>
        <VButton
            class="more__button"
            size="height_45"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'interviews' }"
          >
            More Interviews
          </router-link>
        </VButton>
      </section> -->

      <!--  TEMPORARY INTERVIEWS SECTION  -->
      <section class="news-section" v-if="interviewList.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Featured Interviews</b>'"
          :with-search="false"
          hover-effect
          hover-color="#FFE300"
        ></bottom-bordered-title-with-search>
        <video-interviews-gallery
          :interviews="interviewList"
          :prev-button-left="-80"
          :next-button-right="-80"
          button-text="More"
        ></video-interviews-gallery>
        <div class="more__button">
          <router-link :to="{ name: 'interviews' }">
            More Interviews
          </router-link>
        </div>
      </section>

      <!--  NETWORK SECTION  -->
      <section class="news-section" v-if="projects.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Smiley Network |</b> Matchmaker for Good'"
          :with-search="false"
          :search-expandable="true"
          hover-effect
          hover-color="#FFE300"
          search-text="Search projects..."
          @search="onSearchNetwork"
        ></bottom-bordered-title-with-search>
        <projects-gallery
          :projects="projects"
          with-slider
          :prev-button-left="-80"
          :next-button-right="-80"
          button-text="More"
        ></projects-gallery>
        <div class="more__button">
          <router-link :to="{ name: 'network' }"> Join Network </router-link>
        </div>
      </section>

      <!--  DAILY NEWS SECTION   -->
      <section class="news-section" v-if="news.length > 0">
        <bottom-bordered-title-with-search
          :title="'<b>Daily News</b>'"
          :with-search="false"
          :search-expandable="true"
          hover-effect
          hover-color="#FFE300"
          search-text="Search News..."
          @search="onSearchNews"
        ></bottom-bordered-title-with-search>
        <news-gallery
          :news="news"
          with-slider
          :prev-button-left="-80"
          :next-button-right="-80"
        ></news-gallery>
        <div class="more__button">
          <router-link :to="{ name: 'news' }">
            More News
          </router-link>
        </div>
      </section>
    </div>

    <subscribe-form/>
    <Footer/>
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
import router from "@/router";
// Global components
import {VButton, VDropdown} from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import SubscribeForm from "@/components/forms/Subscribe.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/homepage/Hero.vue";
// Page components
import FeaturedGallery from "@/components/cardGalleries/FeaturedGallery";
import ProjectsGallery from "@/components/cardGalleries/ProjectsGallery";
import InterviewsGallery from "@/components/interviews/InterviewsGallery";
import VideoInterviewsGallery from "@/components/interviews/VideoInterviewsGallery";
import EventsGallery from "@/components/events/EventsGallery";
import NewsGallery from "@/components/news/NewsGallery";

export default {
  name: "home",
  components: {
    FeaturedGallery,
    ProjectsGallery,
    InterviewsGallery,
    VideoInterviewsGallery,
    EventsGallery,
    NewsGallery,
    VButton,
    VDropdown,
    BottomBorderedTitleWithSearch,
    Hero,
    SubscribeForm,
    Footer,
  },
  data() {
    return {
      vimeoVideoHeight: 700,
      news: [],
      events: [],
      eventList: [],
      featuredList: [],
      interviewList: [],
      projects: [],
      goals: [],
      selectedGoal: null,
      homepagevideo: null,
      // New reworked items
      videos: [],
      hero: {
        url_source: null
      },
      banners: {
        news: {},
        network: {
          button_text: "Learn More",
          description:
              "Connect with changemakers and get inspired to take positive action",
          title: "MATCHMAKER FOR GOOD ™"
        },
        talks: [],
        goals: {}
      },
      sections: [
        {
          title: "Organisations",
          link: "/organisations",
          disabled: false,
          description:
              "Connect with groups working towards solving societal issues and find ways to get involved.",
          image: "/img/homepage/homepage-organisations.jpg"
        },
        {
          title: "Projects",
          link: "/projects",
          disabled: false,
          description:
              "Explore initiatives about causes you care about and kickstart your own purpose-driven projects",
          image: "/img/homepage/homepage-chatroom.jpg"
        },
        {
          title: "Chatroom",
          link: "/chatroom",
          disabled: true,
          description:
              "Take part in community discussions and share ideas with other members",
          image: "/img/homepage/homepage-projects.jpg"
        }
      ],
      quote: {
        text: null,
        sub_text: null
      }
    };
  },
  computed: {
    mainVideoHeight() {
      return this.vimeoVideoHeight
    },
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 1400) {
        this.vimeoVideoHeight = 900
      } else if (window.innerWidth > 1200) {
        this.vimeoVideoHeight = 780
      } else if (window.innerWidth > 900) {
        this.vimeoVideoHeight = 640
      } else if (window.innerWidth < 900) {
        this.vimeoVideoHeight = 500
      }
    },
    onSelectGoal(e) {
      router.push({ name: 'news-category-item', params: {slug: e} });
    },
    onSearchPicks(text) {
      router.push({ name: 'news-search', params: {keyword: text} });
    },
    // onSearchEvents(text) {
    //   //router.push({ name: 'talks-search', params: {keyword: text} });
    // },
    // onSearchNetwork(text) {
    //   //router.push({ name: 'news-search', params: {keyword: text} });
    // },
    // onSearchNews(text) {
    //   //router.push({ name: 'news-search', params: {keyword: text} });
    // },
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
        this.featuredList[0].video="qRudLyeT0Io";
        this.eventList = res.data.latest_events;
        // this.interviewList = res.data.latest_interviews;
        this.projects = res.data.latest_network;

        // for temporary start
        this.interviewList = [
          {
            name: "Claire Linacre",
            video: "qRudLyeT0Io",
            title: "Donor & Data Manager | Akt | LGBT Event | November 2020",
            description: "You'd think homophobia in this country isn't at such a point that there are so many young people who don't have a safe home",
            slug: "Beyond Pride",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-11-19"
          },
          {
            name: "Josh Littlejohn",
            video: "UcreprtCr2k",
            title: "Co-Founder of Social Bite | Event : Ending Homelessness | December 2020",
            description: "Surely we can do better than this",
            slug: "Ending Homelessness & Building resilient Communities",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2020-11-27"            
          },
          {
            name: "Georgia Dodsworth",
            video: "UcreprtCr2k",
            title: "Founder of World of Self Care | Event: Let’s Talk About Mental Health",
            description: "We are not alone",
            slug: "LTAMH",
            prefix: "1",
            goal_category: "Quality Education",
            published_at:"2019-11-4"            
          },
        ];
        // for temporary end
        this.goals = res.data.goals;

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
  }
};
</script>

<style lang="scss" scoped>
.cards-sections-wrapper {
  padding: 0 100px;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;

  .more__button {
    margin: 0 auto;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.5rem;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        border: solid white;
        border-width: 0 4px 4px 0;
        transform: rotate(-45deg);
        position: absolute;
        left: calc(100% + 10px);
        top: 10px;
        z-index: 1000;
      }
      &::after {
        content: "";
        display: inline-block;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #000000;
        position: absolute;
        margin: 7px 5px;
      }
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
    padding: .5rem 1rem;
  }

  &__border {
    border-bottom: 2px solid #FFE300;
    width: 100%;
    margin-top: 1.5rem;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;
}

//@import "@/scss/blocks/_homepage-news-grid";
////
//@import "@/scss/blocks/homepage/_goals-grid";
////
//@import "@/scss/sections/_homepage-header";
//
//// TODO: Move to component
//.comment-block {
//  background-image: url("/img/homepage/quotes.svg");
//  background-repeat: no-repeat;
//  background-position: center top;
//  width: 100%;
//  max-width: 985px;
//  text-align: center;
//  margin-left: auto;
//  margin-right: auto;
//  position: relative;
//
//  @include margin-top(5rem);
//  @include margin-bottom(5rem);
//
//  &:before,
//  &:after {
//    content: "";
//    height: 4px;
//    width: 100px;
//    position: absolute;
//    background-color: #ffec00;
//    transform: translateX(-50%);
//  }
//
//  &:before {
//    top: -24px;
//  }
//
//  &:after {
//    bottom: -32px;
//  }
//
//  p {
//    color: $default-text;
//    font: 400 italic 20px/32px "Muli", sans-serif;
//    margin-top: 0;
//    padding-top: 8px;
//  }
//
//  h3 {
//    color: #252525;
//    font: 700 12px/16px "Montserrat Bold", sans-serif;
//    opacity: 0.87;
//  }
//}
//
////
//.smiley-video-section h2 {
//  margin-top: 48px;
//  text-align: center;
//  text-transform: uppercase;
//  font-family: "Montserrat Bold", sans-serif;
//  font-weight: 700;
//  line-height: 1.35;
//  @include font-size(2rem);
//}
//
//.banner-block {
//  margin-top: 15px;
//  margin-bottom: 5px;
//}
//
//.news-grid--video {
//  grid-gap: 30px;
//}
//
//@media screen and (max-width: 991px) and (min-width: 768px) {
//  .news-grid {
//    & > div:last-child {
//      grid-column: 1 / span 2;
//    }
//  }
//}
</style>
