module.exports = {
  extends: ['react-app', 'plugin:react/recommended', 'eslint:recommended'],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-whitespace-before-property': ['error'],
    'no-console': ['error'],
    'space-before-function-paren': [
      'error', {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'space-before-blocks': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0
    }],
    'prefer-template': ['error']
  }
};
