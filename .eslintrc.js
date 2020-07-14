module.exports = {
  "extends": ["react-app", "eslint:recommended"],
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "no-whitespace-before-property": ["error"],
    "no-console": ["error"],
    "space-before-function-paren": [
      "error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "space-before-blocks": ["error", "always"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 0
    }],
    "prefer-template": ["error"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "comma-dangle": ["error", "never"],
    "default-case": ["error"],
    "eqeqeq": ["error", "always"],
    "no-alert": ["error"],
    "no-multi-spaces": ["error"],
    "space-infix-ops": ["error"],
    "padded-blocks": ["error", {
      "blocks": "never",
      "classes": "always",
      "switches": "never"
    }, { "allowSingleLineBlocks": true }],
    "eol-last": ["error", "always"],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
    "no-trailing-spaces": "error",
    "template-curly-spacing": ["error", "never"]
  }
};
