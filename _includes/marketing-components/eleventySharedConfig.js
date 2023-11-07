module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("currentYear", function() {
		return (new Date).getFullYear();
	});

	// Global Layout
	eleventyConfig.addGlobalData("layout", "marketing-components/base.liquid");

	// Assets
	eleventyConfig.addPassthroughCopy({
		"_includes/marketing-components/public/": "/"
	});
}