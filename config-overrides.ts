import path from "path";
import { override, addWebpackAlias } from "customize-cra";

module.exports = override(
  addWebpackAlias({
    ["@assets"]: path.resolve(__dirname, "assets"),
    ["@components"]: path.resolve(__dirname, "components"),
    ["@cards"]: path.resolve(__dirname, "components/cards"),
    ["@sections"]: path.resolve(__dirname, "components/sections"),
    ["@ui"]: path.resolve(__dirname, "components/ui"),
    ["@constants"]: path.resolve(__dirname, "constants"),
    ["@interfaces"]: path.resolve(__dirname, "interfaces"),
    ["@styles"]: path.resolve(__dirname, "styles"),
    ["@utils"]: path.resolve(__dirname, "utils"),
  })
);
