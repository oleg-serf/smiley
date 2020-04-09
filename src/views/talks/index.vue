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
      <div class="container">
        <div class="filters-container">
          <div class="filter-search">
            <label class="form-input form-input--icon">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="search" class="app-input" placeholder="example: Brighton" />
            </label>
          </div>
          <div class="filter-search filter-search--location">
            within
            <span>100 miles</span> of
            <span>London, GB</span>
          </div>
          <div class="filter-search">
            <button>UPCOMING</button>
            <button>past</button>
          </div>
          <div class="filter-submit">
            <button class="primary">apply</button>
          </div>
          <div class="filter-reset">
            <button>reset</button>
          </div>
        </div>
      </div>
    </div>
    <div class="talks-title container">
      <h1 class="talks-title__title">Upcoming Smiley Talks:</h1>
    </div>
    <div class="talks-grid container" v-if="events.length > 0">
      <event-card v-for="event in events" :key="'event-'+event.slug" :event="event" />
    </div>
    <div class="talks-title container">
      <h1 class="talks-title__title">Past Smiley Talks</h1>
      <p
        class="talks-title__subtitle"
      >Take a look at our past events highlights and access the full live videos of the talks</p>
    </div>
    <div class="talks-grid container" v-if="past.length > 0">
      <event-card v-for="event in past" :key="'event-'+event.slug" :event="event" :active="false" />
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Banner from "@/components/homepage/Banner.vue";
import EventCard from "@/components/cards/EventCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Talks",
  components: {
    Banner,
    EventCard,
    Footer
  },
  data() {
    return {
      events: [],
      past: []
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/events")
      .then(res => {
        console.log("Future events", res);
        this.events = res.data.events;
      })
      .catch(error => console.error(error));
    axios
      .get("/events/past")
      .then(res => {
        console.log("Past events", res);
        this.past = res.data.events;
      })
      .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.talks-grid {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
}

.filters {
  background-color: #f8f9fa;
  padding-top: 30px;
  padding-bottom: 30px;

  button {
    font-family: "Monsterrat Regular", sans-serif;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    padding: 18px 10px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 1px;
    min-width: 125px;
    @include font-size(0.8rem);
    cursor: pointer;
    transition: background-color 0.4s;

    &:hover {
      background-color: #e5e5e5;
    }

    &.primary {
      background-color: #f4ed3b;
      font-family: "Monsterrat SemiBold", sans-serif;
    }
  }
}

.talks-title {
  margin-top: 30px;
  margin-bottom: 30px;

  .talks-title__title {
    @include font-size(2rem);
    font-family: "Monsterrat SemiBold", sans-serif;
    margin-bottom: 0px;
  }
  .talks-title__subtitle {
    margin-top: 0px;
    font-family: "Monsterrat Regular", sans-serif;
    @include font-size(1.2rem);
  }
}

.filters-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(9, 1fr);

  & > div {
    display: flex;
    align-items: center;
  }

  .filter-submit {
    grid-column: 8;
  }
  .filter-reset {
    grid-column: 9;
  }

  .filter-search--location {
    grid-column: 2 / span 3;
    font-family: "Monsterrat Regular", sans-serif;

    span {
      font-weight: bold;
      text-decoration: underline;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}

.form-input {
  position: relative;
  z-index: 5;

  &.form-input--icon {
    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
    }
  }

  input {
    font-family: "Monsterrat Regular", sans-serif;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    padding: 15px 20px 15px 40px;
    line-height: 1;
    box-sizing: border-box;
    min-width: 320px;
    max-width: 100%;
  }
}
</style>