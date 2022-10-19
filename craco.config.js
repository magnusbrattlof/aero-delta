const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "~components": path.resolve(__dirname, "src/components"),
      "~containers": path.resolve(__dirname, "src/containers"),
      "~hooks": path.resolve(__dirname, "src/hooks"),
      "~helpers": path.resolve(__dirname, "src/helpers"),
      "~api": path.resolve(__dirname, "src/api"),
      "~constants": path.resolve(__dirname, "src/constants"),
      "~api/queries": path.resolve(__dirname, "src/api/queries"),
      "~api/mutations": path.resolve(__dirname, "src/api/mutations"),
    },
  },
};
