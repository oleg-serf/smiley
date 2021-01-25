<template>
  <v-menu max-height="900" min-width="300" left allow-overflow v-model="dropdown">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon style="border: none; outline: none;">
        <v-icon color="black" medium>fa fa-bars</v-icon>
      </v-btn>
    </template>
    <v-list style="opacity: 0.97;" class="pl-4 pr-2">
      <div class="d-flex justify-end mr-2">
        <span @click="menu = false"><v-icon style="cursor: pointer" color="#ffe61f" large>fa fa-times</v-icon></span>
      </div>
      <!-- SECTION 1 -->
      <div style="border-bottom: 2px solid #ffe61f;" class="mr-10 ">
        <div class="pr-0 pb-1 custom-list-item pb-0"  v-for="(item, index) in dropdownMenuItems.firstSection" :key="index">
          <div class="custom-list-item pa-0 ma-0" style="cursor: pointer;">{{ item.name }}</div>
        </div>
      </div>
      <!-- SECTION 2 -->
      <div style="border-bottom: 2px solid #ffe61f;" class="mr-10">
        <div class="pr-0 pb-1 custom-list-item" v-for="(item, index) in dropdownMenuItems.secondSection" :key="index">
          <div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div>
        </div>
      </div>
      <!-- SECTION 3 -->
      <div style="border-bottom: 2px solid #ffe61f;" class="mr-10">
        <div class="pr-0 pb-1 custom-list-item" v-for="(item, index) in dropdownMenuItems.thirdSection" :key="index">
          <div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div>
        </div>
      </div>
      <!-- SECTION 4 -->
      <div class="mr-10">
        <div class="pr-0 pb-1 custom-list-item" v-for="(item, index) in dropdownMenuItems.lastSection" :key="index">
          <div class="custom-list-item" style="cursor: pointer;">{{ item.name }}</div>
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
        { name: 'News', path: '' },
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
  }
</style>