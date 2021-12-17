module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
  },
};
