<template>
  <div>
    <v-row no-gutters>
      <!-- COLUMN 1 -->
      <v-col cols="12">
        <v-sheet>
          <div class="d-flex justify-end">
            <!-- SEARCH BAR -->
            <div v-if="$vuetify.breakpoint.mdAndUp" style="width: 25%" class="mt-3 mb-2">
              <v-text-field hide-details dense color="black" outlined rounded label="Search" append-icon="fa fa-search"></v-text-field>
            </div>
            <!-- SEARCH BAR -->
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <!-- LEFT SIDE OF HOMEPAGE -->
      <v-col :cols="colValue[0]">
        <div class="main-column">
          <div>
            <h4>Top Picks</h4>
            <content-box :category="'topPicks'" :flow="'column'">
              <template #content>
                <v-card flat class="d-flex flex-column mt-2 rounded-0">
                  <iframe :height="iframeHeight" src="https://www.youtube.com/embed/O-3fzNmsQfQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div class="d-flex flex-column">
                    <h3 class="mt-2">Live Event: Ending Homelessness & Building Resilient Communities</h3>
                    <div class="d-flex mt-2">
                      <v-btn elevation="1" color="#ffe61f" class="rounded-button pl-12 pr-12">Register</v-btn>
                    </div>
                    <p class="mt-5">This special SmileyTalk supports the Sustainable Development Goals number 1 No Poverty and 2 Zero Hunger and aims to breakdown the stigma around homelessness...</p>
                    <small class="mt-4">Virtual stream | 30 Jan 2021 | 1pm BST</small>
                  </div>
                </v-card>
              </template>
            </content-box>
          </div>
          <div>
           <div v-for="(item, index) in j" :key="index" style="height: 50%"> 
           <content-box :category="'topPicks'" :flow="'column'">
              <template #content>
                <v-card flat :class="{
                  'd-flex mt-2 rounded-0': true,
                  'd-flex flex-column': $vuetify.breakpoint.xs
                }">
                  <img :width="widthOne" :src="require('../assets/lauren-richmond-9w-tg-gmrbi-unsplash-1@1x.png')"/>
                  <div :class="{'d-flex flex-column justify-content-center': true, 'pl-0': $vuetify.breakpoint.xs, 'pl-4': $vuetify.breakpoint.smAndUp}">
                    <h3>Interview: Rachel Snape</h3>
                    <span>
                      <v-chip small class="pa-2 mt-4 mr-1 rounded-0">Politics</v-chip>
                    </span>
                    <small class="mt-8">Virtual stream | 30 Jan 2021 | 1pm BST</small>
                  </div>
                </v-card>
              </template>
            </content-box>
           </div>
          </div>
        </div>
      </v-col>
      <!-- LEFT SIDE ENDS  -->


      <!-- RIGHT SIDE OF HOMEPAGE -->
      <v-col class="mt-8" :cols="colValue[1]">
        <h4>Daily | News</h4>
        <content-box v-for="(item, index) in i" :key="index" :category="'dailyNews'" :flow="'column'">
          <template #content>
            <v-card flat :class="{'d-flex mt-2 rounded-0': true, 'flex-column': $vuetify.breakpoint.xs}">
              <img :width="widthTwo" :src="require('../assets/lauren-richmond-9w-tg-gmrbi-unsplash-1@1x.png')"/>
              <div :class="{'d-flex flex-column': true, 'pl-0': $vuetify.breakpoint.xs, 'pl-3': $vuetify.breakpoint.smAndUp}">
                <h3>Interview: </h3>
                <h5>Rachel Snape</h5>
                <div>
                  <v-chip small class="pa-2 mt-4 mr-1 rounded-0" label>Politics</v-chip>
                </div>
                <small class="mt-4">"Change is possible with a little help from everyone"...</small>
                <small class="mt-4 gray--text"> ABC | 1 week</small>
              </div>
            </v-card>
          </template>
        </content-box>
      </v-col>
      <!-- RIGHT SIDE OF HOMEPAGE ENDS -->
    </v-row>
  </div>
</template>

<script>
// import Index from "@/views/index.vue";
// import IndexMobile from "@/views/IndexMobile";
export default {
  name: "Home",
  components: {
    // Index,
    // IndexMobile,
    webHeader: () => import('../components/Base/Header/WebHeader-new'),
    mobileHeader: () => import('../components/Base/Header/MobileHeader-new'),
    contentBox: () => import('../components/Home-New/ContentBox'),
  },
  computed: {
    iframeHeight() {
      if (this.$vuetify.breakpoint.width > 1900) {
        return '515px'
      } else return '300px'
    },
    widthOne() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '57%'
        case 'lg': return '51%'
        case 'xl': return '51%'
      }
    },
    widthTwo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '70%'
        case 'lg': return '70%'
        case 'xl': return '70%'
      }
    },
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '55%'
        case 'md': return '55%'
        case 'lg': return '55%'
        case 'xl': return '55%'
      }
    },
    colValue () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return [12, 12]
        case 'sm': return [12, 12]
        case 'md': return [7, 5]
        case 'lg': return [7, 5]
        case 'xl': return [7, 5]
      }
    },
  },
  data: () => ({
    i: 4,
    j: 2
   }),
  methods: { },
  mounted() {
    console.log(this.$vuetify.breakpoint.width);
  }
};
</script>

<style lang="scss" scoped>
  .rounded-button {
    border-radius: 20px;
    outline: none !important;
  }
  .main-column {
    height: 100%;
    display: flex;
    flex-direction: column;
    div {
      flex: 1;
    }
  }
</style>