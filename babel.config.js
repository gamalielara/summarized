module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '<screens>': './src/screens',
          '<components>': './src/components',
          '<utils>': './src/utils',
          '<assets>': './src/assets',
          '<src>': './src',
        },
      },
    ],
  ],
};
