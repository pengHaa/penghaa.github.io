import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "PengHaa",
  description: "记录一些东西，防止时间偷走了它",
  base: "/",
  theme,
});
