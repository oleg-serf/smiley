<template>
  <div class="banner-block" :class="{'banner-block--reversed': reversed}">
    <div class="banner-block__left-column"
         :style="styleObject"
    >
      <!--      <div class="banner-block__logo" v-if="!isNotEmptySlot('logo') && logo">
              <img src="/img/_smiley-logo.svg" />
            </div>-->
      <div class="banner-block__prefix">
        <slot name="prefix"></slot>
      </div>
      <div class="banner-block__name" v-if="isNotEmptySlot('name')">
        <slot name="name"></slot>
      </div>
      <!--      <div class="banner-block__subname" v-if="isNotEmptySlot('subname')">
              <slot name="subname"></slot>
            </div>-->
    </div>
    <div class="banner-block__right-column" :style="{backgroundColor: color}">
      <!--      <div
              class="banner-block__overlay"
              :style="{backgroundColor: color, opacity: (solid) ? 1 : .5}"
            ></div>-->
      <img :src="background" class="banner-block__background" v-if="background != null || !solid"/>
      <!--      <div class="banner-block__content">
              <div class="banner-block__title" v-if="isNotEmptySlot('title')">
                <slot name="title"></slot>
              </div>
              <div class="banner-block__subtitle" v-if="isNotEmptySlot('content')">
                <slot name="content"></slot>
              </div>
            </div>
            <div class="banner-block__button" v-if="isNotEmptySlot('button') && link != null">
              <router-link :to="link">
                <slot name="button"></slot>
              </router-link>
            </div>-->
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
