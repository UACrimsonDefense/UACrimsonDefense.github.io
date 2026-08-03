export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/base.css");
    eleventyConfig.addPassthroughCopy("css/nav.css");
    eleventyConfig.addPassthroughCopy("css/footer.css");
    eleventyConfig.addPassthroughCopy("css/index.css");
    eleventyConfig.addPassthroughCopy("css/club-leadership.css");
    eleventyConfig.addPassthroughCopy("css/meetings.css");
    eleventyConfig.addPassthroughCopy("img/transparentCDLogo.png");
    eleventyConfig.addPassthroughCopy("img/ClubPainting.jpg");
    eleventyConfig.addPassthroughCopy("js/nav.js");
};