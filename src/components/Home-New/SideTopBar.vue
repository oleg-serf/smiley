<template>
  <v-sheet>
    <v-list color="transparent">
      <v-list-item v-for="n in 5" :key="n" link :to="{name: 'Extra'}">
        <v-list-item-content>
          <v-list-item-title>
          List Item {{ n }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {

}
</script>
