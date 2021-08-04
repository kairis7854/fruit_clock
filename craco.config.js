const CracoLessPlugin = require("craco-less");
 
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", {
        legacy: true
      }]
    ]
  }
};