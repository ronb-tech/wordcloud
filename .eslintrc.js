module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/essential",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "comma-spacing": "off",
    "space-infix-ops": "off",
    "no-multiple-template-root": "off",
    "multi-word-component-names": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  },
};
