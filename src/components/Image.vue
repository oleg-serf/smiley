<template>
  <img
    :src="getImageUrl()"
    :alt="alt"
    :title="title"
    :class="(classes.length > 0) ? classes.join(' ') : ''"
  />
</template>

<script>
export default {
  name: "PieceOfArt",
  methods: {
    getImageUrl(src, size) {
      /*
       */
      console.log("src, size");
      let result =
        this.$settings.images_path[this.type] + this.size + "_" + this.src;
      return result;
    }
  },
  props: {
    src: {
      type: String
    },
    classes: {
      type: Array,
      default: () => []
    },
    alt: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    }
  }
};
</script>