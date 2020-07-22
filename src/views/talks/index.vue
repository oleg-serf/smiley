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
            const metaPayload = {
                title: 'Smiley Talks',
                meta: {
                    description: 'Free live-events themed around the Sustainable Development Goals. A chance to interact with leading organisations and meet like-minded individuals.'
                }
            }

            this.$store.dispatch('meta/setMeta', metaPayload);
        }
    }
</script>