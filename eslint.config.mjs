import { defineConfig } from "eslint/config";
import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest"; // Jest用プラグインを追加


export default defineConfig([
  { 
    files: ["src/**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { 
      // globals: {
        // ...globals.browser, 
        // ...globals.node
        // ...globals.jest // Jestのグローバル変数を追加
      // } 
    } 
  },
  // pluginReact.configs.flat.recommended,
  {
    files: ["**/__tests__/*.{js,mjs,cjs,jsx}"], // テストファイル専用の設定
    plugins: { pluginJest },
    // extends: ["plugin:jest/recommended"], // Jest用の推奨ルールを適用
  },
]);