export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/base.css");
    eleventyConfig.addPassthroughCopy("css/nav.css");
    eleventyConfig.addPassthroughCopy("css/footer.css");
    eleventyConfig.addPassthroughCopy("css/index.css");
    eleventyConfig.addPassthroughCopy("css/club-leadership.css");
    eleventyConfig.addPassthroughCopy("css/meetings.css");
    eleventyConfig.addPassthroughCopy("css/cdctf.css");
    eleventyConfig.addPassthroughCopy("css/uactf.css");
    eleventyConfig.addPassthroughCopy("css/scoreboard.css");
    eleventyConfig.addPassthroughCopy("img/transparentCDLogo.png");
    eleventyConfig.addPassthroughCopy("img/ClubPainting.jpg");
    eleventyConfig.addPassthroughCopy("img/CDCTF_logo_fin.svg");
    eleventyConfig.addPassthroughCopy("img/UACTF_double_logo.png");
    eleventyConfig.addPassthroughCopy("js/nav.js");
};