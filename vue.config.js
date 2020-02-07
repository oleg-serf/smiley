module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData : `
          @import "@/scss/vars.scss";
          @import "@/scss/media-queries.scss";
          @import "@/scss/fonts.scss";
          @import "@/scss/animation.scss";
        `
      }
    }
  }
};