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
      <top-picks />
      <!-- LEFT SIDE ENDS  -->

      <!-- RIGHT SIDE OF HOMEPAGE -->
      <daily-news/>
      <!-- RIGHT SIDE OF HOMEPAGE ENDS -->

      <!-- OTHER NEWS PART -->
      <v-row no-gutters>
        <other-news />
      </v-row>
      <!-- OTHER NEWS PART -->

      <!-- NETWORKKK PART -->
      <v-row class="mt-16" no-gutters>
        <network-awards />
        <network-popular />
      </v-row>
      <!-- NETWORK PARTT -->

      <!-- NETWORKK DISCOVERRR -->
      <!-- <v-row class="mt-16 pa-3">
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
      </v-row> -->
      <network-discovery />
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
    networkDiscovery: () => import('../components/Home-New/Web/NetworkDiscover'),
    networkPopular: () => import('../components/Home-New/Web/NetworkPopular'),
    networkAwards: () => import('../components/Home-New/Web/NetworkAwards'),
    topPicks: () => import('../components/Home-New/Web/TopPicks'),
    dailyNews: () => import('../components/Home-New/Web/DailyNews'),
    otherNews: () => import('../components/Home-New/Web/OtherNews'),
    webHeader: () => import('../components/Base/Header/WebHeader-new'),
    mobileHeader: () => import('../components/Base/Header/MobileHeader-new'),
    contentBox: () => import('../components/Home-New/ContentBox')
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