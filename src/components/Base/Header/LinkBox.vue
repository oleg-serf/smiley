<template>
  <div class="d-flex align-end">
    <div class="link-box d-flex flex-column ml-8 pr-10">
      <router-link class="customLink" v-for="(link, index) in links" :key="index" :to="link.path">{{ link.label }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  },
}
</script>

<style lang="scss" scoped>
.link-box {
  border-top: 4px solid #ffe61f;
  .customLink {
    color: black;
    text-decoration: none;
  }
  .customLink:hover {
    color:#ffe61f;
  }
}
</style>