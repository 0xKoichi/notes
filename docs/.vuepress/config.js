const { description } = require("../package");

module.exports = {
  title: "JavaScript Notes",
  description: description,
  base: "/notes/",
  head: [
    ["meta", { name: "theme-color", content: "#B03E71" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  theme: "default-prefers-color-scheme",
  themeConfig: {
    logo: "https://i.ibb.co/SXMpDj5/logo.png",
    repo: "https://github.com/0xKoichi/notes",
    darkMode: true,
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Notes",
        link: "/intro/",
      },
      {
        text: "MDN Docs",
        link: "https://mdn.dev",
      },
    ],
    sidebar: [
      {
        title: "JavaScript Introduction",
        path: "/intro/",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/intro/"],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
