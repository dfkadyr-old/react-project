module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',

  ],
  rules: {
    "@typescript-eslint/space-before-function-paren": "off",
    "space-before-function-paren": ["error",
      {"anonymous": "always", "named": "never", "asyncArrow": "always"}
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "_" }],
    "react/jsx-props-no-spreading": 'warn',
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/naming-convention": "off"
  }
}
