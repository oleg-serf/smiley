<template>
  <div>

    <Breadcrumbs/>
    <router-view key="$route.fullPath"></router-view>
    <Footer/>

  </div>
</template>

<script>
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";

    export default {
        components: {
            Footer,
            Breadcrumbs
        },
        mounted() {
            console.log('Router', this.$route);
        }
    }
</script>