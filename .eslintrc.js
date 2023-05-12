module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx'],
      },
    },
  },
  rules: {
    camelcase: 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
};
