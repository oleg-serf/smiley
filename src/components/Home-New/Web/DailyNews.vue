<template>
  <v-col class="mt-8" :cols="colValue[1]">
    <h4>Daily | News</h4>
    <content-box v-for="(item, index) in news" :key="index" :category="'dailyNews'">
      <template #content>
        <v-card flat :class="{'d-flex mt-2 rounded-0': true, 'flex-column': $vuetify.breakpoint.xs}" max-height='310px'>
          <media-image
            :alt="item.title"
            :title="item.title"
            :sort="item.video ? 'video' : 'image'"
            :src="item.video ? item.video : item.cover_image"
            :width="widthTwo"            
            :height="item.video ? iframeHeight : 'auto'"
            type="news"
            size="l"
          />
          <div :class="{'d-flex flex-column': true, 'pl-0': $vuetify.breakpoint.xs, 'pl-3': $vuetify.breakpoint.smAndUp}">
            <h3>{{ item.type }}: </h3>
            <h5>{{ item.title }}</h5>
            <div>
              <v-chip small class="pa-2 mt-4 mr-1 rounded-0" label>Politics</v-chip>
            </div>
            <small class="mt-4" v-line-clamp:20="3">{{ item.description }}</small>
            <small class="mt-4 gray--text"> {{ item.author }} | {{ dateAgo(item.published_at) }}</small>
          </div>
        </v-card>
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
    news: [],
  },
  computed: {
    iframeHeight() {
      if (this.$vuetify.breakpoint.width > 1900) {
        return '515px'
      } else return '300px'
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
</style>