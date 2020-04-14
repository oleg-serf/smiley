<template>
  <div class="organisations-bg">
    <information-hero background="/img/backgrounds/organisation.jpg">
      <template v-slot:title>Connect with organisations</template>
      <template v-slot:content>
        <p>Explore our directory of organisations doing good and how to get involved</p>
      </template>
      <template v-slot:buttons>
        <router-link :to="{name: 'add-organisation'}" class="primary">
          <i class="fa fa-users"></i>&nbsp; &nbsp; &nbsp;Create organisation
        </router-link>
      </template>
    </information-hero>
    <form @submit.prevent="searchOrganisation" class="organisations-filer">
      <div class="filter-grid container">
        <div class="filter-grid__item filter-grid__item--full-width">
          <div class="filter-grid__title">DIRECTORY OF ORGANISATIONS</div>
        </div>
        <div class="filter-grid__item">
          <label class="search">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="filter"
              required
              minlength="3"
              v-model="search.keyword"
              placeholder="Search by name"
            />
          </label>
        </div>
        <div class="filter-grid__item">
          <label class="dropdown">
            <select v-model="search.industry">
              <option selected disabled :value="null">Organisation Industry</option>
            </select>
            <i class="fa fa-angle-down"></i>
          </label>
        </div>
        <div class="filter-grid__item">
          <label class="dropdown">
            <select v-model="search.interest">
              <option selected disabled :value="null">Select Interest</option>
            </select>
            <i class="fa fa-angle-down"></i>
          </label>
        </div>
        <div class="filter-grid__item">
          <label class="dropdown">
            <select v-model="search.goal">
              <option selected disabled :value="null">Select Goal</option>
              <option v-for="goal in goals" :key="'goal-'+goal.id" :value="goal.id">{{goal.name}}</option>
            </select>
            <i class="fa fa-angle-down"></i>
          </label>
        </div>
        <div class="filter-grid__item filter-grid__item--full-width">
          <button type="submit">
            <i class="fa fa-search"></i>
            search
          </button>
        </div>
      </div>
    </form>
    <div class>
      <div class="container">
        <div style="height: 75px;"></div>
        <section class="organisations-grid">
          <div
            class="organisation-item"
            v-for="organisation in organisations"
            :key="organisation.slug+'-org-archive'"
          >
            <div class="organisation-item__logo">
              <router-link :to="'/organisation/' + organisation.slug">
                <img
                  v-if="organisation.logo != null"
                  :src="$settings.images_path.organisations + 's_' + organisation.logo"
                  alt
                  title
                  class="organisation-item__image"
                />
                <div v-else>{{ organisation.initials }}</div>
              </router-link>
            </div>
            <h2 class="organisation-item__title">
              <router-link :to="'/organisation/' + organisation.slug">{{ organisation.name }}</router-link>
            </h2>
            <div class="organisation-item__categories">Arts, Culture, Leisure</div>
            <div class="organisation-item__spanner"></div>
            <div
              class="organisation-item__status"
            >{{ organisation.is_following ? 'Connected' : 'Not Connected'}}</div>
            <button
              class="organisation-item__follow-btn"
              @click.prevent="follow(organisation)"
              v-if="!organisation.is_following"
            >
              <i class="fa fa-plus"></i>
              Follow
            </button>
            <button
              class="organisation-item__follow-btn"
              @click.prevent="unfollow(organisation)"
              v-else
            >
              <i class="fa fa-minus"></i>
              UnFollow
            </button>
            <router-link
              class="organisation-item__visit"
              :to="'/organisation/' + organisation.slug"
            >Visit page</router-link>
            <!-- <p class="organisation-item__description">{{ organisation.description }}</p> -->
          </div>
        </section>
      </div>
    </div>
    <div class="container">
      <div class="smiley-pagination" v-if="pages_count > 1">
        <br />
        <paginate
          :page-count="pages_count"
          :click-handler="loadPageNumb"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :prev-class="'smiley-pagination-back'"
          :next-class="'smiley-pagination-next'"
          :container-class="'app-pagination'"
        >
          <span slot="breakViewContent">...</span>
        </paginate>
        <br />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Breadcrumbs from "@/components/Breadcrumbs";
import InformationHero from "@/components/InformationHero.vue";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      organisations: [],
      pages_count: 0,
      goals: [],
      search: {
        keyword: null,
        industry: null,
        interest: null,
        goal: null
      }
    };
  },
  methods: {
    loadPageNumb(pageNumb) {
      axios
        .get("/organisations?page=" + pageNumb)
        .then(res => {
          this.organisations = res.data.organisations;
          this.pages_count = res.data.pages_count;
        })
        .catch(error => console.log(error));
    },
    // Move these methods to component in future
    follow(orgObject) {
      axios
        .post("/organisations/" + orgObject.slug + "/follow")
        .then(result => {
          console.log("following", result);
          this.$swal({
            text: result.data.message,
            icon: "info"
          });
          orgObject.is_following = true;
        })
        .catch(err => {
          // TODO: add error
        });
    },
    unfollow(orgObject) {
      axios
        .post("/organisations/" + orgObject.slug + "/un-follow")
        .then(result => {
          console.log("cancel following", result);
          this.$swal({
            text: result.data.message,
            icon: "info"
          });
          orgObject.is_following = false;
        })
        .catch(err => {
          // TODO: add error
        });
    },
    searchOrganisation() {
      this.$swal({ text: "Testing search" });
    }
  },
  mounted() {
    axios
      .get("/organisations")
      .then(res => {
        console.log("Organisations", res);

        this.organisations = res.data.organisations;
        this.pages_count = res.data.pages_count;
        // this.post = res.data.post;
        // this.related_posts = res.data.related;
      })
      .catch(error => console.log(error));

    axios
      .get("/goals")
      .then(res => {
        this.goals = res.data.goal_categories[0].goals;
      })
      .catch(err => console.error("Load goals error", err));
  },
  components: {
    Breadcrumbs,
    InformationHero,
    Footer
  }
};
</script>

<style lang="scss">
.organisations-bg {
  background-color: #f4f6f9;
}

.organisations-grid {
  // display: flex;
  // flex-wrap: wrap;
  // margin: 0px -16px;
  // padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
}

.organisation-item {
  border: 1px solid #d8d8d8;
  padding: 20px 15px;
  background-color: #fff;
  transition: transform 0.15s, box-shadow 0.15s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 15px 29px -23px rgba(0, 0, 0, 0.3);
  }

  .organisation-item__logo {
    a {
      border-radius: 50%;
      width: 110px;
      height: 110px;
      overflow: hidden;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px auto 14px auto;
      background-color: #e5e9f0;
      text-decoration: none;
      color: #393939;
      font-family: "Montserrat Bold", sans-serif;
      @include font-size(1.6rem);
      letter-spacing: 2px;
      position: relative;
      border: 1px solid #e5e5e5;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      div {
        background-color: #e5e5e5;
        width: 100%;
        height: 100%;
        border: 2px solid #e5e5e5;
        padding: 15px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          border-radius: 50%;
          border: 5px solid #fff;
        }
      }
    }
  }

  .organisation-item__title {
    @include font-size(1.1rem);
    font-family: "Montserrat SemiBold", sans-serif;
    text-align: center;

    a {
      text-decoration: none;
      color: #393939;
    }
  }

  .organisation-item__categories {
    @include font-size(0.8rem);
  }

  .organisation-item__spanner {
    flex: 1;
    min-height: 24px;
  }
  .organisation-item__status {
    @include font-size(0.8rem);
  }
  .organisation-item__follow-btn {
    display: flex;
    background-color: #f4ed3b;
    border: 2px solid #f4ed3b;
    width: 100%;
    padding: 5px 12px;
    letter-spacing: 2px;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat SemiBold", sans-serif;
    @include font-size(1rem);
    margin-top: 12px;
    margin-bottom: 12px;
    transition: background-color 0.2s, box-shadow 0.2s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.3);
    }

    i {
      margin-right: 12px;
      font-size: 14px;
    }
  }
  .organisation-item__visit {
    text-decoration: none;
    color: #393939;
    border-bottom: 1px solid #393939;
    transition: border-color 0.2s;
    @include font-size(0.8rem);

    &:hover {
      border-color: transparent;
    }
  }
}

.filter-grid {
  margin-top: -48px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  max-width: 1080px;
  // margin: 0 auto -40px;
  background: #fff;
  padding: 30px 30px 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

  .filter-grid__item {
    &--full-width {
      grid-column: 1 / span 4;
    }
  }

  .filter-grid__title {
    font-family: "Montserrat Bold", sans-serif;
    text-align: center;
    @include font-size(1.5rem);
  }

  label {
    width: 100%;
    position: relative;

    &.search {
      i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &.dropdown {
      &:active {
        i {
          transform: translateY(-50%) rotate(180deg);
        }
      }
      i {
        position: absolute;
        right: 10px;
        top: 50%;
        transform-origin: center center;
        transform: translateY(-50%) rotate(0deg);
        transition: transform 0.2s;
      }
    }
  }

  input,
  select {
    width: 100%;
    background-color: #fff;
    font-size: 1rem;
    height: 46px;
    border-radius: 0px !important;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    padding: 5px 25px;
    border: 1px solid #e0e6eb !important;
  }

  select {
    &::after {
      content: "erververv";
    }
  }

  input {
    color: #3d465a;
    padding-left: 35px;
  }

  button[type="submit"] {
    letter-spacing: 2px;
    border: 1px solid #f4ed3b !important;
    color: #393939;
    background-color: #f4ed3b;
    width: 100%;
    padding: 5px 25px;
    text-transform: uppercase;
    font-family: "Montserrat SemiBold", sans-serif;
    height: 46px;
    text-align: center;
    cursor: pointer;
    transition: box-shadow 0.2s;

    i {
      font-size: 14px;
      margin-right: 14px;
    }

    &:hover {
      box-shadow: 0 2px 28px -13px rgba(0, 0, 0, 0.4);
    }
  }
}

.project-information {
  padding-bottom: 48px;
}
</style>
