<template>
  <div class="banner-block">
    <div class="banner-block__left-column" :style="styleObject">
      <div class="banner-block__prefix">
        <slot name="prefix"></slot>
      </div>
      <div class="banner-block__name" v-if="isNotEmptySlot('name')" :style="fontStyle">
        <slot name="name"></slot>
      </div>
    </div>
    <div class="banner-block__right-column" :style="{backgroundColor: color}">
      <img :src="background" class="banner-block__background" v-if="background != null || !solid"/>
    </div>
  </div>
</template>

<script>
export default {
  title: "GoalsBanner",
  props: {
    nameLength: {
      type: Number,
      default: 20
    },
    link: {
      type: String
    },
    color: {
      type: String,
      default: "#eeb400"
    },
    solid: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "/img/homepage/network-dt-bg.png"
    },
    logo: {
      type: Boolean,
      default: true
    },
    reversed: {
      type: Boolean,
      default: false
    },
    is_mobile : {
      type: Boolean,
      default: false
    }
  },
  /*
  * COMPUTED */
  computed: {
    styleObject() {
      let style = [{
        backgroundColor: this.color
      }]

      let maxWidth;
      if( this.nameLength < 15){
        maxWidth = this.is_mobile ? '150px': '300px';
      } else if (15 <= this.nameLength && this.nameLength < 25) {
        maxWidth = this.is_mobile ? '200px': '415px';
      } else if (25 <= this.nameLength && this.nameLength < 35) {
        maxWidth = this.is_mobile ? '300px': '610px';
      } else if (this.nameLength >= 35) {
        maxWidth = this.is_mobile ? '400px': '800px';
      }
      style.push({maxWidth: maxWidth});

      return style
    },
    fontStyle() {
      let style = [];
      if(this.is_mobile) style.push({fontSize: this.nameLength < 35 ? '20px': '14px'})
      return style;
    }
  },
  methods: {
    isNotEmptySlot(slotName) {
      return !!this.$slots[slotName];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/blocks/homepage/_banner-block";
</style>
