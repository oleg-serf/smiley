<template>
  <div class="hero">
    <video
      v-if="!isMobile"
      :src="video"
      muted
      id="background_video"
      autoplay
      loop
      class="hero__overlay"
    ></video>
    <img :src="image" v-else class="hero__overlay" />
    <div class="hero__content">
      <h1 class="hero__title">
        <slot name="title"></slot>
      </h1>
      <div class="hero__subtitle">
        <slot name="subtitle"></slot>
      </div>
      <router-link :to="link" class="hero__button" v-if="link != null">Learn more</router-link>
    </div>
  </div>
</template>

<script>
export default {
  title: "Hero",
  data() {
    return {
      isMobile: true
    };
  },
  props: {
    video: {
      type: String
    },
    image: {
      type: String,
      default: "/img/homepage/header-bg-dt-x1.jpg"
    },
    link: {
      type: String
    }
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth >= 768 ? false : true;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_hero";
</style>
