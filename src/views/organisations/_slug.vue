<template>
  <div class="main-bg">
    <div class="textual-banner">
      <div class="container">
        <div class="textual-banner__title">Organisation page</div>
        <p>This is where we learn about your organisation, charitable vision and mission whether you're a registered non-profit, social enterprise, charitable foundation, Trust, educational institution, local authority or conscientious private business</p>
      </div>
    </div>
    <div class="organisation-bg">
      <div class="organisation-grid container">
        <div class="grid-item grid-item--main">
          <div class="organisation-avatar">
            <img
              v-if="organisation.logo != null"
              :src="$settings.images_path.organisations + 'm_'+ organisation.logo"
            />
            <span v-else>{{ organisation.name | filterAvatar}}</span>
          </div>
          <div class="organisation-info">
            <div class="organisation-name">{{organisation.name}}</div>
            <div class="organisation-job">Arts, Culture, Leisure</div>
            <div class="organisation-data">
              <div class="organisation-data__column">
                Employees
                <br />50+
              </div>
              <div class="organisation-data__column">
                Followers
                <br />
                {{organisation.followers.length}}
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <template v-if="socials.length > 0">
            <ul class="organisation-social">
              <li>Social Networks:</li>
              <li v-for="social in socials" :key="'social-'+social.name">
                <a target="_blank" :href="social.value">
                  <app-icon :name="social.name" />
                </a>
              </li>
            </ul>
          </template>
          <template v-else>No networks connected</template>
          <div class="organisation-network">
            <div class="network-row">
              <div class="network-row__title">Message:</div>
              <div class="network-row__value">
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <a href="#">Chat with Us</a>
              </div>
            </div>
            <div class="network-row">
              <div class="network-row__title">Website:</div>
              <div class="network-row__value">
                <i class="fa fa-link" aria-hidden="true"></i>
                <a :href="organisation.website">{{organisation.website}}</a>
              </div>
            </div>
            <div class="network-row">
              <div class="network-row__title">Location:</div>
              <div class="network-row__value">
                <template v-if="organisation.country != null && organisation.city != null">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  {{organisation.country}}, {{organisation.city}}
                </template>
                <template v-else>No location selected</template>
              </div>
            </div>
            <button
              class="button button--primary"
              v-if="!following"
              @click.prevent="follow"
            >+ follow</button>
            <button class="button button--primary" v-else @click.prevent="unfollow">- unfollow</button>
          </div>
        </div>
        <div class="grid-item">
          <div class="title">support us</div>
          <div class="content">Our support text</div>
          <button class="button">Make a donation</button>
        </div>
      </div>
    </div>
    <div class="organisation-additional">
      <div class="grid-item">
        <div class="item-holder">
          <div class="title">About {{organisation.name}}</div>
          <div class="about" v-html="organisation.description"></div>
        </div>
      </div>
      <div class="grid-item">
        <div class="item-holder">
          <div class="title">Stats for {{organisation.name}}</div>
        </div>
        <div class="item-holder">
          <div class="title">Share this page</div>
          <ul class="organisation-social">
            <li v-for="social in socials" :key="'social-'+social.name">
              <a target="_blank" :href="social.value">
                <app-icon :name="social.name" />
              </a>
            </li>
          </ul>
          <div class="url-share">
            <input readonly value="https://smileymovement.org/organisations/myorganisation" />
            <button type="button" class="button button--primary">Copy link</button>
          </div>
        </div>
      </div>
      <div class="grid-item grid-item--full-width">
        <div class="item-holder">
          <div class="title">Activity</div>
          <div class="activities">
            <ul class="activities__navigation">
              <li :class="{active: activity == 'projects'}">
                <button @click.prevent="activity = 'projects'">
                  Our projects
                  <span>0</span>
                </button>
              </li>
              <li :class="{active: activity == 'news'}">
                <button @click.prevent="activity = 'news'">
                  Our news
                  <span>0</span>
                </button>
              </li>
              <li :class="{active: activity == 'hubs'}">
                <button @click.prevent="activity = 'hubs'">
                  smiley hubs
                  <span>0</span>
                </button>
              </li>
            </ul>
            <div class="activities__tabs">
              <div class="activities__tab" v-show="activity == 'projects'">
                <template v-if="feed.projects.length > 0"></template>
                <template v-else>
                  <div class="no-posts">
                    <div class="no-posts__title">No Projects yet</div>
                    <p class="no-posts__text">{{organisation.name}} hasn't posted any projects yet.</p>
                  </div>
                </template>
              </div>
              <div class="activities__tab" v-show="activity == 'news'">
                <template v-if="feed.news.length > 0"></template>
                <template v-else>
                  <div class="no-posts">
                    <div class="no-posts__title">No News yet</div>
                    <p class="no-posts__text">Add News by sharing articles to The Smiley Movement</p>
                  </div>
                </template>
              </div>
              <div class="activities__tab" v-show="activity == 'hubs'">
                <template v-if="feed.hub.length > 0"></template>
                <template v-else>
                  <div class="no-posts">
                    <div class="no-posts__title">No Hubs yer</div>
                    <p class="no-posts__text">Here should be some error text i think</p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-item grid-item--full-width">
        <div class="item-holder">
          <div class="title">Our team</div>
          <div class="about">No team members to display.</div>
        </div>
      </div>
      <div class="grid-item">
        <div class="item-holder">
          <div class="title">
            <img src="https://smileymovement.org/images/icons/support-need-icon.png" />
            Support {{organisation.name}} need
          </div>
          <ul class="support">
            <li class="support__item" v-for="(item, index) in support.need" :key="'i-need-'+index">
              <div class="support__category-container">
                <div class="support__category">{{item.support_category.title}}</div>
                <div class="support__subcategory">{{item.title}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid-item">
        <div class="item-holder">
          <div class="title">
            <img src="https://smileymovement.org/images/icons/support-offer-icon.png" />
            Support {{organisation.name}} can offer
          </div>
          <ul class="support">
            <li class="support__item" v-for="(item, index) in support.offer" :key="'i-need-'+index">
              <div class="support__category-container">
                <div class="support__category">{{item.support_category.title}}</div>
                <div class="support__subcategory">{{item.title}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import AppIcon from "@/components/AppIcon";

import Footer from "@/components/Footer";

export default {
  name: "OrganisationProfile",
  components: {
    AppIcon,
    Footer
  },
  data() {
    return {
      organisation: {},
      activity: "events",
      feed: {
        projects: [],
        news: [],
        hub: []
      },
      socials: [],
      support: {
        offer: [
          {
            id: 13,
            title: "Architecture",
            support_category_id: 1,
            pivot: { user_id: 620, support_id: 13, offer: 1 },
            support_category: { id: 1, title: "Skills" }
          },
          {
            id: 14,
            title: "Branding",
            support_category_id: 1,
            pivot: { user_id: 620, support_id: 14, offer: 1 },
            support_category: { id: 1, title: "Skills" }
          },
          {
            id: 7,
            title: "Government Funding",
            support_category_id: 3,
            pivot: { user_id: 620, support_id: 7, offer: 1 },
            support_category: { id: 3, title: "Financial support" }
          }
        ],
        need: [
          {
            id: 2,
            title: "Few hours a month",
            support_category_id: 2,
            pivot: { user_id: 620, support_id: 2, offer: 0 },
            support_category: { id: 2, title: "Volonteering" }
          },
          {
            id: 5,
            title: "Social Investment",
            support_category_id: 3,
            pivot: { user_id: 620, support_id: 5, offer: 0 },
            support_category: { id: 3, title: "Financial support" }
          },
          {
            id: 15,
            title: "Business Development",
            support_category_id: 1,
            pivot: { user_id: 620, support_id: 15, offer: 0 },
            support_category: { id: 1, title: "Skills" }
          }
        ]
      }
    };
  },
  methods: {
    follow() {
      axios
        .post("/organisations/" + this.$route.params.slug + "/follow")
        .then(result => {
          console.log("following", result);
          if (result.data.success) {
            this.$swal({
              text: result.data.message,
              icon: "info"
            });
            axios
              .get("/organisations/" + this.$route.params.slug)
              .then(res => {
                this.organisation = res.data.organisation;
                // this.tabs = res.data.organisation.organisation_tabs;
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
          console.log("cancel following", result);
          if (result.data.success) {
            this.$swal({
              text: result.data.message,
              icon: "info"
            });
            axios
              .get("/organisations/" + this.$route.params.slug)
              .then(res => {
                this.organisation = res.data.organisation;
                // this.tabs = res.data.organisation.organisation_tabs;
                this.following = res.data.following;
              })
              .catch(error => console.error("Error", error));
          }
        })
        .catch(err => {
          // TODO: add error
        });
    }
  },
  mounted() {
    axios
      .get("/organisations/" + this.$route.params.slug)
      .then(response => {
        console.log(
          `Organisation Loaded: ${this.$route.params.slug}`,
          response
        );

        this.organisation = response.data.organisation;

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
        // this.$refs.breadcrumbs.breadcrumbs[
        //   this.$refs.breadcrumbs.breadcrumbs.length - 1
        // ].meta.title = response.data.organisation.name;
      })
      .catch(error => console.error("Error", error));
  }
};
</script>

<style lang="scss" scoped>
.main-bg {
  background-color: #f4f6f9;
}

.organisation-bg {
  background-image: url(https://smileymovement.org/images/pages/organisation/subheader_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.organisation-grid {
  display: grid;
  grid-template-columns: 40% 40% 20%;
  color: #fff;
  grid-gap: 1px;

  .grid-item {
    padding: 25px;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    &.grid-item--main {
      display: flex;
    }

    &:last-child {
      border-right: none;
    }

    .title {
      @include font-size(1.2rem);
      font-weight: bold;
      font-family: "Montserrat Bold", sans-serif;
      color: #fff;
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }

    .content {
      @include font-size(1rem);
      font-family: "Montserrat Regular", sans-serif;
      color: #fff;
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
  color: #fff;
  font-family: "Montserrat SemiBold", sans-serif;

  li {
    margin: 5px;
  }
}

.organisation-network {
  margin-left: -25px;
  margin-right: -25px;
  margin-top: 25px;
  padding: 25px;
  border-top: 1px solid #fff;
  font-family: "Montserrat Regular", sans-serif;
  margin-bottom: 24px;

  .network-row {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 16px;
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
      color: #fff;
    }
  }
}

.button {
  font-family: "Montserrat SemiBold", sans-serif;
  margin-top: 24px;
  width: 100%;
  min-width: 100px;
  max-width: 240px;
  color: #fff;
  background-color: #7d8494;
  display: block;
  padding: 0 12px;
  text-decoration: none;
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
}

.organisation-avatar {
  margin-top: 35px;
  margin-right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  font-family: "Montserrat Bold", sans-serif;
  text-transform: uppercase;
  @include font-size(2rem);
  letter-spacing: 4px;
  color: #393939;
  background-color: #eeb400;
  text-align: center;
  line-height: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.organisation-info {
  margin-top: 35px;
  font-family: "Montserrat Bold", sans-serif;
  color: #fff;
  @include font-size(1.3);
}

.organisation-name {
  @include font-size(1.5rem);
  @include margin-bottom(1rem);
  font-family: "Montserrat SemiBold", sans-serif;
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
    padding-left: 50px;

    &:first-child {
      border-right: 2px solid #fff;
      padding-right: 50px;
      padding-left: 0px;
    }
  }
}

.organisation-additional {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  width: 100%;

  .grid-item {
    box-sizing: border-box;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;

    &:nth-child(odd) {
      align-items: flex-end;
    }

    &.grid-item--full-width {
      grid-column: 1 / span 2;
      align-items: center;
      .item-holder {
        max-width: 1530px;
      }
    }
  }

  .item-holder {
    max-width: 780px;
    width: 100%;
    box-sizing: border-box;
    padding: 25px 30px;
    border-bottom: 1px solid #393939;

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
      background-image: url("https://smileymovement.org/images/icons/checked@2x.png");
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

  input {
    padding: 5px 15px;
    min-width: 350px;
    margin-right: 15px;
  }

  button {
    margin-top: 0px;
  }
}

.post-title {
  font-family: "Montserrat Regular";
  text-align: center;
  line-height: 1.35;
  @include font-size(1.1rem);
  padding-top: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #c7c7c7;
  background-color: #a0a0a0;
  box-sizing: border-box;
  color: #fff;

  .post-title__title {
    @include font-size(2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    margin-bottom: 0px;
  }

  p {
    line-height: 1.45;
  }
}
</style>