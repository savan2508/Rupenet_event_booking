import globals from "globals";
import pluginJs from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
// import nodePlugin from "eslint-plugin-node";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js: pluginJs,
      react: reactPlugin,
      // node: nodePlugin,
      prettier: prettierPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      // ...nodePlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
    },
  },
];
