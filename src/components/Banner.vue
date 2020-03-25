<template>
  <div class="container">
    <div class="banner-block">
      <div class="banner-block__left-column" :style="{backgroundColor: color}">
        <div class="banner-block__logo">
          <img src="/img/_smiley-logo.svg" />
        </div>
        <div class="banner-block__name" v-if="isNotEmptySlot('name')">
          <slot name="name"></slot>
        </div>
      </div>
      <div class="banner-block__right-column">
        <div class="banner-block__overlay" :style="{backgroundColor: color}"></div>
        <img :src="background" class="banner-block__background" v-if="background != null" />
        <div class="banner-block__content">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Banner",
  props: {
    link: {
      type: String
    },
    color: {
      type: String,
      default: "#eeb400"
    },
    background: {
      type: String,
      default: "/img/homepage/network-dt-bg.png"
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