module.exports = function(eleventyConfig) { 
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/blog.njk');

  return {
    dir: {
      input: "src",
      output: "public",
    }
  };
};
