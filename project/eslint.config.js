import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier"; // Import the Prettier plugin
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: prettierPlugin, // Define Prettier as an object
    },
    rules: {
      "prettier/prettier": "error", // Enable Prettier as a linting rule

      // General JavaScript rules
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      eqeqeq: "error",
      "no-unused-vars": "warn",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      curly: ["error", "all"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // React-specific rules
      "react/jsx-key": "error",
      "react/no-unknown-property": "error",
      "react/no-unused-state": "warn",
      "react/no-direct-mutation-state": "error",
      "react/jsx-indent": ["error", 2],
      "react/jsx-curly-spacing": ["error", { when: "always", children: true }],
      "react/self-closing-comp": "error",
      "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
    },
  },
  // Disable rules that conflict with Prettier
  prettierConfig,
];
