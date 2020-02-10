<template>
  <div>
    <section class="breadcrumbs">
      <ul>
        <li>
          <a href="#" class="breadcrumbs-item">Homepage</a>
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z"
              fill="#656565"
            />
          </svg>
        </li>
        <li>
          <a href="#" class="breadcrumbs-item">One</a>
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z"
              fill="#656565"
            />
          </svg>
        </li>
        <li>
          <a href="#" class="breadcrumbs-item">Two</a>
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z"
              fill="#656565"
            />
          </svg>
        </li>
      </ul>
    </section>

    <section class="event-section" v-if="event">
      <h1 class="event-section-title container">{{event.title}}</h1>
      <div class="event-content">
        <div class="event-content-wrap">
          <div class="event-img">
            <img
              :src="$settings.images_path.events  +'l_'+event.cover_image"
              :alt="event.title"
              :title="event.title"
            />
          </div>
          <div class="event-sidebar">
            <div class="sidebar-btn-wrap">
              <div
                v-if="!attendedEvents.filter(item => item.event_id == event.id) && !past && isAuthenticated"
              >
                <button class="reg-event-btn" @click="registerUser(event.id)">Register for event</button>
              </div>
              <div v-else>
                <button class="reg-event-btn" @click="cancelRegistration">CANCEL ATTENDENCE</button>
              </div>
              <button class="chat-btn">Join the chat room</button>
            </div>
            <div class="sidebar-block">
              <button class="accordion">Date and time</button>
              <div class="panel">
                <div class="panel-content-wrap">
                  <div
                    class="event-date-time"
                  >{{new Date(event.date).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}).replace(',','')}}</div>
                  <div
                    class="event-date-time"
                  >{{event.time_start | formatTime }} - {{event.time_end | formatTime }}</div>
                </div>
              </div>
            </div>
            <div class="sidebar-block">
              <button class="accordion">Location</button>
              <div class="panel">
                <div class="panel-content-wrap">
                  <div class="event-location">{{event.location}}</div>
                </div>
              </div>
            </div>
            <div class="sidebar-block">
              <button class="accordion">Speakers</button>
              <div class="panel">
                <div class="panel-content-wrap">
                  <div class="speaker-item" v-for="speaker in event.speakers" :key="speaker.id">
                    <div class="speaker-avatar-wrap">
                      <div class="speaker-avatar">
                        <img
                          :src="'https://new-smiley.s3.eu-west-2.amazonaws.com/speakers/s_' + speaker.image"
                        />
                      </div>
                    </div>
                    <div class="speaker-name-caption">
                      <div class="speaker-name">{{speaker.full_name}}</div>
                      <div class="speaker-caption">{{speaker.role}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sidebar-block attendees-block">
              <button class="accordion">Attendees</button>
              <div class="panel">
                <div class="panel-content-wrap">
                  <div class="attendees-wrap">
                    <div class="attendees-avatar">
                      <img src="/img/event/attendees-avatar-1.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next">
                      <img src="/img/event/attendees-avatar-2.jpg" alt="avatar" />
                    </div>
                    <div class="attendees-avatar next last">
                      <a href="#">
                        <span>+12</span>
                      </a>
                    </div>
                  </div>
                  <div class="attendees-btn-wrap">
                    <button class="show-all-btn">show all</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="sidebar-block">
              <button class="accordion">Share with friends</button>
              <div class="panel">
                <div class="panel-content-wrap">
                  <div class="share-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                              fill="#3B5998"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.938 22.3012H15.67V14.7971H17.7195L18.1248 12.4524H15.67V10.7533C15.67 10.2056 16.0241 9.63047 16.5303 9.63047H17.9255V7.28571H16.2156V7.29623C13.5403 7.39333 12.9906 8.94276 12.943 10.5703H12.938V12.4524H11.5713V14.7971H12.938V22.3012Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                              fill="#0976B4"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.15654 11.1286C10.1892 11.1286 11.0264 10.3651 11.0264 9.42233C11.0264 8.47869 10.1892 7.71423 9.15654 7.71423C8.12287 7.71423 7.28571 8.47869 7.28571 9.42233C7.28571 10.3651 8.12287 11.1286 9.15654 11.1286Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.71429 22.1047H11.0693V12.4286H7.71429V22.1047Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.7781 16.723C15.7781 15.6134 16.3031 14.5283 17.5584 14.5283C18.8138 14.5283 19.1224 15.6134 19.1224 16.6965V21.9811H22.4624V16.4805C22.4624 12.6588 20.2034 12 18.8138 12C17.4253 12 16.6594 12.4697 15.7781 13.6077V12.305H12.4286V21.9811H15.7781V16.723Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                              fill="#DD4B39"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.01355 15.7499C8.05747 13.1741 10.4732 10.9182 13.1008 11.0042C14.3597 10.947 15.5432 11.484 16.5075 12.2384C16.0961 12.6966 15.67 13.1384 15.2145 13.5514C14.0554 12.7659 12.4066 12.5416 11.2476 13.4488C9.58907 14.573 9.51373 17.2276 11.1087 18.4378C12.6599 19.8177 15.592 19.1324 16.0206 17.0198C15.0489 17.0055 14.0748 17.0198 13.1032 16.9889C13.1008 16.4207 13.0984 15.8525 13.1008 15.2843C14.7251 15.2796 16.3494 15.2772 17.9761 15.2891C18.0735 16.6259 17.8933 18.0486 17.0556 19.154C15.7868 20.9038 13.2395 21.4147 11.2524 20.6651C9.25803 19.9203 7.84552 17.8553 8.01355 15.7499Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20.34 13H21.6622C21.6644 13.4423 21.6667 13.8866 21.6711 14.3289C22.1134 14.3333 22.5577 14.3333 23 14.3378V15.66C22.5577 15.6644 22.1156 15.6667 21.6711 15.6711C21.6667 16.1156 21.6644 16.5579 21.6622 17H20.3378C20.3333 16.5579 20.3333 16.1156 20.3289 15.6733C19.8866 15.6689 19.4421 15.6644 19 15.66V14.3378C19.4421 14.3333 19.8844 14.3311 20.3289 14.3289C20.3311 13.8844 20.3356 13.4423 20.34 13Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                              fill="#55ACEE"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.871 9.26277C21.4476 9.53396 20.4755 9.92804 19.9961 9.92804V9.92885C19.4487 9.357 18.6781 9 17.8234 9C16.1634 9 14.8173 10.3461 14.8173 12.0054C14.8173 12.236 14.844 12.4609 14.8934 12.6765H14.8929C12.6411 12.6174 10.1784 11.4888 8.69582 9.55711C7.7843 11.1349 8.5731 12.8896 9.60751 13.529C9.25342 13.5557 8.60159 13.4882 8.29478 13.1888C8.27422 14.236 8.77775 15.6235 10.6137 16.1269C10.2601 16.3171 9.63422 16.2626 9.36206 16.2221C9.45758 17.1061 10.6955 18.2618 12.0492 18.2618C11.5667 18.8198 9.75144 19.8321 7.71436 19.51C9.09783 20.3518 10.7102 20.8393 12.4169 20.8393C17.2667 20.8393 21.0331 16.9087 20.8304 12.0598C20.8296 12.0545 20.8296 12.0492 20.8291 12.0433C20.8296 12.0309 20.8304 12.0184 20.8304 12.0054C20.8304 11.9904 20.8291 11.9761 20.8286 11.9616C21.2702 11.6596 21.8626 11.1255 22.2858 10.4225C22.0403 10.5577 21.304 10.8284 20.6188 10.8956C21.0585 10.6582 21.7101 9.88092 21.871 9.26277Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="event-tabs" id="tabs">
            <ul class="tabs-nav">
              <li v-for="(ev, index) in event.event_blocks" :key="ev.id">
                <a :href="'#tab-' + ++index" :class="{active: index === 0}">{{ev.title}}</a>
              </li>
            </ul>

            <div class="tabs-items">
              <div
                :class="'tabs-item item-' + ++index"
                :id="'tab-' + index"
                v-for="(ev, index) in event.event_blocks"
                :key="ev.id"
              >
                <div :class="'content-tab-' + index">
                  <p v-html="ev.content"></p>
                </div>
              </div>
            </div>
          </div>

          <section class="event-partners">
            <div class="event-partners-wrap">
              <h2 class="event-partners-title">Partners</h2>

              <div class="event-partners-cards">
                <img
                  v-for="partner in event.partners"
                  :key="partner.name + partner.id"
                  :src="$settings.images_path.partners + 's_' +partner.image"
                  :alt="partner.name"
                  :title="partner.name"
                />
              </div>
            </div>
          </section>

          <section class="chatroom-btn-section">
            <div class="chatroom-btn-section-wrap">
              <div class="chatroom-btn-wrap">
                <h2 class="chatroom-btn-title">WANT TO CONTINUE THE CONVERSATION</h2>
                <button class="chatroom-btn">Join the chat room</button>
              </div>
            </div>
          </section>

          <section class="invite-friends">
            <div class="invite-friends-section-wrap">
              <h2 class="invite-friends-title">Invite friends</h2>
              <form class="invite-friends-form-wrap">
                <label for="invite">
                  <input
                    type="text"
                    name="invite"
                    id="invite"
                    placeholder="Separate multiple emails with commas"
                  />
                </label>
                <button class="invite-btn">Send invite</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>

    <!--<section class="event-location-section container">-->
    <!--&lt;!&ndash;      <div id="map"></div>&ndash;&gt;-->

    <!--<gmap-map-->
    <!--:center="center"-->
    <!--:zoom="12"-->
    <!--style="width:100%;  height: 586px;"-->
    <!--&gt;-->
    <!--<gmap-marker-->
    <!--:key="index"-->
    <!--v-for="(m, index) in markers"-->
    <!--:position="m.position"-->
    <!--@click="center=m.position"-->
    <!--&gt;</gmap-marker>-->
    <!--</gmap-map>-->
    <!--</section>-->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import $ from "jquery";
import axios from "../axios-auth";
import { mapState, mapActions } from "vuex";

export default {
  name: "Event",
  components: {
    Footer
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      id: this.$route.params.id,
      event: null
    };
  },
  computed: {
    ...mapState("user", {
      attendedEvents: state => state.attendingEvents
    }),
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  mounted() {
    setTimeout(() => {
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
      $(window).on("resize", function() {
        let ss = acc;
        let el = $(window).width() >= 1200;

        if ($(window).width() >= 1200) {
          $(acc)
            .addClass("active")
            .attr("disabled", true)
            .next()
            .css("max-height", "initial");
        }
        if ($(window).width() < 1200) {
          $(acc)
            .removeClass("active")
            .attr("disabled", false)
            .next()
            .removeAttr("style");
        }
      });

      var tab = $("#tabs .tabs-items > div");
      tab
        .hide()
        .filter(":first")
        .show();

      $("#tabs .tabs-nav a")
        .click(function() {
          tab.hide();
          tab.filter(this.hash).show();
          $("#tabs .tabs-nav a").removeClass("active");
          $(this).addClass("active");
          return false;
        })
        .filter(":first")
        .click();

      $(".tabs-target").click(function() {
        $("#tabs .tabs-nav a[href=" + $(this).data("id") + "]").click();
      });

      $(window).resize();
    }, 500);

    axios
      .get("/events/" + this.id)
      .then(res => {
        this.event = res.data.event;
      })
      .catch(error => console.log(error));
  },
  methods: {
    cancelRegistration() {
      this.$swal("Registration canceled", "", "success");
    },
    registerUser(id) {
      this.registerUserForEvent({ id: id, organisation: false });
    },
    ...mapActions("events", ["registerUserForEvent"]),
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.breadcrumbs {
  margin: 13px auto;
  padding: 0 15px;
  max-width: 1560px;
  li {
    display: inline-block;
  }
  .breadcrumbs-item {
    text-decoration: none;
    color: $default-text;
    font: 400 16px/21px "Muli", sans-serif;
  }
  svg {
    margin-right: 5px;
  }
  @include lg {
    margin: 37px auto;
  }
}

// ---------- SMILEY EVENT PAGE ---------- //

// ---------- SMILEY EVENT CONTENT SECTION

.event-section {
  @include lg {
    margin-top: 36px;
  }

  .event-section-title {
    color: $default-text;
    font: 700 36px/48px "Montserrat Bold", sans-serif;
    margin-bottom: 24px;
    padding: 0 15px;
    @include md {
      font: 700 48px/58px "Montserrat Bold", sans-serif;
    }
    @include lg {
      font: 700 56px/74px "Montserrat Bold", sans-serif;
    }
  }
  .event-content {
    margin: 0 auto 50px;
    max-width: 1560px;
    @include xl {
      position: relative;
      padding: 0 15px;
    }
    .event-content-wrap {
      .event-img {
        max-width: 1160px;
        margin: 0 auto;
        img {
          width: 100%;
          display: block;
        }
      }
      @include xl {
        margin-right: 400px;
      }
      .event-sidebar {
        background-color: #f7f7f7;
        @include xl {
          width: 100%;
          max-width: 360px;
          position: absolute;
          right: 15px;
          top: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .sidebar-btn-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 17px 15px 12px;
          @include md {
            flex-direction: row;
            justify-content: space-around;
          }
          @include xl {
            padding: 38px 15px 0;
            flex-direction: column;
            .chat-btn {
              margin-bottom: 0;
            }
          }
          button {
            width: 100%;
            max-width: 347px;
            height: 48px;
            border-radius: 4px;
            text-transform: uppercase;
            font: 700 16px/24px "Montserrat Bold", sans-serif;
            margin-bottom: 15px;
            cursor: pointer;
            @include xl {
              max-width: 293px;
            }
          }
          .reg-event-btn {
            border: none;
            background-color: $default-red-btns;
            color: #fff;
            &:hover {
              background-color: #bd0000;
              transition: 0.2s ease-in;
            }
          }
          .chat-btn {
            border: 1px solid #c7c7c7;
            color: $default-text;
            background: transparent;
            &:hover {
              background-color: #fff;
              color: gray;
              transition: 0.2s ease-in;
            }
          }
        }
        .sidebar-block {
          border-bottom: 1px solid #e4e4e4;
          margin: 0 15px;
          @include xl {
            margin: 0;
            padding: 0 30px;
            &.attendees-block {
              padding: 0 20px;
            }
          }
          .accordion {
            background: transparent;
            cursor: pointer;
            padding: 14px 0;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            transition: 0.4s;
            color: #a1a1a1;
            font: 600 16px/24px "Montserrat SemiBold", sans-serif;
            text-transform: uppercase;
            position: relative;
            &:after {
              content: "+";
              font: 600 16px/24px "Montserrat SemiBold", sans-serif;
              position: absolute;
              right: 0;
            }
            &.active {
              &:after {
                display: none;
              }
            }
            @include xl {
              padding: 37px 0 14px 0;
              cursor: inherit;
              font: 700 20px/32px "Montserrat Bold", sans-serif;
            }
          }
          @include xl {
            &:nth-of-type(2) {
              .accordion {
                padding-top: 41px;
              }
            }
            &:nth-of-type(4) {
              .accordion {
                padding-top: 25px;
                padding-bottom: 25px;
              }
              .panel {
                .panel-content-wrap {
                  padding-bottom: 15px;
                }
              }
            }
            &:nth-of-type(5) {
              .accordion {
                padding-top: 31px;
                padding-bottom: 14px;
              }
              .panel {
                .panel-content-wrap {
                  padding-bottom: 32px;
                }
              }
            }
            &:nth-of-type(6) {
              .accordion {
                padding-top: 32px;
                padding-bottom: 23px;
              }
              .panel {
                .panel-content-wrap {
                  padding-bottom: 32px;
                }
              }
            }
          }

          &:last-of-type {
            border-bottom: none;
          }
          .panel {
            background: transparent;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            .panel-content-wrap {
              padding-bottom: 17px;
              @include xl {
                padding-bottom: 33px;
              }
            }
          }
          .event-date-time {
            @include sm {
              display: inline-block;
            }
            @include xl {
              display: block;
            }
          }
          .event-date-time,
          .event-location {
            color: $default-text;
            font: 700 20px/32px "Montserrat Bold", sans-serif;
          }
        }
      }
    }
    .speaker-item {
      display: flex;
      margin-bottom: 16px;
      @include xl {
        &:last-of-type {
          margin-bottom: 7px;
        }
      }
      .speaker-avatar-wrap {
        height: 48px;
        max-width: 48px;
        width: 100%;
        border-radius: 50%;
        margin-right: 15px;
        .speaker-avatar {
          position: relative;
        }
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        svg,
        span {
          position: absolute;
        }
        span {
          text-transform: uppercase;
          font: 600 16px/24px "Inter SemiBold", sans-serif;
          color: #fff;
          transform: translate(-50%, 50%);
          margin-left: 50%;
        }
      }
      .speaker-name-caption {
        .speaker-name {
          color: $default-text;
          font: 400 16px/24px "Muli", sans-serif;
        }
        .speaker-caption {
          color: #656565;
          font: 400 14px/24px "Inter Regular", sans-serif;
        }
      }
    }
    .attendees-wrap {
      .attendees-avatar {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        border: 2px solid #fff;
        box-sizing: border-box;
        img {
          width: 100%;
        }
        &.next {
          margin-left: -22px;
        }
        &.last {
          background-color: #656565;
          a {
            color: #fff;
            font: 400 12px/20px "Muli", sans-serif;
            text-align: center;
            margin: 0 auto;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            height: 100%;
            span {
              line-height: 34px;
            }
          }
        }
      }
    }
    .attendees-btn-wrap {
      padding-top: 18px;
      text-align: center;
      .show-all-btn {
        width: 100%;
        max-width: 347px;
        height: 48px;
        border-radius: 4px;
        text-transform: uppercase;
        font: 700 16px/24px "Montserrat Bold", sans-serif;
        cursor: pointer;
        border: 1px solid #c7c7c7;
        color: $default-text;
        background: transparent;
        margin-bottom: 0;
        cursor: pointer;
        @include xl {
          max-width: 293px;
        }

        &:hover {
          background-color: #fff;
          color: gray;
          transition: 0.2s ease-in;
        }
      }
    }

    .share-icons {
      li {
        display: inline-block;
        margin-right: 12px;
        a {
          display: inline-block;
          border-radius: 50%;
          overflow: hidden;
        }
        svg {
          display: block;
        }
      }
    }
    #tabs {
      margin-top: 20px;
      padding: 0 15px;
      @include xl {
        padding: 0;
        margin-top: 58px;
      }
      .tabs-nav {
        overflow: hidden;
        margin: 0;
        padding: 0;
        display: table;
        width: 100%;
        table-layout: fixed;
      }
      .tabs-nav li {
        padding: 0;
        list-style: none;
        display: table-row;
        text-align: center;
        float: none;
        @include md {
          display: table-cell;
        }
      }
      .tabs-nav a {
        color: $default-text;
        font: 700 20px/32px "Montserrat Bold", sans-serif;
        display: block;
        text-decoration: none;
        text-align: center;
        padding: 10px 0 15px;
        position: relative;
        text-transform: uppercase;
        @include md {
          font: 700 16px/32px "Montserrat Bold", sans-serif;
        }
        @include xxl {
          font: 700 20px/32px "Montserrat Bold", sans-serif;
        }
        &:after {
          content: "";
          border-bottom: 1px solid #000;
          width: 100%;
          display: block;
          opacity: 0.3;
          box-sizing: border-box;
          margin-top: 14px;
          position: absolute;
          bottom: 0;
          @include md {
            bottom: 2px;
          }
        }
      }
      .tabs-nav li:last-child a {
        display: block;
      }
      .tabs-nav a.active {
        transition: all 0.25s ease;
        &:after {
          border-bottom: 5px solid #ed1a34;
          height: 5px;
          background-color: #ed1a34;
          opacity: 1;
          bottom: 0;
        }
      }
      .tabs-items {
        h2 {
          color: $default-text;
          font: 32px/48px "Montserrat Bold", sans-serif;
          margin-bottom: 15px;
        }
        .content-tab-1,
        .content-tab-2,
        .content-tab-3,
        .content-tab-4 {
          p {
            color: $default-text;
            font: 400 22px/36px "Muli", sans-serif;
            margin-top: 0;
            margin-bottom: 30px;
          }
          ul {
            list-style: inherit;
            padding-left: 20px;
            li {
              color: $default-text;
              font: 400 22px/41px "Muli", sans-serif;
            }
          }
        }
        @include lg {
          margin-top: 39px;
        }
      }
    }
  }
}

// ---------- SMILEY EVENT PARTNERS SECTION

.event-partners {
  padding: 0 15px;

  @include xl {
    padding: 0;
  }

  .event-partners-wrap {
    border-bottom: 1px solid #e4e4e4;
  }

  .event-partners-title {
    color: $default-text;
    font: 700 20px/32px "Montserrat Bold", sans-serif;
    margin-top: 64px;
    margin-bottom: 7px;
    text-transform: uppercase;
    border-bottom: 1px solid #e4e4e4;
  }
  .event-partners-cards {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
    align-items: center;

    @include xl {
      padding-right: 200px;
    }

    img {
      max-width: 100%;
      height: auto;
      margin-left: 15px;
      margin-right: 15px;
      object-fit: contain;
    }
  }
}

// ---------- SMILEY EVENT CHATROOM BTN SECTION

.chatroom-btn-section {
  padding: 0 15px;

  @include xl {
    padding: 0;
  }

  .chatroom-btn-section-wrap {
    &:after {
      margin-top: 28px;
      content: "";
      border-bottom: 1px solid #e4e4e4;
      display: block;
      @include lg {
        margin-top: 0;
      }
    }
  }

  .chatroom-btn-wrap {
    text-align: center;
    @include lg {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 102px;
    }
    .chatroom-btn-title {
      color: $default-text;
      font: 700 20px/32px "Montserrat Bold", sans-serif;
      text-transform: uppercase;
    }
    button {
      width: 100%;
      max-width: 309px;
      height: 48px;
      border-radius: 4px;
      text-transform: uppercase;
      font: 700 16px/24px "Montserrat Bold", sans-serif;
      cursor: pointer;
      background-color: $default-red-btns;
      border: none;
      color: #fff;
      &:hover {
        background-color: #bd0000;
        transition: 0.2s ease-in;
      }
    }
  }
}

// ---------- SMILEY EVENT INVITE SECTION

.invite-friends {
  padding: 0 15px;

  @include xl {
    padding: 0 0 20px;
  }

  text-align: center;
  @include lg {
    text-align: left;
  }
  .invite-friends-title {
    color: $default-text;
    font: 700 20px/32px "Montserrat Bold", sans-serif;
    text-transform: uppercase;
    margin-top: 27px;
    margin-bottom: 20px;
    &:after {
      margin-top: 8px;
      content: "";
      border-bottom: 1px solid #e4e4e4;
      display: block;
    }
  }
  .invite-friends-form-wrap {
    input {
      width: 100%;
      max-width: 821px;
      height: 48px;
      text-indent: 16px;
      box-sizing: border-box;
      border: 1px solid #c7c7c7;
      border-radius: 4px;
      font: 400 16px/24px "Montserrat Regular", sans-serif;
      &::placeholder {
        color: #656565;
        font: 400 16px/24px "Muli", sans-serif;
      }
    }
    .invite-btn {
      margin-top: 25px;
      @include lg {
        margin-top: 0;
        margin-left: 26px;
      }
    }
    @include lg {
      display: flex;
      justify-content: space-between;
      label {
        width: 100%;
      }
    }
  }
  button {
    width: 100%;
    max-width: 309px;
    height: 48px;
    border-radius: 4px;
    text-transform: uppercase;
    font: 700 16px/24px "Montserrat Bold", sans-serif;
    cursor: pointer;
    background-color: $default-red-btns;
    border: none;
    color: #fff;
    &:hover {
      background-color: #bd0000;
      transition: 0.2s ease-in;
    }
  }
}

// ---------- SMILEY EVENT LOCATION SECTION

#map {
  width: 100%;
  height: 586px;
}

.event-location-section {
  margin-top: 45px;
}
</style>