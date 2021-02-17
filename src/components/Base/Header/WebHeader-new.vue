<template>
  <div class="main-header">
    <div class="day-date">
      <span>{{
        new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          weekday: "long",
          month: "long",
          year: "numeric",
        })
      }}</span>
      <span>Good News about people doing good</span>
    </div>
    <!-- LEFT SIDE -->
    <div class="d-flex justify-space-between">
      <div class="d-flex align-start">
        <router-link :to="{ path: '/' }" class="mr-4">
          <img
            height="68px"
            width="200px"
            src="../../../assets/HEADER_LOGO@2x.png"
          />
        </router-link>
        <link-box :links="linksOne" />
        <link-box :links="linksTwo" />
        <link-box :links="linksThree" />
      </div>
      <!-- RIGHT SIDE -->
      <div class="main-header-right">
        <div class="main-header-actions">
          <v-btn
            elevation="0"
            color="#ffe61f"
            class="rounded-button  mr-4 flex-1"
            @click="$router.push({ path: '/login' })"
            style="height: 28px;"
            >Join now</v-btn
          >
          <v-btn
            elevation="0"
            color="#ffe61f"
            class="rounded-button "
            @click="$router.push({ path: '/login' })"
            style="height: 28px;"
            >Sign In</v-btn
          >
        </div>
        <div class="d-flex align-center">
          <div class="flex-1">
            <SearchBar />
          </div>
          <div class="flex">
            <img
              height="25px"
              width="25px"
              class="ml-2"
              style="cursor: pointer;"
              v-for="(icon, index) in socialButtons"
              :key="index"
              :src="require(`../../../assets/${icon.src}.png`)"
            />
            <!-- <v-icon style="cursor: pointer;" class="ml-4" color="black" medium>fa fa-bars</v-icon> -->
            <drop-down-menu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    linkBox: () => import("../../Base/Header/LinkBox"),
    dropDownMenu: () => import("./DropdownMenu"),
    SearchBar: () => import("./SearchBar"),
  },
  data: () => ({
    socialButtons: [
      { name: "fb", src: "facebook-icon@1x" },
      { name: "insta", src: "instagram-icon@1x" },
      { name: "twitter", src: "path-21@1x" },
      { name: "yt", src: "youtube-icon@1x" },
    ],
    linksOne: [
      { label: "News", path: "/smiley-news" },
      { label: "Events", path: "/smiley-talks" },
      { label: "Videos", path: "/smiley-interviews" },
    ],
    linksTwo: [
      { label: "Network", path: "/smiley-network" },
      { label: "Organisations", path: "/organisations" },
      { label: "Members", path: "/members" },
    ],
    linksThree: [
      { label: "UN Goals", path: "/goals" },
      { label: "Contact us", path: "/contact" },
      { label: "About us", path: "/our-story" },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss">
.rounded-button {
  border-radius: 20px;
  outline: none !important;
}
.main-header {
  border-bottom: 3px solid black;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  padding-top: 20px;
  box-shadow: 0px 3px 3px -4px black;

  &-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-actions {
    width: 100%;
    display: flex;

    button {
      flex: 1;
      border-radius: 999px;
      span {
        font-size: 18px !important;
        text-transform: none !important;
      }
    }
  }
  .day-date {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color: #676666;
    margin-bottom: 6px;
  }
}
</style>