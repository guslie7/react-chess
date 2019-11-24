module.exports = function override(config, env) {
  //do stuff with the webpack config...

  // config.module.rules.push( {
  //   test: /\.svg$/,
  //   use: [
  //     {
  //       loader: "babel-loader"
  //     },
  //     {
  //       loader: "react-svg-loader",
  //       options: {
  //         jsx: true // true outputs JSX tags
  //       }
  //     }
  //   ]

  // } );

  return config;
}