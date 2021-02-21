<template>
  <v-col :cols="colValue[0]">
    <div class="main-column top-picks">
      <div class="mt-8">
        <h2>Top Picks</h2>
        <content-box :category="'topPicks'">
          <template #content>
            <v-card flat class="d-flex flex-column mt-2 rounded-0 top-picks-item">
              <media-image
                :alt="features[0].title"
                :title="features[0].title"
                :height="iframeHeight"
                :sort="features[0].video ? 'video' : 'image'"
                :src="features[0].video ? features[0].video : features[0].cover_image"
                :type="features[0].type"
              />
              <div class="d-flex flex-column">
                <h3 class="mt-2"><span>{{ features[0].type }}:</span> {{ features[0].title }}</h3>
                <p class="mt-2" v-line-clamp:20="2">{{ features[0].description }}</p>
                <div class="article-tag" >Education</div>
                <small class="mt-2">{{ features[0].author }} | {{ dateAgo(features[0].published_at) }}</small>
                <div class="top-picks-play">
                  <i class="fa fa-play"></i>
                </div>
              </div>
            </v-card>
          </template>
        </content-box>
      </div>
      <div class="sub-top-picks">
        <div v-for="(item, index) in features.slice(1,3)" :key="index"> 
          <content-box :category="'subTopPicks'">
            <template #content>
              <v-card flat :class="{
                'd-flex mt-2 rounded-0': true,
                'd-flex flex-column': $vuetify.breakpoint.xs
              }">
              <v-row>
                <v-col cols="12" xl="7" lg="7">
                <media-image
                  :alt="item.title"
                  :title="item.title"
                  :sort="item.video ? 'video' : 'image'"
                  :src="item.video ? item.video : item.cover_image"
                  :type="item.type"
                  :width="widthOne"
                  :height="newItemHeight"
                />
                </v-col>
                <v-col cols="12" xl="5" lg="5">
                  <div :class="{'d-flex flex-column justify-content-center': true, 'pl-0': $vuetify.breakpoint.xs, 'pl-4': $vuetify.breakpoint.smAndUp}">
                    <h3><span>{{ item.type }}:</span> {{ item.title }}</h3>
                    <span>
                      <v-chip small class="pa-2 mt-4 mr-1 rounded-0">Politics</v-chip>
                    </span>
                    <small class="mt-2">{{ item.author }} | {{ dateAgo(item.published_at) }}</small>
                  </div>
                </v-col>
              </v-row>
              </v-card>
            </template>
          </content-box>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import MediaImage from "@/components/MediaImage.vue";

export default {
  components: {
    contentBox: () => import('../ContentBox'),
    MediaImage,
  },
  props: {
    features: [],
  },
  computed: {
    newItemHeight() {
      return '230px'
    },
    iframeHeight() {
      if (this.$vuetify.breakpoint.width > 1900) {
        return '480px'
      } else return '480px'
    },
    widthOne() {
      if (this.$vuetify.breakpoint.width > 2000) {
        return '58%'
      }
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '100%'
        case 'md': return '100%'
        case 'lg': return '100%'
        case 'xl': return '100%'
      }
    },
    colValue () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return [12, 12]
        case 'sm': return [12, 12]
        case 'md': return [7, 5]
        case 'lg': return [7, 5]
        case 'xl': return [7, 5]
      }
    },
  },
  methods: {   
  },
}
</script>

<style lang="scss" scoped>
  .rounded-button {
    border-radius: 20px;
    outline: none !important;
  }
  .main-column {
    font-family: "Montserrat Regular";
    height: 100%;
    display: flex;
    flex-direction: column;
      h3 {
        font-weight: 600;
        font-family: "Montserrat SemiBold";
        span {
          font-family: "Montserrat Bold";

        }
      }
      .sub-top-picks {
        .v-sheet {
           border-top: 1px solid #ececec;
           .v-card {
             border: none;
           }
        }
      }
  }
  .discoverBox {
    border-bottom: 4px dashed lightgray;
  }
  .top-picks {
    padding-right: 18px;
    display: flex;
    justify-content: space-between;

    &-item {
      position: relative;
    }

    &-play {
      background-color: red;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      height: 100px;
      width: 180px;
      background-color: #fff;
      border-radius: 40px;
      opacity: .8;
      cursor: pointer;
      display: grid;
      place-items: center;
      font-size: 60px;
      transition: all .2s;

      &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.537);
        transform: translate(-50%, -53%);
        opacity: 1;
      }
      &:active {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        transform: translate(-50%, -50%);
      }
    }
  }
</style>