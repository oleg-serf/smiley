<template>
  <v-col :cols="'12'">
    <content-box :category="'topPicks'">
      <template #content>
        <v-container class="pl-0 pr-0 pt-0">
          <!-- TOP BAR -->
          <div class="d-flex justify-space-between mt-1 mr-1" style="width: 100%;">
            <h3>Top Picks</h3>
            <div class="d-flex justify-end">
              <span><v-icon id="prevone" medium color="black">fa fa-chevron-circle-left</v-icon></span>
              <span class="ml-3"><v-icon id="nextone" medium color="black">fa fa-chevron-circle-right</v-icon></span>
            </div>
          </div>
          <!-- TOP BAR -->

          <!-- SLIDER -->
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in features" :key="index">
              <v-card flat class="d-flex flex-column align-center mt-2 pb-2 rounded-0">
                <media-image
                  :alt="item.title"
                  :title="item.title"
                  :height="iframeHeight"
                  :sort="item.video ? 'video' : 'image'"
                  :src="item.video ? item.video : item.cover_image"
                  :type="item.type"
                />
                <div class="d-flex flex-column">
                  <h3 class="mt-2">{{item.type}}: {{ item.title }}</h3>
                  <p class="mt-5" v-line-clamp:20="2">{{ item.description }}</p>
                  <small class="mt-4">{{ item.author }} | {{ dateAgo(item.published_at) }}</small>
                  <div class="d-flex mt-8 justify-center">
                    <v-btn elevation="" color="#ffe61f" class="rounded-button pl-12 pr-12">Register</v-btn>
                  </div>
                </div>
              </v-card>
            </swiper-slide>
          </swiper>
          <!-- SLIDER -->
        </v-container>
      </template>
    </content-box>  
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
  data: () =>({
    swiperOption: {
      slidesPerView: 1,
      navigation: {
        nextEl: '#nextone',
        prevEl: '#prevone'
      },
    }
  }),
  computed: {
    iframeHeight() {
      if (this.$vuetify.breakpoint.width > 1900) {
        return '515px'
      } else return '300px'
    },
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