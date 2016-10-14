var webpack = require('webpack');
var Path = require("path");
var FileSystem = require("fs");

module.exports =  {
  entry: [
    './src/main.js'
  ],
  output: {
    path: "/dist/js",
    publicPath: "/dist/",
    filename: "[hash].js"
  },
  cache: false,
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\//,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    function() {
      this.plugin("done", function(statsData) {
        var stats = statsData.toJson();

        if (!stats.errors.length) {
          var htmlFileName = "index.html";
          var html = FileSystem.readFileSync(Path.join(__dirname, 'src', htmlFileName), "utf8");

          var htmlOutput = html.replace(
              /<script\s+src=(["'])(.+?)app\.js\1/i,
              "<script src=$1$2" + stats.assetsByChunkName.main + "$1");

          try {
            FileSystem.mkdirSync(Path.join(__dirname, 'dist'));
          } catch (e) {}

          FileSystem.writeFileSync(
              Path.join(__dirname, 'dist', htmlFileName),
              htmlOutput
          );
        }
      });
    }
  ]
};
