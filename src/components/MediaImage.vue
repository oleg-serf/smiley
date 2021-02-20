<template>
  <iframe
    v-if="sort == 'video'"
    :src="src"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    :width="width"
    :height="height"
  ></iframe>
  <div v-else :style="`width: ${width}; height: ${height}`">
    <img
      :src="getImageUrl()"
      :alt="alt"
      :title="title"
      :class="classes.length > 0 ? classes.join(' ') : ''"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script>
export default {
  name: "MediaImage",
  methods: {
    getImageUrl(src, size) {
      const type = this.type == "Interview" ? "news" : this.type.toLowerCase();
      return this.src
        ? this.$settings.images_path[type] + this.size + "_" + this.src
        : "/images/no_image.jpg";
    },
    getSrcSet() {
      // const sizes = [
      //   {s: `${$settings.images_path[this.type]}s_+${this.src} 150w`},
      //   {m: `${$settings.images_path[this.type]}m_+${this.src} 360w`},
      //   {l: `${$settings.images_path[this.type]}l_+${this.src} 1160w`},
      // ];
      // const sizes = ['s', 'm', 'l'];
      // const sizes = [
      //   "${this.$settings.images_path[this.type]}s_${this.src} 150w",
      //   "${this.$settings.images_path[this.type]}m_${this.src} 360w",
      //   "${this.$settings.images_path[this.type]}l_${this.src} 1160w"
      // ];
      // let result = sizes.join(", ");
      // let result = "test";
      // return result;
    },
  },
  props: {
    sort: {
      type: String,
      default: "image",
    },
    src: {
      type: String,
    },
    classes: {
      type: Array,
      default: () => [],
    },
    alt: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    size: {
      type: String,
      default: "m",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "auto",
    },
  },
};
</script>
