const path = require("node:path");

module.exports = function(eleventyConfig) {
	eleventyConfig.addShortcode("currentYear", function() {
		return (new Date).getFullYear();
	});

	// Global Layout
	eleventyConfig.addGlobalData("layout", "marketing-components/base.liquid");

	// Assets
	let pass = {};
	// use input directory
	pass[path.join(eleventyConfig.dir.input, "_includes/marketing-components/public/")] = "/";
	eleventyConfig.addPassthroughCopy(pass);
}