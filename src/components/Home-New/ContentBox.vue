<template>
  <v-sheet :class="[marginValue, 'mt-3']">
    <div :class="[category==='topPicks'?'top-pick-box':'daily-news-box']">
      <slot name="content">fallback image or video</slot>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    },
  },
  computed: {
    marginValue() {
      switch(this.category) {
        case 'topPicks':
        case 'subTopPicks':
          if (this.$vuetify.breakpoint.xs) {
            return 'mr-0'
          } else {
            return 'mr-3'
          }
          break;
        case 'dailyNews':
          return 'mr-0'
          break;
        case 'otherNews':
          return 'mr-0'
          break;
      }
    },
  }
}
</script>

<style lang="scss" scoped>

  .top-pick-box {
    border-top: 2.5px solid #ffe61f;
  }
  // .daily-news-box {
  //   border-top: 1px solid #ececec;
  // }
</style>