<template>
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
                <p class="mt-5" v-line-clamp:20="2">This special SmileyTalk supports the Sustainable Development Goals number 1 No Poverty and 2 Zero Hunger and aims to breakdown the stigma around homelessness and it is some extra text that is truncated at the end with a</p>
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
              <img :width="widthOne" :src="require('../../../assets/lauren-richmond-9w-tg-gmrbi-unsplash-1@1x.png')"/>
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
</template>

<script>
export default {
  components: {
    contentBox: () => import('../ContentBox'),
  },
  data: () =>({
    j: 2
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