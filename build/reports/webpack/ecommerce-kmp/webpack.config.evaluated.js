{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/mayankwadhwa/IdeaProjects/ecommerce-kmp/build/js/packages/ecommerce-kmp/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/mayankwadhwa/IdeaProjects/ecommerce-kmp/build/js/packages/ecommerce-kmp/kotlin-dce-dev/ecommerce-kmp.js'
    ]
  },
  output: {
    path: '/Users/mayankwadhwa/IdeaProjects/ecommerce-kmp/build/distributions',
    filename: [Function: filename],
    library: 'ecommerce-kmp',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/mayankwadhwa/IdeaProjects/ecommerce-kmp/build/processedResources/js/main'
    ]
  }
}