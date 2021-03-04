<template>
  <div>
    <hero video="https://player.vimeo.com/video/494083042?background=1&byline=0&title=0"
          :link="'/our-story'" type="iframe">
      <template v-slot:title>
        Creating <span style="color: #FFE300">positive</span> impact
        <br>through journalism
      </template>
      <template v-slot:subtitle>
        Join our movement to create a happier,
        <br/>more equal and sustainable world
      </template>
    </hero>
    <div class="filters">
      <div class="container filter-toggle">
        <div class="filter-toggle__title">Filter</div>
        <div class="filter-toggle__button-holder">
          <button
              type="button"
              class="filter-toggle__button"
              @click.prevent="toggleFilterMenu"
          >
            <i class="fa fa-sliders"></i>
          </button>
        </div>
      </div>
      <form
          class="container"
          v-show="is_shown"
          @submit.prevent="sendFilterData"
          @reset.prevent="resetFilterData"
      >
        <div class="filters-container">
          <!-- <div class="filter-column filter filter--location">
            <label class="filter__label" for="inputLocation">
              <div class="filter__title">Location</div>
            </label>

            <VSearchLocation
                id="inputLocation"
                @place_changed="getAddressData"
            ></VSearchLocation>
          </div>
          <div class="filter-column filter filter--radius">
            <label class="filter__label" for="inputRadius">
              <div class="filter__title">Radius</div>
            </label>

            <VDropdown
                id="inputRadius"
                :options="filter.radius"
                v-model="filterQuery.radius"
            ></VDropdown>
          </div> -->
          <div class="filter-column filter filter--timing">
            <div class="filter__label">
              <div class="filter__title">Timing</div>
            </div>

            <VSwitch
                name="timing"
                left="Upcoming"
                right="Past"
                v-model="timing"
                @input="onChangeTiming"
            >
            </VSwitch>
          </div>
          <div class="filter-column filter filter--date">
            <div class="filter__label">
              <div class="filter__title">Dates</div>
            </div>

            <div class="filter__input filter__input--icon">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <date-picker
                  v-model="filterQuery.date"
                  mode="range"
                  id="inputDate"
                  class="filter__input-date"
                  color="red"
                  @input="onDateChange()"
              />
            </div>
          </div>
          <div class="filter-column filter filter--submit">
            <div class="filter__label">
              <div class="filter__title">
                <br/>
              </div>
            </div>
            <button type="submit" class="filter__button filter__button-submit">
              Apply
            </button>
          </div>
          <div class="filter-column filter filter--reset">
            <div class="filter__label">
              <div class="filter__title">
                <br/>
              </div>
            </div>
            <button type="reset" class="filter__button filter__button-reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
    <template v-if="events == null">
      <div class="container events_container">
        <BottomBorderedTitleWithSearch
          :title="'<h3><b>Upcomming</b> | Events</h3>'"
          :with-search="true"
          search-expandable
        ></BottomBorderedTitleWithSearch>
        <div class="event-grid">
          <EventCard
            class="event-card"
            v-for="(event, key) in upcomming_events"
            :key="'event-card-' + key"
            :event="event"
            button-name="REGISTER"
          ></EventCard>
        </div>
      </div>
      <div class="container events_container">
        <BottomBorderedTitleWithSearch
          :title="'<h3><b>Past</b> | Events</h3>'"
          :with-search="true"
          search-expandable
        ></BottomBorderedTitleWithSearch>
        <div class="event-grid">
          <EventCard
            class="event-card"
            v-for="(event, key) in past_events"
            :key="'event-card-' + key"
            :event="event"
            button-name="REGISTER"
          ></EventCard>
        </div>
      </div>
    </template>

    <div v-else class="container events_container">
      <BottomBorderedTitleWithSearch
        :title="'<h3><b>Related</b> | Events</h3>'"
        :with-search="true"
        search-expandable
      ></BottomBorderedTitleWithSearch>
      <div class="event-grid">
        <EventCard
          class="event-card"
          v-for="(event, key) in events"
          :key="'event-card-' + key"
          :event="event"
          button-name="REGISTER"
        ></EventCard>
      </div>
    </div>

    <Subscribe></Subscribe>
  </div>
</template>

<script>
import axios from "@/axios-auth";

import EventCard from "@/components/cards/EventCard.vue";
import Hero from "@/components/homepage/Hero.vue";
import {VButton, VDropdown, VSearchLocation, VSwitch} from "@/components/app";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import Subscribe from "@/components/forms/Subscribe";
import router from "@/router";

export default {
  name: "Talks",
  components: {
    Hero,
    Subscribe,
    VButton,
    BottomBorderedTitleWithSearch,
    VSearchLocation,
    VDropdown,
    VSwitch,
    EventCard,
  },
  data() {
    return {
      goals: [],
      events: [],
      upcomming_events: [],
      past_events: [],
      // events_pages: 0,
      // past_pages: 0,
      // is_mobile: false,
      // is_shown: false,
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
        date: {
          end: new Date(),
          start: new Date(),
        },
      },
      timing: "",
    };
  },
  methods: {
    openPage(name, slug) {
      router.push({name: name, params: {slug: slug}});
    },
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
    onChangeTiming() {
      if(this.timing == "Upcoming"){
        this.filterQuery.date = {
          end: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
          start: new Date()
        };
      } else if(this.timing == "Past"){
        this.filterQuery.date = {
          start: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
          end: new Date()
        };
      }
    },
    onDateChange() {
      this.timing = "";
    },
    sendFilterData() {
      const start = Math.floor(new Date(this.filterQuery.date.start).getTime() / 1000);
      const end = Math.floor(new Date(this.filterQuery.date.end).getTime() / 1000);

      axios
        .get("/events?date_start="+start+"&date_end="+end)
        .then((res) => {
          this.events = res.data.events;
          this.events_pages = res.data.pages_count;
        })
        .catch((error) => console.error(error));
    },
    resetFilterData() {
      this.filterQuery = {
        city: null,
        country: null,
        latitude: null,
        longitude: null,
        radius: 0,
        date: {
          end: new Date(),
          start: new Date(),
        },
      }
      this.timing = "Upcoming";
    }
  },
  mounted() {
    this.events = null;

    const start = Math.floor(new Date().getTime() / 1000);
    const end = Math.floor(new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getTime() / 1000);
    
    axios
      .get("/events?date_start="+start+"&date_end="+end)
      .then((res) => {
        this.upcomming_events = res.data.events;
      })
      .catch((error) => console.error(error));

    const start_1 = Math.floor(new Date(new Date().setFullYear(new Date().getFullYear() - 5)).getTime() / 1000);
    const end_1 = Math.floor(new Date().getTime() / 1000);
    axios
      .get("/events?date_start="+start_1+"&date_end="+end_1)
      .then((res) => {
        this.past_events = [...res.data.events, ...res.data.events];
      })
      .catch((error) => console.error(error));

  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    // axios
    //     .get("/goals")
    //     .then(res => {
    //       console.log("/goals", res.data);
    //       this.goals = res.data.goal_categories[0].goals;
    //     })
    //     .catch(error => console.error(error));
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
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

.filters {
  padding-top: 60px;
  padding-bottom: 50px;
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
</style>
