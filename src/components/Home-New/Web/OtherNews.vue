<template>
  <!-- OTHER NEWS PART -->
  <v-row class="mt-10 d-flex flex-column" no-gutters>
    <div class="d-flex justify-space-between mr-6" style="margin-bottom: -16px">
      <h3>Other | News</h3>
      <div class="d-flex">
        <span><v-icon id="left" medium color="black">fa fa-chevron-circle-left</v-icon></span>
        <span class="ml-3"><v-icon id="right" medium color="black">fa fa-chevron-circle-right</v-icon></span>
      </div>
    </div>
    <v-container class="pr-6 pl-0 pt-0">
      <content-box :category="'otherNews'">
        <template #content>    
          <swiper style="max-width:1345px" ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(n, index) in numberSwiper" :key="index" class="mr-2">
              <v-row class="d-flex mt-1">
                <v-col class="d-flex flex-column" v-for="(item, i) in news.slice(index*9, (index+1)*9)" :key="`${index}_${i}`" :cols="otherCols">
                  <media-image
                    :alt="item.title"
                    :title="item.title"
                    :sort="item.video ? 'video' : 'image'"
                    :src="item.video ? item.video : item.cover_image"
                    :type="item.type"
                    :height="iframeHeight"
                  />
                  <div>
                    <strong class="mt-1">{{ item.type }}: </strong><span>{{ item.title }}</span>
                  </div>
                  <small class="mt-4">{{item.author}} | {{dateAgo(item.published_at)}}</small>
                </v-col>
              </v-row>
            </swiper-slide>
          </swiper>
        </template>
      </content-box>
    </v-container>
  </v-row>
  <!-- OTHER NEWS PART -->
</template>

<script>
import MediaImage from "@/components/MediaImage.vue";

export default {
  components: {
    contentBox: () => import('../ContentBox'),
    MediaImage,
  },
  props: {
    news: [],
  },
  data: function() {
    return {
      numberSwiper: Math.ceil(this.news.length/9),
      swiperOption: {
        navigation: {
          nextEl: '#right',
          prevEl: '#left'
        },
      }
    }
  },
  computed: {
    iframeHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '180px'
        case 'sm': return '180px'
        case 'md': return '220px'
        case 'lg': return '240px'
        case 'xl': return '260px'
      }
    },
    otherCols() {
      if (this.$vuetify.breakpoint.xs) {
        return '12';
      } return '4'
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