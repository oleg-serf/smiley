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
    <div class="talks-grid container" v-if="events.length > 0">
      <event-card
        v-for="event in events"
        :key="'event-'+event.id"
        :title="event.title"
        :description="event.short_description"
        :background="event.cover_image"
        :start="event.time_start"
        :end="event.time_end"
        :location="event.location"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Banner from "@/components/homepage/Banner.vue";
import EventCard from "@/components/articles/EventCard.vue";
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
      events: []
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/events")
      .then(res => {
        console.log("Events loaded", res);
        this.events = res.data.events;
      })
      .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.talks-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
}
</style>