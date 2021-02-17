<template>
    <v-autocomplete :items="items" placeholder="UN Goals" prepend-inner-icon="mdi-eye" rounded solo-inverted dense clearable flat></v-autocomplete>
</template>
<script>
export default {
  props: {
    items: Array,
    label: String
  }
}
</script>
<style lang="scss">
.menuable__content__active {
  .v-list {
    background-color: rgb(255 255 255 / 88%);
  }
}
.v-autocomplete {
  height: 28px;
  .v-input__control {
    min-height: 28px !important;
    .v-input__slot {
      input {
        width: 100%;
        border: none !important;
      }
    }
  }
}
</style>