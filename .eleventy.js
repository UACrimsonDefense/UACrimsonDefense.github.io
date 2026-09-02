import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["webp", "auto"],
        widths: ["auto"],
        defaultAttributes: {
            loading: "eager",
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

    // Shared across every page (nav/footer chrome + the logo used in the favicon and nav bar)
    eleventyConfig.addPassthroughCopy("css/base.css");
    eleventyConfig.addPassthroughCopy("css/nav.css");
    eleventyConfig.addPassthroughCopy("css/footer.css");
    eleventyConfig.addPassthroughCopy("js/nav.js");
    eleventyConfig.addPassthroughCopy("img/transparentCDLogo.png");
    eleventyConfig.addPassthroughCopy("img/favicon.png");

    // index.njk (home page)
    eleventyConfig.addPassthroughCopy("css/index.css");
    eleventyConfig.addPassthroughCopy("img/ClubPainting.jpg");

    // about.njk
    eleventyConfig.addPassthroughCopy("css/about.css");
    eleventyConfig.addPassthroughCopy("img/UACTFGroupPhoto2026.jpg");
    eleventyConfig.addPassthroughCopy("img/UACTFAward2026.jpg");

    // competition-team.njk
    eleventyConfig.addPassthroughCopy("css/competition-team.css");
    eleventyConfig.addPassthroughCopy("img/Crimson-Defense-X.png");
    eleventyConfig.addPassthroughCopy("img/ua_ccdcteam_2026.jpeg");
    eleventyConfig.addPassthroughCopy("img/CompetitionHuddleRedacted.png");
    eleventyConfig.addPassthroughCopy("img/CompetitionHuddleRedacted2.png");

    // contact-us.njk
    eleventyConfig.addPassthroughCopy("css/contact-us.css");

    // faqs.njk
    eleventyConfig.addPassthroughCopy("css/faqs.css");

    // outreach.njk
    eleventyConfig.addPassthroughCopy("css/outreach.css");
    eleventyConfig.addPassthroughCopy("img/scioly_2025.JPG");
    eleventyConfig.addPassthroughCopy("img/scioly_2026.jpg");
    eleventyConfig.addPassthroughCopy("img/OutreachWhy.jpg");
    eleventyConfig.addPassthroughCopy("img/OutreachUACTF.jpg");

    // club-leadership.njk
    eleventyConfig.addPassthroughCopy("css/club-leadership.css");

    // meetings.njk
    eleventyConfig.addPassthroughCopy("css/meetings.css");

    // cdctf.njk
    eleventyConfig.addPassthroughCopy("css/cdctf.css");
    eleventyConfig.addPassthroughCopy("img/CDCTF_logo_fin.svg");
    eleventyConfig.addPassthroughCopy("img/CDCTF1.jpg");
    eleventyConfig.addPassthroughCopy("img/CDCTF2.png");
    eleventyConfig.addPassthroughCopy("img/CDCTF3.png");
    eleventyConfig.addPassthroughCopy("img/CDCTF4.jpg");

    // uactf.njk
    eleventyConfig.addPassthroughCopy("css/uactf.css");
    eleventyConfig.addPassthroughCopy("img/UACTF_double_logo.png");
    eleventyConfig.addPassthroughCopy("img/UACTFTrophy.jpg");
    eleventyConfig.addPassthroughCopy("img/UACTFVolunteers.jpg");

    // scoreboard.njk
    eleventyConfig.addPassthroughCopy("css/scoreboard.css");

    // 404.njk
    eleventyConfig.addPassthroughCopy("css/404.css");
    eleventyConfig.addPassthroughCopy("js/404.js");

    // writeup.njk
    eleventyConfig.addPassthroughCopy("css/writeup.css");

    // blog.njk + posts/*.md
    eleventyConfig.addPassthroughCopy("css/blog.css");
    eleventyConfig.addPassthroughCopy("img/blog");

};