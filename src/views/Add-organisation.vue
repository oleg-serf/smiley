<template>
  <div>
    <section class="add-organisation container">
      <h2 class="add-organisation-title">Add your Organisation</h2>
      <p
        class="add-organisation-subtitle"
      >An 'organisation page' is your online gateway to attracting investment and support for your non-profit; and a place for organisations to connect with social projects that match your CSR vision.</p>

      <form class="organisation-wrap" @submit.prevent="onSubmit">
        <label for="organisation-name">
          Organisation Name
          <input
            type="text"
            name="organisation-name"
            id="organisation-name"
            placeholder
          />
        </label>

        <label for="organisation-location">
          Organisation Location
          <input
            type="text"
            name="organisation-location"
            id="organisation-location"
            placeholder
          />
        </label>

        <div class="next-btn-wrap">
          <router-link
            to="/customize-organisation"
            class="next-btn"
            type="submit"
            name="submit"
            value="next"
          >next</router-link>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Add-organisation",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/sections/_organisation-add";
</style>