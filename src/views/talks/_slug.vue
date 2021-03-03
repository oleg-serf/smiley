<template>
  <div class="event-section">
    <div class="event-title">
      <BottomBorderedTitleWithSearch
        :title="`<b style='font-size:40px'>${post.title}</b>`"
        :with-search="false"
      ></BottomBorderedTitleWithSearch>
      <div style="position: relative;">
        <template>
          <ButtonArrow
            :id="'news-gallery-button-prev-' + id"
            class="news-gallery-button news-gallery-button-prev"
          />
          <Swiper class="news-gallery" :key="key" :options="options">
            <SwiperSlide
              :v-if="post.videos.length>0"
              v-for="video in post.videos"
              :key="`testEvent-${video.video_id}`"
            >
              <iframe
                class="event-title__video"
                width="100%"
                height="570"
                frameborder="0"
                allow="fullscreen"
                allowfullscreen
                :src="`https://player.vimeo.com/video/${video.video_id}`"
              >
              </iframe>
            </SwiperSlide>
            <SwiperSlide key="cover_image">
              <img
                :src="$settings.images_path.events + 'l_' + post.cover_image"
                :alt="post.title"
                :title="post.title"
                class="event-title__video"
              />
            </SwiperSlide>
          </Swiper>
          <ButtonArrow
            :id="'news-gallery-button-next-' + id"
            class="news-gallery-button news-gallery-button-next"
          />
        </template>
      </div>
      <p class="event-title__video-description">
        {{post.past ? "PAST EVENT":"UPCOMING EVENT"}} | 
        {{post.date | formatDate('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}) | stripComas}}
      </p>
      <div class="event-title__link-actions">
        <div class="event-title__link-actions__un-goals">
          <VButton
              class="event-title__link-actions__icon-btn"
              shape="round"
              size="small"
              color="red"
          >
            <router-link
                class="event__button-link"
                :to="'#'"
            ><img src="/img/goals/goals-1.svg" alt="goal"/></router-link>
          </VButton>
          <VButton
              class="event-title__link-actions__icon-btn"
              shape="round"
              size="small"
              color="orange"
          >
            <router-link
                class="event__button-link"
                :to="'#'"
            ><img src="/img/goals/goals-2.svg" alt="goal"/></router-link>
          </VButton>
          <p><b>{{ unGoalsText }}</b></p>
        </div>
        
        <SocialNetworkShare :title="post.slug"></SocialNetworkShare>
        
        <VButton
            class="event-title__link-actions__register-button mr-2"
            shape="round"
            size="small"
        >
          <router-link
              class="event__button-link"
              :to="'#'">Register
          </router-link>
        </VButton>
        <!--
        <VButton
            class="event-title__link-actions__register-button mr-2"
            shape="round"
            size="small"
        >
          <router-link
              class="event__button-link"
              :to="'#'">Donate
          </router-link>
        </VButton>
        <VButton
            class="event-title__link-actions__register-button mr-2"
            shape="round"
            size="small"
        >
          <router-link
              class="event__button-link"
              :to="'#'">Volunteer
          </router-link>
        </VButton>
        -->
      </div>
      <div class="event-title__paragraph-section">
        <p class="event-title__paragraph-section__paragraph">
          {{ description }}
        </p>
        <!-- <p class="event-title__paragraph-section__paragraph">
        </p> -->
      </div>
      <div class="speakers-grid">
        <div v-for="(user, index) in post.speakers" :key="index">
          <PeopleSection
            :profilePicture="$settings.images_path.speakers + 's_' + user.image"
            :userName="user.full_name"
            :partnership="user.biography"
            :role="user.role"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <section class="goals-grid">
        <div class="goals-grid__grid">
          <div class="goals-grid__item" v-for="(partner, i) in post.partners" :key="partner.name+i">
            <a :href="partner.website" target="_blank">
              <div :style="{background: `url(${$settings.images_path.partners + 's_' + partner.image})` + 'no-repeat center', 'background-size': 'cover'}"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
<!--  SPEAKER INTERVIEWS  -->
    <section v-if="interviews.length>0">
      <BottomBorderedTitleWithSearch
          :title="'<b>Speaker Interviews</b>'"
          :with-search="false"
      ></BottomBorderedTitleWithSearch>
      <InterviewsGallery 
          :interviews="past"
          image-type="events"
          button-text="Speaker Bio"
      ></InterviewsGallery>
    </section>

    <!-- Comments Section -->
    <!-- <div class="comments-section">
      <CommentsSection></CommentsSection>
    </div> -->

    <!--   EVENTS   -->
    <section v-if="related_events.length>0">
      <BottomBorderedTitleWithSearch
          :title="'<b>Past | Related</b> Events'"
          :with-search="true"
      ></BottomBorderedTitleWithSearch>
      <EventsGallery 
          :events="related_events"
          button-text="Read More"
      ></EventsGallery>
    </section>

    <Subscribe/>
  </div>
</template>

<script>
import axios from "@/axios-auth";
import EventCard from "@/components/cards/EventCard.vue";
import {VSearchLocation, VDropdown, VSwitch, VButton} from "@/components/app";
import SocialNetworkShare from "@/components/SocialNetworkShare";
import PeopleSection from "@/components/People.vue";
import Subscribe from '@/components/forms/Subscribe.vue';
import CommentsSection from "@/components/CommentsSection";
import ButtonArrow from "@/components/buttons/ButtonArrow";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import InterviewsGallery from "@/components/interviews/InterviewsGallery";
import EventsGallery from "@/components/events/EventsGallery";

export default {
  name: "Talks",
  components: {
    InterviewsGallery,
    EventsGallery,
    BottomBorderedTitleWithSearch,
    ButtonArrow,
    VSearchLocation,
    SocialNetworkShare,
    VDropdown,
    VSwitch,
    VButton,
    EventCard,
    PeopleSection,
    Subscribe,
    CommentsSection
  },
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
      description: "",
      id: 0,
      key: 0,
      options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 25,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        breakpoints: {
          900: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1440: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
      },
      related_events: [],
      interviews: [],
      peoples: [
        {
          profilePicture: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          userName: 'John Wick',
          partnership: 'Partnerships Manager at Plastic Oceans UK Partnerships',
          role: 'Manager at Plastic Oceans UK'
        },
        {
          profilePicture: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          userName: 'John Wick',
          partnership: 'Partnerships Manager at Plastic Oceans UK Partnerships',
          role: 'Manager at Plastic Oceans UK'
        },
        {
          profilePicture: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          userName: 'John Wick',
          partnership: 'Partnerships Manager at Plastic Oceans UK Partnerships',
          role: 'Manager at Plastic Oceans UK'
        },
        {
          profilePicture: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          userName: 'John Wick',
          partnership: 'Partnerships Manager at Plastic Oceans UK Partnerships',
          role: 'Manager at Plastic Oceans UK'
        }
      ],
      unGoalsText: '| UN Goals',
      shareText: '< share',
      filter: {
        city: null,
        radius: [
          {
            value: 2,
            text: "2 miles",
          },
          {
            value: 5,
            text: "5 miles",
          },
          {
            value: 10,
            text: "10 miles",
          },
          {
            value: 25,
            text: "25 miles",
          },
          {
            value: 50,
            text: "50 miles",
          },
          {
            value: 100,
            text: "100 miles",
          },
          {
            value: 0,
            text: "Any distance",
          },
        ],
        country: "London, GB",
      },
      filterQuery: {
        city: null,
        country: null,
        latitude: null,
        longitude: null,
        radius: 0,
        timing: "Upcoming",
        date: {
          end: new Date(),
          start: new Date(),
        },
      },
    };
  },
  methods: {
    handleResize() {
      this.is_mobile = window.innerWidth >= 768 ? false : true;
      if (window.innerWidth >= 768) {
        this.is_shown = true;
      }
    },
    toggleFilterMenu() {
      this.is_shown = !this.is_shown;
    },
    getAddressData: function (data) {
      data.address_components.forEach((prop) => {
        if (prop.types.includes("locality")) {
          this.filterQuery.city = prop.long_name;
        }
        if (prop.types.includes("country")) {
          this.filterQuery.country = prop.long_name;
        }
      });
      this.filterQuery.latitude = data.geometry.location.lat();
      this.filterQuery.longitude = data.geometry.location.lng();
    },
    sendFilterData() {
      // let filter = this.filterQuery;
      // // console.log(this.filterQuery);
      // filter.date.start = Math.floor(
      //   new Date(filter.date.start).getTime() / 1000
      // );
      // filter.date.end = Math.floor(new Date(filter.date.end).getTime() / 1000);
      // console.log(filter);
      this.$swal({text: "This feature will work soon"});
    },
    loadEvents(page) {
      axios
          .get("/events?page=" + page)
          .then((res) => {
            this.events = res.data.events;
          })
          .catch((error) => console.error(error));
    },
    loadPastEvents(page) {
      axios
          .get("/events/past?page=" + page)
          .then((res) => {
            this.past = res.data.events;
          })
          .catch((error) => console.error(error));
    },
  },
  mounted() {
    axios
        .get("/events/" + this.$route.params.slug)
        .then((res) => {
          this.post = res.data.event;
          this.description = res.data.meta.description;
          this.related_events = res.data.related_events;

          const metaPayload = {
            meta: res.data.meta,
            title: res.data.event.title,
          };
          this.$store.dispatch("meta/setMeta", metaPayload);
          this.$router.currentRoute.meta.title = this.post.title;
        })
        .catch((error) => console.log(error));
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.id = this._uid;
    this.options.navigation = {
      nextEl: `#news-gallery-button-next-${this.id}`,
      prevEl: `#news-gallery-button-prev-${this.id}`,
    };
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_goals-grid";
.grid {
  &--events {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 5rem;

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.comments-section {
  margin-bottom: 1rem;
}
.goals-grid {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 4.8rem;

  .goals-grid__grid {
    height: 100%;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 20px;

    @include xxlMax {
      grid-template-columns: repeat(10, 1fr);
    }
    @include lgMax {
      grid-template-columns: repeat(8, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(7, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  .goals-grid__item {
    height: 100%;
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

.speakers-grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.news-gallery {
  padding: 10px 0;
}

.news-gallery-button {
  position: absolute;
  cursor: pointer;
  z-index: 5;
  top: 200px;
}

.news-gallery-button-prev {
  @include custom-max-width(1600px) {
    left: -100px;
    top: 250px;
    opacity: 0.8;
  }

  left: -80px;
}

.news-gallery-button-next {
  @include custom-max-width(1600px) {
    right: -100px;
    top: 250px;
    opacity: 0.8;
  }

  right: -80px;
  transform: rotate(180deg);
}

.event-section {
  max-width: 1300px;
  margin: 0 auto;
}

.event-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  &__video {
    border: none;
    width: 100%;
    height: 570px;
    object-fit: contain;
  }

  &__video-description {
    color: red;
    font-weight: 700;
    margin-top: 20px;
    font-size: 24px;
    font-family: 'Gotham Light', sans-serif;
  }

  &__link-actions {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    font-family: 'Gotham Light', sans-serif;
    font-size: 24px;
    margin: 20px 0;

    a {
      text-decoration: none;
      color: white
    }

    &__un-goals {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 10px;

      p {
        margin: 0;
      }
    }

    &__register-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 700;

      a {
        color: black;
      }
    }

    &__icon-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      margin: auto 0.5rem;
      width: 25px;
      height: 23px;
      padding: 0;
    }
  }

  &__paragraph-section {
    &__paragraph {
      font-family: 'Gotham Book', sans-serif;
      font-size: 22px;
    }
  }

  &__people-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }
}

.event-category {
  padding: 16px 0;
  border-bottom: 2px solid #ffe300;
  display: flex;

  margin: 70px 0;
  /* --------------- ------------------ */
  .event-category__title {
    color: black;
    font-family: "Gotham Light", sans-serif;
    font-size: 30px;
    line-height: 40px;

    b {
      font-family: "Gotham Bold", sans-serif;
    }
  }
}

.event-grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 100px 50px;
}
</style>
