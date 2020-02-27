<template>
  <div>
    <Breadcrumbs />
    <div class="container">
      <section class="users-grid">
        <div class="user-item" v-for="user in users" :key="user.fykk_name+'-org-archive'">
          <div class="user-item__avatar">
            <router-link :to="'/users/' + user.slug">
              <img
                :src="$settings.images_path.users + 's_' + user.avatar"
                alt
                title
                class="user-item__image"
                v-if="user.avatar !== null"
              />
              <span v-else>{{ user.full_name | filterAvatar}}</span>
            </router-link>
          </div>
          <h2 class="user-item__title">
            <router-link :to="'/users/' + user.slug">{{ user.full_name }}</router-link>
          </h2>
          <ul class="user__social">
            <template v-for="(social, index) in socials">
              <li v-if="user[social] != null" :key="'user-social-'+index">
                <a :href="user[social]" target="_blank">
                  <app-icon :name="social" />
                </a>
              </li>
            </template>
          </ul>
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
        >
          <span slot="breakViewContent">...</span>
        </paginate>
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
import AppIcon from "@/components/AppIcon";

export default {
  data() {
    return {
      users: [],
      pages_count: 0,
      socials: ["facebook", "linkedin", "google", "instagram", "twitter"]
    };
  },
  filters: {
    filterAvatar: text => {
      let username = text.split(" ").map(item => {
        return item.charAt(0);
      });

      username = username.join("");
      return username;
    }
  },
  methods: {
    loadPageNumb(pageNumb) {
      axios
        .get("/users?page=" + pageNumb)
        .then(res => {
          this.users = res.data.users;
          this.pages_count = res.data.pages_count;
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    axios
      .get("/users")
      .then(res => {
        console.log("users", res);
        this.users = res.data.users;
        this.pages_count = res.data.pages_count;
      })
      .catch(error => console.log(error));
  },
  components: {
    Footer,
    Breadcrumbs,
    AppIcon
  }
};
</script>

<style lang="scss">
.users-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -16px;
  padding-top: 48px;
}

.user-item {
  margin: 16px 16px 96px 16px;
  padding: 64px 20px 10px 20px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  max-width: calc((100% / 4) - 32px);
  box-sizing: border-box;
  position: relative;

  &__avatar {
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
    display: flex;
    line-height: 1;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 24px;
    background-color: #c7c7c7;
    color: #fff;
    font-weight: bold;

    a {
      color: inherit;
      text-decoration: none;
      font-family: "Montserrat Bold", sans-serif;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s;
  }

  &:hover {
    .user-item__image {
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
