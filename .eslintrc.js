module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/recommended",
  ],
  plugins: ["prettier", "unicorn"],
  ignorePatterns: [".eslintrc.js", ".eslintrc.json", "dist"],
  rules: {
    "vue/no-unused-vars": "error",
    "tailwindcss/no-custom-classname": "off",
    "prefer-const": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-console": [
      "warn",
      {
        allow: ["error", "warn", "info"],
      },
    ],
  },
};
