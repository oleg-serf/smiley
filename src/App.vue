<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "./axios-auth";
import router from "./router";

export default {
  name: "home",
  components: {
    Header,
    Footer
  },
  watch: {
    $route(to, from) {
      document.title =
        to.meta.title + " | Smiley Movement" || "Smiley Movement";
    }
  },
  created() {
    // this.$store.dispatch('autoLogin');
  }
};
</script>

<style lang="scss">
#app {
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::placeholder {
  color: #666;
}

//::selection {
//  color: #fff;
//}

a:hover {
  text-decoration: none;
}

.invisible {
  visibility: hidden;
}
.visible {
  visibility: visible;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  min-width: 320px;
  position: relative;
  line-height: 1.65;
  overflow-x: hidden;
  margin: 0;
  input,
  textarea {
    border: #666 1px solid;
    outline: none;
    &:focus:required:invalid {
      border-color: red;
    }
    &:required:valid {
      border-color: green;
    }
  }
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  &.img-width {
    width: 100%;
  }
}

.text-center {
  text-align: center;
}

b,
strong {
  font-weight: bold;
}

.smiley-img-wrap {
  overflow: hidden;
  .smiley-img {
    width: 100%;
    height: 100%;
    transition: all 0.8s;
    img {
      display: block;
      object-fit: cover;
      height: 100%;
    }
    &:hover {
      opacity: 1;
      -webkit-animation: flash 1.5s;
      animation: flash 1.5s;
      transform: scale(1.1);
    }
  }
}

.breadcrumbs {
  margin: 13px auto;
  padding: 0 15px;
  max-width: 1560px;
  li {
    display: inline-block;
  }
  .breadcrumbs-item {
    text-decoration: none;
    color: #1a1a1a;
    font: 400 16px/21px "Muli", sans-serif;
  }
  svg {
    margin-right: 5px;
  }

  @media (max-width: 992px) {
    margin: 37px auto;
  }
}

.container {
  max-width: 1560px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1600px) {
    padding: 0 20px;
  }
}
</style>
