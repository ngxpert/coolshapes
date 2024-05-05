const removeSVGTag = require("./svgo-plugins/remove-svg-tag.js");

module.exports = {
  plugins: ["cleanupAttrs", "removeXMLProcInst", "removeXMLNS", removeSVGTag],
};
