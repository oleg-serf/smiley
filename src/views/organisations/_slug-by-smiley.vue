<template>
  <div>
    <!--    <Breadcrumbs :custom="true" :items="breadcrumbsItems"/>-->
    <div class="org-banner-img">
      <img src="/img/organization/org-header-img.jpg" alt="org-profile-img">
    </div>
    <div class="main-bg">
      <div class="organisation-main-info">
        <div class="org-text">
          <div class="organisation-grid container">
            <div class="grid-item grid-item--main">
              <div class="organisation-avatar">
                <div class="organisation-avatar__logo">
                  <img
                      v-if="organisation.logo != null"
                      :src="$settings.images_path.organisations + 'm_'+ organisation.logo"
                  />
                  <span v-else>{{ organisation.name | filterAvatar }}</span>
                </div>
              </div>
              <div class="organisation-info">
                <div class="organisation-name">{{ organisation.name }}</div>
                <div class="organisation-desc">
                  Non-Profit Organisation
                </div>
                <div class="organisation-location">
                  <template v-if="organisation.location != null">
                    {{ organisation.location }}
                  </template>
                  <template v-else>No location selected</template>
                </div>
                <div class="organisation-employees">
                  50-100 Employees
                </div>
                <div class="organisation-goal">
                  <template v-if="organisation.main_goal != null">
                    {{ organisation.main_goal.name }}
                  </template>
                </div>
              </div>
            </div>
            <div class="grid-item grid-item--socials">
              <template v-if="socials.length > 0">
                <ul class="organisation-social organisation-social--header">
                  <li>
                    <a href="#">
                      <i class="fa fa-heart-o"></i> Like
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-plus-circle"></i> Follow
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-share"></i> Share
                    </a>
                  </li>
                </ul>
              </template>
              <!-- template v-else>No networks connected</template> -->
              <div class="organisation-network">
                <VButton
                    class="projects-article__button message-btn"
                    size="height_45"
                    @click.native.prevent="openPage"
                    shape="round"
                >
                  <i class="fa fa-envelope-o"></i> Message
                </VButton>
                <VButton
                    class="projects-article__button"
                    size="height_45"
                    @click.native.prevent="openPage"
                    shape="round"
                >
                  Donate
                </VButton>
                <VButton
                    class="projects-article__button"
                    size="height_45"
                    @click.native.prevent="openPage"
                    shape="round"
                >
                  Volunteer
                </VButton>
              </div>
            </div>
          </div>
          <div class="tab">
            <button class="tablinks about-org active" @click="openTab('about-org')"><span>About</span></button>
            <button class="tablinks news" @click="openTab('news')"><span>News</span></button>
            <button class="tablinks projects" @click="openTab('projects')"><span>Projects</span></button>
            <button class="tablinks people" @click="openTab('people')"><span>People</span></button>
            <button class="tablinks events" @click="openTab('events')"><span>Events</span></button>
            <button class="tablinks videos" @click="openTab('videos')"><span>Videos</span></button>
            <button class="tablinks photos" @click="openTab('photos')"><span>Photos</span></button>
            <button class="tablinks reports" @click="openTab('reports')"><span>Reports</span></button>
          </div>

          <div id="about-org" class="tabcontent tabContentCommon active">
            <div class="about-img">
              <img :src="$settings.images_path.organisations + 'images/m_'+ organisation.organisation_images[0]"
                   v-if="organisation.organisation_images != null && organisation.organisation_images.length > 0"/>
            </div>
            <div class="about-text">
              <div class="about-title" style="display: flex; justify-content: space-between">
                <h3 style="font-family: 'Montserrat Bold', sans-serif; font-size: 22px">About</h3>
                <a href="#" style="color: #000000">See All</a>
              </div>
              <div class="about-additional-info">
                <i class="fa fa-info-circle"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc condimentum dolor quis arcu gravida, sed
                  placerat sem euismod. Quisque at pretium odio. Donec
                  vestibulum, nisi in malesuada convallis, eros nulla
                  egestas lectus, sed maximus sem elit ullamcorper elit.
                  Donec aliquam tortor sit amet.</p>
              </div>
              <div class="about-additional-info">
                <i class="fa fa-thumbs-up"></i>
                <p>
                  2,455,234 people like this
                </p>
              </div>
              <div class="about-additional-info">
                <i class="fa fa-info-circle"></i>
                <p>
                  2,455,234 people follow this
                </p>
              </div>
              <div class="about-additional-info">
                <i class="fa fa-globe" aria-hidden="true"></i>
                <p>
                  <a :href="organisation.website" target="_blank" style="color: #000000;">{{
                      organisation.website
                    }}</a>
                </p>
              </div>
              <div class="article-header__sharing">
                <div class="article-header__sharing-goals">
                  <span style="margin-right: 10px">
                    <i class="fa fa-circle-o" style="color: grey; margin-right: 1.2rem; font-size: 24px;"></i>
                    UN Goals:
                  </span>
                  <ul class="article-header__sharing-goals-badges">
                    <li><img src="/img/goals/goals-1.svg" alt="goal"/></li>
                    <li><img src="/img/goals/goals-2.svg" alt="goal"/></li>
                  </ul>
                </div>
                <div class="article-header__sharing-social about-additional-info">
                  <i class="fa fa-users"></i>
                  <ul>
                    <li>
                      <a :href="shareLink('twitter')" target="_blank">
                        <img src="/img/social/twitter.svg" alt="twitter"/>
                      </a>
                    </li>
                    <li>
                      <a :href="shareLink('instagram')" target="_blank">
                        <img src="/img/social/insta.svg" alt="instagram"
                        /></a>
                    </li>
                    <li>
                      <a :href="shareLink('facebook')" target="_blank">
                        <img src="/img/social/fb.svg" alt="facebook"
                        /></a>
                    </li>
                    <li>
                      <a :href="shareLink('youtube')" target="_blank">
                        <img src="/img/social/youtube.svg" alt="youtube"
                        /></a>
                    </li>
                  </ul>
                </div>
                <div class="about-additional-info">
                  <div class="article-header__sharing-goals">
                  <div style="display: flex">
                    <i class="fa fa-handshake-o" style="color: grey; font-size: 24px;"></i>Support Needed:
                    <ul class="main-menu">
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Sales
                        </router-link>
                      </li>
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Management
                        </router-link>
                      </li>
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Designers
                        </router-link>
                      </li>
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Engineering
                        </router-link>
                      </li>
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Entrepreneurship
                        </router-link>
                      </li>
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Finance
                        </router-link>
                      </li>
                      <li class="main-menu__item">
                        <router-link
                            class="main-menu__link"
                            :to="{}">Fundraising
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="news" class="tabcontent tabContentCommon">
            <div class="about-img">
              <img :src="$settings.images_path.organisations + 'images/m_'+ organisation.organisation_images[0]"
                   v-if="organisation.organisation_images != null && organisation.organisation_images.length > 0"/>
            </div>
            <div class="about-text">
              <div class="about-title" style="display: flex; justify-content: space-between">
                <h3 style="font-family: 'Montserrat Bold', sans-serif; font-size: 22px">News</h3>
                <a href="#" style="color: #000000">Read More</a>
              </div>
              <div class="about-additional-info">
                <i class="fa fa-info-circle"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc condimentum dolor quis arcu gravida, sed
                  placerat sem euismod. Quisque at pretium odio. Donec
                  vestibulum, nisi in malesuada convallis, eros nulla
                  egestas lectus, sed maximus sem elit ullamcorper elit.
                  Donec aliquam tortor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc condimentum dolor quis arcu gravida, sed
                  placerat sem euismod. Quisque at pretium odio. Donec
                  vestibulum, nisi in malesuada convallis, eros nulla
                  egestas lectus, sed maximus sem elit ullamcorper elit.
                  Donec aliquam tortor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc condimentum dolor quis arcu gravida, sed
                  placerat sem euismod. Quisque at pretium odio. Donec
                  vestibulum, nisi in malesuada convallis, eros nulla
                  egestas lectus, sed maximus sem elit ullamcorper elit.
                  Donec aliquam tortor sit amet.</p>
              </div>
              <div class="article-header__sharing">
                <div class="article-header__sharing-goals">
                  <span style="margin-right: 10px">
                    <i class="fa fa-circle-o" style="color: grey; margin-right: 1.2rem; font-size: 24px;"></i>
                    UN Goals:
                  </span>
                  <ul class="article-header__sharing-goals-badges">
                    <li><img src="/img/goals/goals-1.svg" alt="goal"/></li>
                    <li><img src="/img/goals/goals-2.svg" alt="goal"/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="projects" class="tabcontent tabContentCommon">
            <h3>Projects</h3>
          </div>
          <div id="people" class="tabcontent tabContentCommon">
            <h3>People</h3>
          </div>
          <div id="events" class="tabcontent tabContentCommon">
            <h3>Events</h3>
          </div>
          <div id="videos" class="tabcontent tabContentCommon">
            <h3>Videos</h3>
          </div>
          <div id="photos" class="tabcontent tabContentCommon">
            <h3>Photos</h3>
          </div>
          <div id="reports" class="tabcontent tabContentCommon">
            <h3>Reports</h3>
          </div>
        </div>
      </div>
      <template>
        <div class="container">
          <section
              class="section"
              id="section-news"
          >
            <BottomBorderedTitleWithSearch
                :title="'<b>Latest Activity | </b>News'"
                :with-search="true"
                :search-expandable="true"
            ></BottomBorderedTitleWithSearch>
            <NewsGallery
                :news="posts"
                with-slider
                :prev-button-left="-60"
                :next-button-right="-60"
            ></NewsGallery>
          </section>
        </div>
      </template>
      <Subscribe/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Subscribe from "@/components/forms/Subscribe";
import BottomBorderedTitleWithSearch from "@/components/BottomBorderedTitleWithSearch";
import NewsGallery from "@/components/news/NewsGallery";
import AppIcon from "@/components/AppIcon";
import {VButton} from "@/components/app";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsCard from "@/components/cards/NewsCard";
import EventCard from "@/components/cards/EventCard";
import Footer from "@/components/Footer";

export default {
  name: "OrganisationProfile",
  components: {
    Subscribe,
    BottomBorderedTitleWithSearch,
    NewsGallery,
    VButton,
    Breadcrumbs,
    AppIcon,
    NewsCard,
    EventCard,
    Footer
  },
  data() {
    return {
      breadcrumbsItems: [
        {
          path: '/organisations',
          meta: {
            title: 'Organisations'
          }
        }
      ],
      photos: true,
      organisation: {
        followers: 0,
        other_goals: []
      },
      is_owner: false,
      is_mobile: false,

      following: false,
      posts: [],
      events: [],
      Toast: () => {
      },
      activity: "projects",
      organisationPost: "",
      feed: {
        projects: [],
        news: [],
        news_count: 0,
        hubs: []
      },
      socials: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 1.2,
        spaceBetween: 30,
        mousewheel: true
      },
      itemsSwiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 4,
        spaceBetween: 15,
        mousewheel: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            centeredSlides: true
          },
          480: {
            slidesPerView: 1.3
          },
          640: {
            slidesPerView: 1.5
          }
        }
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters["user/isAuthenticated"];
    },
    domain() {
      return process.env.VUE_APP_DOMAIN;
    }
  },
  methods: {
    openTab(tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      if (document.getElementById(tabName)) {
        document.getElementById(tabName).style.display = "flex";
        let targetIndex = -1
        for (const [key, value] of Object.entries(tablinks)) {
          if (value.classList.value.includes(tabName)) {
            targetIndex = key
            break;
          }
        }
        tablinks[targetIndex].className += " active";
        tabcontent[targetIndex].className += " active";
      }
    },
    follow() {
      axios
          .post("/organisations/" + this.$route.params.slug + "/follow")
          .then(result => {
            if (result.data.success) {
              this.Toast.fire({icon: "info", title: result.data.message});

              axios
                  .get("/organisations/" + this.$route.params.slug)
                  .then(res => {
                    this.organisation = res.data.organisation;
                    this.following = res.data.following;
                  })
                  .catch(error => console.error("Error", error));
            }
          })
          .catch(err => {
            // TODO: add error
          });
    },
    unfollow() {
      axios
          .post("/organisations/" + this.$route.params.slug + "/un-follow")
          .then(result => {
            if (result.data.success) {
              this.Toast.fire({icon: "info", title: result.data.message});

              axios
                  .get("/organisations/" + this.$route.params.slug)
                  .then(res => {
                    this.organisation = res.data.organisation;
                    this.following = res.data.following;
                  })
                  .catch(error => console.error("Error", error));
            }
          })
          .catch(err => {
            // TODO: add error
          });
    },
    addOrganisationPost() {
      this.$swal
          .fire({
            title: "Add Organisation Post",
            text: "Please note, that min length should be 32 characters",
            input: "textarea",
            inputAttributes: {
              autocapitalize: "off",
              placeholder: ""
            },
            showCancelButton: true,
            confirmButtonText: "Add post",
            showLoaderOnConfirm: true
          })
          .then(result => {
            if (result.value && result.value.length > 31) {
              axios
                  .post("/organisations/posts", {content: result.value})
                  .then(res => {
                    axios
                        .get("/organisations/" + this.$route.params.slug + "/posts")
                        .then(res => {
                          this.feed.news = res.data.organisation_posts;
                        });
                    Toast.fire({icon: "success", title: "Post added"});
                  })
                  .catch(error => {
                    console.error(error);
                  });
            }
          });
    },
    dateAgo(date) {
      const currentStamp = Date.now();
      const realDate = this.$dayjs(date);
      const postStamp = this.$dayjs(date).unix() * 1000;
      const dateDiff = currentStamp - postStamp;
      const days = dateDiff / (1000 * 3600 * 24);

      const result = Math.floor(days);

      const append = result == 1 ? "day" : "days";

      let time = "";

      if (result == 0) {
        time = "Today";
      } else if (result < 28) {
        time = result + " " + append + " ago";
      } else {
        const month = realDate.date();
        const day = realDate.month() + 1;
        const year = realDate.year();
        time = day + "-" + month + "-" + year;
      }

      return time;
    },
    shareLink(type) {
      let result = "";
      const title = encodeURI(this.organisation.title);
      const url = process.env.VUE_APP_DOMAIN + encodeURI(this.$route.path);
      switch (type) {
        case "facebook":
          result = `https://www.facebook.com/sharer.php?u=${url}&t=${title}`;
          break;
        case "twitter":
          result = `http://twitter.com/share?text=${title}&url=${url}`;
          break;
        case "linkedin":
          result = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
          break;
      }

      return result;
    },
    handleResize() {
      this.is_mobile = window.innerWidth >= 768 ? false : true;
      if (window.innerWidth >= 768) {
        this.is_shown = true;
      }
    }
  },
  mounted() {

    this.Toast = this.$swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener("mouseenter", this.$swal.stopTimer);
        toast.addEventListener("mouseleave", this.$swal.resumeTimer);
      }
    });

    axios
        .get("/organisations/" + this.$route.params.slug + "/admin-created")
        .then(response => {
          console.log(
              `Organisation Loaded: ${this.$route.params.slug}`,
              response
          );

          this.organisation = response.data.organisation;
          this.feed.news = response.data.organisation_posts;
          this.is_owner = response.data.is_owner;

          const metaPayload = {
            meta: response.data.meta,
            title: response.data.organisation.name
          }

          this.$store.dispatch('meta/setMeta', metaPayload);

          this.breadcrumbsItems.push(
              {
                meta: {
                  title: response.data.organisation.name
                }
              }
          );


          this.posts = response.data.news;
          this.events = response.data.events;

          if (response.data.organisation.facebook != null) {
            this.socials.push({
              name: "facebook",
              value: response.data.organisation.facebook
            });
          }
          if (response.data.organisation.instagram != null) {
            this.socials.push({
              name: "instagram",
              value: response.data.organisation.instagram
            });
          }
          if (response.data.organisation.twitter != null) {
            this.socials.push({
              name: "twitter",
              value: response.data.organisation.twitter
            });
          }
          if (response.data.organisation.linkedin != null) {
            this.socials.push({
              name: "linkedin",
              value: response.data.organisation.linkedin
            });
          }
          if (response.data.organisation.google != null) {
            this.socials.push({
              name: "google",
              value: response.data.organisation.google
            });
          }

          this.following = response.data.following;

          document.title = response.data.organisation.name + " | Smiley Movement";
        })
        .catch(error => console.error("Error", error));
  },
  created() {
    // MAKE ABOUT TAB ACTIVE
    this.openTab('about-org')
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
.main-bg {
  padding: 0 60px;
  background-color: #ffffff;
}
.main-menu {
  font-family: "Gotham Light", sans-serif;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  &__item {
    position: relative;
    padding: 0 1rem;
    margin: .1rem 0;
    line-height: 20px;

    &:not(:last-child) {
      border-right: 2px solid yellow;
    }
  }

  &__link {
    color: #000;
    font-size: 1.2rem;
    border-bottom: 1px solid transparent;
    transition: .2s;

    &:hover {
      color: #000;
      text-decoration: none;
      border-color: yellow
    }

    /*&.router-link-exact-active {
      color: #000;
      border-color: yellow
    }*/
  }
}
/* Style the tab */
.tab {
  overflow: hidden;
  //padding: 14px 0;
  display: flex;
  justify-content: space-between;
  //margin: 0 24px;
  @include xlMax {
    flex-wrap: wrap;
    overflow: unset;
  }
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  cursor: pointer;
  //padding: 0;
  //margin: 0 16px;
  transition: 0.3s;
  font-size: 20px;
  font-family: "Montserrat Bold", sans-serif;
  //background-color: #555;
  //color: white;
  //float: left;
  //border: none;
  //outline: none;
  //cursor: pointer;
  padding: 14px 32px;
  //font-size: 17px;
  width: 25%;
}

/* Change background color of buttons on hover */
.tab button:hover {
  span {
    border-bottom: 2px solid yellow;
  }
}

/* Create an active/current tablink class */
.tab button.active {
  span {
    border-bottom: 2px solid yellow;
  }

  -webkit-box-shadow: 0 8px 13px -7px grey;
  -moz-box-shadow: 0 8px 13px -7px grey;
  box-shadow: 0 8px 13px -7px grey;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 10px 40px;
  border-top: none;
  //color: white;
  //display: none;
  //padding: 100px 20px;
  //height: 100%;

  &.active {
    display: block;
    -webkit-box-shadow: 0 8px 13px -7px grey;
    -moz-box-shadow: 0 8px 13px -7px grey;
    box-shadow: 0 8px 13px -7px grey;

    border-radius: 20px;
    //background-color: blue;
    &.tabContentCommon {
      display: flex;
      flex-wrap: wrap;

      .about-text {
        .about-additional-info {
          display: flex !important;
          align-items: baseline !important;
          justify-content: right !important;

          i {
            font-size: 24px !important;
            color: grey !important;
            margin-right: 1.5rem !important;
          }
        }
      }

      .about-img {
        width: 46%;
        margin-right: 2rem;
        @include lgMax {
          width: 100%;
        }

        img {
          width: 100%;
          border-radius: 20px;
        }
      }

      .about-text {
        width: 50%;
        @include lgMax {
          width: 100%;
          margin-top: 2rem;
        }
      }
    }

    .article-header__sharing {
      display: flex;
      flex-direction: column;
      @include smMax {
        flex-direction: column;
      }

      .article-header__sharing-goals {
        display: flex;
        align-items: center;

        font: {
          family: "Gotham Medium";
          size: 20px;
        }
        line-height: 27px;

        .article-header__sharing-goals-badges {
          display: flex;
          align-items: center;

          ul {
            margin: 0;
          }

          li {
            img {
              width: 22px;
            }

            margin-right: 10px;
          }
        }
      }

      .article-header__sharing-social {
        margin-top: 10px;
        @include smMax {
          margin-left: 0px;
          margin-top: 20px;
        }

        display: flex;
        align-items: center;
        font-size: 20px;

        span {
          font-size: 22px;
        }

        ul {
          display: flex;

          li {
            margin-right: 10px;

            img {
              width: 22px;
            }
          }
        }

        span {
          font: {
            family: "Gotham Book";
            size: 22px;
          }
          line-height: 24px;
        }
      }
    }
  }
}

.org-banner-img {
  height: 370px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.organisation-grid {
  display: grid;
  grid-template-columns: 64% 36%;
  grid-gap: 1px;

  @include xlMax {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mdMax {
    display: flex;
    flex-direction: column;
  }

  .grid-item {
    padding: 25px;
    padding-top: 10px;
    box-sizing: border-box;
    // border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    &.grid-item--full-width {
    }

    &.grid-item--top-panel {
      grid-column: 1 / span 3;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      @include xlMax {
        grid-column: 1 / span 2;
      }

      @include lgMax {
        flex-wrap: nowrap;
      }

      @include smMax {
        flex-wrap: wrap;
      }

      .button {
        margin: 5px !important;
      }
    }

    &.grid-item--main {
      display: flex;
      flex-wrap: wrap;

      @include lgMax {
        flex-direction: column;
      }
    }

    &.grid-item--socials {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @include lgMax {
        border-right: 0;
      }

      @include smMax {
        .organisation-social {
          li {
            &:first-child {
              width: 100%;
            }
          }
        }
      }
    }

    &.grid-item--support {
      position: relative;

      img {
        max-width: 100%;
        height: auto;
      }

      i {
        position: absolute;
        bottom: 15px;
        right: 15px;
        font-size: 32px;
      }

      @include xlMax {
        grid-column: 1 / span 2;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
      }
    }

    &:last-child {
      border-right: none;
    }

    .title {
      @include font-size(1.2rem);
      font-weight: bold;
      font-family: "Montserrat Bold", sans-serif;
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }

    .content {
      @include font-size(1rem);
      font-family: "Montserrat Regular", sans-serif;
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }

    .button {
    }
  }
}

.organisation-social {
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-top: -5px;
  font-size: 1rem;
  line-height: 1;
  align-items: center;
  font-family: "Montserrat Regular", sans-serif;
  margin-bottom: 0px;

  &.organisation-social--header {
    justify-content: space-around;

    a {
      display: flex;
      width: 36px;
      height: 36px;
      line-height: 1;
      align-items: center;
      color: #000000;
      justify-content: center;
      padding: 2px;
      @include font-size(1.2rem);
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        color: #393939;
        text-decoration: none;
      }
    }
  }

  li {
    margin: 5px;
  }
}

.organisation-network {
  font-family: "Montserrat Regular", sans-serif;
  margin: 25px -25px 0px;
  padding: 25px 25px 0;
  display: flex;
  justify-content: space-between;

  .v-button {
    height: 40px;
    font-size: 16px;
    line-height: 42px;

    &.message-btn {
      background: #ffffff;
      border: 1px solid;
    }
  }

  .network-row {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    @include lgMax {
      flex-direction: column;
    }
  }

  .network-row__title {
    font-family: "Montserrat SemiBold", sans-serif;
    min-width: 100px;
  }

  .network-row__value {
    i {
      width: 24px;
      margin-right: 10px;
      text-align: center;
    }

    a {
    }
  }
}

.button {
  font-family: "Montserrat SemiBold", sans-serif;
  margin-top: 24px;
  width: 100%;
  min-width: 100px;
  max-width: 240px;
  background-color: #7d8494;
  display: block;
  padding: 0 12px;
  text-decoration: none !important;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  height: 46px;
  line-height: 46px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;

  &.button--primary {
    background-color: #f4ed3b;
    color: #000;
  }

  &.button--edit {
    max-width: 130px;
    min-width: auto;
    width: 100%;
  }

  &.button--primary {
    background-color: #f4ed3b;
    color: #000;

    &.disabled {
      pointer-events: none;
      background-color: rgba(0, 0, 0, .3);
    }

    &:hover {
      background-color: #e0db36;
      color: #000;
    }
  }

  &:hover {
    background-color: #535763;
  }
}

.organisation-avatar {
  margin-bottom: 24px;
  margin-top: -204px;
}

.organisation-avatar__logo {
  margin-top: 35px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 14px solid white;
  overflow: hidden;
  font-family: "Montserrat Bold", sans-serif;
  text-transform: uppercase;
  @include font-size(2rem);
  letter-spacing: 4px;
  color: #393939;
  background-color: #eeb400;
  text-align: center;
  line-height: 1;

  @include mdMax {
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.organisation-info {
  color: #000000;

  .organisation-name {
    font-family: "Montserrat Bold", sans-serif;
  }

  @include font-size(1.15rem);
}

.organisation-name {
  @include font-size(1.5rem);
  @include margin-bottom(.3rem);
  font-family: "Montserrat Bold", sans-serif;
}

.organisation-job {
  @include margin-bottom(1rem);
  font-family: "Montserrat SemiBold", sans-serif;
}

.organisation-data {
  display: flex;
  flex-wrap: wrap;
  @include font-size(1.3rem);
  font-family: "Montserrat SemiBold", sans-serif;

  .organisation-data__column {
    width: 50%;
    box-sizing: border-box;
    padding-left: 25px;

    &:first-child {
      padding-left: 0px;
      padding-right: 25px;

      @include smMax {
        margin-bottom: 12px;
      }
    }

    @include smMax {
      width: 100%;
      padding: 0px;
    }
  }
}

.organisation-additional {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
  width: 100%;

  @include lgMax {
    display: block !important;
  }

  .grid-item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &.align-left {
      align-items: flex-start;
    }

    &.align-right {
      align-items: flex-end;
    }

    &.grid-item--full-width {
      grid-column: 1 / span 2;
      align-items: center;

      .item-holder {
        max-width: 1530px;
      }
    }

    @include lgMax {
      align-items: flex-start !important;
      width: 100%;
      grid-column: 1 / span 2;

      .item-holder {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .item-holder {
    width: 100%;
    box-sizing: border-box;
    padding: 25px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 100%;

    &.item-holder--gallery {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;

      img {
        width: 100%;
        height: auto;
      }
    }

    &:last-child {
      border: none;
    }

    .title {
      @include font-size(1.2rem);
      font-weight: bold;
      font-family: "Montserrat Bold", sans-serif;
      color: #393939;
      @include padding-bottom(1rem);
      text-transform: uppercase;
      display: flex;
      align-items: center;

      img {
        max-width: 34px;
        max-height: 34px;
        height: auto;
        margin-right: 24px;
      }

      span {
        font-family: "Montserrat Regular", sans-serif;
        @include font-size(1rem);

        padding-left: 8px;
        padding-right: 8;
      }
    }
  }
}

.activities {
  .activities__navigation {
    display: flex;

    @include smMax {
      overflow-x: scroll;
    }

    li {
      &:not(:last-child) {
        margin-right: 18px;
      }

      &.active {
        button {
          border-bottom: 2px solid;
        }

        span {
          background-color: #f4ed3b;
        }
      }
    }

    button {
      color: #000;
      padding: 25px 30px;
      text-decoration: none;
      display: flex;
      align-items: center;
      border: none;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      white-space: nowrap;
      justify-content: center;
      font-family: "Montserrat Bold", sans-serif;
      font-weight: bold;
      cursor: pointer;
    }

    span {
      margin-left: 16px;
      width: 20px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.1);
      line-height: 1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .organisations-social {
    color: #393939;
  }
}

.activities__tab {
  padding-top: 24px;
}

.no-posts {
  .no-posts__title {
    @include font-size(1.2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    color: #000;
  }

  .no-posts__text {
    @include font-size(1rem);
    font-family: "Montserrat Regular", sans-serif;
    color: #000;
    margin-top: 0px;
  }
}

.support {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @include smMax {
    grid-template-columns: 1fr;
  }

  .support__item {
    padding-left: 48px;
    position: relative;

    &::before {
      content: "";
      width: 24px;
      height: 24px;
      display: block;
      position: absolute;
      left: 0px;
      top: 5px;
      background-image: url("/img/checked@2x.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  .support__category {
    @include font-size(1rem);
    font-family: "Montserrat SemiBold", sans-serif;
    color: #000;
  }

  .support__subcategory {
    @include font-size(1rem);
    font-family: "Montserrat Regular", sans-serif;
    color: #000;
  }
}

.url-share {
  display: flex;
  padding-top: 24px;

  @include smMax {
    flex-direction: column;
  }

  input {
    padding: 5px 15px;
    min-width: 350px;
    margin-right: 15px;

    @include smMax {
      min-width: auto;
    }
  }

  button {
    margin-top: 0px;
  }
}

.organisation-article {
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px dashed #c7c7c7;

  .organisation-article__date {
    @include font-size(1rem);
    font-family: "Montserrat SemiBold", sans-serif;
    margin-bottom: 0px;
  }

  &::v-deep p {
    font-family: "Montserrat Regular";
    line-height: 1.35;
    @include font-size(1rem);
    padding-top: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
  }
}

.goals {
  // margin: 0px -30px -26px -31px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 0px;

  li {
    // margin: -1px;
    // border: 1px solid #393939;
    font-size: 0px;
    line-height: 1;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.volunteer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.volunteer-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  margin: -15px;

  li {
    margin: 15px;
  }

  .button {
    min-width: 150px;
    width: 100%;
  }
}

.section {
  &__title {
    font-family: "Montserrat SemiBold";
    @include font-size(2rem);
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
}

.grid {
  &--news,
  &--events,
  &--projects {
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

  &--organisations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @include lgMax {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.about {
  &::v-deep {
    font-size: 19px;
    line-height: 1.85;
  }

  &--columns {
    column-count: 2;
    column-gap: 60px;
  }

  @include margin-top(2.5rem);

  @include lgMax {
    column-count: 1;
  }

  img {
    width: 100%;
    height: auto;
    @include margin-bottom(1.5rem);
  }
}
</style>
