<template>
  <div class="banner-block" :class="{'banner-block--reversed': reversed}">
    <div class="banner-block__left-column"
         :style="styleObject"
    >
      <div class="banner-block__prefix">
        <slot name="prefix"></slot>
      </div>
      <div class="banner-block__name" v-if="isNotEmptySlot('name')">
        <slot name="name"></slot>
      </div>
    </div>
    <div class="banner-block__right-column" :style="{backgroundColor: color}">
      <img :src="background" class="banner-block__background" v-if="background != null || !solid"/>
    </div>
  </div>
</template>

<script>
export default {
  title: "GoalsBanner",
  props: {
    nameLength: {
      type: Number,
      default: 20
    },
    link: {
      type: String
    },
    color: {
      type: String,
      default: "#eeb400"
    },
    solid: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "/img/homepage/network-dt-bg.png"
    },
    logo: {
      type: Boolean,
      default: true
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  /*
  * COMPUTED */
  computed: {
    styleObject() {
      let style = [{
        backgroundColor: this.color
      }]
      if (this.nameLength) {
        if (15 < this.nameLength && this.nameLength < 25) {
          style.push(
              {
                maxWidth: '400px'
              }
          )
        } else if (35 > this.nameLength && this.nameLength > 25) {
          style.push(
              {
                maxWidth: '610px'
              }
          )
        } else if (this.nameLength > 35) {
          style.push(
              {
                maxWidth: '800px'
              }
          )
        }
      }
      return style
    }
  },
  methods: {
    isNotEmptySlot(slotName) {
      return !!this.$slots[slotName];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_banner-block";
</style>
