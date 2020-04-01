<template>
  <div>
    <div class="container">
      <banner color="#4C9F38" background="/img/homepage/banner-goals.jpg">
        <template v-slot:title>Stronger together</template>
        <template v-slot:logo>
          <img src="/img/un-goals-transperant.png" style="width: 200px" />
        </template>

        <template v-slot:title>Together anything is possible</template>
        <template
          v-slot:content
        >The sustainable development goals are the blueprint for peace and prosperity for people and the planet, now and into the future. Everything we do is guided by these goals, from the events we host, the content we produce, to the way organisations and projects are grouped and shared with you.</template>
      </banner>
    </div>
    <div class="post-title container">
      <p>The UN Goals are our North Star guiding us towards reaching our mission to make the world a happier, more equal and sustainable place. Click through each Goal below for the latest Smiley News, Events and Charitable Projects related to that goal.</p>
      <p>All 17 of these goals are interconnected, just like our community and network, so no matter what cause you care about your involvement will be supporting the bigger picture</p>
    </div>

    <section class="goals-grid container" v-for="category in categories" :key="category.id">
      <div class="goals-grid__grid">
        <div class="goals-grid__item">
          <img src="/img/un-goals.png" alt="icon" />
        </div>
        <div class="goals-grid__item" v-for="goal in category.goals" :key="goal.name+goal.id">
          <router-link :to="'/goals/' + goal.slug">
            <img :src="$settings.images_path.goals + 'm_' + goal.image" alt="icon" />
          </router-link>
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
import Banner from "@/components/homepage/Banner.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "Goals",
  components: {
    Banner,
    Footer
  },
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    axios
      .get("/goals")
      .then(res => {
        console.log("/goals", res.data);
        this.categories = res.data.goal_categories;
      })
      .catch(error => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_goals-grid";

.post-title {
  font-family: "Montserrat Regular";
  text-align: center;
  @include font-size(1.4rem);
  @include margin-top(2rem);
  @include margin-bottom(2rem);
  margin: 0 auto;
  max-width: 1024px;
}

.goals-grid {
  .goals-grid__item {
    border: 1px solid #c7c7c7;
    line-height: 1;

    a {
      font-size: 0px;
      display: block;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>