<template>
  <div class="hero">
    <template v-if="type == 'iframe'">
        <iframe title="vimeo-player" :src="video" class="hero__overlay--vimeo"
                frameborder="0" allow="autoplay; fullscreen" allowfullscreen
                v-if="!isMobile"
        ></iframe>
      <img :src="image" v-else class="hero__overlay"/>
    </template>
    <template v-else>
      <video
          v-if="!isMobile"
          :src="video"
          muted
          id="background_video"
          autoplay
          loop
          class="hero__overlay"
      ></video>
      <img :src="image" v-else class="hero__overlay"/>
    </template>
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
    },
    type: {
      type: String,
      default: 'video'
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

.hero {
  overflow: hidden;
  position: relative;
}

// .hero__vimeo {

// }

iframe.hero__overlay--vimeo {
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
