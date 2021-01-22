<template>
  <!-- OTHER NEWS PART -->
  <v-row class="mt-10 d-flex flex-column" no-gutters>
    <div class="d-flex justify-space-between mr-6">
      <h3>Other | News</h3>
      <div class="d-flex">
        <span><v-icon id="left" medium color="black">fa fa-chevron-circle-left</v-icon></span>
        <span class="ml-3"><v-icon id="right" medium color="black">fa fa-chevron-circle-right</v-icon></span>
      </div>
    </div>
    <v-container class="pr-6 pl-0">
      <content-box :category="'otherNews'">
        <template #content>    
          <swiper style="max-width:1345px" ref="mySwiper" :options="swiperOption">
            <swiper-slide class="mr-2">
              <v-row class="d-flex mt-1">
                <v-col class="d-flex flex-column" v-for="(item, index) in other" :key="index" :cols="otherCols">
                  <img width="100%" :src="require('../../../assets/l-geaorlbm6150647851@1x.png')"/>
                  <div>
                    <strong class="mt-1">Interview: </strong><span>Rachel Snape National Leader of Education</span>
                  </div>
                  <small class="mt-4">Milton Road Primary School | 01/11/2020</small>
                </v-col>
              </v-row>
            </swiper-slide>
            <swiper-slide>
              <v-row class="d-flex mt-1">
                <v-col class="d-flex flex-column" v-for="(item, index) in other1" :key="index" :cols="otherCols">
                  <img width="100%" :src="require('../../../assets/etienne-godiard-ov5v3z3coow-unsplash@1x.png')"/>
                  <div>
                    <strong class="mt-1">Interview: </strong><span>Rachel Snape National Leader of Education</span>
                  </div>
                  <small class="mt-4">Milton Road Primary School | 01/11/2020</small>
                </v-col>
              </v-row>
            </swiper-slide>
          </swiper>
          
          <!-- <v-row class="d-flex mt-1">
            <v-col class="d-flex flex-column" v-for="(item, index) in other" :key="index" :cols="otherCols">
              <img width="100%" :src="require('../assets/l-geaorlbm6150647851@1x.png')"/>
              <div>
                <strong class="mt-1">Interview: </strong><span>Rachel Snape National Leader of Education</span>
              </div>
              <small class="mt-4">Milton Road Primary School | 01/11/2020</small>
            </v-col>
          </v-row> -->
        </template>
      </content-box>
    </v-container>
  </v-row>
  <!-- OTHER NEWS PART -->
</template>

<script>
export default {
  components: {
    contentBox: () => import('../ContentBox'),
  },
  data: () =>({
    i: 4,
    other: 9,
    other1: 8,
    swiperOption: {
      // direction: 'horizontal',
      // slidesPerView: 4,
      // spaceBetween: 6,
      navigation: {
        nextEl: '#right',
        prevEl: '#left'
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