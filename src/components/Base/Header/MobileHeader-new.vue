<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <router-link :to="{path: '/smiley-network'}">Link</router-link>
    </v-navigation-drawer>
    <v-app-bar height="70" elevate-on-scroll color="#fff" app>
      <v-toolbar-title>
        <img height="40px" width="120px" :src="require('../../../assets/HEADER_LOGO@2x.png')" />
      </v-toolbar-title> 
      <v-spacer></v-spacer>
      <v-icon  
        v-for="(icon, index) in buttons" 
        :key="index" 
        @click="navHandler(icon.name)" 
        color="black"
        class="ml-4"
      >
      {{ icon.icon }}
      </v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    buttons: [
      { name: 'search', icon: 'fa fa-search' },
      { name: 'drawer', icon: 'fa fa-bars' },
    ]
  }),
  methods: {
    navHandler(item) {
      switch(item) {
        case 'search':
          break;
        case 'drawer':
          this.drawer = !this.drawer;
          break;
      }
    }
  }
}
</script>

<style>

</style>