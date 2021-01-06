<template>
  <div class="network-page">
    <div class="header">
      <img
          src="/img/network_main.png"
          alt="goalsImg"
          title="Goals"
      />
    </div>
    <a class="cta cta--solid-yellow" href="/login">Sign up / Log in</a>
    <div class="network-page__content-wrapper">

      <!--   PROJECTS   -->
      <section class="network-page__projects">
        <BottomBorderedTitleWithSearch
            :title="'<b>Projects & Campaigns |</b> News'"
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
      <!-- <section class="network-page__discussions">
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
          </router-link>
        </VButton>
      </section> -->

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
            :data-array="organisations"
            button-text="View Project"
        ></MembersAndOrganizationsGallery>
        <VButton
            class="event__button"
            size="height_45"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'organisations' }"
          >
            All Organisations
          </router-link>
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
            :data-array="users"
            button-text="View Project"
        ></MembersAndOrganizationsGallery>
        <VButton
            class="event__button"
            size="height_45"
            shape="round"
            color="black"
        >
          <router-link
              class="event__button-link"
              :to="{ name: 'members' }"
          >
            All Members
          </router-link>
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
import MembersAndOrganizationsGallery from "@/components/cardGalleries/MembersAndOrganizationsGallery";
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
      projects: [],
      organisations: [],
      users: []
    }
  },
  methods: {
    openPage(name, slug) {
      router.push({name: name, params: {slug: slug}});
    },
  },
  computed: {
    isProjectBtnHovered() {
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
        .get("/pages/2")
        .then((res) => {
          console.log("networks", res);
          this.projects = res.data.latest_projects;
          this.organisations = res.data.latest_organisations;
          this.users = res.data.latest_users;
        })
        .catch((error) => console.error(error));
  }
};
</script>

<style lang="scss" scoped>
.cta {
  margin: 0 auto;
  width: 14rem;
  min-width: 100px;
  color: #fff;
  display: block;
  padding: 0 12px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  clear: both;
  height: 46px;
  line-height: 46px;
  position: relative;
  overflow: hidden;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;

  &:hover {
    background-color: #f6f162;
    box-shadow: 0 2px 28px -13px rgba(0, 0, 0, .4);
    color: #000;
    transition: all .2s ease;
  }

  &.cta--solid-yellow {
    border: none;
    background-color: #f4ed3b;
    color: #000;
  }
}

.network-page {
  .header {
    margin-bottom: 4rem;

    img {
      width: 100%;
      max-height: 700px;
    }
  }

  &__content-wrapper {
    padding: 0 150px;
    text-align: center;
    max-width: 1500px;
    margin: 0 auto;
    @include mdMax {
      padding-left: 0;
      padding-right: 0;
    }
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
