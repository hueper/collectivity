const path = require("path");
const pathPrefix = "/collectivity";
// Change me
const siteMetadata = {
  title: "Untersuchung von Open Collective als Materialisierung eines Konzepts von Kollektivität - der Multitude.",
  shortName: "Kollektivitäten",
  description:
    "Herstellung von Kollektivität bei den Kollektivitäten Multitude und Anonymous, Betrachtung der Kollektivität Open Collective, Untersuchung einer spekulativen DAO und ihrer Eingebundenheit in Ethereum.",
  twitterName: "moritzhueper",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://hueper.github.io",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["latest", "tag"],
        nav: [
          {
            title: "Github",
            url: "https://github.com/hueper/collectivity/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/moritzhueper",
          },
        ],
        editUrl:
          "https://github.com/hueper/collectivity/tree/main/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
