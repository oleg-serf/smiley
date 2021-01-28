<template>
  <div>
    <v-row no-gutters>
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
      <top-picks v-if="$vuetify.breakpoint.smAndUp && features.length" :features="features"/>
      <top-picks-mobile v-if="$vuetify.breakpoint.xs && features.length" :features="features" />
      <!-- LEFT SIDE ENDS  -->

      <!-- RIGHT SIDE OF HOMEPAGE -->
      <daily-news v-if="$vuetify.breakpoint.smAndUp && dailyNews.length" :news="dailyNews.slice(0,4)"/>
      <daily-news-mobile v-if="$vuetify.breakpoint.xs && dailyNews.length" :news="dailyNews"/>
      <!-- RIGHT SIDE OF HOMEPAGE ENDS -->

      <!-- OTHER NEWS PART -->
      <other-news v-if="$vuetify.breakpoint.mdAndUp && latestNews.length" :news="latestNews" />
      <other-news-mobile v-if="$vuetify.breakpoint.width < 769" :news="latestNews" />
      <!-- OTHER NEWS PART -->

      <!-- NETWORKKK PART -->
      <network-awards v-if="$vuetify.breakpoint.smAndUp"/>
      <network-awards-mobile v-if="$vuetify.breakpoint.xs"/>

      <network-popular v-if="$vuetify.breakpoint.mdAndUp && networkPopular.length" :networks="networkPopular"/>
      <network-popular-mobile v-if="$vuetify.breakpoint.width < 769 && networkPopular.length" :networks="networkPopular"/>
      <!-- NETWORK PARTT -->

      <!-- NETWORKK DISCOVERRR -->
      <network-discovery v-if="$vuetify.breakpoint.mdAndUp && networkDiscover.length" :networks="networkDiscover"/>
      <network-discovery-mobile v-if="$vuetify.breakpoint.width < 769 && networkDiscover.length" :networks="networkDiscover"/>
      <!-- NETWORK DISCOVERRR -->
    </v-row>
  </div>
</template>

<script>
// Tools
import axios from "@/axios-auth";
import router from "@/router";

export default {
  name: "Home",
  components: {
    networkDiscovery: () => import('../components/Home-New/Web/NetworkDiscover'),
    networkDiscoveryMobile: () => import('../components/Home-New/Mobile/NetworkDiscoveryMobile'),
    networkPopular: () => import('../components/Home-New/Web/NetworkPopular'),
    networkPopularMobile: () => import('../components/Home-New/Mobile/NetworkPopularMobile'),
    networkAwards: () => import('../components/Home-New/Web/NetworkAwards'),
    networkAwardsMobile: () => import('../components/Home-New/Mobile/NetworkAwardsMobile'),
    topPicks: () => import('../components/Home-New/Web/TopPicks'),
    topPicksMobile: () => import('../components/Home-New/Mobile/TopPicksMobile'),
    dailyNews: () => import('../components/Home-New/Web/DailyNews'),
    dailyNewsMobile: () => import('../components/Home-New/Mobile/DailyNewsMobile'),
    otherNews: () => import('../components/Home-New/Web/OtherNews'),
    otherNewsMobile: () => import('../components/Home-New/Mobile/OtherNewsMobile'),
    webHeader: () => import('../components/Base/Header/WebHeader-new'),
    mobileHeader: () => import('../components/Base/Header/MobileHeader-new'),
    contentBox: () => import('../components/Home-New/ContentBox')
  },
  data: () => ({
    features: [],
    dailyNews: [],
    latestNews: [],
    networkPopular: [],
    networkDiscover: [],
    networkAwards: null
  }),
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
  methods: { },
  mounted() {
    axios
      .get("/pages/1")
      .then(res => {
        this.features = res.data.top_picks;
        this.dailyNews = res.data.daily_news;
        this.latestNews = res.data.other_news;
        this.networkPopular = res.data.network_popular;
        // this.networkDiscover = res.data.network_discover;
        this.networkDiscover = [
          ...res.data.network_discover,
          ...res.data.network_discover,
          ...res.data.network_discover,
          ...res.data.network_discover,
          ...res.data.network_discover
        ];
        this.networkAwards = res.data.network_awards;

        const metaPayload = {
          meta: res.data?.meta || {},
          title: 'Smiley Talks',
        }

        metaPayload.meta.description = 'A global community of change-makers. We provide daily positive news and free live-events guided by the Sustainable Development Goals';
        this.$store.dispatch('meta/setMeta', metaPayload);
      })
      .catch(error => console.log(error));
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
  .discoverBox {
    border-bottom: 4px dashed lightgray;
  }
</style>