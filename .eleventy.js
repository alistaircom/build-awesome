module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  eleventyConfig.addCollection("links", function(collectionApi) {
    return collectionApi.getFilteredByGlob("links/*.md");
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
  return new Date(dateObj).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
});

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};