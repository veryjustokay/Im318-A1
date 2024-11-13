module.exports = function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_SRC/sass/");
     return {
          dir: {
          input: "_src"
          }
          }
     }