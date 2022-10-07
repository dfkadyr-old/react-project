module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        modulesDirectories: ['node_modules']
      }
    }
  },
  plugins: [
    'react',
    'i18next',
    'import',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-before-function-paren': ['error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '_' }],
    'react/jsx-props-no-spreading': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to']
      }
    ],
    'max-len': [2, 120, 2, { ignoreUrls: true, ignoreComments: true, ignoreRegExpLiterals: true }],
    '@typescript-eslint/consistent-type-assertions': ['warn'],
    'react/display-name': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    }
  ]
}
