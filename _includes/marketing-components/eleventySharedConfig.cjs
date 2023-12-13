const path = require("node:path");

module.exports = function(eleventyConfig) {
	const DEFAULT_LANGUAGE = "en";

	eleventyConfig.addShortcode("currentYear", function() {
		return (new Date).getFullYear();
	});

	eleventyConfig.addFilter("getI18nString", function(target) {
		if(typeof target === "string") {
			return target;
		}

		let lang = this.page?.lang || this.ctx?.page?.lang || this.context?.environments?.page?.lang || DEFAULT_LANGUAGE;
		if(!lang) {
			lang = "en";
		}
		if(typeof target === "object") {
			if(target[lang]) {
				return target[lang];
			}
			// fallback to English if lang does not exist on object
			if(target.en) {
				return target.en;
			}
		}

		// fallback
		return target;
	})

	// Global Layout
	eleventyConfig.addGlobalData("layout", "marketing-components/base.liquid");

	// Assets
	let publicDirectory = path.join(eleventyConfig.dir.input, eleventyConfig.dir.includes, "marketing-components/public/");

	eleventyConfig.addPassthroughCopy({
		[publicDirectory]: "/public/",
	});
}