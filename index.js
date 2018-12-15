function TSLintModule(moduleOptions) {
  const moduleDefaultOptions = {
    tsconfig: undefined,
    tslint: undefined
  };

  const options = {
    ...moduleDefaultOptions,
    ...this.options.typescript,
    ...moduleOptions
  };

  this.extendBuild((config, { isClient, isServer }) => {
    config.module.rules.push({
      test: /\.vue.(ts|tsx)$/,
      exclude: /node_modules/,
      enforce: "pre",
      use: [
        {
          loader: "vue-tslint-loader",
          options: {
            configFile: options.tslint,
            tsConfigFile: options.tsconfig
          }
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
          options: {
            configFile: options.tslint,
            tsConfigFile: options.tsconfig
          }
        }
      ]
    });
  });
}

module.exports = TSLintModule;
module.exports.meta = require("./package.json");
