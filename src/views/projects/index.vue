<template>
  <div>
    <!-- Network banner -->
    <banner link="/add-organisation" color="#d0d246">
      <template v-slot:name>Projects</template>
      <template v-slot:title>Create a Project</template>
      <template
        v-slot:content
      >Do you have an idea which could impact your local community and beyond? Create a Project to get support from the Smiley Movement Network.</template>
      <template v-slot:button>Create a Project</template>
    </banner>

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
      <div class="project-article" v-for="index in 9" :key="index">
        <div class="project-article__image">
          <img src="/img/homepage/banner-news.jpg" alt />
        </div>
        <div class="project-article__content">
          <div class="project-article__category">
            <div class="project-article__category-name">Human Rights</div>
            <div class="project-article__category-circle">
              <span>+15</span>
            </div>
          </div>
          <div class="project-article__spacer"></div>
          <h3
            class="project-article__title"
          >People vs Oil - Brand new idea to save the planet will go here in this title</h3>
          <div class="project-article__description">Lorem ipsum dolor sit amet, consectet</div>
          <div class="project-article__button">
            <a href="#">view project</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Network banner -->
    <banner link="/add-organisation" color="#d0d246">
      <template v-slot:name>Projects</template>
      <template v-slot:title>Create a Project</template>
      <template
        v-slot:content
      >Do you have an idea which could impact your local community and beyond? Create a Project to get support from the Smiley Movement Network.</template>
      <template v-slot:button>Create a Project</template>
    </banner>

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
  }
};
</script>

<style lang="scss" scoped>
.projects-grid {
  display: grid;
  grid-gap: 30px;
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
  min-height: 300px;
  color: #fff;
  display: flex;

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
  }

  .project-article__image {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s;
    }
  }

  .project-article__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }

  .project-article__category {
    display: flex;
    align-items: center;
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
    }
  }

  .project-article__spacer {
    flex: 1;
    min-height: 50px;
  }

  .project-article__title {
    @include font-size(1.1rem);
    line-height: 1.45;
    color: #fff;
    font-family: "Montserrat SemiBold";
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
    font-family: "Montserrat SemiBold";
    transition: background-color 0.4s;

    @include font-size(0.8rem);

    &:hover {
      background-color: rgba(125, 132, 148, 0.8);
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