const path = require("node:path");

module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("currentYear", function() {
		return (new Date).getFullYear();
	});

	// Global Layout
	eleventyConfig.addGlobalData("layout", "marketing-components/base.liquid");

	// Assets
	let publicDirectory = path.join(eleventyConfig.dir.input, eleventyConfig.dir.includes, "marketing-components/public/");
	eleventyConfig.addPassthroughCopy({
		// use input directory
		[publicDirectory]: "/",
	});
}