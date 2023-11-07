const path = require("node:path");

module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("currentYear", function() {
		return (new Date).getFullYear();
	});

	// Global Layout
	eleventyConfig.addGlobalData("layout", "marketing-components/base.liquid");

	// Assets
	eleventyConfig.addPassthroughCopy({
		// use input directory
		[path.join(eleventyConfig.dir.input, "_includes/marketing-components/public/")]: "/",
	});
}