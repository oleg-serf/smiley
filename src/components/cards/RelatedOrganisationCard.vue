<template>
  <div class="related__organisation--card">
    <div class="organisation__logo">
      <img
        v-if="logo != null"
        :src="$settings.images_path.organisations + 's_' + logo"
        alt
        title
        class="organisation-item__image"
      />
    </div>
    <div class="organisation__content">
      <h3 class="organisation__title my-2">{{ title }}</h3>
      <p class="organisation__para">{{ para }}</p>
      <p class="organisation__location">
        <img src="@/assets/mark.png" alt="" />{{ location }}
      </p>
    </div>
    <a href="#" class="organisation__follow--btn">Follow</a>
  </div>
</template>

<script>
export default {
  name: "related-orgainsation-card",
  props: {
    logo: {
      type: String,
    },
    title: {
      type: String,
      default: "Title",
    },
    para: {
      type: String,
      default: "Lorem Ipsum",
    },
    location: {
      type: String,
      default: "Organisation Location",
    },
  },
};
</script>

<style scoped lang="scss">
.related__organisation--card {
  border: 1px solid #ececec;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  .organisation-item__image {
    width: 100%;
    height: 170px;
  }
  .organisation__content {
    .organisation__title {
      font-family: "Gotham Bold";
      font-size: 30px;
      color: #000000;
      min-height: 90px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .organisation__para {
      font-family: "Gotham Book";
      font-size: 20px;
      color: #848484;
    }
    .organisation__location {
      font-family: "Gotham Bold";
      font-size: 22px;
      color: #d90f0f;
      display: flex;
      justify-content: left;
      align-items: flex-start;
      img {
        width: 20px;
        margin-right: 2px;
      }
    }
  }
  .organisation__follow--btn {
    display: block;
    margin: 0 -20px;
    text-align: center;
    margin-bottom: -20px;
    padding: 20px;
    font-size: 16px;
    color: #333;
    text-decoration: none;
    border-top: 1px solid #ececec;
    font-family: "Gotham Medium";
    transition: ease-in-out all 0.5s;
    &:hover {
      background: #ffe432;
    }
  }
}
</style>
