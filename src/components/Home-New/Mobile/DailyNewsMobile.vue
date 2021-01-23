<template>
  <v-col :cols="'12'">
    <content-box :category="'topPicks'">
      <template #content>
        <v-container class="pl-0 pr-0 pt-0">
          <!-- TOP BAR -->
          <div class="d-flex justify-space-between mt-1 mr-1" style="width: 100%;">
            <h3>Daily | News</h3>
            <div class="d-flex justify-end">
              <span><v-icon id="d-prev" medium color="black">fa fa-chevron-circle-left</v-icon></span>
              <span class="ml-3"><v-icon id="d-next" medium color="black">fa fa-chevron-circle-right</v-icon></span>
            </div>
          </div>
          <!-- TOP BAR -->
          
          <!-- SLIDER -->
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(slide, index) in j" :key="index">
              <v-card flat class="d-flex flex-column mt-2 pb-2 rounded-0">
                <img width="100%" :src="require('../../../assets/l-geaorlbm6150647851@1x.png')" />
                <!-- <iframe :height="iframeHeight" :width="$vuetify.breakpoint.width - 40" src="https://www.youtube.com/embed/O-3fzNmsQfQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <div class="d-flex flex-column">
                  <h3 class="mt-2">Interview : Rachel Snape National</h3>
                  <small class="mt-4">Virtual stream | 30 Jan 2021 | 1pm BST</small>
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
export default {
  components: {
    contentBox: () => import('../ContentBox'),
  },
  data: () =>({
    j: 4,
    swiperOption: {
      slidesPerView: 1,
      navigation: {
        nextEl: '#d-next',
        prevEl: '#d-prev'
      },
    }
  }),
  computed: {
    iframeHeight() {
      if (this.$vuetify.breakpoint.width > 1900) {
        return '515px'
      } else return '300px'
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