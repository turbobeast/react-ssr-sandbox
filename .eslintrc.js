module.exports = {
   "parser": "babel-eslint",
    "parserOptions": {
      sourceType: 'module',
      allowImportExportEverywhere: true,
    },
    "extends": "airbnb",
    "plugins": [
      "jsx-a11y",
      "react"
    ],
    "rules": {
      "semi": ["error", "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": [1, { "forbid": ["any"] }],
      "camelcase": [0, "never"],
      "global-require": [0],
    },
    "globals": {
      "fetch": true,
      "document": true,
      "window": true,
    }
};