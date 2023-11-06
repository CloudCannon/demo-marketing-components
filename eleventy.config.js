module.exports = function(eleventyConfig) {
  // Global Layout
  eleventyConfig.addGlobalData("layout", "marketing-components/base.liquid");

  // Assets
  eleventyConfig.addPassthroughCopy({
    "_includes/marketing-components/public/": "/"
  });
};