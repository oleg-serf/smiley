<template>
  <div>
    <div class="container events_container">
      <div class="events__outer--layout">
        <BottomBorderedTitleWithSearch
          :title="'<h3><b>Upcoming</b> | Events</h3>'"
          :with-search="false"
          search-expandable
        ></BottomBorderedTitleWithSearch>
        <div class="d-flex ml-4 slide__btns">
          <span>
            <v-icon id="prevone1" medium color="black">
              fa fa-chevron-circle-left
            </v-icon>
          </span>
          <span class="ml-3">
            <v-icon id="nextone1" medium color="black">
              fa fa-chevron-circle-right
            </v-icon>
          </span>
        </div>
        <v-row class="mt-2">
          <Swiper class="events-gallery" :options="options">
            <SwiperSlide
              class="events_slide"
              v-for="event in upcommingEvents"
              :key="event.slug"
            >
              <v-col sm="12" md="12" class="py-0 events-gallery__col">
                <UpcomingEventCard
                  class="event-card mb-4"
                  :event="event"
                  button-name="REGISTER"
                ></UpcomingEventCard>
              </v-col>
            </SwiperSlide>
          </Swiper>
        </v-row>
      </div>
      <hr v-if="pastEvents.length > 0" class="mt-5" />
      <div class="events__outer--layout">
        <BottomBorderedTitleWithSearch
          :title="'<h3><b>Past</b> | Events</h3>'"
          :with-search="false"
          search-expandable
          :slides="true"
        ></BottomBorderedTitleWithSearch>
        <div class="d-flex ml-4 slide__btns">
          <span>
            <v-icon id="prevone" medium color="black">
              fa fa-chevron-circle-left
            </v-icon>
          </span>
          <span class="ml-3">
            <v-icon id="nextone" medium color="black">
              fa fa-chevron-circle-right
            </v-icon>
          </span>
        </div>
        <swiper
          style="max-width:1345px; display: flex;"
          ref="mySwiper"
          :options="swiperOption"
        >
          <swiper-slide
            v-for="index in Math.ceil(pastEvents.length / 9)"
            :key="index"
          >
            <v-row class="d-flex">
              <v-col
                class="d-flex flex-column event-outer-box"
                v-for="(item, i) in pastEvents.slice(
                  (index - 1) * 9,
                  index * 9
                )"
                :key="i"
                :cols="otherCols"
              >
                <div
                  class="d-flex flex-column justify-space-between eventCoverBox"
                >
                  <EventCard
                    class="event-card"
                    :event="item"
                    button-name="REGISTER"
                  ></EventCard>
                </div>
              </v-col>
              <hr />
            </v-row>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- <Subscribe></Subscribe> -->
  </div>
</template>

<script>
import axios from "@/axios-auth";
import router from "@/router";

import { VButton, VDropdown, VSearchLocation, VSwitch } from "@/components/app";
import EventCard from "@/components/cards/EventCard.vue";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import UpcomingEventCard from "@/components/cards/UpcomingEventCard.vue";

export default {
  name: "Talks",
  components: {
    VButton,
    BottomBorderedTitleWithSearch,
    VSearchLocation,
    VDropdown,
    VSwitch,
    EventCard,
    UpcomingEventCard,
  },
  data() {
    return {
      options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#nextone1",
          prevEl: "#prevone1",
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
          },
        },
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetweeen: 30,
        navigation: {
          nextEl: "#nextone",
          prevEl: "#prevone",
        },
      },
      goals: [],
      upcomingEvents: [],
      pastEvents: [],
    };
  },
  computed: {
    otherCols() {
      if (this.$vuetify.breakpoint.xs) {
        return "12";
      }
      return "4";
    },
  },
  mounted() {
    let start = new Date();
    let end = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    axios
      .get(
        "/events?date_start=" +
          Math.floor(start.getTime() / 1000) +
          "&date_end=" +
          Math.floor(end.getTime() / 1000)
      )
      .then((res) => {
        console.log("Upcomming events", res);
        this.upcommingEvents = [...res.data.events, ...res.data.events];
      })
      .catch((error) => console.error(error));

    start = new Date(new Date().setFullYear(new Date().getFullYear() - 5));
    end = new Date();

    axios
      .get(
        "/events?date_start=" +
          Math.floor(start.getTime() / 1000) +
          "&date_end=" +
          Math.floor(end.getTime() / 1000)
      )
      .then((res) => {
        this.pastEvents = [
          ...res.data.events,
          ...res.data.events,
          ...res.data.events,
        ];
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style lang="scss" scoped>
.events_container {
  margin-bottom: 100px;
}

.header {
  .header-video {
    border: none;
  }
}

.upcoming__outer {
  .outer__col_1 {
    border-left: 1px solid #ececec;
  }
}

.events__outer--layout {
  position: relative;
  .slide__btns {
    position: absolute;
    right: 0;
    top: 10px;
  }
}

.events_slide:nth-child(even) {
  .events-gallery__col {
    border-left: 1px solid #ececec;
  }
}

.filters {
  padding-top: 60px;
  padding-bottom: 50px;
}

.event-outer-box {
  border-bottom: 1px solid #ececec;
}
.event-outer-box:nth-child(even) {
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
}
.filters-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(10, 1fr);

  @include mdMax {
    padding-top: 24px;
  }

  @include smMax {
    display: block;

    .filter {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
}

// =-=-=-=-=-=
.filter-column {
  display: flex;
  flex-wrap: wrap;
}

.event-gallery__col:nth-child(2) {
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
}

.filter {
  &.filter--location {
    grid-column: 1 / span 2;

    @include xxlMax {
      grid-column: 1 / span 4;
    }
  }

  &.filter--radius {
    grid-column: 3 / span 2;

    @include xxlMax {
      grid-column: 5 / span 4;
    }
  }

  &.filter--timing {
    grid-column: 5 / span 2;

    @include xxlMax {
      order: 2;
      grid-column: 5 / span 4;
    }
  }

  &.filter--date {
    grid-column: 7 / span 2;

    @include xxlMax {
      order: 1;
      grid-column: 1 / span 4;
    }
  }

  &.filter--submit {
    @include xxlMax {
      grid-column: 9 / span 2;
    }
    @include smMax {
      .filter__label {
        display: none;
      }
    }
  }

  &.filter--reset {
    @include xxlMax {
      order: 3;
      grid-column: 9 / span 2;
    }

    @include smMax {
      .filter__label {
        display: none;
      }
    }
  }

  .filter__label {
    width: 100%;
    margin-bottom: 0px;
  }

  .filter__title {
    width: 100%;
    font-family: "Gotham Medium", sans-serif;
    font-size: 20px;
    margin-bottom: 6px;
  }

  .filter__input {
    position: relative;
    width: 100%;
  }

  .filter__input--icon {
    i {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: darken(#e5e5e5, 40%);
    }
  }

  .filter__input-date {
    padding: 0px 30px 0px 30px;
    line-height: 1;
    font-size: 18px;
    border: 1px solid #aca9a9;
    border-radius: 5px;
    width: 100%;
    background-color: #fff;
    display: block;
    height: 60px;

    &::v-deep input {
      border: none;
      box-shadow: none;
      height: 100%;
      width: 100%;
    }
  }

  .filter__button {
    font-family: "Gotham Medium", sans-serif;
    border: none;
    border-radius: 5px;
    line-height: 1;
    font-size: 18px;
    height: 60px;
    cursor: pointer;
    transition: background-color 0.4s;
    width: 100%;
    display: block;

    &-submit {
      background-color: #f4ed3b;
      font-family: "Gotham Medium", sans-serif;
    }

    &-reset {
      background-color: #e5e5e5;
    }
  }
}

.filter-toggle {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @include md {
    display: none;
  }

  .filter-toggle__title {
    font-family: "Gotham Medium", sans-serif;
    @include font-size(1.5rem);
    display: flex;
    align-items: center;
  }

  .filter-toggle__button-holder {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .filter-toggle__button {
    @include font-size(1.5rem);
    // -webkit-appearance: none;
    // -webkit-border-radius: 0px;
    background-color: #fff;
    border: 1px solid rgba(57, 57, 57, 0.5);
    padding: 1px 10px;
  }
}

.event-category {
  padding-bottom: 16px;
  border-bottom: 2px solid #ffe300;

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
  //grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);

  @include xlMax {
    grid-template-columns: repeat(2, 1fr);
  }

  @include lgMax {
    grid-template-columns: repeat(1, 1fr);
  }
}

.event__button {
  margin-top: 2rem;

  .event__button-link {
    display: block;
    color: black;
    width: 100%;
    height: 100%;
    line-height: 48px;

    &:hover {
      text-decoration: none;
    }
  }
}
hr {
  border: none;
  height: 1px;
  background: #ececec;
}
</style>
