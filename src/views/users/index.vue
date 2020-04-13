<template>
  <div class="members-bg">
    <information-hero>
      <template v-slot:title>Connect with other members</template>
      <template v-slot:content>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem aperiam praesentium architecto cumque illum ipsam fugit asperiores magnam est id unde, doloribus quo magni. Nihil suscipit omnis voluptate sint.</p>
      </template>
    </information-hero>
    <div class>
      <div class="container">
        <div style="height: 75px;"></div>
        <section class="users-grid">
          <div class="user-item" v-for="user in users" :key="user.full_name+'-org-archive'">
            <div class="user-item__avatar">
              <router-link :to="'/users/' + user.slug">
                <img
                  :src="$settings.images_path.users + 's_' + user.avatar"
                  alt
                  title
                  class="user-item__image"
                  ccv-if="user.avatar !== null"
                  v-if="user.avatar != null"
                />
                <span v-else>{{ user.initials }}</span>
              </router-link>
            </div>
            <h2 class="user-item__title">
              <router-link :to="'/users/' + user.slug">{{ user.name }}</router-link>
            </h2>
            <!-- <ul class="user__social">
              <template v-for="(social, index) in socials">
                <li v-if="user[social] != null" :key="'user-social-'+index">
                  <a :href="user[social]" target="_blank">
                    <app-icon :name="social" />
                  </a>
                </li>
              </template>
            </ul>-->
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

import AppIcon from "@/components/AppIcon";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      users: [],
      pages_count: 0,
      socials: ["facebook", "linkedin", "google", "instagram", "twitter"]
    };
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
    InformationHero,
    Breadcrumbs,
    AppIcon,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.members-bg {
  background-color: #f4f6f9;
}

.users-grid {
  // display: flex;
  // flex-wrap: wrap;
  // margin: 0px -16px;
  // padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
}

.user-item {
  border: 1px solid #d8d8d8;
  padding: 20px 5px;
  background-color: #fff;
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 15px 29px -23px rgba(0, 0, 0, 0.3);
  }

  .user-item__avatar {
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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .user-item__title {
    @include font-size(1.1rem);
    font-family: "Montserrat SemiBold", sans-serif;
    text-align: center;

    a {
      text-decoration: none;
      color: #393939;
    }
  }
}

// .user-item {
//   margin: 16px 16px 96px 16px;
//   padding: 64px 20px 10px 20px;
//   border: 1px solid #c7c7c7;
//   border-radius: 4px;
//   text-align: center;
//   width: 100%;
//   max-width: calc((100% / 4) - 32px);
//   box-sizing: border-box;
//   position: relative;
//   background-color: #fff;

//   &__avatar {
//     border-radius: 50%;
//     background: #c7c7c7;
//     width: 128px;
//     height: 128px;
//     // margin: -70px auto 0px auto;
//     position: absolute;
//     left: 50%;
//     top: 0px;
//     overflow: hidden;
//     transform: translate(-50%, -50%);
//     display: flex;
//     line-height: 1;
//     justify-content: center;
//     align-items: center;
//     text-transform: uppercase;
//     font-size: 24px;
//     background-color: #c7c7c7;
//     color: #fff;
//     font-weight: bold;

//     a {
//       color: inherit;
//       text-decoration: none;
//       font-family: "Montserrat Bold", sans-serif;
//     }
//   }

//   &__image {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
//     transition: transform 0.4s;
//   }

//   &:hover {
//     .user-item__image {
//       transform: scale(1.1);
//     }
//   }

//   &__title {
//     font: 700 22px/28px "Montserrat Bold", sans-serif;

//     a {
//       color: unset;
//       text-decoration: none;
//     }
//   }

//   &__description {
//     font: 400 16px/24px "Muli", sans-serif;
//   }
// }
</style>
