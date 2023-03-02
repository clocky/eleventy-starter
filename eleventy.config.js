const yaml = require("js-yaml");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
