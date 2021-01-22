<template>
  <v-sheet :class="[marginValue, 'mt-3']">
    <div :class="['top-pick-box']">
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
    border-top: 4px solid #ffe61f;
  }
</style>