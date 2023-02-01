module.exports = {
  root: true,
  extends: ["@react-native-community", 'plugin:react/jsx-runtime'],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        endOfLine: 'auto',
        quotes: ['error', 'double'],
        semi: 'error',
        "no-undef": "off",
        'prefer-const': 'error',
      },
    },
  ],
};
