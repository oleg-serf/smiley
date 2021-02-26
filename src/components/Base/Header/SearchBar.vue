<template>
  <div class="search-bar" v-if="$vuetify.breakpoint.mdAndUp">
    <v-text-field hide-details dense color="black" outlined rounded>
    </v-text-field>
  </div>
</template>

<style lang="scss">
.search-bar {
  position: relative;
  margin-right: 10px;
  width: 180px;
  &:hover {
    width: 15rem;
    @media (max-width: 1264px) {
      width: 180px;
    }
  }
  .v-input__slot {
    min-height: 28px !important;
    .v-input input {
      max-height: 28px;
    }
  }
}
</style>
