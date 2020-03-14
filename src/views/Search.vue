<template>
  <div>
    <Footer />
  </div>
</template>

<script>
import axios from "@/axios-auth";

import Footer from "@/components/Footer";

export default {
  data() {
    return {};
  },
  mounted() {
    console.log("searching", this.$route.params.keyword);
    axios
      .post("/search/", { keyword: this.$route.params.keyword })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  },
  components: {
    Footer
  }
};
</script>