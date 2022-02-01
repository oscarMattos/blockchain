const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // Archivo de entra de la aplicación.
    app: "./index.js",
  },
  module: {
    // Aca se cargan los loaders necesarios para el proyecto
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      // Se separan los scripts empaquetados en pequeños trozos de codigo modular para que el browser los cargue de manera performante.
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    // Se define en que carpeta se van a guardar los scripts empaquetados. Ademas el nobre esta hasheado para que beneficie al reload y cada vez que se compila se limpia la carpeta de output.
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Plugin para usar un template de HTML donde se van a inyectar los scripts empaquetados
      template: "./index.html",
      title: "Custom Template",
    }),
  ],
};
