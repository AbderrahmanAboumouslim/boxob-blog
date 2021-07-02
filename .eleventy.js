module.exports = function(eleventyConfig) { 
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/blog.njk');
    eleventyConfig.addPassthroughCopy('./src/_includes/admin');

  return {
    dir: {
      input: "src",
      output: "public",
    }
  };
};
