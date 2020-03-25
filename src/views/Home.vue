<template>
  <div class="home">
    <hero :video="homepagevideo" :link="'/talks'">
      <slot>
        Helping You
        <br />Help Others
      </slot>
    </hero>

    <banner link="/news/category/all">
      <template v-slot:name>news</template>
      <template v-slot:title>join the movement</template>
      <template
        v-slot:content
      >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</template>
      <template v-slot:button>read more</template>
    </banner>

    <section class="news-grid container" v-if="newsList.length > 0">
      <div v-for="newsItem in newsList" :key="newsItem.id+newsItem.title" class="article-item">
        <div class="smiley-img-wrap">
          <div class="smiley-img">
            <router-link :to="'/news/' + newsItem.slug">
              <img
                :src="$settings.images_path.news  +'m_'+newsItem.cover_image"
                :alt="newsItem.title"
                :title="newsItem.title"
              />
            </router-link>
          </div>
        </div>
        <div class="article-descr">
          <router-link :to="'/news/' + newsItem.slug" class="article-title">{{ newsItem.title }}</router-link>
          <div class="article-subtitle">{{ newsItem.description }}</div>
        </div>
      </div>
    </section>

    <banner link="/add-organisation" color="#4696d2">
      <template v-slot:name>network</template>
      <template v-slot:title>join the movement</template>
      <template
        v-slot:content
      >Smiley News brings you inspiring stories of people and communities working together to make the world a better place.</template>
      <template v-slot:button>create profile</template>
    </banner>

    <banner link="/talks" color="#d12121">
      <template v-slot:name>talks</template>
      <template v-slot:title>join the movement</template>
      <template
        v-slot:content
      >Smiley Talks are free live events crafted to tackle social and environmental issues linked to the UN sustainable development goals 2020.</template>
      <template v-slot:button>read more</template>
    </banner>

    <section class="news-grid container" v-if="eventList.length > 0">
      <div v-for="event in eventList" :key="event.id+event.title" class="article-item">
        <router-link :to="'/events/' + event.slug">
          <div class="smiley-img-wrap">
            <div class="smiley-img">
              <img
                :src="$settings.images_path.events  +'m_'+event.cover_image"
                :alt="event.title"
                :title="event.title"
              />
            </div>
          </div>
        </router-link>
        <div class="article-descr">
          <router-link class="article-title" :to="'/events/' + event.slug">{{ event.title }}</router-link>
          <div class="article-date-location">
            <div
              class="article-date"
            >{{ event.date | formatDate('nl', {day:"2-digit",month:"2-digit",year:"numeric"}) }}</div>
            <div class="article-location">{{event.location}}</div>
          </div>
          <div class="article-subtitle">{{ event.short_description }}</div>
        </div>
      </div>
    </section>

    <section class="goals-grid container">
      <h2 class="goals-grid__title">Browse by goal</h2>
      <div class="goals-grid__grid">
        <div class="goals-grid__item" v-for="goal in goals" :key="goal.name+goal.id">
          <router-link :to="'/news-events/' + goal.slug">
            <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
          </router-link>
        </div>
      </div>
    </section>

    <section class="smiley-video-section">
      <div class="container">
        <h2>Featured Interviews</h2>
        <div class="video-content">
          <div class="video-content-item" v-for="video in videos" :key="video.id">
            <div class="video-container">
              <iframe
                :src="'https://player.vimeo.com/video/'+video.id+'?title=0&amp;byline=0&amp;portrait=0'"
                frameborder="0"
                allow="fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-descr">
              <div class="video-content-title">{{video.title}}</div>
              <div class="video-content-subtitle">{{video.description}}</div>
            </div>
          </div>
        </div>

        <div class="comment-block">
          <p>{{quote.content}}</p>
          <h3>{{quote.title}}</h3>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
// Components
import Footer from "@/components/Footer.vue";
import Hero from "@/components/homepage/Hero.vue";
import Banner from "@/components/Banner.vue";
// Third party
import { vueVimeoPlayer } from "vue-vimeo-player";

export default {
  name: "home",
  components: {
    Hero,
    Banner,
    Footer,
    vueVimeoPlayer
  },
  data() {
    return {
      eventList: [],
      newsList: [],

      goals: [],

      videos: [],

      quote: {
        title: "",
        content: ""
      },

      homepagevideo: null
    };
  },
  methods: {},
  mounted() {
    // Load page content
    axios
      .get("/pages/new/1")
      .then(res => {
        console.log("new format", res);
      })
      .catch(error => console.log(error));
    console.log("---------");
    axios
      .get("/pages/1")
      .then(res => {
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

        let videoTag = document.getElementById("background_video");
        setTimeout(() => {
          videoTag.play();
        }, 500);

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

        this.videos = videos;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_homepage-news-item";
@import "@/scss/blocks/_homepage-news-grid";
//
@import "@/scss/blocks/homepage/_goals-grid";
//
@import "@/scss/sections/_homepage-header";
@import "@/scss/components/_article-item"; // remove or not?
@import "@/scss/sections/_smiley-talks"; // moved to grid`
@import "@/scss/sections/_smiley-network";
@import "@/scss/sections/_smiley-news"; // moved to grid
@import "@/scss/sections/_homepage-network";
@import "@/scss/sections/_homepage-thematic-icons";
@import "@/scss/sections/_smiley-video-section";
</style>
