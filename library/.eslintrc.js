module.exports = {
  // the vast majority of these rule packages
  // originate from `react-scripts` with the
  // exception of `prettier`
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y', 'unicorn'],
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        // for sorting member imports only
        ignoreDeclarationSort: true,
        ignoreCase: true,
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [
          'setupTests.ts', // CRA depends upon this file to setup jest correctly
        ],
      },
    ],
  },
  ignorePatterns: ['src/graphql/generated.tsx', 'src/graphql/hydrate.js'],
};
