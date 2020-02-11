<template>
  <section class="forgot-pass container">
    <h2 class="forgot-pass-title">Forgot my password</h2>
    <p
      class="forgot-pass-subtitle"
    >Please enter your email address in order to receive instructions on how to reset your account</p>

    <div class="forgot-pass-wrap">
      <label for="forgot-pass-email">
        Email Address
        <input type="text" name="forgot-pass-email" id="forgot-pass-email" placeholder />
      </label>

      <div class="forgot-pass-btn-wrap">
        <button
          class="forgot-pass-btn"
          type="submit"
          name="submit"
          value="forgot-pass"
        >reset my password</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Forgot",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>


<style lang="scss" scoped>
@import "@/scss/sections/_page-forgot";
</style>