import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import eslintParserTS from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.ts"],  // Указываем, что ESLint должен проверять TypeScript файлы в папке src
    ignores: ["node_modules"], // Явно указываем, что не проверять node_modules
    languageOptions: {
      parser: eslintParserTS
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPluginTS
    },
    rules: {
      ...eslintPluginTS.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "no-console": "off"
    }
  }
];
