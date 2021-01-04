<template>
  <div class="talks_container">
    <Breadcrumbs/>
    <router-view key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export default {
  components: {
    Breadcrumbs,
    Footer,
  },
  mounted() {
    const metaPayload = {
      title: "Smiley Talks",
      meta: {
        description:
          "Free live-events themed around the Sustainable Development Goals. A chance to interact with leading organisations and meet like-minded individuals.",
      },
    };

    this.$store.dispatch("meta/setMeta", metaPayload);
  },
};
</script>
<style lang="scss" scoped>
.talks_container {
  padding: 0 150px;
}
</style>
