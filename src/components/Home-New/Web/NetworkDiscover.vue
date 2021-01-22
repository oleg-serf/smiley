<template>
  <v-row class="mt-16 pa-3">
    <div class="d-flex justify-space-between mr-1" style="margin-bottom: -16px; width: 100%;">
      <h3>Network | Discover</h3>
      <div class="d-flex">
        <span><v-icon id="prevone" medium color="black">fa fa-chevron-circle-left</v-icon></span>
        <span class="ml-3"><v-icon id="nextone" medium color="black">fa fa-chevron-circle-right</v-icon></span>
      </div>
    </div>
    <v-container class="pr-1 pl-0 pt-0">
      <content-box :category="'otherNews'">
        <template #content>
          <swiper style="max-width:1345px" ref="mySwiper" :options="swiperOption">
            <swiper-slide>
              <v-row class="d-flex mt-1">
                <v-col class="d-flex flex-column" v-for="(item, index) in other" :key="index" :cols="otherCols">
                  <div class="discoverBox">
                    <h4 class="mb-14">Project: Save the trees inner city</h4>
                    <small class="mb-8">Milton Road Primary School | 01/11/2020</small>
                  </div>
                </v-col>
              </v-row>
            </swiper-slide>
            <swiper-slide>
              <v-row class="d-flex mt-1">
                <v-col class="d-flex flex-column" v-for="(item, index) in other" :key="index" :cols="otherCols">
                  <div class="discoverBox">
                    <h4 class="mb-14">Project: Save the trees inner city</h4>
                    <small class="mb-8">Milton Road Primary School | 01/11/2020</small>
                  </div>
                </v-col>
              </v-row>
            </swiper-slide>
          </swiper>
        </template>
      </content-box>
    </v-container>
  </v-row>
</template>

<script>
export default {
  components: {
    contentBox: () => import('../ContentBox'),
  },
  data: () =>({
    other: 9,
    swiperOption: {
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