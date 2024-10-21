import globals from "globals";

export default [
  {
    files: ["app/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^(Sequelize|models|next)",
        },
      ],
    },
  },
  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
    },
  },
];
