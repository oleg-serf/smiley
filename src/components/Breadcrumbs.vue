<template>
  <section class="breadcrumbs">
    <ul v-if="breadcrumbs.length">
      <li v-for="(crumb) in breadcrumbs" :key="crumb.name + '-crumb'">
        <router-link class="breadcrumbs-item" :to="{ name: crumb.name }">{{ crumb.meta.title }}</router-link>
        <svg
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.52699 9L10.9815 4.54545L6.52699 0.0909092L5.76136 0.856534L8.91335 3.99858H0.75V5.09233H8.91335L5.76136 8.24432L6.52699 9Z"
            fill="#656565"
          />
        </svg>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [{ path: "/", name: "home", meta: { title: "Home" } }]
    };
  },
  mounted() {
    let currentItem = this.$router.currentRoute;

    if (currentItem.meta.hasOwnProperty("breadcrumbs")) {
      let parentsList = currentItem.meta.breadcrumbs;

      let chain = this.$router.options.routes.filter(item =>
        parentsList.includes(item.name)
      );

      this.breadcrumbs = this.breadcrumbs.concat(chain);
    }

    this.breadcrumbs.push({
      name: this.$router.currentRoute.name,
      meta: { title: this.$router.currentRoute.meta.title }
    });
  }
};
</script>