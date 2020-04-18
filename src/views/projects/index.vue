<template>
  <div>
    <!-- Network banner -->
    <div class="container">
      <banner color="#4696D2" link="/create/project">
        <template v-slot:name>Network</template>
        <template v-slot:subname>projects</template>
        <template v-slot:title>Projects that change the world</template>
        <template v-slot:button>Create</template>
        <template
          v-slot:content
        >Our objective is to facilitate connections, mobilise funds, resources and ideas to help your projects go further, faster.</template>
      </banner>
    </div>

    <div class="textual-banner textual-banner--contained">
      <div class="container">
        <p>Helping you help others by raising awareness of your community projects, fundraising campaigns, voluntary groups, community events, grassroots and start-up collaborations, big or small, local of global.</p>
      </div>
    </div>

    <!-- Title section -->
    <section class="section projects-section container" v-if="myProjects.length >0">
      <h2 class="projects-section__title">
        Created by you
        <span class="projects-section__count">{{myProjects.length}} Projects</span>
      </h2>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid container section" v-if="myProjects.length >0">
      <project-card
        v-for="project in myProjects"
        :key="'project-'+project.slug"
        :project="project"
      />
    </section>

    <!-- Title section -->
    <section class="section projects-section container">
      <h2 class="projects-section__title">
        Explore Projects
        <span class="projects-section__count">1 552 Projects</span>
      </h2>
      <div class="projects-section__subtitle">Check out the projects needing your support right now</div>
    </section>

    <!-- Filters -->
    <section class="section projects-filters container" style="display: none;">
      <div class="filter-wrapper">
        <select>
          <option>English</option>
          <option>German</option>
          <option>Russian</option>
        </select>
      </div>
      <div class="filter-wrapper">
        <select>
          <option selected>Select an Interest</option>
          <option>Test 1</option>
          <option>Test 2</option>
        </select>
      </div>
      <div class="filter-wrapper">
        <select>
          <option selected>Support Needed</option>
          <option>Skills</option>
          <option>Skills2</option>
        </select>
      </div>
      <div class="filter-wrapper">
        <input type="search" />
      </div>
      <div class="filter-wrapper">
        <input type="search" />
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid container section">
      <!-- TODO: Make component from Project -->
      <project-card v-for="project in projects" :key="'project-'+project.slug" :project="project" />
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Banner from "@/components/homepage/Banner.vue";
import ProjectCard from "@/components/cards/ProjectCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Banner,
    ProjectCard,
    Footer
  },
  data() {
    return {
      projects: [],
      myProjects: []
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  methods: {},
  mounted() {
    axios.get("/projects").then(res => {
      console.log("Projects loaded", res);

      this.projects = res.data.projects;
    });

    if (this.isAuthenticated) {
      axios
        .get("/projects/my")
        .then(res => (this.myProjects = res.data.projects));
    }
  }
};
</script>

<style lang="scss" scoped>
.projects-grid {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);

  @include lgMax {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mdMax {
    grid-template-columns: repeat(1, 1fr);
  }
}

// TODO: Move styles to separate file

.projects-section {
  .projects-section__title {
    font-family: "Montserrat Bold";
    @include font-size(2rem);
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .projects-section__count {
    font-family: "Montserrat Regular";
    line-height: 1;
    color: #121212;
    @include font-size(1rem);
    @include margin-left(2rem);
  }

  .projects-section__subtitle {
    font-family: "Montserrat Regular";
    opacity: 0.5;
    @include font-size(1rem);
  }
}
</style>