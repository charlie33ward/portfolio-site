module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("tailwind.css");
    eleventyConfig.addPassthroughCopy("/assets");
    eleventyConfig.addPassthroughCopy("photos");
}