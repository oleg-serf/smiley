<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <section class="organisations-grid">
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
        <div class="organisation-item">
          <div class="organisation-item__logo">
            <img src alt title class="organisation-item__image" />
          </div>
          <h2 class="organisation-item__title">Organisation name</h2>
          <p
            class="organisation-item__description"
          >Lorem ipsum dolor sit amet, consectetur adip elit</p>
        </div>
      </section>
      <div class="smiley-pagination">
        <paginate
          :page-count="25"
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
    return {};
  },
  mounted() {
    axios
      .get("/organisations/")
      .then(res => {
        console.log("Organisations", res);

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
    transform: translate(-50%, -50%);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__title {
    font: 700 22px/28px "Montserrat Bold", sans-serif;
  }

  &__description {
    font: 400 16px/24px "Muli", sans-serif;
  }
}
</style>
