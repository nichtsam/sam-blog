module.exports = {
  globals: {
    React: "readonly",
  },
  plugins: ["tailwindcss", "jsx-a11y"],
  extends: [
    "eslint-config-standard",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
  },
}
