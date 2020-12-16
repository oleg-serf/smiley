<template>
  <div class="title-with-search">
    <h3 :style="styleObject" class="title-with-search__title" :class="[hoverEffect ? 'hover-effect' : '']" v-html="title"></h3>
    <input
        v-if="isSearch"
        class="title-with-search__search-input"
        type="text"
        placeholder="Search Topics...">
  </div>
</template>

<script>
export default {
  name: "BottomBorderedTitleWithSearch",
  props: {
    title: {
      // SHOULD BE STRING HTML FOR V-HTML
      type: String
    },
    isSearch: {
      type: Boolean,
      default: true
    },
    hoverEffect: {
      type: Boolean,
      default: false
    },
    hoverColor: {
      type: String,
      default: 'yellow'
    }
  },
  /*
  * COMPUTED */
  computed: {
    styleObject () {
      return {
        '--color-hover': this.hoverColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title-with-search {
  padding: 16px 0;
  border-bottom: 2px solid #ffe300;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;

  &__title {
    color: black;
    font-family: "Gotham Light", sans-serif;
    &::v-deep b {
      font-family: "Gotham Bold", sans-serif !important;
    }
    &.hover-effect {
      &:hover {
        color: var(--color-hover);
      }
    }
  }
  .title-with-search__search-input {
    width: 10rem;
    padding: .5rem 1rem;
    height: 1.9rem;
    border-radius: 2rem;
    font-size: 13px;
    color: #666666;
    background-image: url('/images/main/icon-search.svg');
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 1rem 1rem;
    outline: 0;
  }
}
</style>
