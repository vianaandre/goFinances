module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
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
            },
        ]
    ],
    presets: ['babel-preset-expo']
  };
};
