<template>
  <div>
    <breadcrumbs />

    <section class="upcoming-talk-section">
      <div class="upcoming-talk-wrap">
        <div class="title-colored-block">
          <div class="smiley-talks-main-title">
            <img src="img/homepage/smiley-main-title.svg" alt="smiley talks" />
            <p>Talks</p>
          </div>
          <h2 class="upcoming-block-register">Register for a Smiley Talk!</h2>
          <p
            class="upcoming-block-descr"
          >Smiley Talks bring expert speakers and members of the public together in a unique, memorable experience.</p>
        </div>

        <div class="upcoming-info-block container">
          <h2 class="upcoming-info-title">Upcoming smiley talk</h2>

          <div class="talk-card-wrap" v-if="topEvent">
            <router-link :to="'/talks/' + topEvent.slug" class="talk-card talk-card--featured">
              <div class="pic-wrap">
                <div class="smiley-img-wrap">
                  <div class="smiley-img">
                    <img
                      :src="$settings.images_path.events +'l_'+topEvent.cover_image"
                      :alt="topEvent.title"
                      sizes="(max-width: 1160px) 100vw, 1160px"
                      :srcset="
$settings.images_path.events + `s_`+topEvent.cover_image+` 150w,` +
$settings.images_path.events + `m_`+topEvent.cover_image+` 360w,` +
$settings.images_path.events + `l_`+topEvent.cover_image+` 1160w`
                     "
                    />
                  </div>
                </div>
                <!-- <label class="talk-card-checkbox">
                  <input type="checkbox" name="talk-card-checkbox">
                  <span class="talk-card-checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91007 17.4958L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.131 10.4159 20.0892 10.7863 19.6178L21.7863 5.6178C22.1275 5.18353 22.0521 4.55488 21.6178 4.21366C21.1835 3.87245 20.5549 3.94789 20.2137 4.38216L9.91007 17.4958Z" fill="#fff"/>
                    </svg>
                  </span>
                </label>-->
              </div>
              <div class="info-wrap">
                <div class="info-border">
                  <h2>{{topEvent.title}}</h2>
                  <p>{{topEvent.short_description}}</p>
                  <div class="date-and-time-wrap">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM4 10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6H5C4.44772 6 4 6.44772 4 7V10Z"
                        fill="#d21217"
                      />
                    </svg>
                    <div class="date-and-time-info">
                      <div
                        class="date-info"
                      >{{topEvent.date | formatDate('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}) | stripComas}}</div>
                      <div
                        class="time-info"
                      >{{topEvent.time_start | formatTime}} - {{topEvent.time_end | formatTime}}</div>
                    </div>
                  </div>
                  <div class="location-info">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C16.9706 2 21 5.98572 21 10.9024C21 14.1559 18.2777 17.5958 12.9483 21.3432L12 22L11.4278 21.6051C5.85042 17.7559 3 14.2315 3 10.9024C3 5.98572 7.02944 2 12 2ZM12 3.9783C8.13401 3.9783 5 7.07831 5 10.9024C5 13.3049 7.29672 16.2364 12 19.5818C16.7033 16.2364 19 13.3049 19 10.9024C19 7.07831 15.866 3.9783 12 3.9783ZM12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z"
                        fill="#d21217"
                      />
                    </svg>
                    <div>{{topEvent.location}}</div>
                  </div>
                </div>
                <!-- TODO: Rework attendees -->

                <div
                  class="attending-info"
                  v-if="topEvent.attendees_random.length !== 0"
                  style="display: none;"
                >
                  <span>Attending:</span>
                  <div class="attending-wrap">
                    <div
                      class="attendees-avatar"
                      :class="{next: index > 0}"
                      v-for="(attendees, index) in topEvent.attendees_random"
                      :key="attendees.id"
                    >
                      <img src="img/event/attendees-avatar-1.jpg" alt="avatar" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="talk-main-section">
      <div class="talk-sidebar">
        <div class="holder">
          <p class="log-sign-req" v-if="!auth">
            To search and filter please
            <a href="#">log in</a> or
            <a href="#">sign up</a>
          </p>
          <div class="smiley-notify" v-if="auth">
            <div
              class="smiley-notify-text"
            >Love our Smiley Talks? We’ll notify you when we have one coming up</div>
            <label class="notify-checkbox">
              <input type="checkbox" name="notify-checkbox" />
              <span class="notify-checkmark"></span>
            </label>
          </div>
          <!-- TODO: - remove hide -->
          <div class="location-search">
            <label for="location">
              Location
              <input
                type="text"
                name="location"
                id="location"
                placeholder="exemple: Brighton"
              />
            </label>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z"
                fill="#1A1A1A"
              />
            </svg>
          </div>
          <p class="location-distance">
            within
            <a href="#">100 miles</a> of
            <a href="#">London, GB</a>
          </p>
          <div class="search-by-keyword">
            <label for="keyword-search">
              <input
                type="text"
                name="keyword-search"
                id="keyword-search"
                placeholder="search by keyword"
                v-model="filter.keywords"
              />
            </label>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z"
                fill="#1A1A1A"
              />
            </svg>
          </div>
          <div class="select-period">
            <label for="time-period">
              <input
                type="date"
                name="time-period_start"
                id="time-period_"
                placeholder="Date start"
                v-model="filter.date_start"
              />
              <input
                type="date"
                name="time-period_end"
                id="time-period_"
                placeholder="Date end"
                v-model="filter.date_end"
              />
            </label>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 22C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5ZM8 17H4V19C4 19.5523 4.44772 20 5 20H8V17ZM14 17H10V20H14V17ZM20 17H16V20H19C19.5523 20 20 19.5523 20 19V17ZM8 12H4V15H8V12ZM14 12H10V15H14V12ZM20 12H16V15H20V12ZM6 6H5C4.44772 6 4 6.44772 4 7V10H20V7C20 6.44772 19.5523 6 19 6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V6H8V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V6Z"
                fill="#1A1A1A"
              />
            </svg>
          </div>
          <div class="checkboxes-block">
            <p>Choose {{ currentCategory }}:</p>
            <filter-checkbox
              v-for="goal in goals"
              :key="'goals-' + goal.id"
              :item="goal"
              v-model="filter.goals"
            />
          </div>
          <div class="talk-sidebar-btns">
            <button class="simple-search-btn">Simple search</button>
            <button class="apply-filters-btn" @click="applyFilters">Apply filters</button>
            <button class="reset-filters-btn" @click="resetFilters">Reset filters</button>
            <button class="advanced-search-btn">Advanced search</button>
          </div>
        </div>
      </div>

      <div class="talk-content">
        <div class="selected-search-tags">
          <!-- FILTER  -->
          <ul>
            <li v-for="(id, index) in filter.goals" :key="'top-f-'+index">
              <a href="#" @click.prevent="removeFilter(id)">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.41413 8.00001L12.7071 4.70701C13.0981 4.31601 13.0981 3.68401 12.7071 3.29301C12.3161 2.90201 11.6841 2.90201 11.2931 3.29301L8.00013 6.58601L4.70713 3.29301C4.31613 2.90201 3.68413 2.90201 3.29313 3.29301C2.90213 3.68401 2.90213 4.31601 3.29313 4.70701L6.58613 8.00001L3.29313 11.293C2.90213 11.684 2.90213 12.316 3.29313 12.707C3.48813 12.902 3.74413 13 4.00013 13C4.25613 13 4.51213 12.902 4.70713 12.707L8.00013 9.41401L11.2931 12.707C11.4881 12.902 11.7441 13 12.0001 13C12.2561 13 12.5121 12.902 12.7071 12.707C13.0981 12.316 13.0981 11.684 12.7071 11.293L9.41413 8.00001Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </a>
              {{ goals.find(item => item.id == id).name }}
            </li>
          </ul>
        </div>

        <carousel
          class="talk-cards-container"
          v-if="showCarousel && eventList"
          :nav="false"
          :items="3"
          :margin="19"
          :autoplayHoverPause="true"
          :loop="true"
          :autoplay="true"
          :autoplayTimeout="5000"
          :autoWidth="true"
        >
          <div class="talk-card-wrap" v-for="event in eventList" :key="'c-'+event.id">
            <router-link :to="'/talks/' + event.slug" class="talk-card">
              <event-card :event="event" />
            </router-link>
          </div>
        </carousel>

        <div class="talk-cards-container" v-if="!showCarousel && eventList">
          <div class="talk-card-wrap" v-for="(event) in eventList" :key="'talks-list-'+event.id">
            <router-link :to="'/talks/' + event.slug" class="talk-card">
              <event-card :event="event" />
            </router-link>
          </div>
        </div>

        <!-- Pagination up -->
        <div class="smiley-pagination">
          <paginate
            :page-count="upcommingPages"
            :click-handler="loadFuture"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :prev-class="'smiley-pagination-back'"
            :next-class="'smiley-pagination-next'"
            :container-class="'app-pagination'"
          ></paginate>
        </div>
      </div>
    </section>

    <section class="past-talks-section">
      <h2>Past smiley talks</h2>

      <carousel
        class="talk-cards-container"
        v-if="showCarousel && eventPastList"
        :nav="false"
        :items="3"
        :margin="19"
        :autoplayHoverPause="true"
        :loop="true"
        :autoplay="true"
        :autoWidth="true"
      >
        <div
          class="talk-card-wrap"
          v-for="event in eventPastList"
          :key="'old-events-slider-'+event.id"
        >
          <router-link :to="'/talks/' + event.slug" class="talk-card">
            <event-card :event="event" :past="true" />
          </router-link>
        </div>
      </carousel>

      <div class="talk-cards-container" v-if="!showCarousel && eventList">
        <div class="talk-card-wrap" v-for="(event) in eventPastList" :key="'old-events-'+event.id">
          <router-link :to="'/talks/' + event.slug" class="talk-card">
            <event-card :event="event" :past="true" />
          </router-link>
        </div>
      </div>

      <!-- Pagination past -->
      <div class="smiley-pagination">
        <paginate
          :page-count="pagination.past.pages"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :prev-class="'smiley-pagination-back'"
          :next-class="'smiley-pagination-next'"
          :container-class="'app-pagination'"
        ></paginate>
      </div>
    </section>

    <section class="create-hub-section">
      <div class="create-hub-wrap">
        <div class="create-hub-video">
          <img src="img/talk/smiley-hub-image-x2.png" alt="hub main pic" />
        </div>
        <div class="create-hub-content">
          <div class="create-hub-title-wrap">
            <div class="create-hub-logo">
              <img src="img/talk/smiley-hub-logo-x2.png" alt="smiley hub" />
            </div>
            <div class="create-hub-title">Create a smiley hub</div>
          </div>
          <div class="create-hub-text">
            <div
              class="create-hub-descr"
            >Smiley Hubs are events organised by you! Hubs are mission-led collaborations initiated by Smiley Movement members online.</div>
            <router-link :to="{name: 'contact'}" class="read-more-link">
              <span></span>Create a smiley hub
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="signup-section">
      <div class="signup-section-wrap container">
        <h2>Don’t miss an event - sign up for our latest event news</h2>

        <form-sign-up-events-notification />

        <social-icons />
      </div>
    </section>-->
    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel2";
import axios from "../axios-auth";

import { mapState, mapActions, mapMutations } from "vuex";

import Breadcrumbs from "@/components/Breadcrumbs";
import SocialIcons from "@/components/footer/SocialIcons";
import FormSignUpEventsNotification from "@/components/events/Form-EventsNotifications";
import FilterCheckbox from "@/components/events/Filter-Checkbox";
import EventCard from "@/components/events/Event-Card";
import Footer from "@/components/Footer";

export default {
  name: "Talks",
  data() {
    return {
      showCarousel: true,

      filter: {
        goals: [],
        keywords: "",
        date_start: "",
        date_end: ""
      },

      pagination: {
        past: {
          pages: 1
        }
      }
    };
  },
  computed: {
    ...mapState("events", {
      goals: state => state.goals,
      currentCategory: state => state.currentCategory,
      eventPastList: state => state.pastEvents,
      topEvent: state => state.events[0],
      eventList: state => state.events,
      upcommingPages: state => state.eventsPages
    }),
    auth() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.$store.dispatch("events/get_events");
    this.$store.dispatch("events/get_past_events");
    this.$store.dispatch("events/get_events_data");

    setTimeout(() => {
      var acc = document.querySelectorAll(".advanced-search-btn");
      var i;
      var simpleSearch = document.querySelector(".simple-search-btn");
      var advancedSearch = document.querySelector(".advanced-search-btn");
      var panel = document.getElementsByClassName("panel");

      var resetFilters = document.querySelector(".reset-filters-btn");
      var applyFilters = document.querySelector(".apply-filters-btn");

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.style.display = "none";
          simpleSearch.style.display = "block";
          resetFilters.style.display = "block";
          if (panel[0].style.maxHeight) {
            panel[0].style.maxHeight = null;
          } else {
            panel[0].style.maxHeight = panel[0].scrollHeight + "px";
          }
        });
      }

      simpleSearch.addEventListener("click", function() {
        this.style.display = "none";
        advancedSearch.style.display = "block";
        resetFilters.style.display = "none";
        if (panel[0].style.maxHeight) {
          panel[0].style.maxHeight = null;
        } else {
          panel[0].style.maxHeight = panel[0].scrollHeight + "px";
        }
      });

      let currentWidth = $(window).width();
      let firstInit = true;

      $(window).on("resize", function() {
        if (firstInit) {
          if ($(window).width() >= 1600) {
            resetFilters.style.display = "block";
            applyFilters.style.display = "block";
            advancedSearch.style.display = "none";
            simpleSearch.style.display = "none";
            // panel[0].style.maxHeight = panel[0].scrollHeight + "px";
          } else {
            resetFilters.style.display = "none";
            advancedSearch.style.display = "block";
            // panel[0].style.maxHeight = null;
          }

          firstInit = false;
        } else {
          if ($(window).width() !== currentWidth) {
            currentWidth = $(window).width();

            if ($(window).width() >= 1600) {
              resetFilters.style.display = "block";
              applyFilters.style.display = "block";
              advancedSearch.style.display = "none";
              simpleSearch.style.display = "none";
              // panel[0].style.maxHeight = panel[0].scrollHeight + "px";
            } else {
              if (simpleSearch.style.display === "block") {
                return;
              }
              resetFilters.style.display = "none";
              advancedSearch.style.display = "block";
              simpleSearch.style.display = "none";
              // panel[0].style.maxHeight = null;
            }
          }
        }
      });

      $(window).resize();

      $.fn.equalHeights = function() {
        var maxHeight = 0,
          $this = $(this);

        $this.each(function() {
          var height = $(this).innerHeight();

          if (height > maxHeight) {
            maxHeight = height;
          }
        });

        return $this.css("height", maxHeight);
      };

      // auto-initialize plugin
      $("[data-equal]").each(function() {
        var $this = $(this),
          target = $this.data("equal");
        $this.find(target).equalHeights();
      });

      $(".talk-cards-container .info-wrap").equalHeights();
    }, 0);

    $(".talk-card-checkbox").click(function() {
      $("#overlay").toggleClass("display-none");
      $(this).toggleClass("button-clicked");
    });

    // WARNING! - Always trigger resize event after loading data\markup changes
    // setTimeout(() => {
    this.handleResize();
    // }, 1000);
  },
  methods: {
    loadFuture(page) {
      this.$store.dispatch("events/get_events", page);
    },
    removeFilter(id) {
      this.filter.goals = this.filter.goals.filter(element => element !== id);
    },
    handleResize() {
      if ($(window).width() >= 1600) {
        this.showCarousel = false;
      } else {
        this.showCarousel = true;
      }
    },
    applyFilters() {
      this.$store.dispatch("events/send_filter_params", this.filter);
    },
    resetFilters() {
      this.$store.dispatch("events/get_events");
    }
  },

  components: {
    Breadcrumbs,
    FormSignUpEventsNotification,
    FilterCheckbox,
    EventCard,
    carousel,
    SocialIcons,
    Footer
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/sections/_talks-upcomming-section";
@import "@/scss/sections/_talks-sidebar";
@import "@/scss/sections/_talks-main-section";
@import "@/scss/sections/_talks-past-talks";
@import "@/scss/sections/_talks-hub";
@import "@/scss/sections/_talks-card";
@import "@/scss/sections/_talks-sign-up";
</style>