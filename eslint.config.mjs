import eslint from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import { FlatCompat} from "@eslint/eslintrc";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslint.configs.recommended,
    allConfig: eslint.configs.all
});

export default defineConfig([{
    languageOptions: {
        parser: tsParser,

        globals: {
            ...globals.node,
            ...globals.jest,
        },
    },

    plugins: {
        "@typescript-eslint": typescriptEslintEslintPlugin,
    },

    extends: compat.extends("plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"),

    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
}, globalIgnores(["**/.eslintrc.js", "**/dist", "**/node_modules"])]);