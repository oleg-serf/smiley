<template>
  <div class="news_container">
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
      title: "Smiley News",
      meta: {
        description:
          "Daily positive news about charities, organisations and everyday heroes making the world a better place.",
      },
    };
    this.$store.dispatch("meta/setMeta", metaPayload);
  },
};
</script>
<style lang="scss" scoped>
.news_container {
  padding: 0 150px;
  max-width: 1500px;
  margin: 0 auto;
  @include lgMax {
    padding: 0 100px;
  }
  @include mdMax {
    padding: 0 50px;
  }
  @include smMax {
    padding: 0;
  }
}
</style>
