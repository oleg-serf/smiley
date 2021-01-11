<template>
  <div>
    <div class="container">
      <goals-banner
          :color="goal.colour"
          :background="getImage()"
          :name-length="goal.name ? goal.name.length : 20"
          :is_mobile="is_mobile"
      >
        <!-- <template v-slot:logo>
          <img src="/img/un-goals-white.png" style="width: 107px"/>
        </template>-->

        <template v-slot:prefix>
            {{ goal.prefix }}
        </template>
        <template v-slot:name >
            {{ goal.name }}
        </template>
      </goals-banner>
    </div>

    <div class="container">
      <section class="goal-description">
        <section class="goal-description__content">
          <!-- <div class="goal-description__content-block goal-description__content-text-holder" v-html="goal.description">
            </div>
            <div class="goal-description__content-block goal-description__content-flex-holder">
              <div class="goal-description__content-block__inner" :style="{border: '3px solid ' + goal.colour}"
                    v-html="goal.list"></div>
            </div>-->
          <div class="goal-description__content-title">
            <p class="text-bold">Goal {{goal.prefix}}: {{ goal.name }}</p>
          </div>

          <div class="goal-description__content-description" v-html="goal.description">
          </div>

          <div class="goal-description__content__actions">
            <!--   SOCIAL_NETWORK_SHARE COMPONENT   -->
            <SocialNetworkShare :title="goal.name"></SocialNetworkShare>
            <VButton
                class="colored-button"
                shape="round"
                size="small"
            >
              <a
                  class="event__button-link"
                  href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
              >Learn More</a>
            </VButton>
            <VButton
                class="colored-button"
                shape="round"
                size="small"
            >
              <router-link
                  class="event__button-link"
                  :to="'#'"
              >How to help</router-link>
            </VButton>
          </div>
        </section>
        <section
            class="section"
            v-if="organisations.length > 0"
            id="section-organisations"
        >
          <BottomBorderedTitleWithSearch
              title="<b>Organisations to support</b>"
              :with-search="false"
          ></BottomBorderedTitleWithSearch>
          <section class="goals-grid">
            <div class="goals-grid__grid">
              <div class="goals-grid__item" v-for="organisation in organisations"
                   :key="'organisation-'+organisation.slug">
                <router-link :to="goalOrganisationLink(organisation)">
                  <div v-if="organisation.logo != null"
                       :style="{background: `url(${$settings.images_path.organisations + 's_' + organisation.logo})` + 'no-repeat center', 'background-size': 'contain'}"
                  ></div>
                </router-link>
              </div>
            </div>
          </section>
          <div class="smiley-pagination" v-if="organisationsPagination > 1 && false">
            <paginate
                :page-count="organisationsPagination"
                :click-handler="paginateOrganisations"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :prev-class="'smiley-pagination-back'"
                :next-class="'smiley-pagination-next'"
                :container-class="'app-pagination'"
            >
              <span slot="breakViewContent">...</span>
            </paginate>
          </div>
        </section>
      </section>

      <!--   NEWS   -->
      <section class="content-block">
        <BottomBorderedTitleWithSearch
            :title="getTitle('News')"
            :with-search="true"
            :hover-effect="true"
            :hover-color="'yellow'"
        ></BottomBorderedTitleWithSearch>
      </section>
      <section class="section" v-if="posts.length > 0" id="section-news">
        <!-- <h2 class="section__title">News</h2>-->
        <swiper
            ref="newsSwiper"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            v-if="is_mobile"
        >
          <swiper-slide v-for="post in posts" :key="'post-swiper-'+post.slug">
            <news-card :article="post"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="grid grid--news" v-else>
          <news-card v-for="post in posts" :key="'post-'+post.slug" :article="post"/>
        </div>
        <div class="smiley-pagination" v-if="postsPagination > 1">
          <paginate
              :page-count="postsPagination"
              :click-handler="paginateNews"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :prev-class="'smiley-pagination-back'"
              :next-class="'smiley-pagination-next'"
              :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>

      <!--   EVENTS   -->
      <section class="content-block">
        <BottomBorderedTitleWithSearch
            :title="getTitle('Events')"
            :with-search="true"
            :hover-effect="true"
            :hover-color="'yellow'"
        ></BottomBorderedTitleWithSearch>
      </section>
      <section class="section" v-if="events.length > 0" id="section-events">
        <!-- <h2 class="section__title">Events</h2>-->
        <swiper
            ref="eventsSwiper"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            v-if="is_mobile"
        >
          <swiper-slide v-for="event in events" :key="'event-swiper-'+event.slug">
            <event-card :event="event"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="grid grid--events" v-else>
          <event-card
              v-for="event in events"
              :key="'event-'+event.slug"
              :event="event"
              :past="event.past"
          />
        </div>
        <div class="smiley-pagination" v-if="eventsPagination > 1">
          <paginate
              :page-count="eventsPagination"
              :click-handler="paginateEvents"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :prev-class="'smiley-pagination-back'"
              :next-class="'smiley-pagination-next'"
              :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>

      <!--   INTERVIEWS   -->
      <!-- <section class="content-block">
        <BottomBorderedTitleWithSearch
            :title="getTitle('Interviews')"
            :with-search="true"
            :hover-effect="true"
            :hover-color="'yellow'"
        ></BottomBorderedTitleWithSearch>
      </section>
      <section class="section" v-if="events.length > 0" id="section-interviews">
        <div class="grid grid--events">
          <template>
            <interviews-card
                v-for="interview in posts"
                :key="'event-'+interview.slug"
                :interview="interview"
                :past="interview.past"
            />
          </template>
        </div>
      </section> -->

      <!--   PROJECTS   -->
      <section class="content-block">
        <BottomBorderedTitleWithSearch
            :title="getTitle('Projects')"
            :with-search="true"
            :hover-effect="true"
            :hover-color="'yellow'"
        ></BottomBorderedTitleWithSearch>
      </section>
      <section class="section" v-if="events.length > 0" id="section-projects">
        <swiper
            ref="projectsSwiper"
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            v-if="is_mobile"
        >
          <swiper-slide v-for="project in projects" :key="'project-swiper-'+project.slug">
            <project-card :project="project"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="grid grid--events" v-else>
          <project-card-new
              v-for="project in projects"
              :key="'project-'+project.slug"
              :project="project"
          />
        </div>
        <div class="smiley-pagination" v-if="projectsPagination > 1">
          <paginate
              :page-count="projectsPagination"
              :click-handler="paginateProjects"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :prev-class="'smiley-pagination-back'"
              :next-class="'smiley-pagination-next'"
              :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>
    </div>
    <Subscribe/>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

import GoalsBanner from "@/components/GoalsBanner";
import SocialNetworkShare from "@/components/SocialNetworkShare";
import VButton from "@/components/app/VButton";

import NewsCard from "@/components/cards/NewsCard";
import EventCard from "@/components/cards/EventCard";
import ProjectCard from "@/components/cards/ProjectCard";
import OrganisationCard from "@/components/cards/OrganisationCard";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import ProjectCardNew from "@/components/cards/ProjectCardNew";
import Subscribe from '@/components/forms/Subscribe.vue';
import InterviewsCard from "@/components/cards/InterviewsCard";

export default {
  name: "GoalSinglePage",
  components: {
    InterviewsCard,
    Subscribe,
    ProjectCardNew,
    BottomBorderedTitleWithSearch,
    VButton,
    SocialNetworkShare,
    GoalsBanner,
    NewsCard,
    EventCard,
    ProjectCard,
    OrganisationCard,
  },
  data() {
    return {
      goal: {},

      goals: [],

      title: "",

      is_mobile: false,

      posts: [],
      postsPagination: 0,

      events: [],
      eventsPagination: 0,

      projects: [],
      projectsPagination: 0,

      organisations: [],
      organisationsPagination: 0,

      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 4,
        spaceBetween: 15,
        mousewheel: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            centeredSlides: true
          },
          480: {
            slidesPerView: 1.3
          },
          640: {
            slidesPerView: 1.5
          }
        }
      },
      organisationsSwiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 4,
        spaceBetween: 15,
        mousewheel: true,
        breakpoints: {
          320: {
            slidesPerView: 1.15,
            centeredSlides: true
          },
          480: {
            slidesPerView: 2.15
          }
        }
      }
    };
  },
  methods: {
    getImage() {
      const prefix = this.goal.prefix.length > 1 ? this.goal.prefix : '0' + this.goal.prefix;
      return `/img/goals/UN_${prefix}.svg`
    },
    getTitle(title) {
      return `<b> ${this.goal.name} </b> | ${title}`;
    },
    goalOrganisationLink(organisation) {
      return {
        name: organisation.admin_created ? 'organisation-by-smiley' : 'organisation',
        params: {
          slug: organisation.slug
        }
      }
    },
    goToCategory(event) {
      router.push({
        name: "news-category-item",
        params: {slug: event.target.value}
      });
    },
    paginateNews(pageNum) {
      axios
          .post("/goals/" + this.$route.params.slug + "?news-page=" + pageNum)
          .then(res => {
            this.posts = res.data.posts;
            this.postsPagination = res.data.posts_pages_count;

            let sectionOffset = document.getElementById("section-news").offsetTop;
            window.scrollTo({
              top: sectionOffset - 12,
              behavior: "smooth"
            });
          })
          .catch(err => {
            console.error("error", err);
          });
      // console.log(pageNum);
    },
    paginateEvents(pageNum) {
      axios
          .post("/goals/" + this.$route.params.slug + "?events-page=" + pageNum)
          .then(res => {
            console.log("Events", res.data.events);
            this.events = res.data.events;
            this.eventsPagination = res.data.events_pages_count;

            let sectionOffset = document.getElementById("section-events")
                .offsetTop;
            window.scrollTo({
              top: sectionOffset - 12,
              behavior: "smooth"
            });
          })
          .catch(err => {
            console.error("error", err);
          });
      console.log(pageNum);
    },
    paginateProjects(pageNum) {
      axios
          .post("/goals/" + this.$route.params.slug + "?projects-page=" + pageNum)
          .then(res => {
            console.log("Projects", res.data.events);
            this.events = res.data.events;
            this.eventsPagination = res.data.events_pages_count;

            let sectionOffset = document.getElementById("section-projects")
                .offsetTop;
            window.scrollTo({
              top: sectionOffset - 12,
              behavior: "smooth"
            });
          })
          .catch(err => {
            console.error("error", err);
          });
      console.log(pageNum);
    },
    paginateOrganisations(pageNum) {
      axios
          .post(
              "/goals/" + this.$route.params.slug + "?organisations-page=" + pageNum + "/admin-created"
          )
          .then(res => {
            this.organisations = res.data.organisations;
            this.organisationsPagination = res.data.organisations_pages_count;

            let sectionOffset = document.getElementById("section-organisations")
                .offsetTop;
            window.scrollTo({
              top: sectionOffset - 12,
              behavior: "smooth"
            });
          })
          .catch(err => {
            console.error("error", err);
          });
      console.log(pageNum);
    },
    paginateUsers(pageNum) {
      axios
          .post("/goals/" + this.$route.params.slug + "?users-page=" + pageNum)
          .then(res => {
            console.log(res.data.users);
            this.users = res.data.users;
            this.usersPagination = res.data.users_pages_count;

            let sectionOffset = document.getElementById("section-users")
                .offsetTop;
            window.scrollTo({
              top: sectionOffset - 12,
              behavior: "smooth"
            });
          })
          .catch(err => {
            console.error("error", err);
          });
      console.log(pageNum);
    },
    handleResize() {
      this.is_mobile = window.innerWidth >= 768 ? false : true;
      if (window.innerWidth >= 768) {
        this.is_shown = true;
      }
    }
  },
  mounted() {
    let slug = this.$route.params.slug;

    axios
        .get("/goals/" + slug)
        .then(res => {
          console.log("Goal page", res);

          this.goal = res.data.goal;

          const metaPayload = {
            meta: res.data.meta,
            title: res.data.goal.name
          }
          this.$store.dispatch('meta/setMeta', metaPayload);

          this.posts = res.data.news;
          this.postsPagination = res.data.posts_pages_count;

          this.events = res.data.events;
          this.eventsPagination = res.data.events_pages_count;

          this.projects = res.data.projects;
          this.projectsPagination = res.data.projects_pages_count;

          this.organisations = res.data.organisations;
          this.organisationsPagination = res.data.organisations_pages_count;

          this.$router.currentRoute.meta.title = this.goal.name;

        })
        .catch(error => console.log(error));

    // axios.get("/goals").then(res => {
    //   this.goals = res.data.goals;
    // });
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_goals-grid";

.section {
  margin-bottom: 50px;

  &__title {
    font-family: "Montserrat SemiBold";
    @include font-size(2rem);
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
}

.text-bold {
  color: #000000 !important;
  font-weight: bold !important;
  text-decoration: none !important;
  font-family: "Gotham Bold", sans-serif !important;
}

#section-organisations {
  margin-bottom: 0px;
}

.goal-description {
  margin-top: 30px;
  margin-bottom: 4rem;

  .goal-description__content {
    color: #000;
    font-size: 1rem;

    &__actions {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      margin-top: 20px;

      a {
        text-decoration: none;
        color: white
      }

      .colored-button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        margin: auto 10px;

        a {
          color: black;
        }
      }
    }
  }
}

.goals-grid {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 10rem;

  .goals-grid__grid {
    height: 100%;
    grid-template-columns: repeat(8, 1fr);

    @include xxlMax {
      grid-template-columns: repeat(8, 1fr);
    }
    @include lgMax {
      grid-template-columns: repeat(6, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(5, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .goals-grid__item {
    height: 100%;
    border: 1px solid #c7c7c7;
    line-height: 1;

    a {
      height: 100%;
      font-size: 0px;
      display: block;

      div {
        height: 100%;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}

.grid {
  &--news,
  &--events,
  &--projects {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &--organisations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

/* News Section Title with Read More button */
.news-category {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 16px;
  padding-bottom: 16px;

  .news-category__title {
    @include font-size(2rem);
    font-family: "Montserrat Bold", sans-serif;
    color: #393939;
    line-height: 1;
    margin: 0px;
  }

  .news-category__dropdown {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 46px;
    background-color: #fff;
    border: 1px solid #e0e6eb !important;
    padding-left: 20px;
    padding-right: 20px;

    font-family: "Montserrat Regular", sans-serif;

    @include mdMax {
      width: 100%;
      margin-top: 15px;
    }
  }

  @include mdMax {
    flex-direction: column;
  }
}
</style>
