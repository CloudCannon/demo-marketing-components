module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "_includes/marketing-components/public/": "/"
  })
};