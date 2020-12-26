<script>
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import NewsGallery from "@/components/news/NewsGallery";
import VButton from "@/components/app/VButton";
import EventsGallery from "@/components/events/EventsGallery";
import InterviewsGallery from "@/components/interviews/InterviewsGallery";
import ProjectsGallery from "@/components/cardGalleries/ProjectsGallery";

export default {
  components: {ProjectsGallery, InterviewsGallery, EventsGallery, VButton, NewsGallery, BottomBorderedTitleWithSearch}
}
</script>
<template>
  <div class="home">
    <hero video="https://player.vimeo.com/video/493954791?background=1&byline=0&title=0"
          :link="'/our-story'" type="iframe">
      <template v-slot:title>
        <span style="color: #FFE300">Positive</span> Impact Journalism
      </template>
      <template v-slot:subtitle>
        Join our movement to create a happier,
        <br/>more equal and sustainable world
      </template>
    </hero>

    <!--    <section class="section container">
          <div class="section__title">
            <h2>Featured News <span>| Editors pick</span></h2>
            <input type="search" class="section__search" placeholder="Search news">
          </div>
          <div class="section__border"></div>
        </section>

        <section class="news-grid container" v-if="newsList.length > 0">
          <news-card-new
              v-for="article in newsList"
              :key="article.slug"
              :article="article"/>
        </section>-->
    <div class="cards-sections-wrapper">
      <!--  NEWS SECTION   -->
      <section class="news-section" v-if="newsList.length > 0">
        <bottom-bordered-title-with-search
            :title="'<b>Featured News</b>| Editors pick'"
            :with-search="true"
            :search-expandable="true"
            hover-effect
            hover-color="#FFE300"
            search-text="Search events..."
        ></bottom-bordered-title-with-search>
        <news-gallery
            :news="newsList"
            with-slider
            :prev-button-left="-80"
            :next-button-right="-80"
        ></news-gallery>
        <VButton
            class="more__button"
            size="height_45"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'news' }"
          >
            More News
          </router-link
          >
        </VButton>
      </section>

      <!--  EVENTS SECTION  -->
      <!--   TEMPORARY HIDDEN <API> NEEDED   -->
      <section class="events-section" v-if="false">
        <bottom-bordered-title-with-search
            :title="'<b>Upcoming Events</b>'"
            :with-search="true"
            :search-expandable="true"
            hover-effect
            hover-color="#FFE300"
            search-text="Search events..."
        ></bottom-bordered-title-with-search>
        <events-gallery
            :events="banners.talks"
            with-slider
            :prev-button-left="-80"
            :next-button-right="-80"
            :slides-per-view="2"
        ></events-gallery>
        <VButton
            class="more__button"
            size="height_45"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'talks' }"
          >
            More Events
          </router-link
          >
        </VButton>
      </section>

      <!--  INTERVIEWS SECTION  -->
      <section class="news-section" v-if="newsList.length > 0">
        <bottom-bordered-title-with-search
            :title="'<b>Featured Interviews</b>'"
            :with-search="true"
            :search-expandable="true"
            hover-effect
            hover-color="#FFE300"
            search-text="Search interviews..."
        ></bottom-bordered-title-with-search>
        <interviews-gallery
            :interviews="newsList"
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
          </router-link
          >
        </VButton>
      </section>

      <!--  NETWORK SECTION  -->
      <section class="news-section" v-if="projects.length > 0">
        <bottom-bordered-title-with-search
            :title="'<b>Smiley Movement Network |</b> Latest Projects & Campaigns'"
            :with-search="true"
            :search-expandable="true"
            hover-effect
            hover-color="#FFE300"
            search-text="Search projects..."
        ></bottom-bordered-title-with-search>
        <projects-gallery
            :projects="projects"
            with-slider
            :prev-button-left="-80"
            :next-button-right="-80"
            button-text="More"
        ></projects-gallery>
        <VButton
            class="more__button"
            size="height_45"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'network' }"
          >
            Join Network
          </router-link
          >
        </VButton>
      </section>

      <section class="section container">
        <div class="section__title">
          <h2>Upcoming events</h2>
          <input type="search" class="section__search" placeholder="Search events">
        </div>
        <div class="section__border"></div>
      </section>

      <section class="events-grid container" v-if="eventList.length > 0">
        <event-card-new v-for="event in eventList" :key="'event-'+event.slug" :event="event"/>
      </section>

      <section class="section container">
        <div class="section__title">
          <h2>Daily News</h2>
          <input type="search" class="section__search" placeholder="Search news">
        </div>
        <div class="section__border"></div>
      </section>

      <section class="news-grid container" v-if="newsList.length > 0">
        <news-card-new
            v-for="article in newsList"
            :key="article.slug"
            :article="article"/>
      </section>
    </div>

    <subscribe-form/>
    <Footer/>
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
// Global components
import {VButton} from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import SubscribeForm from "@/components/forms/Subscribe.vue";
import Footer from "@/components/Footer.vue";
// Page components
import ProjectsGallery from "@/components/cardGalleries/ProjectsGallery";
import InterviewsGallery from "@/components/interviews/InterviewsGallery";
import EventsGallery from "@/components/events/EventsGallery";
import NewsGallery from "@/components/news/NewsGallery";
import Hero from "@/components/homepage/Hero.vue";
import Banner from "@/components/homepage/Banner.vue";
import NewsCard from "@/components/cards/NewsCard.vue";
import NewsCardNew from "@/components/cards/NewsCardNew.vue";
import EventCard from "@/components/cards/EventCard.vue";
import EventCardNew from "@/components/cards/EventCardNew.vue";

import ArticleItemBlock from "@/components/news/ArticleBlock.vue";
import VimeoVideo from "@/components/homepage/VimeoVideo.vue";

export default {
  name: "home",
  components: {
    ProjectsGallery,
    InterviewsGallery,
    EventsGallery,
    VButton,
    NewsGallery,
    BottomBorderedTitleWithSearch,
    Hero,
    NewsCardNew,
    NewsCard,
    EventCardNew,
    EventCard,
    ArticleItemBlock,
    Banner,
    VimeoVideo,
    SubscribeForm,
    Footer,
  },
  data() {
    return {
      vimeoVideoHeight: 700,
      news: [],
      events: [],
      eventList: [],
      newsList: [],
      projects: [],

      goals: [],

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
          console.log(res);
          this.eventList = res.data.future_events;
          this.newsList = res.data.latest_news;

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
    axios
        .get("/projects")
        .then((res) => {
          this.projects = res.data.projects;
        })
        .catch((error) => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.cards-sections-wrapper {
  padding: 0 100px;
  text-align: center;

  .news-section {
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
