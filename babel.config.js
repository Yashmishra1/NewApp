module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@store': './src/redux/store',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@services': './src/services',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@thirdParty': './src/services/thirdParty',
          '@mock': './src/mock',
        },
      },
    ],
  ],
};
