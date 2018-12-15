function TSLintModule(moduleOptions) {
  const options = {
    ...this.options.tslint,
    ...moduleOptions
  };

  this.extendBuild((config, ctx) => {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        test: /\.vue.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "vue-tslint-loader",
            options
          }
        ]
      });
      config.module.rules.push({
        test: /[^(\.vue)]+((?!\.vue)\.(ts|tsx))$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options
          }
        ]
      });
    }
  });
}

module.exports = TSLintModule;
module.exports.meta = require("./package.json");
