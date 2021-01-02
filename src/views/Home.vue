<template>
  <section>
    <IndexMobile v-if="isMobile" />
    <Index v-else />
  </section>
</template>

<script>
import Index from "@/views/index.vue";
import IndexMobile from "@/views/IndexMobile";
export default {
  name: "Home",
  components: {
    Index,
    IndexMobile,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    handleResize() {
      this.isMobile = window.outerWidth >= 450 ? false : true;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>