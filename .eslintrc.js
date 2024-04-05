const sideEffects = "^\\u0000";
const builtInModules = "^node:";
const nextModules = "^@next?\\w";
const otherModules = "^@?\\w";
const appModules = "^@/?\\w";
const otherAbsolutePaths = "^";
const relativePaths = "^\\.";

const importSortOrder = [
  [sideEffects],
  [builtInModules],
  [nextModules, otherModules],
  [appModules],
  [otherAbsolutePaths],
  [relativePaths],
];

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "simple-import-sort/imports": ["error", { groups: importSortOrder }],
    "simple-import-sort/exports": "error",
    "no-restricted-imports": ["error"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
};
