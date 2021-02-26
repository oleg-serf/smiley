<template>
  <v-footer class="mt-6" padless :style="footerStyles">
    <v-col class="text-center white" cols="12">
      <h2 class="mb-8 mt-4">{{ footerText }}</h2>
      <subscribe-form />
      <div class="text-center mt-16">
        <div class="footer__inner--content">
          <div class="footer__content--para">
            <p>
              Powered by Smiley Movement. A philanthropic venture sponsored by
              Smiley.
            </p>
          </div>
          <div class="footer__content__logos--outer">
            <img src="@/assets/logos/Footer1@2x.png" alt="" />
            <img src="@/assets/logos/Footer2@2x.png" alt="" />
          </div>
          <div class="footer__content--para">
            <p>All rights reserved Smiley News - 2020</p>
          </div>
        </div>
        <!-- <img
          v-if="$vuetify.breakpoint.smAndUp"
          width="65%"
          :src="require('../../../assets/footer-logos@1x.png')"
        />
        <img
          v-else
          width="45%"
          :src="require('../../../assets/HEADER_LOGO@2x.png')"
        /> -->
      </div>
      <!-- <h5 v-if="$vuetify.breakpoint.xs" class="mt-6">
        All rights reserved smiley news - 2021
      </h5> -->
    </v-col>
  </v-footer>
</template>

<script>
import subscribeForm from "./Subscription-form.vue";

export default {
  components: {
    subscribeForm,
  },
  computed: {
    footerText() {
      if (this.$vuetify.breakpoint.smAndUp) {
        return "Subscribe to our Newsletter for the latest news!";
      }
      return "Subscribe to our Newsletter";
    },
    footerStyles() {
      return `
        border-top: 3px solid #ffe61f;
      `;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-footer {
  h2 {
    font-family: "Montserrat Bold";
  }
  .footer__inner--content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .footer__content--para {
      font-size: 18px;
      color: #333;
      line-height: 30px;
    }
    .footer__content__logos--outer {
      display: flex;
      align-items: center;
      width: 550px;
      justify-content: space-between;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        width: 200px;
        flex-wrap: wrap;
        img:nth-child(1) {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
