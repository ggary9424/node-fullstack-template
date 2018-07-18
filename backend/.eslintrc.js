module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb'],
  rules: {
    'consistent-return': 0,
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': [
      2,
      {
        allow: ['_id', '__express'],
      },
    ],
    'no-undef': 0,
    'no-param-reassign': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
