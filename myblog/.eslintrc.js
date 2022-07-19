module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    //
    'import/prefer-default-export': 'off',
    // 운영체제 마다 개행 차이로 생기는 오류
    'linebreak-style': 0,
    //
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
