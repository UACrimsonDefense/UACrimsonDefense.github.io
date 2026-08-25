import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["webp", "auto"],
        widths: ["auto"],
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
        },
    });

    eleventyConfig.addCollection("posts", (collectionApi) => {
        return collectionApi.getFilteredByGlob("./posts/*.md").sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addFilter("readableDate", (date) => {
        if (!date) return "";
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });
    });

    eleventyConfig.addFilter("rfc822Date", (date) => {
        if (!date) return "";
        return new Date(date).toUTCString();
    });

    eleventyConfig.addPassthroughCopy("css/base.css");
    eleventyConfig.addPassthroughCopy("css/nav.css");
    eleventyConfig.addPassthroughCopy("css/footer.css");
    eleventyConfig.addPassthroughCopy("css/index.css");
    eleventyConfig.addPassthroughCopy("css/about.css");
    eleventyConfig.addPassthroughCopy("css/competition-team.css");
    eleventyConfig.addPassthroughCopy("css/contact-us.css");
    eleventyConfig.addPassthroughCopy("css/faqs.css");
    eleventyConfig.addPassthroughCopy("css/outreach.css");
    eleventyConfig.addPassthroughCopy("css/club-leadership.css");
    eleventyConfig.addPassthroughCopy("css/meetings.css");
    eleventyConfig.addPassthroughCopy("css/cdctf.css");
    eleventyConfig.addPassthroughCopy("css/uactf.css");
    eleventyConfig.addPassthroughCopy("css/scoreboard.css");
    eleventyConfig.addPassthroughCopy("css/writeup.css");
    eleventyConfig.addPassthroughCopy("css/blog.css");
    eleventyConfig.addPassthroughCopy("img/transparentCDLogo.png");
    eleventyConfig.addPassthroughCopy("img/ClubPainting.jpg");
    eleventyConfig.addPassthroughCopy("img/CDCTF_logo_fin.svg");
    eleventyConfig.addPassthroughCopy("img/UACTF_double_logo.png");
    eleventyConfig.addPassthroughCopy("img/Crimson-Defense-X.png");
    eleventyConfig.addPassthroughCopy("img/ua_ccdcteam_2026.jpeg");
    eleventyConfig.addPassthroughCopy("img/scioly_2025.JPG");
    eleventyConfig.addPassthroughCopy("img/scioly_2026.jpg");
    eleventyConfig.addPassthroughCopy("img/blog");
    eleventyConfig.addPassthroughCopy("js/nav.js");
};