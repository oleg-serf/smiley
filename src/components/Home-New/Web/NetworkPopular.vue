<template>
  <v-col class="mt-6" :cols="networkCols[1]">
    <div class="d-flex justify-space-between mr-1" style="margin-bottom: -17.5px">
      <h3>Network | Popular</h3>
      <div class="d-flex">
        <span><v-icon id="prev" medium color="black">fa fa-chevron-circle-left</v-icon></span>
        <span class="ml-3"><v-icon id="next" medium color="black">fa fa-chevron-circle-right</v-icon></span>
      </div>
    </div>
    <v-container class="pr-1 pl-0 pt-0">
      <content-box :category="'networkPopular'">
        <template #content>
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="index in popular" :key="index">
              <div class="d-flex flex-column">
                <div v-for="(item, i) in networks.slice((index-1)*2, index*2)" :key="`${index}_${i}`" class="mt-2">
                  <media-image
                    :alt="item.name"
                    :title="item.name"
                    :sort="item.video ? 'video' : 'image'"
                    :src="item.video ? item.video : item.cover_image"
                    type="projects"
                    :height="iframeHeight"
                    size="l"
                  />
                  <h4>Discussion: {{item.name}}</h4>
                  <small>{{item.owner ? item.owner.name : "No name"}} | {{dateAgo(item.created_at)}}</small>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </content-box>
    </v-container>
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
    networks: [],
  },
  data: function() {
    return {
      popular: Math.ceil(this.networks.length/2),
      swiperOption: {
        navigation: {
          nextEl: '#next',
          prevEl: '#prev'
        },
      }
    }
  },
  computed: {
    iframeHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '160px'
        case 'sm': return '180px'
        case 'md': return '200px'
        case 'lg': return '220px'
        case 'xl': return '240px'
      }
    },
    otherCols() {
      if (this.$vuetify.breakpoint.xs) {
        return '12';
      } return '4'
    },
    iframeHeightTwo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '300px'
        case 'md': return '240px'
        case 'lg': return '360px'
        case 'xl': return '385px'
      }
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
    widthTwo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '70%'
        case 'lg': return '71%'
        case 'xl': return '80%'
      }
    },
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '55%'
        case 'md': return '55%'
        case 'lg': return '55%'
        case 'xl': return '55%'
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
    networkCols() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return [12, 12]
        case 'sm': return [12, 12]
        case 'md': return [8, 4]
        case 'lg': return [8, 4]
        case 'xl': return [8, 4]
      }
    }
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