const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

function assetPathTransformer(url, resourcePath, context) {
  if (/^\_/.test(url)) {
    // not in context (src/games/*/assets
    let transformed = url.replace(/^\_/, "").replace(/assets[/\\]/, "");
    return `assets/public/${transformed}`;
  }
  if (true) {
    // expect /src/games/<game>/assets/path-to-asset
    // url = <game>/assets/path-to-asset
    let game = url.split(/[/\\]/)[0];
    let folder =
      {
        battleship: "bts",
      }[game] || game;
    // remove game name from url
    url = url.split(/[/\\]/).slice(1).join("/");

    return `games/${folder}/${url}`;
  }
  return url;
}

module.exports = {
  entry: {
    main: "./src/main.ts",
    "games/bts": "./src/games/battleship/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.ico$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        // Anything in an assets folder that ends in one of these extensions
        test: /assets[\\/].*\.(jpe?g|png|gif|svg|woff|ttf|wav|mp3)$/,
        loader: "file-loader",
        options: {
          outputPath: assetPathTransformer,
          publicPath: assetPathTransformer,
          name: "[path][name].[ext]",
          context: "./src/games/",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `vendors/npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Battleship Game",
      template: "src/web-container/index.html",
      favicon: "./src/web-container/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({})],
    // alias: {}, // Specify Alias in tsconfig.json
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
