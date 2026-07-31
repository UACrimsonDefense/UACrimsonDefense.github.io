export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/base.css");
    eleventyConfig.addPassthroughCopy("css/nav.css");
    eleventyConfig.addPassthroughCopy("css/footer.css");
    eleventyConfig.addPassthroughCopy("img/CrimsonDefenseLogoTransparent.svg");
    eleventyConfig.addPassthroughCopy("js/nav.js");
};