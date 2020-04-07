<template>
  <div class="home">
    <hero :video="hero.url_source" :link="'/our-story'">
      <slot>
        <span v-html="hero.title"></span>
      </slot>
    </hero>

    <!-- News section -->
    <div class="container">
      <banner
        link="/news/"
        color="#F36E24"
        background="/img/homepage/banner-news.jpg"
        v-if="Object.keys(banners.news).length"
      >
        <template v-slot:name>news</template>
        <template v-slot:title v-if="banners.news.title">{{banners.news.title}}</template>
        <template v-slot:content v-if="banners.news.description">{{banners.news.description}}</template>
        <template v-slot:button v-if="banners.news.button_text">{{banners.news.button_text}}</template>
      </banner>
    </div>

    <section class="news-grid container" v-if="newsList.length > 0">
      <article-project
        v-for="article in newsList"
        :key="article.slug"
        :title="article.title"
        :description="article.description"
        :goal="article.goals[0].name"
        :date="article.published_at"
        :background="article.cover_image"
        :link="'/news/' + article.slug"
      />
    </section>

    <!-- Network banner -->
    <div class="container">
      <banner link="/register" color="#4696D2" v-if="Object.keys(banners.network).length">
        <template v-slot:name>Network</template>
        <template v-slot:title v-if="banners.network.title">{{banners.network.title}}</template>
        <template v-slot:content v-if="banners.network.description">{{banners.network.description}}</template>
        <template
          v-slot:button
          v-if="banners.network.button_text && !auth"
        >{{banners.network.button_text}}</template>
      </banner>
    </div>

    <section class="container">
      <div class="news-grid">
        <article-item-block
          v-for="element in sections"
          :key="element.title"
          :information="element"
        />
      </div>
    </section>

    <!-- Events | Talks section -->
    <div class="container">
      <banner
        link="/talks"
        color="#D12121"
        background="/img/homepage/banner-talks.jpg"
        v-if="Object.keys(banners.talks).length"
      >
        <template v-slot:name>talks</template>
        <template v-slot:title v-if="banners.talks.title">{{banners.talks.title}}</template>
        <template v-slot:content v-if="banners.talks.description">{{banners.talks.description}}</template>
        <template v-slot:button v-if="banners.talks.button_text">{{banners.talks.button_text}}</template>
      </banner>
    </div>

    <section class="news-grid container" v-if="eventList.length > 0">
      <event-card
        v-for="event in eventList"
        :key="'event-'+event.id"
        :title="event.title"
        :description="event.short_description"
        :background="event.cover_image"
        :start="event.time_start"
        :end="event.time_end"
        :location="event.location"
      />
    </section>

    <!-- The Global Goals banner -->
    <div class="container">
      <banner
        link="/goals"
        color="#4C9F38"
        background="/img/homepage/banner-goals.jpg"
        v-if="Object.keys(banners.goals).length"
      >
        <template v-slot:title>Stronger together</template>
        <template v-slot:logo>
          <img src="/img/un-goals-white.png" style="width: 200px" />
        </template>

        <template v-slot:title v-if="banners.goals.title">{{banners.goals.title}}</template>
        <template
          v-slot:content
        >The UN Goals are our North Star guiding us to reach our mission to make the world a happier, more equal and sustainable place</template>
        <template v-slot:button v-if="banners.goals.button_text">{{banners.goals.button_text}}</template>
      </banner>
    </div>

    <section class="section smiley-video-section">
      <div class="container">
        <h2>Featured Interviews</h2>
        <div class="news-grid">
          <vimeo-video v-for="video in videos" :key="video.id" :video="video" />
        </div>
      </div>
    </section>

    <div class="section container" style="margin-top: 60px; margin-bottom: 60px;">
      <div class="comment-block">
        <p>{{quote.text}}</p>
        <h3>{{quote.sub_text}}</h3>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
// Global components
import Footer from "@/components/Footer.vue";
// Page components
import Hero from "@/components/homepage/Hero.vue";
import Banner from "@/components/homepage/Banner.vue";
import ArticleItem from "@/components/news/Article.vue";
import EventCard from "@/components/articles/EventCard.vue";

import ArticleItemBlock from "@/components/news/ArticleBlock.vue";
import VimeoVideo from "@/components/homepage/VimeoVideo.vue";

import ArticleProject from "@/components/articles/ArticleAsProject.vue";

export default {
  name: "home",
  components: {
    Hero,
    ArticleProject,
    ArticleItem,
    EventCard,
    ArticleItemBlock,
    Banner,
    VimeoVideo,
    Footer
  },
  data() {
    return {
      news: [],
      events: [],
      eventList: [],
      newsList: [],

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
            "Explore our partners, members, organisations and projects - get inspired and take positive action",
          title: "CONNECT WITH CHANGEMAKERS"
        },
        talks: {},
        goals: {}
      },
      sections: [
        {
          title: "Organisations",
          link: "/organisations",
          description:
            "Connect with groups working towards solving societal issues and find ways to get involved.",
          image: "/img/homepage/homepage-organisations.jpg"
        },
        {
          title: "Projects",
          link: "/projects",
          description:
            "Explore initiatives about causes you care about and kickstart your own purpose-driven projects",
          image: "/img/homepage/homepage-chatroom.jpg"
        },
        {
          title: "Chatroom",
          link: "/chatroom",
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
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  methods: {},
  mounted() {
    axios
      .get("/pages/1")
      .then(res => {
        console.log(res);
        this.eventList = res.data.future_events;
        this.newsList = res.data.latest_news;

        this.banners.news = res.data.page_sections.smiley_news[0];
        // this.banners.network = res.data.page_sections.smiley_network[0];
        this.banners.talks = res.data.page_sections.smiley_talks[0];
        this.banners.goals = res.data.page_sections.un_goals[0];

        this.videos = res.data.page_sections.bottom_videos;
        this.hero = res.data.page_sections.top_video[0];
        this.hero.url_source =
          this.$settings.images_path.pages + "l_" + this.hero.url_source;

        this.quote = res.data.page_sections.bottom_quote[0];
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_homepage-news-grid";
//
@import "@/scss/blocks/homepage/_goals-grid";
//
@import "@/scss/sections/_homepage-header";

// TODO: Move to component
.comment-block {
  background-image: url("/img/homepage/quotes.svg");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  max-width: 985px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @include margin-top(5rem);
  @include margin-bottom(5rem);

  &:before,
  &:after {
    content: "";
    height: 4px;
    width: 100px;
    position: absolute;
    background-color: #ffec00;
    transform: translateX(-50%);
  }

  &:before {
    top: -24px;
  }

  &:after {
    bottom: -32px;
  }

  p {
    color: $default-text;
    font: 400 italic 20px/32px "Muli", sans-serif;
    margin-top: 0;
    padding-top: 8px;
  }

  h3 {
    color: #252525;
    font: 700 12px/16px "Montserrat Bold", sans-serif;
    opacity: 0.87;
  }
}

//
.smiley-video-section h2 {
  margin-top: 48px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Monsterrat Bold", sans-serif;
  font-weight: 700;
  line-height: 1.35;
  @include font-size(2rem);
}
</style>
