<template>
  <v-col :cols="colValue[0]">
    <div class="main-column">
      <div>
        <h4>Top Picks</h4>
        <content-box :category="'topPicks'">
          <template #content>
            <v-card flat class="d-flex flex-column mt-2 rounded-0">
              <media-image
                :alt="features[0].title"
                :title="features[0].title"
                :height="iframeHeight"
                :sort="features[0].video ? 'video' : 'image'"
                :src="features[0].video ? features[0].video : features[0].cover_image"
                :type="features[0].type"
              />
              <div class="d-flex flex-column">
                <h3 class="mt-2">{{ features[0].type }}: {{ features[0].title }}</h3>
                <div class="d-flex mt-2">
                  <v-btn elevation="1" color="#ffe61f" class="rounded-button pl-12 pr-12">Register</v-btn>
                </div>
                <p class="mt-5" v-line-clamp:20="2">{{ features[0].description }}</p>
                <small class="mt-4">{{ features[0].author }} | {{ dateAgo(features[0].published_at) }}</small>
              </div>
            </v-card>
          </template>
        </content-box>
      </div>
      <div>
        <div v-for="(item, index) in features.slice(1,3)" :key="index" style="height: 50%"> 
          <content-box :category="'topPicks'">
            <template #content>
              <v-card flat :class="{
                'd-flex mt-2 rounded-0': true,
                'd-flex flex-column': $vuetify.breakpoint.xs
              }">
                <media-image
                  :alt="item.title"
                  :title="item.title"
                  :sort="item.video ? 'video' : 'image'"
                  :src="item.video ? item.video : item.cover_image"
                  :type="item.type"
                  :width="widthOne"
                  :height="item.video ? iframeHeight : 'auto'"
                />
                <div :class="{'d-flex flex-column justify-content-center': true, 'pl-0': $vuetify.breakpoint.xs, 'pl-4': $vuetify.breakpoint.smAndUp}">
                  <h3>{{ item.type }}: {{ item.title }}</h3>
                  <span>
                    <v-chip small class="pa-2 mt-4 mr-1 rounded-0">Politics</v-chip>
                  </span>
                  <small class="mt-8">{{ item.author }} | {{ dateAgo(item.published_at) }}</small>
                </div>
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
    iframeHeight() {
      if (this.$vuetify.breakpoint.width > 1900) {
        return '515px'
      } else return '350px'
    },
    widthOne() {
      if (this.$vuetify.breakpoint.width > 2000) {
        return '58%'
      }
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '57%'
        case 'lg': return '52%'
        case 'xl': return '52%'
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
    height: 100%;
    display: flex;
    flex-direction: column;
    div {
      flex: 1;
    }
  }
  .discoverBox {
    border-bottom: 4px dashed lightgray;
  }
</style>