<template>
  <v-col class="pr-3 mt-6 network-awards" :cols="networkCols[0]">
    <h3 style="margin-bottom: -10px">Network | Awards</h3>
    <hr class="seperator my-5"  />
    <content-box :category="'networkAwards'">
      <template #content>
        <v-card flat class="d-flex flex-column mt-2 rounded-0">
          <iframe :height="iframeHeight" src="https://www.youtube.com/embed/qRudLyeT0Io" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="d-flex flex-column">
            <h3 class="mt-2">Awards: Smiley Charity film awards | VOTING NOW OPEN!</h3>
            <div class="d-flex mt-2">
            </div>
            <p class="mt-0">400 charities entered the awards, More than 110,000 members of the public voted and 127 charities made the shortlist in the world's biggest cause-based film event...</p>
            <small class="mt-4">Virtual stream | 30 Jan 2021 | 1pm BST</small>
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
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '400px'
        case 'md': return '430px'
        case 'lg': return '450px'
        case 'xl': return '500px'
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
.network-awards {
  border-bottom: 1px solid #ececec;;
}
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