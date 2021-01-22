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
            <content-box :category="'topPicks'">
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
              <content-box :category="'topPicks'">
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
        <content-box v-for="(item, index) in i" :key="index" :category="'dailyNews'">
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

      <!-- OTHER NEWS PART -->
      <v-row class="mt-16 d-flex flex-column" no-gutters>
        <h3>Other | News</h3>
        <content-box :category="'otherNews'">
          <template #content>
            <v-row class="d-flex mt-1">
              <v-col class="d-flex flex-column" v-for="(item, index) in other" :key="index" :cols="otherCols">
                <img width="100%" :src="require('../assets/l-geaorlbm6150647851@1x.png')"/>
                <div>
                  <strong class="mt-1">Interview: </strong><span>Rachel Snape National Leader of Education</span>
                </div>
                <small class="mt-4">Milton Road Primary School | 01/11/2020</small>
              </v-col>
            </v-row>
          </template>
        </content-box>
      </v-row>
      <!-- OTHER NEWS PART -->

      <!-- NETWORKKK PART -->
      <v-row class="mt-16" no-gutters>
        <v-col class="pr-3" :cols="networkCols[0]">
          <h3>Network | Awards</h3>
          <content-box :category="'networkAwards'">
            <template #content>
              <v-card flat class="d-flex flex-column mt-2 rounded-0">
                <iframe :height="iframeHeightTwo" src="https://www.youtube.com/embed/O-3fzNmsQfQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="d-flex flex-column">
                  <h3 class="mt-2">Awards: Smiley Charity film awards | VOTING NOW OPEN!</h3>
                  <div class="d-flex mt-2">
                    <v-btn elevation="1" color="#ffe61f" class="rounded-button pl-12 pr-12">Register</v-btn>
                  </div>
                  <p class="mt-5">400 charities entered the awards, More than 110,000 members of the public voted and 127 charities made the shortlist in the world's biggest cause-based film event...</p>
                  <small class="mt-4">Virtual stream | 30 Jan 2021 | 1pm BST</small>
                </div>
              </v-card>
            </template>
          </content-box>
        </v-col>
        <v-col :cols="networkCols[1]">
          <h3>Network | Popular</h3>
          <content-box :category="'networkPopular'">
            <template #content>
              <div class="d-flex flex-column">
                <div v-for="(item, index) in popular" :key="index" class="mt-2">
                  <img width="100%" :src="require('../assets/l-geaorlbm6150647851@1x.png')"/>
                  <h4>Discussion: What's the future of education? | 17 Comm</h4>
                  <small>Milton Road Primary School | 01/11/2020</small>
                </div>
              </div>
            </template>
          </content-box>
        </v-col>
      </v-row>
      <!-- NETWORK PARTT -->

      <!-- NETWORKK DISCOVERRR -->
      <v-row class="mt-16 pa-3">
        <h3>Network | Discover</h3>
        <content-box :category="'otherNews'">
          <template #content>
            <v-row class="d-flex mt-1">
              <v-col class="d-flex flex-column" v-for="(item, index) in other" :key="index" :cols="otherCols">
                <div class="discoverBox">
                  <h4 class="mb-14">Project: Save the trees inner city</h4>
                  <small class="mb-8">Milton Road Primary School | 01/11/2020</small>
                </div>
              </v-col>
            </v-row>
          </template>
        </content-box>
      </v-row>
      <!-- NETWORK DISCOVERRR -->
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
    otherCols() {
      if (this.$vuetify.breakpoint.xs) {
        return '12';
      } return '4'
    },
    iframeHeightTwo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '300px'
        case 'md': return '240px'
        case 'lg': return '360px'
        case 'xl': return '385px'
      }
    },
    widthOne() {
      if (this.$vuetify.breakpoint.width > 2000) {
        return '58%'
      }
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '57%'
        case 'lg': return '52%'
        case 'xl': return '52%'
      }
    },
    widthTwo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '50%'
        case 'md': return '70%'
        case 'lg': return '71%'
        case 'xl': return '80%'
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
    networkCols() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return [12, 12]
        case 'sm': return [12, 12]
        case 'md': return [8, 4]
        case 'lg': return [8, 4]
        case 'xl': return [8, 4]
      }
    }
},
  data: () => ({
    i: 4,
    j: 2,
    other: 9,
    popular: 2
   }),
  methods: { },
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
  .discoverBox {
    border-bottom: 4px dashed lightgray;
  }
</style>