//全域scss
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
           @import "@/styles/colors.scss";
           @import "@/styles/mixins.scss";
        `
      }
    }
  },
  publicPath: './'
};