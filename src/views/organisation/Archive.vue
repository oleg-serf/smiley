<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <section class="organisations-grid">
        <div
          class="organisation-item"
          v-for="organisation in organisations"
          :key="organisation.id+'-org-archive'"
        >
          <div class="organisation-item__logo">
            <router-link :to="'/organisation/' + organisation.slug">
              <img
                :src="$settings.images_path.organisations + 's_' + organisation.logo"
                alt
                title
                class="organisation-item__image"
              />
            </router-link>
          </div>
          <h2 class="organisation-item__title">
            <router-link :to="'/organisation/' + organisation.slug">{{ organisation.name }}</router-link>
          </h2>
          <p class="organisation-item__description">{{ organisation.description }}</p>
        </div>
      </section>
      <div class="smiley-pagination" v-if="pages_count > 1">
        <paginate
          :page-count="pages_count"
          :click-handler="loadPageNumb"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :prev-class="'smiley-pagination-back'"
          :next-class="'smiley-pagination-next'"
          :container-class="'app-pagination'"
        ></paginate>
        <br />
        <br />
        <br />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  data() {
    return {
      organisations: [],
      pages_count: 0
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
  },
  components: {
    Footer,
    Breadcrumbs
  }
};
</script>

<style lang="scss">
.organisations-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -16px;
  padding-top: 48px;
}

.organisation-item {
  margin: 16px 16px 96px 16px;
  padding: 64px 20px 10px 20px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  max-width: calc((100% / 4) - 32px);
  box-sizing: border-box;
  position: relative;

  &__logo {
    border-radius: 50%;
    background: #c7c7c7;
    width: 128px;
    height: 128px;
    // margin: -70px auto 0px auto;
    position: absolute;
    left: 50%;
    top: 0px;
    overflow: hidden;
    transform: translate(-50%, -50%);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s;
  }

  &:hover {
    .organisation-item__image {
      transform: scale(1.1);
    }
  }

  &__title {
    font: 700 22px/28px "Montserrat Bold", sans-serif;

    a {
      color: unset;
      text-decoration: none;
    }
  }

  &__description {
    font: 400 16px/24px "Muli", sans-serif;
  }
}
</style>
