<template>
  <div class="network-page">
    <div class="header">
      <iframe
          class="header-video"
          width="100%"
          height="775"
          src="https://www.youtube.com/embed/4b33NTAuF5E"
      >
      </iframe>
    </div>
    <div class="network-page__content-wrapper">

      <!--   PROJECTS   -->
      <section class="network-page__projects">
        <BottomBorderedTitleWithSearch
            :title="'<b>Projects & Campaigns | </b>News'"
            :with-search="true"
            search-expandable
        ></BottomBorderedTitleWithSearch>
        <ProjectsGallery :projects="projects" :with-slider="true" button-text="View Project"></ProjectsGallery>
        <div
            style="display: inline-block"
            class="event__button"
            @mouseenter="projectsBtnHovered = true"
            @mouseleave="projectsBtnHovered = false"
        >
          <VButton
              size="height_45"
              @click.native.prevent="openPage('projects', 'slug')"
              shape="round"
              color="black"
          >
            <router-link
                class="event__button-link"
                :to="{ name: 'projects', params: { slug: 'slug' } }"
            >
              {{ projectsBtnHovered ? 'More News' : 'See all' }}
            </router-link
            >
          </VButton>
        </div>
      </section>

      <!--   DISCUSSIONS   -->
      <section class="network-page__discussions">
        <BottomBorderedTitleWithSearch
            :title="'<b>Smiley Forum | </b>Discussions'"
            :with-search="true"
            search-expandable
        ></BottomBorderedTitleWithSearch>
        <DiscussionsGallery :projects="projects.slice(3)" button-text="View Project"></DiscussionsGallery>
        <VButton
            class="event__button"
            size="height_45"
            @click.native.prevent="openPage('discussions', 'slug')"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'discussions', params: { slug: 'slug' } }"
          >
            More Events
          </router-link
          >
        </VButton>
      </section>

      <!--   ORGANISATIONS   -->
      <section class="network-page__organisations">
        <BottomBorderedTitleWithSearch
            :title="'<b>Organisations | </b>Latest'"
            :with-search="true"
            search-expandable
        ></BottomBorderedTitleWithSearch>
        <MembersAndOrganizationsGallery
            type="organisation"
            :with-slider="true"
            :data-array="projects.slice(3)"
            button-text="View Project"
        ></MembersAndOrganizationsGallery>
        <VButton
            class="event__button"
            size="height_45"
            @click.native.prevent="openPage('discussions', 'slug')"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'discussions', params: { slug: 'slug' } }"
          >
            All Organisations
          </router-link
          >
        </VButton>
      </section>

      <!--   MEMBERS   -->
      <section class="network-page__members">
        <BottomBorderedTitleWithSearch
            :title="'<b>Members | </b>Making up the Smiley Community'"
            :with-search="true"
            search-expandable
        ></BottomBorderedTitleWithSearch>
        <MembersAndOrganizationsGallery
            :with-slider="true"
            :data-array="projects.slice(3)"
            button-text="View Project"
        ></MembersAndOrganizationsGallery>
        <VButton
            class="event__button"
            size="height_45"
            @click.native.prevent="openPage('discussions', 'slug')"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'discussions', params: { slug: 'slug' } }"
          >
            All Members
          </router-link
          >
        </VButton>
      </section>

      <!--   SUBSCRIBE   -->
      <Subscribe/>

      <!--   FOOTER   -->
      <Footer/>
    </div>
  </div>
</template>

<script>
import DiscussionsGallery from "@/components/cardGalleries/DiscussionsGallery";
import ProjectsGallery from "@/components/cardGalleries/ProjectsGallery";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import axios from "@/axios-auth";
import VButton from "@/components/app/VButton";
import router from "@/router";
import Footer from "@/components/Footer";
import Subscribe from "@/components/forms/Subscribe";

export default {
  name: "Network",
  components: {
    Subscribe,
    Footer,
    MembersAndOrganizationsGallery,
    DiscussionsGallery,
    VButton,
    ProjectsGallery,
    BottomBorderedTitleWithSearch
  },
  /*
  * DATA */
  data() {
    return {
      projectsBtnHovered: false,
      projects: []
    }
  },
  methods: {
    openPage(name, slug) {
      router.push({name: name, params: {slug: slug}});
    },
  },
  computed: {
    isProjectBtnHovered () {
      return this.projectsBtnHovered
    }
  },
  mounted() {
    const metaPayload = {
      title: 'Smiley Network',
      meta: {
        description: ''
      }
    }

    this.$store.dispatch('meta/setMeta', metaPayload);
    axios
        .get("/projects")
        .then((res) => {
          console.log("projects", res);
          this.projects = res.data.projects;
        })
        .catch((error) => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.network-page {
  .header {
    margin-bottom: 4rem;

    .header-video {
      border: none;
    }
  }

  &__content-wrapper {
    padding: 0 150px;
    text-align: center;
  }

  &__projects,
  &__organisations,
  &__members,
  &__discussions
  {
    margin-bottom: 4rem;
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
