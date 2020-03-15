<template>
  <div>
    <div class="container">
      <h1>You've searched for: "{{this.$route.params.keyword}}"</h1>
      <section v-if="posts.length > 0" class="news-grid" id="section-news">
        <h2>News</h2>
        <div class="news-article-container grid grid--news">
          <router-link
            v-for="newsItem in posts"
            :to="'/news/' + newsItem.slug"
            :key="newsItem.id+newsItem.title"
            class="article-item grid-item"
          >
            <div class="smiley-img-wrap">
              <div class="smiley-img">
                <img
                  :src="$settings.images_path.news  +'m_'+newsItem.cover_image"
                  :alt="newsItem.title"
                  :title="newsItem.title"
                />
              </div>
            </div>
            <div class="article-descr">
              <div class="article-title">{{ newsItem.title }}</div>
              <div class="article-subtitle">{{ newsItem.description }}</div>
            </div>
          </router-link>
        </div>
        <div class="smiley-pagination" v-if="postsPagination > 1" style="width: 100%;">
          <paginate
            :page-count="postsPagination"
            :click-handler="paginateNews"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :prev-class="'smiley-pagination-back'"
            :next-class="'smiley-pagination-next'"
            :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>
      <section v-if="events.length > 0" id="section-events">
        <h2>Events</h2>
        <div class="news-article-container events-container grid grid--events">
          <router-link
            :to="'/talks/' + event.slug"
            class="talk-card grid-item"
            v-for="event in events"
            :key="'c-'+event.id"
          >
            <event-card :event="event" />
          </router-link>
        </div>
        <div class="smiley-pagination" v-if="eventsPagination > 1">
          <paginate
            :page-count="eventsPagination"
            :click-handler="paginateEvents"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :prev-class="'smiley-pagination-back'"
            :next-class="'smiley-pagination-next'"
            :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>
      <section v-if="organisations.length > 0" id="section-organisations">
        <h2>Organisations</h2>
        <div class="news-article-container grid grid--orgnisations">
          <div
            class="organisation-item grid-item"
            v-for="organisation in organisations"
            :key="organisation.title+'-org-archive'"
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
                <img v-else src="/img/group.svg" />
              </router-link>
            </div>
            <h2 class="organisation-item__title">
              <router-link :to="'/organisation/' + organisation.slug">{{ organisation.name }}</router-link>
            </h2>
            <p class="organisation-item__description">{{ organisation.description }}</p>
          </div>
        </div>
        <div class="smiley-pagination" v-if="organisationsPagination > 1">
          <paginate
            :page-count="organisationsPagination"
            :click-handler="paginateOrganisations"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :prev-class="'smiley-pagination-back'"
            :next-class="'smiley-pagination-next'"
            :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>
      <section v-if="users.length > 0" id="section-users">
        <h2>Users</h2>
        <div class="news-article-container grid grid--users">
          <div
            class="user-item grid-item"
            v-for="user in users"
            :key="user.full_name+'-org-archive'"
          >
            <div class="user-item__avatar">
              <router-link :to="'/users/' + user.slug">
                <img
                  :src="$settings.images_path.users + 's_' + user.avatar"
                  alt
                  title
                  class="user-item__image"
                  v-if="user.avatar !== null"
                />
                <span v-else>{{ user.display_name | filterAvatar }}</span>
              </router-link>
            </div>
            <h2 class="user-item__title">
              <router-link :to="'/users/' + user.slug">{{ user.display_name }}</router-link>
            </h2>
          </div>
        </div>
        <div class="smiley-pagination" v-if="usersPagination > 1">
          <paginate
            :page-count="usersPagination"
            :click-handler="paginateUsers"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :prev-class="'smiley-pagination-back'"
            :next-class="'smiley-pagination-next'"
            :container-class="'app-pagination'"
          >
            <span slot="breakViewContent">...</span>
          </paginate>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Footer from "@/components/Footer";

import EventCard from "@/components/events/Event-Card";

export default {
  data() {
    return {
      posts: [],
      postsPagination: 0,
      events: [],
      eventsPagination: 0,
      organisations: [],
      organisationsPagination: 0,
      users: [],
      usersPagination: 0
    };
  },
  methods: {
    paginateNews(pageNum) {
      axios
        .post("/search?posts-page=" + pageNum)
        .then(res => {
          this.posts = res.data.posts;
          this.postsPagination = res.data.posts_pages_count;

          let sectionOffset = document.getElementById("section-news").offsetTop;
          window.scrollTo({
            top: sectionOffset - 48,
            behavior: "smooth"
          });
        })
        .catch(err => {
          console.error("error", err);
        });
      // console.log(pageNum);
    },
    paginateEvents(pageNum) {
      axios
        .post("/search?events-page=" + pageNum)
        .then(res => {
          console.log("Events", res.data.events);
          this.events = res.data.events;
          this.eventsPagination = res.data.events_pages_count;

          let sectionOffset = document.getElementById("section-events")
            .offsetTop;
          window.scrollTo({
            top: sectionOffset - 48,
            behavior: "smooth"
          });
        })
        .catch(err => {
          console.error("error", err);
        });
      console.log(pageNum);
    },
    paginateOrganisations(pageNum) {
      axios
        .post("/search?organisations-page=" + pageNum)
        .then(res => {
          this.organisations = res.data.organisations;
          this.organisationsPagination = res.data.organisations_pages_count;

          let sectionOffset = document.getElementById("section-organisations")
            .offsetTop;
          window.scrollTo({
            top: sectionOffset - 48,
            behavior: "smooth"
          });
        })
        .catch(err => {
          console.error("error", err);
        });
      console.log(pageNum);
    },
    paginateUsers(pageNum) {
      axios
        .post("/search?users-page=" + pageNum)
        .then(res => {
          console.log(res.data.users);
          this.users = res.data.users;
          this.usersPagination = res.data.users_pages_count;

          let sectionOffset = document.getElementById("section-users")
            .offsetTop;
          window.scrollTo({
            top: sectionOffset - 48,
            behavior: "smooth"
          });
        })
        .catch(err => {
          console.error("error", err);
        });
      console.log(pageNum);
    }
  },
  mounted() {
    console.log("searching", this.$route.params.keyword);
    axios
      .post("/search", { keyword: this.$route.params.keyword })
      .then(res => {
        console.log(res);

        this.posts = res.data.posts;
        this.postsPagination = res.data.posts_pages_count;

        this.events = res.data.events;
        this.eventsPagination = res.data.events_pages_count;

        this.organisations = res.data.organisations;
        this.organisationsPagination = res.data.organisations_pages_count;

        this.users = res.data.users;
        this.usersPagination = res.data.users_pages_count;
      })
      .catch(error => console.log(error));
  },
  components: {
    Footer,
    EventCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/_homepage-news-item";
@import "@/scss/blocks/_homepage-news-grid";

@import "@/scss/sections/_talks-card";

.organisation-item {
  margin: 16px 16px 96px 16px;
  padding: 64px 20px 10px 20px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  text-align: center;
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

//users
.user-item {
  margin: 16px 16px 96px 16px;
  padding: 64px 20px 10px 20px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  text-align: center;
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

.smiley-pagination {
  padding-top: 24px;
  padding-bottom: 48px;
  text-align: center;
}

h1 {
  font: 700 34px/32px Montserrat Bold, sans-serif;
}

section {
  border-bottom: 5px solid #ffec00;

  h2 {
    font: 700 28px/32px Montserrat Bold, sans-serif;
  }
}

// Grid
.grid {
  display: grid !important;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-top: 48px;

  @at-root &--news {
    grid-template-columns: repeat(4, 1fr);

    .grid-item {
      max-width: 100%;

      .smiley-img-wrap .smiley-img {
        height: 255px;
        margin-bottom: 24px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    @include xxlMax {
      grid-template-columns: repeat(3, 1fr);
    }
    @include xlMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @at-root &--events {
    grid-template-columns: repeat(4, 1fr);

    .grid-item {
      max-width: 100%;
    }

    @include xxlMax {
      grid-template-columns: repeat(3, 1fr);
    }
    @include xlMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include mdMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @at-root &--orgnisations {
    grid-template-columns: repeat(4, 1fr);

    @include xxlMax {
      grid-template-columns: repeat(3, 1fr);
    }
    @include xlMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include smMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @at-root &--users {
    grid-template-columns: repeat(4, 1fr);

    @include xxlMax {
      grid-template-columns: repeat(3, 1fr);
    }
    @include xlMax {
      grid-template-columns: repeat(2, 1fr);
    }
    @include smMax {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>