<template>
  <div>
    <information-hero>
      <template v-slot:title>Together anything is possible</template>
      <template v-slot:content>
        <p>The sustainable development goals are the blueprint for peace and prosperity for people and the planet, now and into the future.</p>
        <p>Everything we do is guided by these goals, from the events we host to the content we produce, we want to contribute to each of these objectives. All 17 of these goals are interconnected, just like our community and network, so no matter what you care about you’ll be able to get involved in the bigger picture.</p>
      </template>
    </information-hero>
    <section class="goals-grid container" v-for="category in categories" :key="category.id">
      <h2 class="goals-grid__title">{{category.name}}</h2>
      <div class="goals-grid__grid">
        <div class="goals-grid__item" v-for="goal in category.goals" :key="goal.name+goal.id">
          <router-link :to="'/news-events/' + goal.slug">
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
import InformationHero from "@/components/InformationHero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Goals",
  components: {
    InformationHero,
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
</style>