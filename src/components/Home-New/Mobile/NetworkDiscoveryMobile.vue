<template>
  <v-col :cols="'12'">
    <content-box :category="'topPicks'">
      <template #content>
        <v-container class="pl-0 pr-0 pt-0">
          <!-- TOP BAR -->
          <div class="d-flex justify-space-between mt-1" style="width: 100%;">
            <h3>Network | Discover</h3>
            <div class="d-flex justify-end">
              <span><v-icon id="nn-prev" medium color="black">fa fa-chevron-circle-left</v-icon></span>
              <span class="ml-3"><v-icon id="nn-next" medium color="black">fa fa-chevron-circle-right</v-icon></span>
            </div>
          </div>
          <!-- TOP BAR -->
          
          <!-- SLIDER -->
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in networks" :key="index">
              <v-card flat class="d-flex flex-column mt-2 pb-2 rounded-0">
                <h2 class="mt-4 mb-7 text-3" v-line-clamp:20="3">{{item.type || "Network"}}: {{item.name}}</h2>
                <small class="discover-date">{{item.owner ? item.owner.name : "No name"}} | {{dateAgo(item.created_at)}}</small>
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
    networks: [],
  },
  data: () =>({
    swiperOption: {
      slidesPerView: 1,
      navigation: {
        nextEl: '#nn-next',
        prevEl: '#nn-prev'
      },
    }
  }),
  computed: {
    dateTop() {
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
.discover-date {
  position: absolute;
  top: 140px;
}
</style>