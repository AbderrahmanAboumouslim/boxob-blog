const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) { 
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/blog.njk');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addFilter("myDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime)
    });

  return {
    dir: {
      input: "src",
      output: "public",
    }
  };
};
