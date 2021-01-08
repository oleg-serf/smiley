<template>
  <div class="link-actions__social-networks">
    <VButton
        class="link-actions__icon-btn"
        shape="round"
        size="small"
        color="blue"
    >
      <a
          class="event__button-link"
          :href="shareLink('facebook')"
          target="_blank"
      ><i class="fa fa-facebook"></i></a>
    </VButton>
    <!-- <VButton
        class="link-actions__icon-btn"
        shape="round"
        size="small"
        color="purple"
    >
      <router-link
          class="event__button-link"
          :to="'#'"><i class="fa fa-instagram"></i></router-link>
    </VButton> -->
    <VButton
        class="link-actions__icon-btn"
        shape="round"
        size="small"
        color="light-blue"
    >
      <a
          class="event__button-link"
          :href="shareLink('twitter')"
          target="_blank"
      ><i class="fa fa-twitter"></i></a>
    </VButton>
    <!-- <VButton
        class="link-actions__icon-btn"
        shape="round"
        size="small"
        color="red"
    >
      <router-link
          class="event__button-link"
          :to="'#'"><i class="fa fa-youtube"></i></router-link>
    </VButton> -->
    <p>{{ shareText }}</p>
  </div>
</template>

<script>
import { VButton } from "@/components/app";

export default {
name: "SocialNetworkShare",
  /*
  * COMPONENTS */
  components: {
    VButton
  },
  props: {
    title: String
  },
  /*
  * DATA */
  data () {
    return {
      shareText: '< share'
    }
  },
  methods: {
    shareLink(type) {
      let result = "";
      const title = encodeURI(this.title);
      const url = process.env.VUE_APP_DOMAIN + encodeURI(this.$route.path);
      switch (type) {
        case "facebook":
          result = `https://www.facebook.com/sharer.php?u=${url}&t=${title}`;
          break;
        case "twitter":
          result = `http://twitter.com/share?text=${title}&url=${url}`;
          break;
        case "linkedin":
          result = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
          break;
      }

      return result;
    },
  }
}
</script>

<style lang="scss" scoped>
.link-actions {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  &__social-networks {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin-top: 5px;
    }
    /*.event__button-link {
      display: block;
      color: black;
      width: 100%;
      height: 100%;
      line-height: 60px;

      &:hover {
        text-decoration: none;
      }
    }*/
  }
  &__icon-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    margin: 20px 10px 30px 0;
    width: 25px;
    height: 23px;
    padding: 0;
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
