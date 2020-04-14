<template>
  <div>
    <!-- Network banner -->
    <div class="container">
      <banner color="#4696D2" link="/create/project">
        <template v-slot:name>Network</template>
        <template v-slot:title>Projects that change the world</template>
        <template v-slot:button>Create</template>
        <template
          v-slot:content
        >Our objective is to facilitate connections, mobilise funds, resources and ideas to help your projects go further, faster.</template>
      </banner>
    </div>

    <div class="textual-banner textual-banner--contained">
      <div class="container">
        <p>Helping you help others by raising awareness of your community projects, fundraising campaigns, voluntary groups, community events, grassroots and start-up collaborations, big or small, local of global. Our objective is to facilitate connections, mobilise funds, resources and ideas to help your projects go further, faster.</p>
      </div>
    </div>

    <!-- Title section -->
    <section class="section projects-section container">
      <h2 class="projects-section__title">
        Created by you
        <span class="projects-section__count">{{myProjects.length}} Projects</span>
      </h2>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid container section">
      <!-- TODO: Make component from Project -->
      <div class="project-article" v-for="project in myProjects" :key="'project-my-'+project.slug">
        <div class="project-article__image">
          <img :src="$settings.images_path.projects +'m_'+project.cover_image" alt />
        </div>
        <div class="project-article__content">
          <div class="project-article__category">
            <div class="project-article__header">
              <div class="project-article__category-name">{{ project.goals[0].name}}</div>
              <div class="project-article__category-circle">
                <span>+{{project.goals.length - 1}}</span>
              </div>
            </div>
            <div class="project-article__timestamp">5 days ago</div>
          </div>
          <div class="project-article__spacer"></div>
          <div class="project-article__inner">
            <h3 class="project-article__title">{{project.name}}</h3>
            <div class="project-article__description" v-html="trimDescription(project.description)"></div>
            <div class="project-article__button">
              <router-link :to="{name: 'project', params: {slug: project.slug}}">view project</router-link>
            </div>
          </div>
        </div>
        <div class="project-article__actions">
          <button>
            <span>0</span>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            Like
          </button>
          <button>
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
            Comment
          </button>
          <button>
            <i class="fa fa-share-alt" aria-hidden="true"></i>
            Share
          </button>
        </div>
      </div>
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
      <div class="project-article" v-for="project in projects" :key="'project-'+project.slug">
        <div class="project-article__image">
          <img
            :src="$settings.images_path.projects +'m_'+project.cover_image"
            v-if="project.cover_image != null"
            alt
          />
        </div>
        <div class="project-article__content">
          <div class="project-article__category">
            <div class="project-article__header">
              <div class="project-article__category-name">{{ project.goals[0].name}}</div>
              <div class="project-article__category-circle">
                <span>+{{project.goals.length - 1}}</span>
              </div>
            </div>
            <div class="project-article__timestamp">5 days ago</div>
          </div>
          <div class="project-article__spacer"></div>
          <div class="project-article__inner">
            <h3 class="project-article__title">{{project.name}}</h3>
            <div class="project-article__description" v-html="trimDescription(project.description)"></div>
            <div class="project-article__button">
              <router-link :to="{name: 'project', params: {slug: project.slug}}">view project</router-link>
            </div>
          </div>
        </div>
        <div class="project-article__actions">
          <button>
            <span>0</span>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            Like
          </button>
          <button>
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
            Comment
          </button>
          <button>
            <i class="fa fa-share-alt" aria-hidden="true"></i>
            Share
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Banner from "@/components/homepage/Banner.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Banner,
    Footer
  },
  data() {
    return {
      projects: [],
      myProjects: []
    };
  },
  methods: {
    trimDescription(description) {
      return description.length > 80
        ? description.substring(0, 80) + "..."
        : description;
    }
  },
  mounted() {
    axios.get("/projects").then(res => {
      console.log("Projects loaded", res);

      this.projects = res.data.projects;
    });

    axios
      .get("/projects/my")
      .then(res => (this.myProjects = res.data.projects));
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
.project-article {
  background-color: #000;
  position: relative;
  padding: 30px;
  min-height: 350px;
  transition: padding-bottom 0.4s;
  color: #fff;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #000;
    opacity: 0.5;
    z-index: 2;
  }

  &:hover {
    .project-article__image {
      img {
        transform: scale(1.1);
      }
    }
    .project-article__inner {
      transform: translateY(-60px);
    }
    .project-article__actions {
      opacity: 1;
      pointer-events: all;
    }
  }

  .project-article__image {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s;
    }
  }

  .project-article__inner {
    transition: transform 0.4s;
  }

  .project-article__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1;
    flex-direction: column;
    transition: transform 0.4s;
  }

  .project-article__header {
    display: flex;
    align-items: center;
  }

  .project-article__category {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project-article__category-name {
    background-color: rgba(125, 132, 148, 0.6);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold";
    transition: background-color 0.4s;

    @include font-size(0.6rem);
  }

  .project-article__category-circle {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 0px;
    position: relative;
    padding: 16px;
    margin-left: 16px;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -49%);
      @include font-size(0.8rem);
      font-family: "Inter Regular";
      white-space: nowrap;
    }
  }

  .project-article__timestamp {
    color: #fff;
    font-family: "Montserrat Regular", sans-serif;
    opacity: 0.7;
    display: none;
  }

  .project-article__spacer {
    flex: 1;
    min-height: 50px;
  }

  .project-article__title {
    @include font-size(1.1rem);
    line-height: 1.45;
    color: #fff;
    font-family: "Montserrat SemiBold", sans-serif;
  }

  .project-article__description {
    font-family: "Inter Regular";
    margin-bottom: 24px;
  }

  .project-article__button a {
    text-decoration: none;
    background-color: rgba(125, 132, 148, 1);
    color: #fff;
    padding: 6px 14px;
    text-transform: uppercase;
    display: inline-block;
    font-family: "Montserrat SemiBold", sans-serif;
    transition: background-color 0.4s;

    @include font-size(0.8rem);

    &:hover {
      background-color: rgba(125, 132, 148, 0.8);
    }
  }

  .project-article__actions {
    position: absolute;
    margin: 0px 30px 30px 30px;
    bottom: 0px;
    left: 0px;
    z-index: 3;
    color: #fff;
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.7);
    width: calc(100% - 60px);
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s;

    button {
      width: 100%;
      padding: 10px 15px;
      font-size: 12px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: #fff;
      font-family: "Montserrat Regular", sans-serif;
      cursor: pointer;
      transition: background-color 0.4s, color 0.4s;
      border: none;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.7);
      }

      span {
        margin-right: 12px;
      }

      i {
        margin-right: 12px;
      }

      img {
        height: auto;
        width: 11px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        background-size: cover;
      }
    }
  }
}

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