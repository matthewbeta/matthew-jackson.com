const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');

moment.locale('en');

module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('dddd, D MMM YYYY'); 
	});
	
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("sw.js");
	eleventyConfig.addPassthroughCopy("manifest.json");
	eleventyConfig.addPassthroughCopy({ "_favicons": "/" });
	eleventyConfig.addPassthroughCopy({ "_netlify": "/" });

	eleventyConfig.addPlugin(pluginRss);

  return {
    passthroughFileCopy: true
  };
};