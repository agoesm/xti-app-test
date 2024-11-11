module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        // extensions: [
        //   '.ios.js',
        //   '.android.js',
        //   '.ios.jsx',
        //   '.android.jsx',
        //   '.js',
        //   '.jsx',
        //   '.json',
        //   '.ts',
        //   '.tsx',
        // ],
        alias: {
          '@assets': './src/assets',
          '@routes': './src/routes',
          '@components': './src/components',
          '@screens': './src/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
