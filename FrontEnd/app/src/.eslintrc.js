module.exports = {
    "extends": [
      "@shooting-unicorns/react-shooting-unicorns"
    ],
    "plugins": ["react-hooks"],
    "rules": {
      "comma-dangle": ["error", "never"],
      "jsx-a11y/href-no-hash": "off",
      "strict": 0,
      "react/default-props-match-prop-types": [
        1,
        {
          "allowRequiredDefaults": true
        }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-handler-names": "off"
    },
    "parser": "babel-eslint"
  }