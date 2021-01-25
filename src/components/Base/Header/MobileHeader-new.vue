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
          <div class="pr-0 pb-1 custom-list-item pb-0">
            <router-link :to="{ name: 'profile' }">
              <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">Profile</div>
            </router-link>
            <a @click.prevent="logout()">
              <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">Log out</div>
            </a>
          </div>
        </div>
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0" v-for="(item, index) in dropdownMenuItems.firstSection" :key="index">
            <router-link :to="item.path">
              <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
            </router-link>
          </div>
        </div>
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0" v-for="(item, index) in dropdownMenuItems.secondSection" :key="index">
            <router-link :to="item.path">
              <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
            </router-link>
          </div>
        </div>
        <div style="border-bottom: 2px solid #ffe61f;">
          <div class="pr-0 pb-1 custom-list-item pb-0" v-for="(item, index) in dropdownMenuItems.thirdSection" :key="index">
            <router-link :to="item.path">
              <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
            </router-link>
          </div>
        </div>
        <div>
          <div class="pr-0 pb-1 custom-list-item pb-0" v-for="(item, index) in dropdownMenuItems.lastSection" :key="index">
            <router-link :to="item.path">
              <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar height="70" elevate-on-scroll color="#fff" app>
      <v-toolbar-title>
        <img height="40px" width="120px" :src="require('../../../assets/HEADER_LOGO@2x.png')" />
      </v-toolbar-title> 
      <v-spacer></v-spacer>
      <span v-for="(icon, index) in buttons" :key="index" @click="navHandler(icon.name)" style="cursor: pointer" >
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
        { name: 'Profile', path: { name: 'profile' } },
        { name: 'Logout', path: '' },
      ],
      firstSection : [
        { name: 'News', path: { name: 'news' } },
        { name: 'Events', path: { name: 'talks' } },
        // { name: 'Videos', path: { name: 'interviews' } },
        { name: 'Interviews', path: { name: 'interviews' } },
        { name: 'Discussions', path: { name: 'contact' } },
      ],
      secondSection: [
        { name: 'Network', path: { name: 'network' } },
        { name: 'Organisations', path: { name: 'organisations' } },
        { name: 'Members', path: { name: 'members' } },
      ],
      thirdSection: [
        { name: 'UN Goals', path: { name: 'goals' } },
        { name: 'Awards', path: { name: '' } },
        { name: 'About us', path: { name: 'story' } },
      ],
      lastSection: [
        { name: 'Sustainability', path: {name: 'news-category-item', params: { slug: 'sustainable-cities-and-communities' }} },
        { name: 'Social Justice', path: {name: 'news-category-item', params: { slug: 'peace-justice-and-strong-institutions' }} },
        { name: 'Health', path: {name: 'news-category-item', params: { slug: 'good-health-and-well-being' }} },
        { name: 'Education', path: {name: 'news-category-item', params: { slug: 'quality-education' }} },
        { name: 'Climate', path: {name: 'news-category-item', params: { slug: 'climate-action' }} },
        { name: 'Economic Growth', path: {name: 'news-category-item', params: { slug: 'decent-work-and-economic-growth' }} },
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
    },
    logout() {
      this.$store.dispatch("user/logout");
    },
  }
}
</script>

<style lang="scss" scoped>
  .custom-list-item {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    a {
      color: black;
      text-decoration: none;
      :hover {
        text-decoration: none;
        color: #ffe61f;
      }
    }
  }
</style>