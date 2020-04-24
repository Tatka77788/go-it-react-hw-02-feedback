module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: ["airbnb", "react-app", "prettier"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    plugins: ["prettier"],

    parserOptions: {
      ecmaVersion: 2018
    },
    rules: {
      "no-console": "off",
      "prettier/prettier": ["error"],
      "jsx-quotes": [
        1,
        "prefer-double"
    ]

    }
  };
  