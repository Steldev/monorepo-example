const path = require('path');
const {
  override,
  babelInclude,
  addBabelPlugins,
  removeModuleScopePlugin,
  addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
  // This will remove the CRA plugin that prevents to import modules from outside the src directory
  removeModuleScopePlugin(),
  // Overwrites the include option for babel loader to include our packages
  babelInclude([path.resolve('src'), path.resolve(__dirname, '../shared/src')]),
  addWebpackModuleRule({
    test: [/(@?react-(navigation|native))*\.(ts|js)x?$/],
    exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-react'],
        ['babel-preset-react-app', {typescript: true, runtime: 'automatic'}],
      ],
      cacheDirectory: true,
      cacheCompression: false,
    },
  }),
  ...addBabelPlugins(
    'babel-plugin-react-native-web',
    '@babel/plugin-transform-react-jsx'
  )
);
