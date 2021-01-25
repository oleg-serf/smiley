<template>
  <div>
    <v-navigation-drawer v-model="drawer" app style="opacity: 0.9">
      <div class="d-flex justify-end">
        <span style="cursor: pointer;" @click="navHandler('drawer')"><v-icon color="#ffe61f" large>navigate_before</v-icon></span>
      </div>
      <div class="d-flex justify-center mb-1">
        <v-icon color="black">fa fa-search</v-icon>
        <img 
          height="24px" 
          width="24px"
          class="ml-3"
          style="cursor: pointer;" 
          v-for="(icon, index) in socialButtons" 
          :key="index" 
          :src="require(`../../../assets/${icon.src}.png`)" 
        />
      </div>
      <div class="pl-4 pr-4">
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0"  v-for="(item, index) in dropdownMenuItems.profileSection" :key="index">
            <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
          </div>
        </div>
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0"  v-for="(item, index) in dropdownMenuItems.firstSection" :key="index">
            <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
          </div>
        </div>
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0"  v-for="(item, index) in dropdownMenuItems.secondSection" :key="index">
            <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
          </div>
        </div>
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0"  v-for="(item, index) in dropdownMenuItems.thirdSection" :key="index">
            <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
          </div>
        </div>
        <div>
          <div class="pr-0 pb-1 custom-list-item pb-0"  v-for="(item, index) in dropdownMenuItems.lastSection" :key="index">
            <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar height="70" elevate-on-scroll color="#fff" app>
      <v-toolbar-title>
        <img height="40px" width="120px" :src="require('../../../assets/HEADER_LOGO@2x.png')" />
      </v-toolbar-title> 
      <v-spacer></v-spacer>
      <span  v-for="(icon, index) in buttons" :key="index" @click="navHandler(icon.name)" style="cursor: pointer" >
        <v-icon
          color="black"
          class="ml-4"
        >
        {{ icon.icon }}
        </v-icon>
      </span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {
    headerMobile: () => import('../../Base/Header/DropdownMenu'),
  },
  data: () => ({
    drawer: null,
    socialButtons: [
      { name: 'fb', src: 'facebook-icon@1x' },
      { name: 'insta', src: 'instagram-icon@1x' },
      { name: 'twitter', src: 'path-21@1x' },
      { name: 'yt', src: 'youtube-icon@1x' },
    ],
    buttons: [
      { name: 'search', icon: 'fa fa-search' },
      { name: 'drawer', icon: 'fa fa-bars' },
    ],
    dropdownMenuItems: {
      profileSection: [
        { name: 'Profile', path: '/smiley-news' },
        { name: 'Logout', path: '' },
      ],
      firstSection : [
        { name: 'News', path: '/smiley-news' },
        { name: 'Events', path: '' },
        { name: 'Videos', path: '' },
        { name: 'Interviews', path: '' },
        { name: 'Discussions', path: '' },
      ],
      secondSection: [
        { name: 'Network', path: '' },
        { name: 'Organisations', path: '' },
        { name: 'Members', path: '' },
      ],
      thirdSection: [
        { name: 'UN Goals', path: '' },
        { name: 'Awards', path: '' },
        { name: 'About us', path: '' },
      ],
      lastSection: [
        { name: 'Sustainability', path: '' },
        { name: 'Social Justice', path: '' },
        { name: 'Health', path: '' },
        { name: 'Education', path: '' },
        { name: 'Climate', path: '' },
        { name: 'Economic Growth', path: '' },
      ]
    },
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

<style lang="scss" scoped>
.custom-list-item {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    :hover {
      color: #ffe61f;
    }
  }
  .new-link {
    color: black;
    text-decoration: none;
    :hover {
      text-decoration: none;
    }
  }
</style>