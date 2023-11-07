# CloudCannon Demos Style Guide

An Eleventy base layout and components to share a codebase for small demos (using site mounting!).

## Usage

Set up the Site Mounting project in your CloudCannon project settings.

Use the `CloudCannon/demo-marketing-components` site and mount the `_includes/marketing-components/` directory to your project. Most of the time, the folder should mount locally to the same location.

If you’re using a custom [Eleventy input directory](https://www.11ty.dev/docs/config/#input-directory), make sure the folder mounts to the same location inside that folder (e.g. `--input=src` should mount to `src/_includes/marketing-components/`).

Next, add the Eleventy plugin to your local project’s configuration.

```js
// this plugin is loaded from the mounted directory
const upstreamConfig = require("./_includes/marketing-components/eleventySharedConfig.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(upstreamConfig);
};
```

This will:

1. Set a global layout file for every template in your project.
2. Adds [passthrough copy](https://www.11ty.dev/docs/copy/) targets for shared images, fonts, and other resources.
