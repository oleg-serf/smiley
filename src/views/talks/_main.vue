<template>
  <div>
    <div class="container">
      <banner color="#D12121" background="/img/homepage/banner-talks.jpg">
        <template v-slot:name>talks</template>
        <template v-slot:title>Register for a Smiley Talk!</template>
        <template
          v-slot:content
        >Smiley Talks bring expert speakers and members of the public together in a unique, memorable experience.</template>
      </banner>
    </div>
    <div class="filters">
      <div class="container filter-toggle">
        <div class="filter-toggle__title">Filter</div>
        <div class="filter-toggle__button-holder">
          <button type="button" class="filter-toggle__button" @click.prevent="toggleFilterMenu">
            <i class="fa fa-sliders"></i>
          </button>
        </div>
      </div>
      <form class="container" v-show="is_shown" @submit.prevent="sendFilterData">
        <div class="filters-container">
          <div class="filter-column filter filter--location">
            <label class="filter__label" for="inputLocation">
              <div class="filter__title">Location</div>
            </label>

            <div class="filter__input filter__input--icon">
              <i class="fa fa-search" aria-hidden="true"></i>
              <gmap-autocomplete
                class="filter__input-field"
                id="inputLocation"
                placeholder="London, GB"
                @place_changed="getAddressData"
              ></gmap-autocomplete>
            </div>
          </div>
          <div class="filter-column filter filter--radius">
            <label class="filter__label" for="inputRadius">
              <div class="filter__title">Radius</div>
            </label>

            <div class="filter__input filter__input-select--icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
              <select class="filter__input-select" id="inputRadius" v-model="filterQuery.radius">
                <option
                  :value="item.value"
                  v-for="item in filter.radius"
                  :key="item.text"
                >{{item.text}}</option>
              </select>
            </div>
          </div>
          <div class="filter-column filter filter--timing">
            <div class="filter__label">
              <div class="filter__title">Timing</div>
            </div>
            <label class="filter-timing">
              <span class="filter-timing__name">upcoming</span>
              <input type="radio" name="timing" value="upcoming" v-model="filterQuery.timing" />
              <div class="filter-timing__backdrop"></div>
            </label>
            <label class="filter-timing">
              <span class="filter-timing__name">past</span>
              <input type="radio" name="timing" value="past" v-model="filterQuery.timing" />
              <div class="filter-timing__backdrop"></div>
            </label>
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
              />
            </div>
          </div>
          <div class="filter-column filter filter--submit">
            <div class="filter__label">
              <div class="filter__title">
                <br />
              </div>
            </div>
            <button type="submit" class="filter__button filter__button-submit">apply</button>
          </div>
          <div class="filter-column filter filter--reset">
            <div class="filter__label">
              <div class="filter__title">
                <br />
              </div>
            </div>
            <button type="reset" class="filter__button filter__button-reset">reset</button>
          </div>
        </div>
      </form>
    </div>
    <div class="container" v-if="events.length > 0">
      <div class="talks-title">
        <h1 class="talks-title__title">Upcoming Smiley Talks:</h1>
      </div>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        v-if="is_mobile"
      >
        <swiper-slide v-for="event in events" :key="'event-news-'+event.slug">
          <event-card :event="event" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="talks-grid" v-else>
        <event-card v-for="event in events" :key="'event-'+event.slug" :event="event" />
      </div>
    </div>
    <div class="container">
      <div class="smiley-pagination" v-if="events_pages > 1">
        <br />
        <br />
        <paginate
          :page-count="events_pages"
          :click-handler="loadEvents"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :prev-class="'smiley-pagination-back'"
          :next-class="'smiley-pagination-next'"
          :container-class="'app-pagination'"
        >
          <span slot="breakViewContent">...</span>
        </paginate>
        <br />
      </div>
    </div>
    <div class="container" v-if="past.length > 0">
      <div class="talks-title">
        <h1 class="talks-title__title">Past Smiley Talks</h1>
        <p
          class="talks-title__subtitle"
        >Take a look at our past events highlights and access the full live videos of the talks</p>
      </div>
      <swiper
        ref="pastEventsSwiper"
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        v-if="is_mobile"
      >
        <swiper-slide v-for="event in past" :key="'event-news-'+event.slug">
          <event-card :event="event" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="talks-grid" v-else>
        <event-card
          v-for="event in past"
          :key="'event-'+event.slug"
          :event="event"
          :active="false"
        />
      </div>
    </div>
    <div class="container">
      <div class="smiley-pagination" v-if="past_pages > 1">
        <br />
        <br />
        <paginate
          :page-count="past_pages"
          :click-handler="loadPastEvents"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :prev-class="'smiley-pagination-back'"
          :next-class="'smiley-pagination-next'"
          :container-class="'app-pagination'"
        >
          <span slot="breakViewContent">...</span>
        </paginate>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Banner from "@/components/homepage/Banner.vue";
import EventCard from "@/components/cards/EventCard.vue";

export default {
  name: "Talks",
  components: {
    Banner,
    EventCard,
  },
  data() {
    return {
      events: [],
      past: [],
      events_pages: 0,
      past_pages: 0,
      is_mobile: false,
      is_shown: false,
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
      filter: {
        city: null,
        radius: [
          {
            value: 2,
            text: "2 miles"
          },
          {
            value: 5,
            text: "5 miles"
          },
          {
            value: 10,
            text: "10 miles"
          },
          {
            value: 25,
            text: "25 miles"
          },
          {
            value: 50,
            text: "50 miles"
          },
          {
            value: 100,
            text: "100 miles"
          },
          {
            value: 0,
            text: "Any distance"
          }
        ],
        country: "London, GB"
      },
      filterQuery: {
        city: null,
        country: null,
        latitude: null,
        longitude: null,
        radius: 0,
        timing: "upcoming",
        date: {
          end: new Date(),
          start: new Date()
        }
      }
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
    getAddressData: function(data) {
      data.address_components.forEach(prop => {
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
      this.$swal({ text: "This feature will work soon" });
    },
    loadEvents(page) {
      axios
        .get("/events?page=" + page)
        .then(res => {
          this.events = res.data.events;
        })
        .catch(error => console.error(error));
    },
    loadPastEvents(page) {
      axios
        .get("/events/past?page=" + page)
        .then(res => {
          this.past = res.data.events;
        })
        .catch(error => console.error(error));
    }
  },
  mounted() {
    axios
      .get("/events")
      .then(res => {
        console.log("Future events", res);
        this.events = res.data.events;
        this.events_pages = res.data.pages_count;
      })
      .catch(error => console.error(error));
    axios
      .get("/events/past")
      .then(res => {
        console.log("Past events", res);
        this.past = res.data.events;
        this.past_pages = res.data.pages_count;
      })
      .catch(error => console.error(error));
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
.talks-title {
  margin-top: 30px;
  margin-bottom: 30px;

  .talks-title__title {
    @include font-size(2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    margin-bottom: 0px;
  }
  .talks-title__subtitle {
    margin-top: 0px;
    font-family: "Montserrat Regular", sans-serif;
    @include font-size(1.2rem);
  }
}

.talks-grid {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);

  @include xlMax {
    grid-template-columns: repeat(2, 1fr);
  }
}

.filters {
  background-color: #f8f9fa;
  padding-top: 30px;
  padding-bottom: 30px;
}

.filters-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(10, 1fr);

  @include mdMax {
    // display: none;
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

// ----------------

.filter-timing {
  font-family: "Montserrat SemiBold", sans-serif;
  position: relative;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e5e5e5;
  padding: 15px 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  margin-bottom: 0px;
  max-height: 40px;

  cursor: pointer;

  &:first-child {
    margin-right: -1px;
  }

  .filter-timing__title {
    position: relative;
    z-index: 2;
  }

  .filter-timing__backdrop {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #393939;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    .filter-timing__backdrop {
      opacity: 0.1;
    }
  }

  input {
    position: absolute;
    top: bottom;
    left: 50%;
    opacity: 0;
  }

  input:checked + .filter-timing__backdrop {
    opacity: 0.2;
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
    font-family: "Montserrat SemiBold", sans-serif;
    margin-bottom: 6px;
  }
  .filter__input {
    position: relative;
    width: 100%;
  }
  .filter__input--icon {
    i {
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: darken(#e5e5e5, 40%);
    }
  }
  .filter__input-field {
    padding: 10px 15px 10px 30px;
    line-height: 1;
    font-size: 1rem;
    border: 1px solid #e5e5e5;
    width: 100%;
  }

  .filter__input-date {
    padding: 0px 15px 0px 30px;
    line-height: 1;
    font-size: 1rem;
    border: 1px solid #e5e5e5;
    width: 100%;
    background-color: #fff;
    display: block;
    height: 41px;

    &::v-deep input {
      border: none;
      box-shadow: none;
      height: 100%;
      width: 100%;
    }
  }

  .filter__input-select--icon {
    i {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: darken(#e5e5e5, 40%);
    }
  }

  .filter__input-select {
    background-color: #fff;
    border: 1px solid #e5e5e5;
    width: 100%;
    border-radius: 0;
    -webkit-appearance: none;
    padding: 6px 30px 6px 15px;
  }

  .filter__button {
    font-family: "Montserrat Regular", sans-serif;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    padding: 13px 10px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 1px;
    // min-width: 125px;
    @include font-size(0.8rem);
    cursor: pointer;
    transition: background-color 0.4s;
    width: 100%;
    display: block;

    &-submit {
      background-color: #f4ed3b;
      font-family: "Montserrat SemiBold", sans-serif;
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
    font-family: "Montserrat Bold", sans-serif;
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
    -webkit-border-radius: 0px;
    background-color: #fff;
    border: 1px solid rgba(57, 57, 57, 0.5);
    padding: 1px 10px;
  }
}
</style>