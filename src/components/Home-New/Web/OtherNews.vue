<template>
  <!-- OTHER NEWS PART -->
  <v-row class="mt-10 d-flex flex-column other-news-section" no-gutters>
    <div class="d-flex justify-space-between mr-6" style="margin-bottom: -16px">
      <h3>Other | News</h3>
      <div class="d-flex align-center mb-4">
        <Dropdown :items="items" label="UN Goals" class="mr-4"/>
        <span><v-icon id="left" medium color="black">fa fa-chevron-circle-left</v-icon></span>
        <span class="ml-3"><v-icon id="right" medium color="black">fa fa-chevron-circle-right</v-icon></span>
      </div>
    </div>
    <v-container class="pr-6 pl-0 pt-0">
      <content-box :category="'otherNews'">
        <template #content>    
          <hr class="seperator" />
          <swiper style="max-width:1345px" ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(n, index) in numberSwiper" :key="index" class="mr-2">
              <v-row class="d-flex mt-1">
                <v-col
                  class="d-flex flex-column other-new-item"
                  v-for="(item, i) in news.slice(index * 9, (index + 1) * 9)"
                  :key="`${index}_${i}`"
                  :cols="otherCols"
                >
                  <div class="outer-wrapper">
                    <media-image
                      :alt="item.title"
                      :title="item.title"
                      :sort="item.video ? 'video' : 'image'"
                      :src="item.video ? item.video : item.cover_image"
                      :type="item.type"
                      :height="iframeHeight"
                    />
                    <div>
                      <h4 class="mt-2">
                        <strong class="mt-1">{{ item.type }}: </strong><span>{{ item.title.slice(0, 80) }} {{item.title.length > 80 ? '...' : null}}</span>
                      </h4>
                    </div>
                    <div class="d-flex align-center justify-space-between">
                      <small class="mt-4">{{item.author}} | {{dateAgo(item.published_at)}}</small>
                      <v-chip small class="pa-2 mt-4 mr-1 rounded-0">Poverty</v-chip>
                    </div>
                  </div>
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
    Dropdown: () => import('../../forms/Dropdown.vue'),
    contentBox: () => import('../ContentBox'),
    MediaImage,
  },
  props: {
    news: [],
  },
  data: function() {
    return {
      items: ['Responsible Consumption and Production ', 'Bar', 'Fizz', 'Buzz'],
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
        case "xs":
          return "180px";
        case "sm":
          return "180px";
        case "md":
          return "220px";
        case "lg":
          return "240px";
        case "xl":
          return "260px";
      }
    },
    otherCols() {
      if (this.$vuetify.breakpoint.xs) {
        return "12";
      }
      return "4";
    },
  },
};
</script>

<style lang="scss" scoped>
.other-news-section {
  .other-new-item {
    border-left: 1px solid #ececec;
    padding: 5px 12px;
    .outer-wrapper {
      padding-bottom: 15px;
      border-bottom: 1px solid #ececec;
      .v-chip {
        color: #fff;
        font-weight: 600;
        letter-spacing: 1.5px;
      }
    }
  }
  .other-new-item:nth-child(3n) {
    padding-right: 0;
  }
}
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