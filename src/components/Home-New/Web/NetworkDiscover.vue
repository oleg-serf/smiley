<template>
  <v-row class="mt-6 network-discovery">
    <div class="d-flex justify-space-between pr-4 pl-4" style="margin-bottom: -16px; width: 100%;">
      <h3>Network | Discover</h3>
      <div class="d-flex align-center">
        <Dropdown :items="items" label="UN Goals" class="mr-4"/>
        <span><v-icon id="prevone" medium color="black">fa fa-chevron-circle-left</v-icon></span>
        <span class="ml-3"><v-icon id="nextone" medium color="black">fa fa-chevron-circle-right</v-icon></span>
      </div>
    </div>
    <v-container class="pl-4 pt-0">
      <hr class="seperator mt-5">
      <content-box :category="'otherNews'">
        <template #content>
          <swiper style="max-width:1345px;" :options="swiperOption2">
            <swiper-slide  v-for="item in networks" :key="index" class="text-left">
              <div class="discover-outer-box px-6">
                  <div class="d-flex flex-column justify-space-between discoverBox pb-5">
                    <h4 class="mb-8" v-line-clamp:20="2">{{item.type || "Network"}}: {{item.name}}</h4>
                    <div class="d-flex align-center justify-space-between">
                      <small>{{item.owner ? item.owner.name : "No name"}} | {{dateAgo(item.created_at)}}</small>
                      <v-chip small class="pa-2 mr-1 rounded-0">Poverty</v-chip>
                    </div>
                  </div>
                </div>
            </swiper-slide>
          </swiper>
        </template>
      </content-box>
    </v-container>
  </v-row>
</template>

<script>
import MediaImage from "@/components/MediaImage.vue";

export default {
  components: {
    contentBox: () => import('../ContentBox'),
    Dropdown: () => import('../../forms/Dropdown.vue'),
    MediaImage,
  },
  props: {
    networks: [],
  },
  data: () =>({
    items: ['Responsible Consumption and Production ', 'Bar', 'Fizz', 'Buzz'],
    swiperOption2: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      spaceBetweeen: 30,
      navigation: {
        nextEl: '#nextone',
        prevEl: '#prevone'
      },
    },
    swiperOption: {
      slidesPerView: 1,
      spaceBetweeen: 30,
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
      } return '4';
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

<style lang="scss">
  .rounded-button {
    border-radius: 20px;
    outline: none !important;
  }
  .main-column {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .swiper-slide:nth-child(3n) {
    border: none;
  }
  .discover-outer-box {
    width: 100%;
  }
  .discoverBox {
    border-bottom: 1px solid #ececec;
    height: 150px;
    h4 {
      min-height: 50px;
      font-size: 24px;
      color: #000;
    }
  }

   .network-discovery {

     .swiper-container {
         width: 100%;
         height: 100%;
         margin-left: auto;
         margin-right: auto;
         .swiper-wrapper {
           flex-direction: row !important;
           .swiper-slide {
             border-right: 1px solid #ececec;
           }
         }
       }
   }


    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      // height: calc((100% - 30px) / 2);

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>