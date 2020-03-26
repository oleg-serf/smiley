<template>
  <div>
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
import Footer from "@/components/Footer.vue";

export default {
  name: "Goals",
  components: {
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