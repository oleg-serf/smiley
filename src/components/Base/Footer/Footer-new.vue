<template>
  <v-footer class="mt-6" padless :style="footerStyles">
    <v-col class="text-center white" cols="12">
      <h2 class="mb-8 mt-4">{{ footerText}}</h2>
      <subscribe-form />
      <div class="text-center mt-16">
        <img v-if="$vuetify.breakpoint.smAndUp" width="65%" :src="require('../../../assets/footer-logos@1x.png')" />
        <img v-else width="45%" :src="require('../../../assets/HEADER_LOGO@2x.png')" />
      </div>
        <h5 v-if="$vuetify.breakpoint.xs" class="mt-6">All rights reserved smiley news - 2021</h5>
    </v-col>
  </v-footer>
</template>

<script>
import subscribeForm from './Subscription-form.vue';

export default {
  components: {
    subscribeForm
  },
  computed: {
    footerText() {
      if (this.$vuetify.breakpoint.smAndUp) {
        return 'Subscribe to our Newsletter for the latest news!';
      } return 'Subscribe to our Newsletter';
    },
    footerStyles() {
      return `
        border-top: 3px solid #ffe61f;
      `;
    }
  },
}
</script>
<style lang="scss" scoped>
.v-footer {
  h2 {
    font-family: "Montserrat Bold";
  }
}
</style>