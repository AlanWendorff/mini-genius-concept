import path from "path";
import { override, addWebpackAlias } from "customize-cra";

module.exports = override(
  addWebpackAlias({
    ["@api"]: path.resolve(__dirname, "api"),
    ["@assets"]: path.resolve(__dirname, "public/assets"),
    ["@components"]: path.resolve(__dirname, "src/components"),
    ["@Cards"]: path.resolve(__dirname, "src/components/Cards"),
    ["@Sections"]: path.resolve(__dirname, "src/components/Sections"),
    ["@Ui"]: path.resolve(__dirname, "src/components/Ui"),
    ["@public"]: path.resolve(__dirname, "public"),
    ["@styles"]: path.resolve(__dirname, "src/styles"),
    ["@scripts"]: path.resolve(__dirname, "utils/scripts"),
    ["@constants"]: path.resolve(__dirname, "utils/constants"),
    ["@interfaces"]: path.resolve(__dirname, "utils/interfaces"),
    ["@data"]: path.resolve(__dirname, "utils/data"),
  })
);
