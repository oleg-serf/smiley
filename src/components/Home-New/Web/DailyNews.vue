<template>
  <v-col class="mt-8 daily-news" :cols="colValue[1]">
    <h2 class="daily-news-title">Daily | News</h2>
    <div class="daily-news-content">
      <content-box v-for="(item, index) in news" :key="index" :category="index==0?'topPicks':'dailyNews'">
        <template #content>
          <v-card flat :class="{'d-flex mt-2 rounded-0': true, 'flex-column': $vuetify.breakpoint.xs}" max-height='310px'>
            <media-image
              :alt="item.title"
              :title="item.title"
              :sort="item.video ? 'video' : 'image'"
              :src="item.video ? item.video : item.cover_image"
              :width="widthTwo"            
              :height="iframeHeight"
              type="news"
              size="l"
            />
            <div
              :class="{'d-flex flex-column': true, 'pl-0': $vuetify.breakpoint.xs, 'pl-3': $vuetify.breakpoint.smAndUp}"
              style="width: 30%"
            >
              <h3>{{ item.type }}: </h3>
              <h5>{{ item.title }}</h5>
              <div class="article-tag">
                Politics
              </div>
              <small class="mt-4 gray--text"> {{ item.author }} | {{ dateAgo(item.published_at) }}</small>
            </div>
          </v-card>
        </template>
      </content-box>
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
    news: [],
  },
  computed: {
    iframeHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "180px";
        case "sm":
          return "180px";
        case "md":
          return "210px";
        case "lg":
          return "230px";
        case "xl":
          return "230px";
      }
    },
    widthTwo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '330px'
        case 'lg': return '330px'
        case 'xl': return '330px'
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

  .daily-news-content {
    .v-sheet:first-child {
      border: none;
    }
  }

  .daily-news {
    .v-sheet {
      border-top: 1px solid #ececec;
      .v-card {
        border: none;
      }
    }
  } 
  .daily-news {
    &-title {
      padding-left: 30px;
    }
    &-content {
      border-left: 1px solid #E5E5E5;
      padding-left: 30px;
    }
  }
</style>