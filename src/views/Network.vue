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

      <img src="/img/network-image.png" alt="Workplace" usemap="#image-map" style="max-width:100%;" />
      <map name="image-map">
        <area
          target
          alt="organisations"
          title="organisations"
          href="/organisations"
          coords="358, 461, 35, 295"
          shape="rect"
        />
        <area
          target
          alt="members"
          title="members"
          href="/users"
          coords="444, 439, 762, 603"
          shape="rect"
        />
        <area
          target
          alt="partners"
          title="partners"
          href="/partners"
          coords="834, 439, 1159, 605"
          shape="rect"
        />
        <area
          target
          alt="projects"
          title="projects"
          href="/projects"
          coords="1241, 307, 1560, 476"
          shape="rect"
        />
      </map>

      <!-- <banner :link="(auth) ? '/organisations' : '/register'" color="#4696D2">
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
      </banner>-->
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