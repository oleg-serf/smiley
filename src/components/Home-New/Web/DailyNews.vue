<template>
  <v-col class="mt-8" :cols="colValue[1]">
    <h4>Daily | News</h4>
    <content-box v-for="(item, index) in i" :key="i" :category="'dailyNews'">
      <template #content>
        <v-card flat :class="{'d-flex mt-2 rounded-0': true, 'flex-column': $vuetify.breakpoint.xs}">
          <img :width="widthTwo" :src="require('../../../assets/lauren-richmond-9w-tg-gmrbi-unsplash-1@1x.png')"/>
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
</template>

<script>
export default {
  components: {
    contentBox: () => import('../ContentBox'),
  },
  data: () =>({
    i: 4
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
}
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