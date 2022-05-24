import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  darkmode: "switch",
  themeColor: false,
  fullscreen: false,
  pure: true,
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  author: {
    name: "PengHaa",
  },
  blog: {
    name: "PengHaa",
    description: "记录一些东西，防止时间偷走了它",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,
  docsDir: "demo/src",
  editLink: false,
  // navbar
  navbar: navbar,

  // sidebar
  sidebar: "heading",

  footer: "点滴积累",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: false,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
