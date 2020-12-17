<template>
  <div class="interviews_container">
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
    Footer,
    Breadcrumbs,
  },
  mounted() {
    const metaPayload = {
      title: "Smiley Interviews",
      meta: {
        description:
          "Positive interviews about charities, organisations and everyday heroes making the world a better place.",
      },
    };
    this.$store.dispatch("meta/setMeta", metaPayload);
  },
};
</script>
<style lang="scss" scoped>
.interviews_container {
  padding: 0 150px;
}
</style>
