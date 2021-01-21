<template>
  <div class="main-header d-flex flex-column pb-4">
    <div class="mb-2 day-date">Thursday, January 2021</div>
    <!-- LEFT SIDE -->
    <div class="d-flex justify-space-between">
      <div class="d-flex">
        <router-link :to="{path: '/'}">
          <img height="70px" width="200px" :src="require('../../../assets/HEADER_LOGO@2x.png')"/>
        </router-link>
        <link-box :links="linksOne"/>
        <link-box :links="linksTwo"/>
        <link-box :links="linksThree"/>
      </div>
      <!-- RIGHT SIDE -->
      <div class="d-flex flex-column pr-3 justify-space-between align-center">
        <v-btn elevation="1" color="#ffe61f" class="rounded-button pl-11 pr-11">Sign In</v-btn>
        <div class="d-flex align-center">
          <img 
            height="21px" 
            width="21px"
            class="ml-1"
            style="cursor: pointer;" 
            v-for="(icon, index) in socialButtons" 
            :key="index" 
            :src="require(`../../../assets/${icon.src}.png`)" 
          />
          <v-icon style="cursor: pointer;" class="ml-4" color="black" medium>fa fa-bars</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    linkBox: () => import('../../Base/Header/LinkBox'),
  },
  data: () => ({
    socialButtons: [
      { name: 'fb', src: 'facebook-icon@1x' },
      { name: 'insta', src: 'instagram-icon@1x' },
      { name: 'twitter', src: 'path-21@1x' },
      { name: 'yt', src: 'youtube-icon@1x' },
    ],
    linksOne: [
      { label: 'News', path: '/smiley-news' },
      { label: 'Events', path: '/smiley-talks' },
      { label: 'Videos', path: '/smiley-interviews' },
    ],
    linksTwo: [
      { label: 'Network', path: '/smiley-network' },
      { label: 'Organisations', path: '/organisations' },
      { label: 'Members', path: '/members' },
    ],
    linksThree: [
      { label: 'UN Goals', path: '/goals' },
      { label: 'Contact us', path: '/contact' },
      { label: 'About us', path: '/our-story' },
    ]
  }),
  methods: {
    hello() {
      console.log('asd');
    }
  }
}
</script>

<style lang="scss" scoped>
  .rounded-button {
    border-radius: 20px;
    outline: none !important;
  }
  .main-header {
    border-bottom: 4px solid black; 
    .day-date {
      font-size: 12px;
      font-weight: bold;
    }
  }
</style>