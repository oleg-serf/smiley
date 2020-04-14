<template>
  <div>
    <div class="textual-banner">
      <div class="container">
        <p>We connect people, projects & resources to help good causes go further, faster.</p>
      </div>
    </div>
    <div class="container">
      <banner color="#4696D2">
        <template v-slot:name>Network</template>
        <template
          v-slot:content
        >Explore active fundraising campaigns and charitable initiatives making a difference in the world and find out how you can get involved. If you have a new idea for a social impact project, create your own Project following the Theory of Change method and start collaborating with other members.</template>
      </banner>
      <banner :link="(auth) ? '/organisations' : '/register'" color="#4696D2">
        <template v-slot:name>Network</template>

        <template v-slot:subname>Organisations</template>
        <template
          v-slot:content
        >Connect with Organisations that share your interests: Explore charities and organisations with active campaigns and projects and find out how you can get involved</template>
        <template v-slot:button v-if="auth">Learn more</template>
        <template v-slot:button v-else>Join</template>
      </banner>
      <banner :link="(auth) ? '/users' : '/register'" color="#4696D2">
        <template v-slot:name>Network</template>
        <template v-slot:subname>Members</template>
        <template
          v-slot:content
        >Connect with likeminded Members in our community: Our valued network of changemakers consisting of activists, charity workers, CSR leaders, volunteers, academics, students, council workers and everyday heroes in the community</template>
        <template v-slot:button v-if="auth">Learn more</template>
        <template v-slot:button v-else>Join</template>
      </banner>
      <banner :link="(auth) ? '/partners' : '/register'" color="#4696D2">
        <template v-slot:name>Network</template>
        <template v-slot:subname>Partners</template>
        <template
          v-slot:content
        >Our valued list of partners that make it possible to co-host inspiring events and help build stronger communities</template>
        <template v-slot:button v-if="auth">Learn more</template>
        <template v-slot:button v-if="auth">Learn more</template>
        <template v-slot:button v-else>Join</template>
      </banner>
    </div>

    <Footer />
  </div>
</template>

<script>
import Banner from "@/components/homepage/Banner.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Banner,
    Footer
  },
  computed: {
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>