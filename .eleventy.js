const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require('moment');
const pluginPWA = require("eleventy-plugin-pwa");
// required packages
const fetch = require("node-fetch");

moment.locale('en');

module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('dddd, D MMM YYYY'); 
	});

	eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
	
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("blog");
	eleventyConfig.addPassthroughCopy("manifest.json");
	eleventyConfig.addPassthroughCopy({ "_favicons": "/" });
	eleventyConfig.addPassthroughCopy({ "_netlify": "/" });

	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPlugin(pluginPWA, {
    swDest: "./_site/service-worker.js",
    globDirectory: "./_site",
    clientsClaim: true,
    skipWaiting: true,
		runtimeCaching: [
			{
				urlPattern: /^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,
				handler: 'NetworkFirst'
			}
		]
  });

  return {
    passthroughFileCopy: true
  };
};