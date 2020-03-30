<template>
  <div class="home">
    <hero
      video="https://new-smiley.s3.eu-west-2.amazonaws.com/pages/l_homepage_header.mp4"
      :link="'/talks'"
    >
      <slot>
        Helping You
        <br />Help Others
      </slot>
    </hero>

    <!-- News section -->
    <banner link="/news/category/all" color="#F36E24" background="/img/homepage/banner-news.jpg">
      <template v-slot:name>news</template>
      <template v-slot:title>POSITIVE JOURNALISM</template>
      <template
        v-slot:content
      >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</template>
      <template v-slot:button>learn more</template>
    </banner>

    <section class="news-grid container" v-if="newsList.length > 0">
      <article-item v-for="article in newsList" :key="article.slug" :information="article" />
    </section>

    <!-- Network banner -->
    <banner link="/add-organisation" color="#4696D2" v-if="!auth">
      <template v-slot:name>network</template>
      <template v-slot:title>Connect with changemakers</template>
      <template
        v-slot:content
      >Explore organisations, projects and members in our community - be inspired and take positive action.</template>
      <template v-slot:button>create profile</template>
    </banner>

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

    <banner link="/talks" color="#D12121" background="/img/homepage/banner-talks.jpg">
      <template v-slot:name>talks</template>
      <template v-slot:title>ACTION INSPIRED EVENTS</template>
      <template
        v-slot:content
      >Smiley Talks are free live events crafted to tackle social and environmental issues linked to the UN sustainable development goals 2020.</template>
      <template v-slot:button>read more</template>
    </banner>

    <section class="news-grid container" v-if="eventList.length > 0">
      <article-item
        v-for="event in eventList"
        :key="event.slug"
        :information="event"
        type="events"
      />
    </section>

    <!-- The Global Goals banner -->

    <banner link="/add-organisation" color="#4C9F38" background="/img/homepage/banner-goals.jpg">
      <template v-slot:title>Stronger together</template>
      <template v-slot:logo>
        <img src="/img/homepage/global-goals.png" style="width: 200px" />
      </template>
      <template
        v-slot:content
      >We believe that together anything is possible, The principles for our content events, strategic partnerships and values.</template>
      <template v-slot:button>learn more</template>
    </banner>

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
        <p>{{quote.content}}</p>
        <h3>{{quote.title}}</h3>
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
import ArticleItemBlock from "@/components/news/ArticleBlock.vue";
import VimeoVideo from "@/components/homepage/VimeoVideo.vue";

export default {
  name: "home",
  components: {
    Hero,
    ArticleItem,
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

      videos: [
        {
          vimeo_id: "401376963",
          title: "Builders at What's the Point of Education",
          description:
            "Equip young people with what they need to be happy and successful - Evelyn Haywood from Skill "
        },
        {
          vimeo_id: "386174750",
          title: "We are changing culture",
          description: "Jo Loughran at Let's Talk Mental Health"
        },
        {
          vimeo_id: "370887819",
          title: "We are not alone",
          description: "Georgia Dodsworth at Let's Talk Mental Health"
        }
      ],

      quote: {
        title: "",
        content: ""
      },

      homepagevideo: null,

      sections: [
        {
          title: "Organisations",
          link: "/organisations",
          description: "Text for example",
          image: "/img/homepage/homepage-organisations.jpg"
        },
        {
          title: "Projects",
          link: "/projects",
          description: "Text for example",
          image: "/img/homepage/homepage-projects.jpg"
        },
        {
          title: "Chatroom",
          link: "/chatroom",
          description: "Text for example",
          image: "/img/homepage/homepage-chatroom.jpg"
        }
      ]
    };
  },
  computed: {
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  methods: {
    compare(a, b, key) {
      // Use toUpperCase() to ignore character casing
      const key_a = a[key].toUpperCase();
      const key_b = b[key].toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }
  },
  mounted() {
    // Load page content
    // axios
    //   .get("/pages/new/1")
    //   .then(res => {
    //     console.log("new format", res);
    //   })
    //   .catch(error => console.log(error));
    console.log("---------");
    axios
      .get("/pages/1")
      .then(res => {
        console.log(res);
        this.eventList = res.data.future_events;

        this.newsList = res.data.latest_news;

        this.goals = res.data.goals[0].goals;

        /*
          Type 1 section -> simple text
          Type 2 section -> HTML (like for Events content)
          Type 3 section -> Video Vimeo ID (
        */

        // console.log(res.data);
        let quote = res.data.page.page_sections.filter(
          section => section.name == "quote_bottom"
        );

        // console.log(quote);
        quote[0].page_section_elements.forEach(item => {
          switch (item.name) {
            case "text":
              this.quote.content = item.content;
              break;
            case "sub_text":
              this.quote.title = item.content;
              break;

            default:
              break;
          }
        });
        // console.log(this.quote);

        let background = res.data.page.page_sections.filter(
          section => section.name == "header_video"
        );
        let homepagevideo = background[0].page_section_elements[0].content;

        if (window.innerWidth < 768) {
          this.homepagevideo =
            this.$settings.images_path.pages + "m_" + homepagevideo;
        } else {
          this.homepagevideo =
            this.$settings.images_path.pages + "l_" + homepagevideo;
        }

        // let videoTag = document.getElementById("background_video");
        // setTimeout(() => {
        //   videoTag.play();
        // }, 500);

        // Video Sections
        let video_section = res.data.page.page_sections.filter(section => {
          let allowed_names = ["left_bottom_video", "right_bottom_video"];
          if (allowed_names.includes(section.name)) return section;
        });
        let video_section_content = res.data.page.page_sections.filter(
          section => {
            let allowed_names = [
              "left_bottom_video_text",
              "right_bottom_video_text"
            ];
            if (allowed_names.includes(section.name)) return section;
          }
        );

        let videos = video_section.map((item, index) => {
          let video = { id: null, title: null, description: null, type: null };
          video.id = item.page_section_elements.find(
            elem => elem.name == "video_id"
          ).content;

          video.type = video_section[index].sub_type;

          video_section_content[index].page_section_elements.forEach(item => {
            if (item.name == "title") {
              video.title = item.content;
            } else if (item.name == "description") {
              video.description = item.content;
            }
          });

          return video;
        });

        // this.videos = videos;
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
