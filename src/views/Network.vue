<template>
  <div>
    <div class="container">
      <banner color="#4696D2">
        <template v-slot:name>Network</template>
        <template
          v-slot:content
        >Explore active fundraising campaigns and charitable initiatives making a difference in the world and find out how you can get involved. If you have a new idea for a social impact project, create your own Project following the Theory of Change method and start collaborating with other members.</template>
      </banner>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/homepage/Banner.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
</style>