<template>
  <v-menu max-height="900" min-width="300" left allow-overflow v-model="dropdown">
    <template v-slot:activator="{ on, attrs }" class="mr-2">
      <v-btn v-bind="attrs" v-on="on" icon style="border: none; outline: none;" class="ml-3">
        <v-icon color="black" medium>fa fa-bars</v-icon>
      </v-btn>
    </template>
    <v-list style="opacity: 0.97;" class="pl-4 pr-2">
      <div class="d-flex justify-end mr-2">
        <span @click="menu = false" style="cursor: pointer">
          <v-icon large color="#ffe61f">close</v-icon>
        </span>
      </div>
      <!-- SECTION 1 -->
      <div style="border-bottom: 2px solid #ffe61f;" class="mr-10 ">
        <div class="pr-0 pb-1 custom-list-item pb-0" v-for="(item, index) in dropdownMenuItems.firstSection" :key="index">
          <router-link :to="item.path"><div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div></router-link>
        </div>
      </div>
      <!-- SECTION 2 -->
      <div style="border-bottom: 2px solid #ffe61f;" class="mr-10">
        <div class="pr-0 pb-1 custom-list-item" v-for="(item, index) in dropdownMenuItems.secondSection" :key="index">
          <router-link :to="item.path"><div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div></router-link>
        </div>
      </div>
      <!-- SECTION 3 -->
      <div style="border-bottom: 2px solid #ffe61f;" class="mr-10">
        <div class="pr-0 pb-1 custom-list-item" v-for="(item, index) in dropdownMenuItems.thirdSection" :key="index">
          <router-link :to="item.path"><div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div></router-link>
        </div>
      </div>
      <!-- SECTION 4 -->
      <div class="mr-10">
        <div class="pr-0 pb-1 custom-list-item" v-for="(item, index) in dropdownMenuItems.lastSection" :key="index">
          <router-link :to="item.path"><div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div></router-link>
        </div>
      </div>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    dropdown: false,
    dropdownMenuItems: {
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
  })
}
</script>

<style lang="scss" scoped>
.custom-list-item {
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  :hover {
    color: #ffe61f;
  }

  a {
    text-decoration: none;
    color: black;
  }
}
</style>